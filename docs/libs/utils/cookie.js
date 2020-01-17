(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cookie.js"] = factory();
	else
		root["cookie.js"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/cookie/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/cookie/index.js":
/*!*****************************!*\
  !*** ./esm/cookie/index.js ***!
  \*****************************/
/*! exports provided: cookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookie", function() { return cookie; });
function trim(string) {
  return String(string).replace(/(^\s*)|(\s*$)/, '');
}

function encode(string) {
  return encodeURIComponent(trim(string));
}

function decode(string) {
  return decodeURIComponent(trim(string));
}

function getCookieData() {
  var cookieData = {};
  var cookieString = window.document.cookie.split(';');

  for (var i = 0; i < cookieString.length; i++) {
    var cookie = cookieString[i].split('=');
    var key = decode(cookie[0]);
    var value = decode(cookie[1]);
    cookieData[key] = value;
  }

  return cookieData;
}

function cookie() {
  if (arguments.length === 0) {
    return getCookieData();
  } else if (arguments.length === 1) {
    return cookie.getItem(arguments[0]);
  } else if (arguments[1] === null) {
    return cookie.removeItem(arguments[0], arguments[2]);
  } else {
    return cookie.setItem(arguments[0], arguments[1], arguments[2]);
  }
}

if (typeof Object.defineProperty !== 'undefined') {
  Object.defineProperty(cookie, 'length', {
    configurable: false,
    enumerable: false,
    get: function get() {
      var data = getCookieData();
      return Object.keys(data).length;
    }
  });
}

cookie.key = function (index) {
  var data = getCookieData();
  return Object.keys(data)[index];
};

cookie.getItem = function (key) {
  var data = getCookieData();
  return data[key];
};

cookie.setItem = function (key, value, options) {
  var settingsStr = "".concat(encode(key), "=").concat(encode(value), ";");

  if (options) {
    if (options.expires) {
      var now = new Date();
      var expires = Number(options.expires) * 24 * 60 * 60 * 1000;
      now.setTime(now.getTime() + expires);
      settingsStr += " expires=".concat(now.toUTCString(), ";");
    }

    if (options.path) settingsStr += " path=".concat(trim(options.path), ";");
    if (options.domanin) settingsStr += " domanin=".concat(trim(options.domanin), ";");
    if (options.secure) settingsStr += " secure=".concat(trim(options.secure), ";");
  }

  window.document.cookie = settingsStr;
};

cookie.removeItem = function (key, options) {
  return cookie.setItem(key, '', Object.assign({
    expires: -1
  }, options || {}));
};

cookie.clear = function () {
  var data = getCookieData();
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    cookie.removeItem(keys[i]);
  }
};


/* harmony default export */ __webpack_exports__["default"] = (cookie);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=cookie.js.map