!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.treeBy=t():e.treeBy=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return("object"===r(e)||"function"==typeof e)&&null!==e}function u(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(!o(e))return e;var r=e.constructor;switch(r){case RegExp:t=new r(e);break;case Date:t=new r(e.getTime());break;case Function:t=e;break;default:if(n.has(e))return n.get(e);t=new r,n.set(e,t)}for(var i in e)t[i]=o(e[i])?u(e[i],n):e[i];return t}n.r(t),n.d(t,"cloneDeep",(function(){return u})),t.default=u},,function(e,t,n){"use strict";n.r(t),n.d(t,"treeBy",(function(){return u}));var r=n(0);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"children",u=Object(r.cloneDeep)(e);return u.splice.apply(u,[0,u.length].concat(o(u.filter((function(e,r){var o=u.find((function(n){return t(e,n)}));return!o||(Array.isArray(o[n])||(o[n]=[]),o[n].push(e),!1)}))))),u}n.d(t,"cloneDeep",(function(){return r.cloneDeep})),t.default=u}])}));
//# sourceMappingURL=treeBy.js.map