!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asynThrottle=t():e.asynThrottle=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}({4:function(e,t,n){"use strict";function r(e,t,n){t=t||0,n=!!n;var r=!1,o=null,u=function(e,t){n&&(o=t?{self:e,args:t}:null)},f=function(t,n){return e.apply(t,n)},i=null,l=function(){if(o){var e=o,t=e.self,n=e.args;u(),f(t,n)}r=!1,i=null},c=function(){i&&clearTimeout(i),i=setTimeout(l,t)};return function(){var e=[].concat(Array.prototype.slice.call(arguments),[c]);return r?u(this,e):(r=!0,f(this,e))}}n.r(t),n.d(t,"default",(function(){return r}))}}).default}));
//# sourceMappingURL=asynThrottle.js.map