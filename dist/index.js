(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index.js"] = factory();
	else
		root["index.js"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./esm sync recursive ^\\.\\/([^/]+?)\\/index\\.js$":
/*!********************************************!*\
  !*** ./esm sync ^\.\/([^/]+?)\/index\.js$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./FileSelection/index.js": "./esm/FileSelection/index.js",
	"./Queue/index.js": "./esm/Queue/index.js",
	"./Socket/index.js": "./esm/Socket/index.js",
	"./Storage/index.js": "./esm/Storage/index.js",
	"./asynThrottle/index.js": "./esm/asynThrottle/index.js",
	"./cloneDeep/index.js": "./esm/cloneDeep/index.js",
	"./cookie/index.js": "./esm/cookie/index.js",
	"./debounce/index.js": "./esm/debounce/index.js",
	"./get/index.js": "./esm/get/index.js",
	"./groupBy/index.js": "./esm/groupBy/index.js",
	"./set/index.js": "./esm/set/index.js",
	"./template/index.js": "./esm/template/index.js",
	"./uniq/index.js": "./esm/uniq/index.js",
	"./uniqBy/index.js": "./esm/uniqBy/index.js",
	"./uniqWith/index.js": "./esm/uniqWith/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./esm sync recursive ^\\.\\/([^/]+?)\\/index\\.js$";

/***/ }),

/***/ "./esm/FileSelection/index.js":
/*!************************************!*\
  !*** ./esm/FileSelection/index.js ***!
  \************************************/
/*! exports provided: FileSelection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSelection", function() { return FileSelection; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* global FileReader */

/**
 * 文件选择器
 *
 * 例子：
 * var fileSelection = new FileSelection({
 *     limitExt: '.jpg,.png,.gif', // 限制文件的后缀名,逗号分开，例子：".jpg,.png,.gif"
 *     accept: '.jpg,.png,.gif', // 本地文件选择器只能显示的文件类型（如果设置了limitExt，该值无效）
 *     multiple: true, // 本地文件选择器是否允许多选文件
 *     maxSize: 0, // 文件大小的最大限制
 *     minSize: 0, // 文件大小的最小限制
 *     base64: true, // 选择文件时是否自动解析Base64值
 *     parseImgBase64: true, // 选择图片文件时是否自动解析Base64值
 *     forcedChange: true, // 选择文件后是否强制刷新El(强制刷新El可以选择同一个文件)
 *     onChange: function (fileInfoList) { // 监听选择文件事件
 *         // fileInfoList: 当前选择的解析过的文件信息
 *     },
 *     onError: function (error) { // 监听选择文件出错事件
 *         // error.type: 错误类型，支持 limitExt, maxSize, minSize, parseImgBase64
 *         // error.fileInfo: 出错的文件信息
 *     }
 * })
 *
 * fileSelection._values                      // 获取当前所有选择的文件信息数据
 * fileSelection.select(onChange, onError)    // 打开选择文件窗口；onChange 选择文件回调；onError 选择文件出错回调
 * fileSelection.push(onChange, onError)      // 打开添加文件窗口；onChange 选择文件回调；onError 选择文件出错回调
 * fileSelection.files()                      // 获取当前所有选择的文件对象
 * fileSelection.remove(id)                   // 根据 fileInfo 中id删除已经选择的文件信息
 * fileSelection.destroy()                    // 摧毁文件选择器
 *
 * @class FileSelection
 */
var FileSelection =
/*#__PURE__*/
function () {
  function FileSelection(options) {
    _classCallCheck(this, FileSelection);

    this.options = this._getOptions(options);
    this._inputFileDiv = null;
    this._inputFile = null;
    this._action = 'select';
    this._values = [];
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = String(sUserAgent.match(/ipad/i)) === 'ipad';
    var bIsIphoneOs = String(sUserAgent.match(/iphone os/i)) === 'iphone os';
    var bIsMidp = String(sUserAgent.match(/midp/i)) === 'midp';
    var bIsUc7 = String(sUserAgent.match(/rv:1.2.3.4/i)) === 'rv:1.2.3.4';
    var bIsUc = String(sUserAgent.match(/ucweb/i)) === 'ucweb';
    var bIsAndroid = String(sUserAgent.match(/android/i)) === 'android';
    var bIsCE = String(sUserAgent.match(/windows ce/i)) === 'windows ce';
    var bIsWM = String(sUserAgent.match(/windows mobile/i)) === 'windows mobile';
    this._isPC = !bIsIpad && !bIsIphoneOs && !bIsMidp && !bIsUc7 && !bIsUc && !bIsAndroid && !bIsCE && !bIsWM;

    this._createInputFileDiv();

    this._createInputFile();
  }
  /**
   * 获取解析后的选项参数
   *
   * @param {object} options 选项参数
   * @returns {object} 选项
   * @memberof FileSelection
   */


  _createClass(FileSelection, [{
    key: "_getOptions",
    value: function _getOptions(options) {
      if (_typeof(options) !== 'object') options = {};
      var result = {}; // this._isPC

      result.multiple = !!options.multiple;
      result.limitExt = typeof options.limitExt === 'string' ? options.limitExt.split(',') : undefined;
      result.accept = typeof options.accept === 'string' ? options.accept : undefined;
      result.maxSize = typeof options.maxSize === 'number' ? options.maxSize : undefined;
      result.minSize = typeof options.minSize === 'number' ? options.minSize : undefined;
      result.base64 = !!options.base64;
      result.parseImgBase64 = !!options.parseImgBase64;
      result.forcedChange = typeof options.forcedChange === 'undefined' ? true : !!options.forcedChange;
      result.onChange = typeof options.onChange === 'function' ? options.onChange : undefined;
      result.onError = typeof options.onError === 'function' ? options.onError : undefined;
      if (!result.accept && this._isPC && result.limitExt) result.accept = result.limitExt.join(',');
      return result;
    }
    /**
     * 创建存放 <input type="file"> 的 <div>
     *
     * @memberof FileSelection
     */

  }, {
    key: "_createInputFileDiv",
    value: function _createInputFileDiv() {
      // 只创建一次
      if (!FileSelection._inputFileDiv) {
        FileSelection._inputFileDiv = document.createElement('div');
        document.body.appendChild(FileSelection._inputFileDiv);
      }

      this._inputFileDiv = FileSelection._inputFileDiv;
    }
    /**
     * 创建 <input type="file">
     *
     * @memberof FileSelection
     */

  }, {
    key: "_createInputFile",
    value: function _createInputFile() {
      // 如果存在就删除
      if (this._inputFileDiv && this._inputFile) {
        this._inputFileDiv.removeChild(this._inputFile);
      } // 添加


      var inputFile = document.createElement('input');
      inputFile.type = 'file';
      inputFile.style.display = 'none';
      inputFile.onchange = this._onInputFileChange.bind(this);
      if (this.options.multiple) inputFile.multiple = 'multiple';
      if (this.options.accept) inputFile.accept = this.options.accept;
      this._inputFile = inputFile;
      if (this._inputFileDiv) this._inputFileDiv.appendChild(this._inputFile);
    }
    /**
     * 获取一个随机字符串
     *
     * @returns {string} 返回一个随机字符串
     * @memberof FileSelection
     */

  }, {
    key: "_getRandomId",
    value: function _getRandomId() {
      var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var result = '';

      for (var i = 0; i < 8; i++) {
        result += str[Math.floor(Math.random() * str.length)];
      }

      return result;
    }
    /**
     * 多任务处理
     * 将多个异步任务同时执行，首次遇到错误回调，所有任务结束回调
     *
     * @param {array} tasks 任务列表
     * @param {function} process 处理任务 代送器 process(task, next)
     * @param {function} callback 回调 callback(error, result)
     * @memberof FileSelection
     */

  }, {
    key: "_multitaskingRun",
    value: function _multitaskingRun(tasks, process, callback) {
      var tasksLen = tasks.length;
      var runNumber = 0;
      var resolveResults = [];
      var rejectError = null;

      var next = function next(error, result) {
        if (rejectError) return;
        runNumber += 1;

        if (error) {
          rejectError = error;
        } else {
          resolveResults[this.index] = result;
        }

        if (rejectError || runNumber >= tasksLen) {
          return callback(rejectError, resolveResults);
        }
      };

      for (var index = 0; index < tasksLen; index++) {
        var task = tasks[index];
        process(task, next.bind({
          task: task,
          index: index
        }));
      }
    }
    /**
     * 根据 image file 对象获取 base64值
     *
     * @param {file} file 图片文件
     * @param {function} callback 回调 callback(error, base64)
     * @memberof FileSelection
     */

  }, {
    key: "_getBase64ByImgFile",
    value: function _getBase64ByImgFile(file, callback) {
      if (typeof FileReader !== 'function') {
        return callback(new Error('FileReader is not a function'));
      }

      var reader = new FileReader();

      reader.onload = function () {
        return callback(null, this.result);
      };

      return reader.readAsDataURL(file);
    }
    /**
     * 解析 file 对象
     *
     * @param {file} file 图片文件
     * @returns {object} 文件信息
     * @memberof FileSelection
     */

  }, {
    key: "_analysisFileInfo",
    value: function _analysisFileInfo(file) {
      var fileInfo = {};
      fileInfo.id = this._getRandomId();
      fileInfo.path = file.name; // 路径

      fileInfo.path.replace(/^(((?:[a-zA-Z]):)?[\\/]?(?:[\s\S]+?[\\/])*)([\s\S]+?(\.[^.]+?)?)$/, function (all, dirname, drive, basename, extname) {
        fileInfo.drive = drive || undefined; // 盘符

        fileInfo.dirname = dirname || undefined; // 目录名

        fileInfo.basename = basename || undefined; // 文件名

        fileInfo.extname = extname || undefined; // 后缀
      });
      fileInfo.size = file.size; // 大小

      fileInfo.type = file.type; // 类型

      fileInfo.lastModified = file.lastModified; // 最后更新时间

      fileInfo.lastModifiedDate = file.lastModifiedDate; // 最后更新时间

      fileInfo.file = file; // 文件对象

      return fileInfo;
    }
    /**
     * 选择文件
     *
     * @param {array} files 文件数组
     * @param {function} callback 回调 callback(error, result)
     * @memberof FileSelection
     */

  }, {
    key: "_onFileChange",
    value: function _onFileChange(files, callback) {
      var _this = this;

      // 启动多任务队列
      return this._multitaskingRun(files, function (file, callback) {
        var fileInfo = _this._analysisFileInfo(file);

        if (_this.options.maxSize && _this.options.maxSize <= fileInfo.size) {
          var error = new Error('File does not meet the maximum size limit!');
          error.type = 'maxSize';
          error.fileInfo = fileInfo;
          return callback(error);
        } else if (_this.options.minSize && _this.options.minSize >= fileInfo.size) {
          var _error = new Error('File does not meet the minimum size limit!');

          _error.type = 'maxSize';
          _error.fileInfo = fileInfo;
          return callback(_error);
        } else if (_this.options.limitExt && _this.options.limitExt.indexOf(fileInfo.extname) < 0) {
          var _error2 = new Error("The file format must be ".concat(_this.options.limitExt.join(', '), " !"));

          _error2.type = 'limitExt';
          _error2.fileInfo = fileInfo;
          return callback(_error2);
        }

        if (_this.base64 || _this.options.parseImgBase64 && fileInfo.type.indexOf('image') >= 0) {
          return _this._getBase64ByImgFile(file, function (error, result) {
            if (error) {
              error.type = 'parseImgBase64';
              error.fileInfo = fileInfo;
              return callback(error);
            }

            fileInfo.base64 = result;
            return callback(null, fileInfo);
          });
        }

        return callback(null, fileInfo);
      }, callback);
    }
    /**
     * <input type="file"> 选择事件
     *
     * @memberof FileSelection
     */

  }, {
    key: "_onInputFileChange",
    value: function _onInputFileChange() {
      var _this2 = this;

      var files = this._inputFile.files;
      if (this.options.forcedChange) this._createInputFile(); // 触发文件选择

      return this._onFileChange(files, function (error, cutValue) {
        if (error) {
          // 触发文件选择错误事件
          _this2._reject && _this2._reject(error);
          return _this2.options.onError && _this2.options.onError(error);
        }

        if (_this2._action === 'select') {
          var _this2$_values;

          (_this2$_values = _this2._values).splice.apply(_this2$_values, [0, _this2._values.length].concat(_toConsumableArray(cutValue)));
        } else if (_this2._action === 'push') {
          var _this2$_values2;

          (_this2$_values2 = _this2._values).push.apply(_this2$_values2, _toConsumableArray(cutValue));
        } // 触发文件选择事件


        _this2._resolve && _this2._resolve(_this2._values);
        return _this2.options.onChange && _this2.options.onChange(_this2._values);
      });
    }
    /**
     * 选择文件
     *
     * @memberof FileSelection
     */

  }, {
    key: "select",
    value: function select(resolve, reject) {
      this._action = 'select';
      this._resolve = resolve;
      this._reject = reject;

      this._inputFile.click();
    }
    /**
     * 添加文件
     *
     * @memberof FileSelection
     */

  }, {
    key: "push",
    value: function push(resolve, reject) {
      this._action = 'push';
      this._resolve = resolve;
      this._reject = reject;

      this._inputFile.click();
    }
    /**
     * 删除文件
     *
     * @param {string} id 文件id
     * @memberof FileSelection
     */

  }, {
    key: "remove",
    value: function remove(id) {
      for (var i = 0; i < this._values.length; i++) {
        if (this._values[i].id === id) {
          this._values.splice(i, 1);

          break;
        }
      }
    }
    /**
     * 获取当前已选择的文件对象
     *
     * @param {string} id 文件id
     * @memberof FileSelection
     */

  }, {
    key: "files",
    value: function files() {
      var files = [];

      for (var i = 0; i < this._values.length; i++) {
        files.push(this._values[i].file);
      }

      return files;
    }
    /**
     * 摧毁选择器
     *
     * @memberof FileSelection
     */

  }, {
    key: "destroy",
    value: function destroy() {
      // 如果存在就删除
      if (this._inputFileDiv && this._inputFile) {
        this._inputFileDiv.removeChild(this._inputFile);
      }
    }
  }]);

  return FileSelection;
}();

FileSelection._inputFileDiv = null;

/* harmony default export */ __webpack_exports__["default"] = (FileSelection);

/***/ }),

/***/ "./esm/Queue/index.js":
/*!****************************!*\
  !*** ./esm/Queue/index.js ***!
  \****************************/
/*! exports provided: Queue, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue(worker, concurrency) {
    _classCallCheck(this, Queue);

    this.tasks = [];
    this.worker = typeof worker === 'function' ? worker : null;
    this.concurrencyMax = typeof concurrency === 'number' && concurrency > 0 ? concurrency : 1;
    this.concurrencyCut = 0;
    this.drain = null;
  }

  _createClass(Queue, [{
    key: "_start",
    value: function _start() {
      if (this.tasks.length === 0 || this.concurrencyCut >= this.concurrencyMax) {
        return;
      }

      var taskData = this.tasks.shift();
      this.concurrencyCut += 1;
      this.worker && this.worker(taskData.task, this._next.bind({
        taskData: taskData,
        self: this
      }));
    }
  }, {
    key: "_next",
    value: function _next() {
      var self = this.self;
      var taskData = this.taskData;
      taskData.callback && taskData.callback.apply(this, arguments);
      self.concurrencyCut -= 1;

      if (self.tasks.length > 0) {
        return self._start();
      }

      if (self.concurrencyCut === 0) {
        return self.drain && self.drain();
      }
    }
  }, {
    key: "push",
    value: function push(task, callback) {
      this.tasks.push({
        task: task,
        callback: callback
      });

      if (this.concurrencyCut < this.concurrencyMax) {
        return this._start();
      }
    }
  }]);

  return Queue;
}();


/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

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

/***/ }),

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

/***/ "./esm/asynThrottle/index.js":
/*!***********************************!*\
  !*** ./esm/asynThrottle/index.js ***!
  \***********************************/
/*! exports provided: asynThrottle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asynThrottle", function() { return asynThrottle; });
function asynThrottle(func, delay, isEnsure) {
  delay = delay || 0;
  isEnsure = !!isEnsure;
  var inCall = false;
  var waitCall = null;

  var setWaitCall = function setWaitCall(self, args) {
    if (!isEnsure) return;

    if (args) {
      waitCall = {
        self: self,
        args: args
      };
    } else {
      waitCall = null;
    }
  };

  var fnApply = function fnApply(self, args) {
    return func.apply(self, args);
  };

  var setT = null;

  var setTFn = function setTFn() {
    if (waitCall) {
      var _waitCall = waitCall,
          self = _waitCall.self,
          args = _waitCall.args;
      setWaitCall();
      fnApply(self, args);
    }

    inCall = false;
    setT = null;
  };

  var next = function next() {
    if (setT) clearTimeout(setT);
    setT = setTimeout(setTFn, delay);
  };

  return function () {
    var args = [].concat(Array.prototype.slice.call(arguments), [next]);

    if (inCall) {
      return setWaitCall(this, args);
    }

    inCall = true;
    return fnApply(this, args);
  };
}


/* harmony default export */ __webpack_exports__["default"] = (asynThrottle);

/***/ }),

/***/ "./esm/cloneDeep/index.js":
/*!********************************!*\
  !*** ./esm/cloneDeep/index.js ***!
  \********************************/
/*! exports provided: deepCopy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * 检查是否对象
 *
 * @param {*} obj
 * @returns
 */
function isObj(obj) {
  return (_typeof(obj) === 'object' || typeof obj === 'function') && obj !== null;
}

function deepCopy(obj) {
  var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  var cloneObj;
  var Constructor = obj.constructor;

  switch (Constructor) {
    case RegExp:
      cloneObj = new Constructor(obj);
      break;

    case Date:
      cloneObj = new Constructor(obj.getTime());
      break;

    default:
      if (hash.has(obj)) return hash.get(obj);
      cloneObj = new Constructor();
      hash.set(obj, cloneObj);
  }

  for (var key in obj) {
    cloneObj[key] = isObj(obj[key]) ? deepCopy(obj[key], hash) : obj[key];
  }

  return cloneObj;
}


/* harmony default export */ __webpack_exports__["default"] = (deepCopy);

/***/ }),

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

/***/ "./esm/groupBy/index.js":
/*!******************************!*\
  !*** ./esm/groupBy/index.js ***!
  \******************************/
/*! exports provided: groupBy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
function groupBy(collection, iteratee) {
  var group = {};

  for (var index = 0; index < collection.length; index++) {
    var item = collection[index];
    var key = typeof iteratee === 'function' ? iteratee(item, index) : item[iteratee];
    if (!group[key]) group[key] = [];
    group[key].push(item);
  }

  return group;
}


/* harmony default export */ __webpack_exports__["default"] = (groupBy);

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 该文件导入当前目录所有模块
 * 这是一次性方法，不应有任何理由来编辑此文件。
 */
var files = __webpack_require__("./esm sync recursive ^\\.\\/([^/]+?)\\/index\\.js$");

var modules = {};
files.keys().forEach(function (key) {
  if (key === './index.js') return;
  modules[key.replace(/^\.\/([^/]+?)\/index\.js$/, '$1')] = files(key)["default"];
}); // export { ...modules }
// export default modules

module.exports = _objectSpread({
  "default": modules
}, modules);

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

/***/ }),

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

/***/ }),

/***/ "./esm/uniq/index.js":
/*!***************************!*\
  !*** ./esm/uniq/index.js ***!
  \***************************/
/*! exports provided: uniqWith, uniq, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return uniq; });
/* harmony import */ var _zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zfowed/utils/esm/uniqWith */ "./esm/uniqWith/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return _zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__["uniqWith"]; });



function uniq(array, iteratee) {
  return Object(_zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__["uniqWith"])(array, function (a, b) {
    return a === b;
  });
}


/* harmony default export */ __webpack_exports__["default"] = (uniq);

/***/ }),

/***/ "./esm/uniqBy/index.js":
/*!*****************************!*\
  !*** ./esm/uniqBy/index.js ***!
  \*****************************/
/*! exports provided: uniqWith, uniqBy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqBy", function() { return uniqBy; });
/* harmony import */ var _zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zfowed/utils/esm/uniqWith */ "./esm/uniqWith/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return _zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__["uniqWith"]; });



function uniqBy(array, iteratee) {
  return Object(_zfowed_utils_esm_uniqWith__WEBPACK_IMPORTED_MODULE_0__["uniqWith"])(array, function (a, b) {
    var aKey = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
    var bKey = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];
    return aKey === bKey;
  });
}


/* harmony default export */ __webpack_exports__["default"] = (uniqBy);

/***/ }),

/***/ "./esm/uniqWith/index.js":
/*!*******************************!*\
  !*** ./esm/uniqWith/index.js ***!
  \*******************************/
/*! exports provided: uniqWith, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqWith", function() { return uniqWith; });
function uniqWith(array, iteratee) {
  var hash = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var result = typeof iteratee === 'function' ? iteratee(array[i], array[j]) : false;

      if (result) {
        ++i;
      }
    }

    hash.push(array[i]);
  }

  return hash;
}


/* harmony default export */ __webpack_exports__["default"] = (uniqWith);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map