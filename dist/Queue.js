!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["Queue.js"]=e():t["Queue.js"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=10)}({10:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"Queue",(function(){return u}));var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tasks=[],this.worker="function"==typeof e?e:null,this.concurrencyMax="number"==typeof n&&n>0?n:1,this.concurrencyCut=0,this.drain=null}var e,n,u;return e=t,(n=[{key:"_start",value:function(){if(!(0===this.tasks.length||this.concurrencyCut>=this.concurrencyMax)){var t=this.tasks.shift();this.concurrencyCut+=1,this.worker&&this.worker(t.task,this._next.bind({taskData:t,self:this}))}}},{key:"_next",value:function(){var t=this.self,e=this.taskData;return e.callback&&e.callback.apply(this,arguments),t.concurrencyCut-=1,t.tasks.length>0?t._start():0===t.concurrencyCut?t.drain&&t.drain():void 0}},{key:"push",value:function(t,e){if(this.tasks.push({task:t,callback:e}),this.concurrencyCut<this.concurrencyMax)return this._start()}}])&&r(e.prototype,n),u&&r(e,u),t}();e.default=u}}).default}));
//# sourceMappingURL=Queue.js.map