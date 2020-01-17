(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Storage.js"] = factory();
	else
		root["Storage.js"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/Storage/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/Storage/index.js":
/*!******************************!*\
  !*** ./esm/Storage/index.js ***!
  \******************************/
/*! exports provided: Storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var _zfowed_utils_esm_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zfowed/utils/esm/debounce */ "./esm/debounce/index.js");
/* harmony import */ var _zfowed_utils_esm_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zfowed/utils/esm/get */ "./esm/get/index.js");
/* harmony import */ var _zfowed_utils_esm_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zfowed/utils/esm/set */ "./esm/set/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




/**
 * 深复制
 *
 * @param {*} value
 * @returns
 */

function deepCopy(value) {
  if (typeof value === 'undefined') return undefined;
  return JSON.parse(JSON.stringify(value));
}

var Storage =
/*#__PURE__*/
function () {
  function Storage(key) {
    _classCallCheck(this, Storage);

    this._key = key || 'storage';
    this._storage = undefined;
  }

  _createClass(Storage, [{
    key: "encode",

    /**
     * 加密数据
     *
     * @param {*} value
     * @returns
     * @memberof Storage
     */
    value: function encode(value) {
      try {
        return JSON.stringify(value);
      } catch (error) {
        throw new Error('编码失败');
      }
    }
    /**
     * 解密数据
     *
     * @param {*} value
     * @returns
     * @memberof Storage
     */

  }, {
    key: "decode",
    value: function decode(value, defaultValue) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return defaultValue;
      }
    }
  }, {
    key: "getStorage",
    value: function getStorage(key) {
      return typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem && window.localStorage.getItem(key);
    }
  }, {
    key: "setStorage",
    value: function setStorage(key, value) {
      return typeof window !== 'undefined' && window.localStorage && window.localStorage.setItem && window.localStorage.setItem(key, value);
    }
    /**
     * 本地存储于内存数据进行同步
     *
     * @returns
     * @memberof Storage
     */

  }, {
    key: "syncLocalStorageEnsure",
    value: function syncLocalStorageEnsure() {
      return this.setStorage(this._key, this.encode(this.storage));
    }
    /**
     * 获取数据项
     *
     * @param {object} object
     * @returns
     * @memberof Storage
     */

  }, {
    key: "getItem",
    value: function getItem(path, defaultValue) {
      this.syncLocalStorage();
      var value = Object(_zfowed_utils_esm_get__WEBPACK_IMPORTED_MODULE_1__["default"])(this.storage, path, defaultValue);
      return deepCopy(value);
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

  }, {
    key: "setItem",
    value: function setItem(path, value, options) {
      Object(_zfowed_utils_esm_set__WEBPACK_IMPORTED_MODULE_2__["default"])(this.storage, path, value);

      if (options && options.ensure) {
        return this.syncLocalStorageEnsure();
      }

      return this.syncLocalStorage();
    }
  }, {
    key: "storage",
    get: function get() {
      if (!this._storage) {
        this._storage = this.decode(this.getStorage(this._key), {}) || {};
      }

      return this._storage;
    }
  }]);

  return Storage;
}();

Storage.prototype.syncLocalStorage = Object(_zfowed_utils_esm_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])(Storage.prototype.syncLocalStorageEnsure, 200);

/* harmony default export */ __webpack_exports__["default"] = (Storage);

/***/ }),

/***/ "./esm/debounce/index.js":
/*!*******************************!*\
  !*** ./esm/debounce/index.js ***!
  \*******************************/
/*! exports provided: debounce, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(func, wait, immediate) {
  // immediate默认为false
  var timeout, args, context, timestamp, result;

  var later = function later() {
    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
    var last = new Date() - 0 - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    timestamp = new Date() - 0; // 第一次调用该方法时，且immediate为true，则调用func函数

    var callNow = immediate && !timeout; // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数

    if (!timeout) timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}


/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),

/***/ "./esm/get/index.js":
/*!**************************!*\
  !*** ./esm/get/index.js ***!
  \**************************/
/*! exports provided: get, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/**
 * 将路径分解成数组
 *
 * @param {string} path
 * @returns
 */
function pathToArray(path) {
  return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function get(object, path, defaultValue) {
  path = pathToArray(path);
  path.unshift(object);
  return path.reduce(function (data, key, index) {
    if (index !== path.length - 1) {
      return data[key] || {};
    }

    return typeof data[key] !== 'undefined' ? data[key] : defaultValue;
  });
}


/* harmony default export */ __webpack_exports__["default"] = (get);

/***/ }),

/***/ "./esm/set/index.js":
/*!**************************!*\
  !*** ./esm/set/index.js ***!
  \**************************/
/*! exports provided: set, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/**
 * 将路径分解成数组
 *
 * @param {string} path
 * @returns
 */
function pathToArray(path) {
  return Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

function set(object, path, value) {
  path = pathToArray(path);
  path.unshift(object);
  path.reduce(function (data, key, index) {
    if (index !== path.length - 1) {
      if (!data[key]) {
        data[key] = {};
      }
    } else {
      data[key] = value;
    }

    return data[key];
  });
}


/* harmony default export */ __webpack_exports__["default"] = (set);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Storage.js.map