/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry/Storage/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./entry/Storage/index.js":
/*!********************************!*\
  !*** ./entry/Storage/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zfowed_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zfowed/utils/debounce */ "./entry/debounce/index.js");


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

Storage.prototype.syncLocalStorage = Object(_zfowed_utils_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage.prototype.syncLocalStorageEnsure, 200)

/* harmony default export */ __webpack_exports__["default"] = (Storage);


/***/ }),

/***/ "./entry/debounce/index.js":
/*!*********************************!*\
  !*** ./entry/debounce/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (func, wait, immediate) {
  // immediate默认为false
  var timeout, args, context, timestamp, result

  var later = function () {
    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    var last = new Date() - 0 - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function () {
    context = this
    args = arguments
    timestamp = new Date() - 0
    // 第一次调用该方法时，且immediate为true，则调用func函数
    var callNow = immediate && !timeout
    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
});


/***/ })

/******/ });
//# sourceMappingURL=Storage.js.map