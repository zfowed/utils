(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FileSelection.js"] = factory();
	else
		root["FileSelection.js"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./esm/FileSelection/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=FileSelection.js.map