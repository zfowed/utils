> # new Socket(url[, options])

Socket.js 是用一个基于 WebSocket 封装业务的即时库。

## 基本用法

```javascript
import Socket from '@zfowed/utils/Socket'
```

> 实例化

```javascript
let socket = new Socket('ws://localhost:20001', options)
```

[查看 `options` 参数](#options-参数)

> 发送数据

```javascript
// 发送数据
socket.emit(name, param1, param2)

// 发送数据带回调结果
socket.emit(name, param1, param2, (result) => {
  // result => 响应数据
})
```

> 监听数据

```javascript
// 监听事件
socket.on(name, (param1, param2) => {
  // param1, param2 => 服务端发送参数
})

// 监听后端发送的事件，回调数据给服务端
socket.on(name, (param1, param2, callback) => {
  // param1, param2 => 服务端发送参数
  return callback(param1, param2) // => 回调服务端数据
})

```

## options 参数

| 参数 | 类型 | 默认值 | 描述 |
| - | - | - | - |
| `autoConnect` | `Boolean` | `false` | 初始化直接连接 |
| `handleEmitParams` | `Function` | `handleEmitParams` | 处理前端发送数据的格式 |
| `handleResponseCallbackParams` | `Function` | `handleResponseCallbackParams` | 处理服务端请求数据,前端响应数据的的格式 |
| `handleMessage` | `Function` | `handleMessage` | 处理服务端请求数据,处理服务端回调监听事件 |

> `handleEmitParams`

处理前端发送数据的格式

当调用 `socket.emit` 发送数据时，会调用这个函数，将返回的 `message` 通过 `webSocket.send(message)` 发送给服务端

这个函数将接收3个参数：

* `reqId` 客户端发送一个事件时，生成的一个唯一标识
* `name` 客户端发送事件的名称，`socket.emit` 的第一个参数
* `params` 客户端发送事件的参数，`socket.emit` 的第二个参数到最后一个参数（如果最后一个参数是 `function` 将单独去除作为回调事件）。

```javascript
function handleEmitParams (reqId, name, params) {
  // 将调用 webSocket.send('{reqId:'0',name:'name',params:[]}')
  return JSON.stringify({ reqId, name, params: params })
}
```

> `handleResponseCallbackParams`

处理服务端请求数据,前端响应数据的的格式

服务端发起数据带有 `reqId` 并且客户端当调用 `socket.on` 监听 `name` 事件时，意味着服务端需要获取数据，客户端会把 `reqId` 变成 `resId` 后将返回的数据通过 `webSocket.send(message)` 发送给服务端

这个函数将接收3个参数：

* `resId` 服务端发起事件的 `reqId` 唯一标识
* `name` 服务端发起的事件名称，`socket.on` 客户端监听事件的第一个参数
* `result` 返回给客户端的数据，触发监听事件后，执行事件最后一个参数（回调数据给后端）的所有参数 `arguments`

```javascript
function handleResponseCallbackParams (resId, name, result) {
  // 将调用 webSocket.send('{resId:'0',name:'name',result:[]}')
  return JSON.stringify({ resId, name, result })
}
```

> `handleMessage`

服务端发起的所有消息都会经过一个函数，用于分发事件的函数

这个函数将接收4个参数：

* `message` 服务端发送的消息
* `listenerCallback` 客户端监听事件的回调
* `emitCallback` 客户端发起事件的回调
* `responseCallback` 服务端发起请求事件的回调

```javascript
function handleMessage (message, listenerCallback, emitCallback, responseCallback) {
  const data = JSON.parse(message)
  const { reqId, resId, name, params, result } = data
  if (resId) {
    /**
     * 如果存在 resId 意味着是客户端发起请求回来的数据
     * 通过 emitCallback 回调数据 socket.emit 的数据
     *
     * resId 响应的ID（服务端必须返回之前客户端发起的 resId）
     * result 回调数据（自定义参数长度）
     */
    return emitCallback(resId, ...result)
  } else if (reqId) {
    /**
     * 如果存在 reqId 意味着是服务端发起请求，想获取客户端数据
     * 通过 responseCallback 回调数据（将会自动调用 options.handleResponseCallbackParams 生成 webSocket.send 发送的消息 ）
     *
     * reqId 服务端请求的唯一ID
     * name 服务端想请求的事件
     * params 服务端请求参数
     */
    return responseCallback(reqId, name, ...params)
  }
  /**
    * 不存在 reqId 和 resId 意味着是只有客户端监听 name 事件的回调
    * 通过 listenerCallback 回调 socket.on
    *
    * name 客户端监听的事件
    * result 事件数据
    */
  return listenerCallback(name, ...result)
}
```

## 发送/接收的数据格式

`socket.emit` 数据格式

```json
{
  reqId: '发送事件ID',
  name: '发送事件名',
  params: [] // 回调的数据
}
```

接收 `socket.emit` 的回调 `socket.on` 格式

```json
{
  resId: '之前发送的事件ID',
  name: '之前发送的事件名',
  result: [] // 回调的数据
}
```

监听 `socket.on` 消息格式

```json
{
  name: '监听事件名',
  result: [] // 监听到的数据
}
```

## 单参数配置参考

```javascript
let socket = new Socket('ws://localhost:20001', {

  // 将 params 取第一个值
  handleEmitParams (reqId, name, [params]) {
    return JSON.stringify({ reqId, name, params })
  },
  
  // 将 result 取第一个值
  handleResponseCallbackParams (resId, name, [result]) {
    return JSON.stringify({ resId, name, result })
  },

  // 回调只发送第一个参数值
  handleMessage (message, listenerCallback, emitCallback, responseCallback) {
    const data = JSON.parse(message)
    const { reqId, resId, name, params, result } = data
    if (resId) {
      return emitCallback(resId, result)
    } else if (reqId) {
      return responseCallback(reqId, name, params)
    }
    return listenerCallback(name, result)
  }
})

// 发送数据
socket.emit(name, params)

// 发送数据带回调结果
socket.emit(name, params, (result) => {
  // result => 响应数据
})

// 监听事件
socket.on(name, (params) => {
  // params => 服务端发送参数
})

// 监听后端发送的事件，回调数据给服务端
socket.on(name, (params, callback) => {
  // params => 服务端发送参数
  return callback(param1s) // => 回调服务端数据
})
```
