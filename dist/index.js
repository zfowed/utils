!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.index=t():e.index=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}([function(e,t,n){"use strict";function i(e,t){for(var n=[],i=0;i<e.length;i++){for(var r=i+1;r<e.length;r++){"function"==typeof t&&t(e[i],e[r])&&++i}n.push(e[i])}return n}n.r(t),n.d(t,"default",function(){return i})},function(e,t,n){"use strict";n.r(t),t.default=function(e,t,n){var i,r,o,u,a,s=function s(){var c=new Date-0-u;c<t&&c>=0?i=setTimeout(s,t-c):(i=null,n||(a=e.apply(o,r),i||(o=r=null)))};return function(){o=this,r=arguments,u=new Date-0;var c=n&&!i;return i||(i=setTimeout(s,t)),c&&(a=e.apply(o,r),o=r=null),a}}},function(e,t,n){"use strict";n.r(t);var i=n(1);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key=t||"storage",this._storage=void 0}var t,n,i;return t=e,(n=[{key:"encode",value:function(e){try{return JSON.stringify(e)}catch(e){throw new Error("编码失败")}}},{key:"decode",value:function(e,t){try{return JSON.parse(e)}catch(e){return t}}},{key:"getStorage",value:function(e){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(e)}},{key:"setStorage",value:function(e,t){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(e,t)}},{key:"syncLocalStorageEnsure",value:function(){return this.setStorage(this._key,this.encode(this.storage))}},{key:"getItem",value:function(e,t){return this.syncLocalStorage(),function(e){if(void 0!==e)return JSON.parse(JSON.stringify(e))}(function(e,t,n){return(t=o(t)).unshift(e),t.reduce(function(e,i,r){return r!==t.length-1?e[i]||{}:void 0!==e[i]?e[i]:n})}(this.storage,e,t))}},{key:"setItem",value:function(e,t,n){return function(e,t,n){(t=o(t)).unshift(e),t.reduce(function(e,i,r){return r!==t.length-1?e[i]||(e[i]={}):e[i]=n,e[i]})}(this.storage,e,t),n&&n.ensure?this.syncLocalStorageEnsure():this.syncLocalStorage()}},{key:"storage",get:function(){return this._storage||(this._storage=this.decode(this.getStorage(this._key),{})||{}),this._storage}}])&&r(t.prototype,n),i&&r(t,i),e}();u.prototype.syncLocalStorage=Object(i.default)(u.prototype.syncLocalStorageEnsure,200),t.default=u},function(e,t,n){"use strict";function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=this._getOptions(t),this._inputFileDiv=null,this._inputFile=null,this._action="select",this._values=[];var n=navigator.userAgent.toLowerCase(),i="ipad"===String(n.match(/ipad/i)),r="iphone os"===String(n.match(/iphone os/i)),o="midp"===String(n.match(/midp/i)),u="rv:1.2.3.4"===String(n.match(/rv:1.2.3.4/i)),a="ucweb"===String(n.match(/ucweb/i)),s="android"===String(n.match(/android/i)),c="windows ce"===String(n.match(/windows ce/i)),l="windows mobile"===String(n.match(/windows mobile/i));this._isPC=!(i||r||o||u||a||s||c||l),this._createInputFileDiv(),this._createInputFile()}var t,n,u;return t=e,(n=[{key:"_getOptions",value:function(e){"object"!==r(e)&&(e={});var t={};return t.multiple=!!e.multiple,t.limitExt="string"==typeof e.limitExt?e.limitExt.split(","):void 0,t.accept="string"==typeof e.accept?e.accept:void 0,t.maxSize="number"==typeof e.maxSize?e.maxSize:void 0,t.minSize="number"==typeof e.minSize?e.minSize:void 0,t.parseImgBase64=!!e.parseImgBase64,t.forcedChange=void 0===e.forcedChange||!!e.forcedChange,t.onChange="function"==typeof e.onChange?e.onChange:void 0,t.onError="function"==typeof e.onError?e.onError:void 0,!t.accept&&this._isPC&&t.limitExt&&(t.accept=t.limitExt.join(",")),t}},{key:"_createInputFileDiv",value:function(){e._inputFileDiv||(e._inputFileDiv=document.createElement("div"),document.body.appendChild(e._inputFileDiv)),this._inputFileDiv=e._inputFileDiv}},{key:"_createInputFile",value:function(){this._inputFileDiv&&this._inputFile&&this._inputFileDiv.removeChild(this._inputFile);var e=document.createElement("input");e.type="file",e.style.display="none",e.onchange=this._onInputFileChange.bind(this),this.options.multiple&&(e.multiple="multiple"),this.options.accept&&(e.accept=this.options.accept),this._inputFile=e,this._inputFileDiv&&this._inputFileDiv.appendChild(this._inputFile)}},{key:"_getRandomId",value:function(){for(var e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="",n=0;n<8;n++)t+=e[Math.floor(Math.random()*e.length)];return t}},{key:"_multitaskingRun",value:function(e,t,n){for(var i=e.length,r=0,o=[],u=null,a=function(e,t){if(!u)return r+=1,e?u=e:o[this.index]=t,u||r>=i?n(u,o):void 0},s=0;s<i;s++){var c=e[s];t(c,a.bind({task:c,index:s}))}}},{key:"_getBase64ByImgFile",value:function(e,t){if("function"!=typeof FileReader)return t(new Error("FileReader is not a function"));var n=new FileReader;return n.onload=function(){return t(null,this.result)},n.readAsDataURL(e)}},{key:"_analysisFileInfo",value:function(e){var t={};return t.id=this._getRandomId(),t.path=e.name,t.path.replace(/^(((?:[a-zA-Z]):)?[\\\/]?(?:[\s\S]+?[\\\/])*)([\s\S]+?(\.[^.]+?)?)$/,function(e,n,i,r,o){t.drive=i||void 0,t.dirname=n||void 0,t.basename=r||void 0,t.extname=o||void 0}),t.size=e.size,t.type=e.type,t.lastModified=e.lastModified,t.lastModifiedDate=e.lastModifiedDate,t.file=e,t}},{key:"_onFileChange",value:function(e,t){var n=this;return this._multitaskingRun(e,function(e,t){var i=n._analysisFileInfo(e);if(n.options.maxSize&&n.options.maxSize<=i.size){var r=new Error("File does not meet the maximum size limit!");return r.type="maxSize",r.fileInfo=i,t(r)}if(n.options.minSize&&n.options.minSize>=i.size){var o=new Error("File does not meet the minimum size limit!");return o.type="maxSize",o.fileInfo=i,t(o)}if(n.options.limitExt&&n.options.limitExt.indexOf(i.extname)<0){var u=new Error("The file format must be ".concat(n.options.limitExt.join(", ")," !"));return u.type="limitExt",u.fileInfo=i,t(u)}return n.options.parseImgBase64&&[".jpg",".png",".gif"].indexOf(i.extname)>=0?n._getBase64ByImgFile(e,function(e,n){return e?(e.type="parseImgBase64",e.fileInfo=i,t(e)):(i.base64=n,t(null,i))}):t(null,i)},t)}},{key:"_onInputFileChange",value:function(){var e=this,t=this._inputFile.files;return this.options.forcedChange&&this._createInputFile(),this._onFileChange(t,function(t,n){if(t)return e._reject&&e._reject(t),e.options.onError&&e.options.onError(t);var r;if("select"===e._action)(r=e._values).splice.apply(r,[0,e._values.length].concat(i(n)));else if("push"===e._action){var o;(o=e._values).push.apply(o,i(n))}return e._resolve&&e._resolve(e._values),e.options.onChange&&e.options.onChange(e._values)})}},{key:"select",value:function(e,t){this._action="select",this._resolve=e,this._reject=t,this._inputFile.click()}},{key:"push",value:function(e,t){this._action="push",this._resolve=e,this._reject=t,this._inputFile.click()}},{key:"remove",value:function(e){for(var t=0;t<this._values.length;t++)if(this._values[t].id===e){this._values.splice(t,1);break}}},{key:"files",value:function(){for(var e=[],t=0;t<this._values.length;t++)e.push(this._values[t].file);return e}},{key:"destroy",value:function(){this._inputFileDiv&&this._inputFile&&this._inputFileDiv.removeChild(this._inputFile)}}])&&o(t.prototype,n),u&&o(t,u),e}();u._inputFileDiv=null,t.default=u},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key=t||"storage",this._storage=this.decode(this.getStorage(this._key),{})}var t,n,r;return t=e,(n=[{key:"_start",value:function(){if(!(0===this.tasks.length||this.concurrencyCut>=this.concurrencyMax)){var e=this.tasks.shift();this.concurrencyCut+=1,this.worker&&this.worker(e.task,this._next.bind({taskData:e,self:this}))}}},{key:"_next",value:function(){var e=this.self,t=this.taskData;return t.callback&&t.callback.apply(this,arguments),e.concurrencyCut-=1,e.tasks.length>0?e._start():0===e.concurrencyCut?e.drain&&e.drain():void 0}},{key:"push",value:function(e,t){if(this.tasks.push({task:e,callback:t}),this.concurrencyCut<this.concurrencyMax)return this._start()}}])&&i(t.prototype,n),r&&i(t,r),e}();t.default=r},function(e,t,n){"use strict";function i(e){return String(e).replace(/(^\s*)|(\s*$)/,"")}function r(e){return encodeURIComponent(i(e))}function o(e){return decodeURIComponent(i(e))}function u(){for(var e={},t=window.document.cookie.split(";"),n=0;n<t.length;n++){var i=t[n].split("="),r=o(i[0]),u=o(i[1]);e[r]=u}return e}function a(){return 0===arguments.length?u():1===arguments.length?a.getItem(arguments[0]):null===arguments[1]?a.removeItem(arguments[0],arguments[2]):a.setItem(arguments[0],arguments[1],arguments[2])}n.r(t),void 0!==Object.defineProperty&&Object.defineProperty(a,"length",{configurable:!1,enumerable:!1,get:function(){var e=u();return Object.keys(e).length}}),a.key=function(e){var t=u();return Object.keys(t)[e]},a.getItem=function(e){return u()[e]},a.setItem=function(e,t,n){var o="".concat(r(e),"=").concat(r(t),";");if(n){if(n.expires){var u=new Date,a=24*Number(n.expires)*60*60*1e3;u.setTime(u.getTime()+a),o+=" expires=".concat(u.toUTCString(),";")}n.path&&(o+=" path=".concat(i(n.path),";")),n.domanin&&(o+=" domanin=".concat(i(n.domanin),";")),n.secure&&(o+=" secure=".concat(i(n.secure),";"))}window.document.cookie=o},a.removeItem=function(e,t){return a.setItem(e,"",Object.assign({expires:-1},t||{}))},a.clear=function(){for(var e=u(),t=Object.keys(e),n=0;n<t.length;n++)a.removeItem(t[n])},t.default=a},function(e,t,n){"use strict";function i(e,t,n){t=t||0,n=!!n;var i=!1,r=null,o=function(e,t){n&&(r=t?{self:e,args:t}:null)},u=function(t,n){return e.apply(t,n)},a=null,s=function(){if(r){var e=r,t=e.self,n=e.args;o(),u(t,n)}i=!1,a=null},c=function(){a&&clearTimeout(a),a=setTimeout(s,t)};return function(){var e=[].concat(Array.prototype.slice.call(arguments),[c]);return i?o(this,e):(i=!0,u(this,e))}}n.r(t),n.d(t,"default",function(){return i})},function(module,__webpack_exports__,__webpack_require__){"use strict";function template(template,options){var templateSettings=Object.assign({escape:/<%=\s*([\s\S]+?)\s*%>/g,interpolate:/<%-\s*([\s\S]+?)\s*%>/g,evaluate:/<%\s*([\s\S]+?)\s*%>/g},options||{}),regExp=RegExp(templateSettings.escape.source+"|"+templateSettings.interpolate.source+"|"+templateSettings.evaluate.source+"|([\\s\\S]+?(?="+templateSettings.escape.source+"|"+templateSettings.interpolate.source+"|"+templateSettings.evaluate.source+")|[\\s\\S]*$)|$","g"),compile="(function (obj) {obj||(obj = {});var __t,__p='';with(obj){";return compile+=template.replace(regExp,function(e,t,n,i,r){return t?"__p+=String((__t=("+t+'))==null?\'\':__t).replace(/[&<>"\']/g, function (k) {var obj={"\\"": "&quot;","&":"&amp;","\\\'":"&#39;","<":"&lt;",">":"&gt;"};return obj[k];});':n?"__p+=((__t=("+n+"))==null?'':__t);":i||(r?"__p+="+JSON.stringify(r)+";":"")}),compile+="}return __p;})",eval(compile)}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return template})},function(e,t,n){"use strict";function i(e,t){for(var n={},i=0;i<e.length;i++){var r=e[i],o="function"==typeof t?t(r,i):r[t];n[o]||(n[o]=[]),n[o].push(r)}return n}n.r(t),n.d(t,"default",function(){return i})},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var i=n(0);function r(e,t){return Object(i.default)(e,function(e,t){return e===t})}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var i=n(0);function r(e,t){return Object(i.default)(e,function(e,n){return("function"==typeof t?t(e):e[t])===("function"==typeof t?t(n):n[t])})}},function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(3),o=n(4),u=n(5),a=n(1),s=n(6),c=n(7),l=n(8),f=n(9),p=n(10),h=n(0);t.default={Storage:i.default,FileSelection:r.default,Queue:o.default,cookie:u.default,debounce:a.default,asynThrottle:s.default,template:c.default,groupBy:l.default,uniq:f.default,uniqBy:p.default,uniqWith:h.default}}]).default});
//# sourceMappingURL=index.js.map