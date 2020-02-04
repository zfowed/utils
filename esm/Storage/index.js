import cloneDeep from '@zfowed/utils/cloneDeep'
import debounce from '@zfowed/utils/debounce'
import objectDeepGet from '@zfowed/utils/get'
import objectDeepSet from '@zfowed/utils/set'

class Storage {
  constructor (key) {
    this._key = key || 'storage'
    this._storage = undefined
  }

  get storage () {
    if (!this._storage) {
      this._storage = this.decode(this.getStorage(this._key), {}) || {}
    }
    return this._storage
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
    return this.setStorage(this._key, this.encode(this.storage))
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
    const value = objectDeepGet(this.storage, path, defaultValue)
    return cloneDeep(value)
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
    objectDeepSet(this.storage, path, value)
    if (options && options.ensure) {
      return this.syncLocalStorageEnsure()
    }
    return this.syncLocalStorage()
  }
}

Storage.prototype.syncLocalStorage = debounce(Storage.prototype.syncLocalStorageEnsure, 200)

export { Storage }
export default Storage
