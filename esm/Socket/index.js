import uniqueId from '@zfowed/utils/uniqueId'

class Socket {
  constructor (url, options) {
    this.options = {
      idleClose: 10 * 60 * 1000,
      getEmitId: () => uniqueId('socket_'),
      handleEmitParams: (reqId, name, params) => JSON.stringify({ reqId, name, params }),
      handleResponseCallbackParams: (resId, name, params) => JSON.stringify({ resId, name, params }),
      handleMessage: (message, listenerCallback, emitCallback, responseCallback) => {
        const data = JSON.parse(message)
        if (data.reqId) return emitCallback(data.resId, data.result)
        if (data.resId) return responseCallback(data.resId, data.name, data.params)
        return listenerCallback(undefined, data.name, data.result)
      },
      ...options
    }

    this._url = url

    this._emitId = 0
    this._emitStorage = {}
    this._listenerStorage = {}

    this._socket = null
    this._io = null
  }

  __error (reject) {
    this.close()
    return reject()
  }

  __open (resolve) {
    this._openMonitorIdle()
    return resolve()
  }

  __close () {
    this._closeMonitorIdle()
  }

  __message (event) {
    return this.options.handleMessage(
      event.data,
      this._handleListener.bind(this),
      this._handleEmit.bind(this),
      this._handleResponse.bind(this)
    )
  }

  _handleListener (name, ...result) {
    const cbs = this._listenerStorage[name]
    if (!cbs || !cbs.length) return
    for (const cb of cbs) {
      cb && cb.apply(this, result)
    }
  }

  _handleEmit (resId, ...result) {
    const cb = this._emitStorage[resId]
    delete this._emitStorage[resId]
    return cb && cb.apply(this, result)
  }

  _handleResponse (reqId, name, ...params) {
    return this.io().then((socket) => {
      const callback = this._handleResponseCallback.bind(this, reqId, name)
      return this._handleListener(name, ...params.concat(callback))
    })
  }

  _handleResponseCallback (resId, name, ...result) {
    const data = this.options.handleResponseCallbackParams(resId, name, result)
    this.io().then((socket) => socket.send(data))
  }

  _getEmitId () {
    return this.options.getEmitId()
  }

  _openMonitorIdle () {
    this._closeMonitorIdle()
    if (!this.options.idleClose) return
    this._monitorIdleId = setInterval(() => {
      if (Object.keys(this._listenerStorage).length) return
      if (Object.keys(this._emitStorage).length) return
      this.close()
    }, this.options.idleClose)
  }

  _closeMonitorIdle () {
    if (!this.options.idleClose) return
    clearTimeout(this._monitorIdleId)
    this._monitorIdleId = null
  }

  // 打开链接
  open (url) {
    this.close()
    if (url) this._url = url
    return new Promise((resolve, reject) => {
      this._socket = new WebSocket(this._url)
      this._socket.addEventListener('close', this.__close.bind(this))
      this._socket.addEventListener('message', this.__message.bind(this))
      this._socket.addEventListener('error', this.__error.bind(this, reject))
      this._socket.addEventListener('open', this.__open.bind(this, resolve))
      return this
    })
  }

  // 关闭连接
  close (code, reason) {
    if (this._socket) {
      this._socket.close(code, reason)
    }
    this._socket = null
    this._io = null
    return this
  }

  // 获取 socket
  io () {
    if (this._io) return this._io
    this._io = this.open().then(() => this._socket)
    return this._io
  }

  // 发送事件
  emit (name, ...params) {
    const callback = typeof params[params.length - 1] === 'function' ? params.pop() : undefined
    let reqId
    if (callback) {
      reqId = this._getEmitId(name, params)
      this._emitStorage[reqId] = callback
    }
    const data = this.options.handleEmitParams(reqId, name, params)
    this.io().then((socket) => {
      socket.send(data)
    })
    this._openMonitorIdle()
    return this
  }

  // 监听事件
  on (name, callback) {
    if (!callback) return this
    if (!this._listenerStorage[name]) {
      this._listenerStorage[name] = []
    }
    this._listenerStorage[name].push(callback)
    this.io()
    this._openMonitorIdle()
    return this
  }

  // 关闭监听事件
  off (name, callback) {
    if (!this._listenerStorage[name]) return this
    if (!callback) {
      this._listenerStorage[name] = []
    } else {
      const index = this._listenerStorage[name].indexOf(callback)
      if (index >= 0) {
        this._listenerStorage[name].splice(index, 1)
      }
    }
    return this
  }
}

export default Socket
