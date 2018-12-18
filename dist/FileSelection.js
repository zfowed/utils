!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FileSelection=t():e.FileSelection=t()}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=5)}({5:function(e,t,i){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=this._getOptions(t),this._inputFileDiv=null,this._inputFile=null,this._action="select",this._values=[];var i=navigator.userAgent.toLowerCase(),n="ipad"===String(i.match(/ipad/i)),o="iphone os"===String(i.match(/iphone os/i)),r="midp"===String(i.match(/midp/i)),l="rv:1.2.3.4"===String(i.match(/rv:1.2.3.4/i)),a="ucweb"===String(i.match(/ucweb/i)),u="android"===String(i.match(/android/i)),s="windows ce"===String(i.match(/windows ce/i)),c="windows mobile"===String(i.match(/windows mobile/i));this._isPC=!(n||o||r||l||a||u||s||c),this._createInputFileDiv(),this._createInputFile()}var t,i,l;return t=e,(i=[{key:"_getOptions",value:function(e){"object"!==o(e)&&(e={});var t={};return t.multiple=!!e.multiple,t.limitExt="string"==typeof e.limitExt?e.limitExt.split(","):void 0,t.accept="string"==typeof e.accept?e.accept:void 0,t.maxSize="number"==typeof e.maxSize?e.maxSize:void 0,t.minSize="number"==typeof e.minSize?e.minSize:void 0,t.parseImgBase64=!!e.parseImgBase64,t.forcedChange=void 0===e.forcedChange||!!e.forcedChange,t.onChange="function"==typeof e.onChange?e.onChange:void 0,t.onError="function"==typeof e.onError?e.onError:void 0,!t.accept&&this._isPC&&t.limitExt&&(t.accept=t.limitExt.join(",")),t}},{key:"_createInputFileDiv",value:function(){e._inputFileDiv||(e._inputFileDiv=document.createElement("div"),document.body.appendChild(e._inputFileDiv)),this._inputFileDiv=e._inputFileDiv}},{key:"_createInputFile",value:function(){this._inputFileDiv&&this._inputFile&&this._inputFileDiv.removeChild(this._inputFile);var e=document.createElement("input");e.type="file",e.style.display="none",e.onchange=this._onInputFileChange.bind(this),this.options.multiple&&(e.multiple="multiple"),this.options.accept&&(e.accept=this.options.accept),this._inputFile=e,this._inputFileDiv&&this._inputFileDiv.appendChild(this._inputFile)}},{key:"_getRandomId",value:function(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",i=0;i<8;i++)t+=e[Math.floor(Math.random()*e.length)];return t}},{key:"_multitaskingRun",value:function(e,t,i){for(var n=e.length,o=0,r=[],l=null,a=function(e,t){if(!l)return o+=1,e?l=e:r[this.index]=t,l||o>=n?i(l,r):void 0},u=0;u<n;u++){var s=e[u];t(s,a.bind({task:s,index:u}))}}},{key:"_getBase64ByImgFile",value:function(e,t){if("function"!=typeof FileReader)return t(new Error("FileReader is not a function"));var i=new FileReader;return i.onload=function(){return t(null,this.result)},i.readAsDataURL(e)}},{key:"_analysisFileInfo",value:function(e){var t={};return t.id=this._getRandomId(),t.path=e.name,t.path.replace(/^(((?:[a-zA-Z]):)?[\\\/]?(?:[\s\S]+?[\\\/])*)([\s\S]+?(\.[^.]+?)?)$/,function(e,i,n,o,r){t.drive=n||void 0,t.dirname=i||void 0,t.basename=o||void 0,t.extname=r||void 0}),t.size=e.size,t.type=e.type,t.lastModified=e.lastModified,t.lastModifiedDate=e.lastModifiedDate,t.file=e,t}},{key:"_onFileChange",value:function(e,t){var i=this;return this._multitaskingRun(e,function(e,t){var n=i._analysisFileInfo(e);if(i.options.maxSize&&i.options.maxSize<=n.size){var o=new Error("File does not meet the maximum size limit!");return o.type="maxSize",o.fileInfo=n,t(o)}if(i.options.minSize&&i.options.minSize>=n.size){var r=new Error("File does not meet the minimum size limit!");return r.type="maxSize",r.fileInfo=n,t(r)}if(i.options.limitExt&&i.options.limitExt.indexOf(n.extname)<0){var l=new Error("The file format must be ".concat(i.options.limitExt.join(", ")," !"));return l.type="limitExt",l.fileInfo=n,t(l)}return i.options.parseImgBase64&&[".jpg",".png",".gif"].indexOf(n.extname)>=0?i._getBase64ByImgFile(e,function(e,i){return e?(e.type="parseImgBase64",e.fileInfo=n,t(e)):(n.base64=i,t(null,n))}):t(null,n)},t)}},{key:"_onInputFileChange",value:function(){var e=this,t=this._inputFile.files;return this.options.forcedChange&&this._createInputFile(),this._onFileChange(t,function(t,i){if(t)return e._reject&&e._reject(t),e.options.onError&&e.options.onError(t);var o;if("select"===e._action)(o=e._values).splice.apply(o,[0,e._values.length].concat(n(i)));else if("push"===e._action){var r;(r=e._values).push.apply(r,n(i))}return e._resolve&&e._resolve(e._values),e.options.onChange&&e.options.onChange(e._values)})}},{key:"select",value:function(e,t){this._action="select",this._resolve=e,this._reject=t,this._inputFile.click()}},{key:"push",value:function(e,t){this._action="push",this._resolve=e,this._reject=t,this._inputFile.click()}},{key:"remove",value:function(e){for(var t=0;t<this._values.length;t++)if(this._values[t].id===e){this._values.splice(t,1);break}}},{key:"files",value:function(){for(var e=[],t=0;t<this._values.length;t++)e.push(this._values[t].file);return e}},{key:"destroy",value:function(){this._inputFileDiv&&this._inputFile&&this._inputFileDiv.removeChild(this._inputFile)}}])&&r(t.prototype,i),l&&r(t,l),e}();l._inputFileDiv=null,t.default=l}}).default});
//# sourceMappingURL=FileSelection.js.map