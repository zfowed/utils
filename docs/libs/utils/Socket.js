(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Socket.js"] = factory();
	else
		root["Socket.js"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/Socket/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/Socket/index.js":
/*!*****************************!*\
  !*** ./esm/Socket/index.js ***!
  \*****************************/
/*! exports provided: Socket, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Socket =
/*#__PURE__*/
function () {
  function Socket(url, options) {
    var _this = this;

    _classCallCheck(this, Socket);

    this.options = _objectSpread({
      autoConnect: false,
      getEmitId: function getEmitId() {
        return String(_this._emitId++);
      },
      handleEmitParams: function handleEmitParams(reqId, name, params) {
        return {
          reqId: reqId,
          name: name,
          params: params
        };
      },
      handleResponseCallbackParams: function handleResponseCallbackParams(resId, name, params) {
        return {
          resId: resId,
          name: name,
          params: params
        };
      },
      handleMessage: function handleMessage(message, listenerCallback, emitCallback, responseCallback) {
        var data = JSON.parse(message);
        if (data.reqId) return emitCallback(data.resId, data.result);
        if (data.resId) return responseCallback(data.resId, data.name, data.params);
        return listenerCallback(undefined, data.name, data.result);
      }
    }, options);
    this._url = url;
    this._emitId = 0;
    this._emitStorage = {};
    this._listenerStorage = {};
    this._socket = null;
    this._io = null;

    if (options.autoConnect) {
      this.open();
    }
  }

  _createClass(Socket, [{
    key: "__error",
    value: function __error(reject) {
      this.close();
      return reject();
    }
  }, {
    key: "__open",
    value: function __open(resolve) {
      this._socket.addEventListener('message', this.__message.bind(this));

      this._socket.addEventListener('close', this.__close.bind(this));

      return resolve();
    }
  }, {
    key: "__close",
    value: function __close() {
      this.close();
    }
  }, {
    key: "__message",
    value: function __message(event) {
      return this.options.handleMessage(event.data, this._handleListener.bind(this), this._handleEmit.bind(this), this._handleResponse.bind(this));
    }
  }, {
    key: "_handleListener",
    value: function _handleListener(name) {
      var cbs = this._listenerStorage[name];
      if (!cbs || !cbs.length) return;

      for (var _len = arguments.length, result = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        result[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = cbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var cb = _step.value;
          cb && cb.apply(this, result);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_handleEmit",
    value: function _handleEmit(resId) {
      var cb = this._emitStorage[resId];
      delete this._emitStorage[resId];

      for (var _len2 = arguments.length, result = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        result[_key2 - 1] = arguments[_key2];
      }

      return cb && cb.apply(this, result);
    }
  }, {
    key: "_handleResponse",
    value: function _handleResponse(reqId, name) {
      var _this2 = this;

      for (var _len3 = arguments.length, params = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        params[_key3 - 2] = arguments[_key3];
      }

      return this.io().then(function (socket) {
        var callback = _this2._handleResponseCallback.bind(_this2, reqId, name);

        return _this2._handleListener.apply(_this2, [name].concat(_toConsumableArray(params.concat(callback))));
      });
    }
  }, {
    key: "_handleResponseCallback",
    value: function _handleResponseCallback(resId, name) {
      for (var _len4 = arguments.length, result = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        result[_key4 - 2] = arguments[_key4];
      }

      var data = this.options.handleResponseCallbackParams(resId, name, result);
      this.io().then(function (socket) {
        return socket.send(JSON.stringify(data));
      });
    } // 打开链接

  }, {
    key: "open",
    value: function open(url) {
      var _this3 = this;

      if (url) this._url = url;
      return new Promise(function (resolve, reject) {
        _this3._socket = new WebSocket(_this3._url);

        _this3._socket.addEventListener('error', _this3.__error.bind(_this3, reject));

        _this3._socket.addEventListener('open', _this3.__open.bind(_this3, resolve));

        return _this3;
      });
    } // 关闭连接

  }, {
    key: "close",
    value: function close(code, reason) {
      if (this._socket) {
        this._socket.close(code, reason);
      }

      this._socket = null;
      this._io = null;
      return this;
    } // 获取 socket

  }, {
    key: "io",
    value: function io() {
      var _this4 = this;

      if (this._io) return this._io;
      this._io = this.open().then(function () {
        return _this4._socket;
      });
      return this._io;
    } // 获取一个发送ID

  }, {
    key: "getEmitId",
    value: function getEmitId() {
      return this.options.getEmitId();
    } // 发送事件

  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len5 = arguments.length, params = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        params[_key5 - 1] = arguments[_key5];
      }

      var callback = typeof params[params.length - 1] === 'function' ? params.pop() : undefined;
      var reqId;

      if (callback) {
        reqId = this.getEmitId(name, params);
        this._emitStorage[reqId] = callback;
      }

      var data = this.options.handleEmitParams(reqId, name, params);
      this.io().then(function (socket) {
        socket.send(JSON.stringify(data));
      });
      return this;
    } // 监听事件

  }, {
    key: "on",
    value: function on(name, callback) {
      if (!callback) return this;

      if (!this._listenerStorage[name]) {
        this._listenerStorage[name] = [];
      }

      this._listenerStorage[name].push(callback);

      this.io();
      return this;
    } // 关闭监听事件

  }, {
    key: "off",
    value: function off(name, callback) {
      if (!this._listenerStorage[name]) return this;

      if (!callback) {
        this._listenerStorage[name] = [];
      } else {
        var index = this._listenerStorage[name].indexOf(callback);

        if (index >= 0) {
          this._listenerStorage[name].splice(index, 1);
        }
      }

      return this;
    }
  }]);

  return Socket;
}();


/* harmony default export */ __webpack_exports__["default"] = (Socket);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Socket.js.map