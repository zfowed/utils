import debounce from '@zfowed/utils/debounce'

class Storage {
  constructor (key) {
    this._key = key || 'storage'
    this._storage = this.decode(this.getStorage(this._key), {})
  }

  /**
   * 将路径分解成数组
   *
   * @param {string} path
   * @returns
   * @memberof Storage
   */
  _pathToArray (path) {
    return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  }

  /**
   * 根据path获取一个对象某一项的值
   *
   * @param {object} object
   * @param {string} path
   * @param {*} defaultValue
   * @returns
   * @memberof Storage
   */
  _objectDeepGet (object, path, defaultValue) {
    path = this._pathToArray(path)
    path.unshift(object)
    return path.reduce((data, key, index) => {
      if (index !== path.length - 1) {
        return data[key] || {}
      }
      return typeof data[key] !== 'undefined' ? data[key] : defaultValue
    })
  }

  /**
   * 根据path设置一个对象某一项的值
   *
   * @param {object} object
   * @param {string} path
   * @param {*} value
   * @returns
   * @memberof Storage
   */
  _objectDeepSet (object, path, value) {
    path = this._pathToArray(path)
    path.unshift(object)
    path.reduce((data, key, index) => {
      if (index !== path.length - 1) {
        if (!data[key]) { data[key] = {} }
      } else {
        data[key] = value
      }
      return data[key]
    })
  }

  _deepCopy (value) {
    if (typeof value === 'undefined') return undefined
    return JSON.parse(JSON.stringify(value))
  }

  /**
   * 加密数据
   *
   * @param {*} value
   * @returns
   * @memberof Storage
   */
  encode (value) {
    try {
      return JSON.stringify(value)
    } catch (error) {
      throw new Error('编码失败')
    }
  }

  /**
   * 解密数据
   *
   * @param {*} value
   * @returns
   * @memberof Storage
   */
  decode (value, defaultValue) {
    try {
      return JSON.parse(value)
    } catch (error) {
      return defaultValue
    }
  }

  getStorage (key) {
    return (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem && window.localStorage.getItem(key))
  }

  setStorage (key, value) {
    return typeof window !== 'undefined' && window.localStorage && window.localStorage.setItem && window.localStorage.setItem(key, value)
  }

  /**
   * 本地存储于内存数据进行同步
   *
   * @returns
   * @memberof Storage
   */
  syncLocalStorageEnsure () {
    return this.setStorage(this._key, this.encode(this._storage))
  }

  /**
   * 获取数据项
   *
   * @param {object} object
   * @returns
   * @memberof Storage
   */
  getItem (path, defaultValue) {
    this.syncLocalStorage()
    const value = this._objectDeepGet(this._storage, path, defaultValue)
    return this._deepCopy(value)
  }

  /**
   * 设置/更新数据项
   *
   * @param {string} path
   * @param {*} value
   * @param {object} options
   * @returns
   * @memberof Storage
   */
  setItem (path, value, options) {
    this._objectDeepSet(this._storage, path, value)
    if (options && options.ensure) {
      return this.syncLocalStorageEnsure()
    }
    return this.syncLocalStorage()
  }
}

Storage.prototype.syncLocalStorage = debounce(Storage.prototype.syncLocalStorageEnsure, 200)

export default Storage
