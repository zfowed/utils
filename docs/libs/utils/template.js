(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["template.js"] = factory();
	else
		root["template.js"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/template/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm/template/index.js":
/*!*******************************!*\
  !*** ./esm/template/index.js ***!
  \*******************************/
/*! exports provided: template, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
function template(template, options) {
  var templateSettings = Object.assign({
    escape: /<%=\s*([\s\S]+?)\s*%>/g,
    interpolate: /<%-\s*([\s\S]+?)\s*%>/g,
    evaluate: /<%\s*([\s\S]+?)\s*%>/g
  }, options || {});
  var regExp = RegExp(templateSettings.escape.source + '|' + templateSettings.interpolate.source + '|' + templateSettings.evaluate.source + '|([\\s\\S]+?(?=' + templateSettings.escape.source + '|' + templateSettings.interpolate.source + '|' + templateSettings.evaluate.source + ')|[\\s\\S]*$)|$', 'g');
  var compile = '(function (obj) {obj||(obj = {});var __t,__p=\'\';with(obj){';
  compile += template.replace(regExp, function (match, escape, interpolate, evaluate, string) {
    if (escape) {
      return '__p+=String((__t=(' + escape + '))==null?\'\':__t).replace(/[&<>"\']/g, function (k) {var obj={"\\"": "&quot;","&":"&amp;","\\\'":"&#39;","<":"&lt;",">":"&gt;"};return obj[k];});';
    } else if (interpolate) {
      return '__p+=((__t=(' + interpolate + '))==null?\'\':__t);';
    } else if (evaluate) {
      return evaluate;
    } else if (string) {
      return '__p+=' + JSON.stringify(string) + ';';
    }

    return '';
  });
  compile += '}return __p;})';
  return eval(compile); // eslint-disable-line no-eval
}


/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=template.js.map