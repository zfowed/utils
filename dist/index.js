!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.index=t():e.index=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";n.r(t),t.default=function(e,t,n){var r,o,u,i,a,c=function c(){var l=new Date-0-i;l<t&&l>=0?r=setTimeout(c,t-l):(r=null,n||(a=e.apply(u,o),r||(u=o=null)))};return function(){u=this,o=arguments,i=new Date-0;var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(a=e.apply(u,o),u=o=null),a}}},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key=t||"storage",this._storage=this.decode(this.getStorage(this._key),{})}var t,n,r;return t=e,(n=[{key:"_pathToArray",value:function(e){return Array.isArray(e)?e:e.replace(/\[/g,".").replace(/\]/g,"").split(".")}},{key:"_objectDeepGet",value:function(e,t,n){return(t=this._pathToArray(t)).unshift(e),t.reduce(function(e,r,o){return o!==t.length-1?e[r]||{}:void 0!==e[r]?e[r]:n})}},{key:"_objectDeepSet",value:function(e,t,n){(t=this._pathToArray(t)).unshift(e),t.reduce(function(e,r,o){return o!==t.length-1?e[r]||(e[r]={}):e[r]=n,e[r]})}},{key:"_deepCopy",value:function(e){if(void 0!==e)return JSON.parse(JSON.stringify(e))}},{key:"encode",value:function(e){try{return JSON.stringify(e)}catch(e){throw new Error("编码失败")}}},{key:"decode",value:function(e,t){try{return JSON.parse(e)}catch(e){return t}}},{key:"getStorage",value:function(e){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(e)}},{key:"setStorage",value:function(e,t){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem(e,t)}},{key:"syncLocalStorageEnsure",value:function(){return this.setStorage(this._key,this.encode(this._storage))}},{key:"getItem",value:function(e,t){this.syncLocalStorage();var n=this._objectDeepGet(this._storage,e,t);return this._deepCopy(n)}},{key:"setItem",value:function(e,t,n){return this._objectDeepSet(this._storage,e,t),n&&n.ensure?this.syncLocalStorageEnsure():this.syncLocalStorage()}}])&&o(t.prototype,n),r&&o(t,r),e}();u.prototype.syncLocalStorage=Object(r.default)(u.prototype.syncLocalStorageEnsure,200),t.default=u},function(e,t,n){"use strict";n.r(t),t.default=function(e){var t="idle",n=function(){if("idle"!==t&&(t="idle"),"waiting"===t)return r()},r=function(){"waiting"!==t&&("running"!==t?("idle"===t&&(t="running"),e.apply(this,[].concat(Array.prototype.slice.call(arguments),[n]))):t="waiting")};return r}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),u=n(2);t.default={Storage:r.default,debounce:o.default,asynDebounce:u.default}}]).default});
//# sourceMappingURL=index.js.map