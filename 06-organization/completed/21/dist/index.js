parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"paDP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{id:1,title:"Hello JavaScript",content:"<p>Lorem to the ipsum</p>"},{id:2,title:"Hello Code Organization",content:"<p>This will show you how to organize your code.</p>"},{id:3,title:"Hello Tooling!",content:"<p>Let's learn how to use tools!</p>"}],o=e;exports.default=o;
},{}],"itQ5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={name:"Test Site"},t=e;exports.default=t;
},{}],"g6BC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n,exports.initHeader=r;var e=t(require("../../config"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){return'\n    <header id="site-header">\n      <p><a href="#">'.concat(e.default.name,"</a></p>\n    </header>\n  ")}function r(){document.querySelector("#site-header a").addEventListener("click",o)}function o(e){e.preventDefault(),console.log("Go Home!")}
},{"../../config":"itQ5"}],"x48K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=t(require("../../data"));function t(e){return e&&e.__esModule?e:{default:e}}function n(t){var n=document.querySelector("#app"),r=e.default.find(function(e){return t==e.id}),c='<article id="'.concat(r.id,'">');c+="<h1>".concat(r.title,"</h1>"),c+="<div>".concat(r.content,"</div>"),c+="</article>",n.insertAdjacentHTML("beforeend",c)}
},{"../../data":"paDP"}],"wKfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r,exports.initPosts=n;var t=e(require("../post"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){var e='<ul id="posts">';return t.forEach(function(t){return e+='<li><a data-id="'.concat(t.id,'" href="#">').concat(t.title,"</a></li>")}),e+="</ul>"}function n(){document.querySelectorAll("#posts a").forEach(function(t){return t.addEventListener("click",o)})}function o(e){e.preventDefault(),u(),(0,t.default)(this.dataset.id)}function u(){var t=document.querySelector("#posts");t.parentElement.removeChild(t)}
},{"../post":"x48K"}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("./data")),t=o(require("./components/header")),r=o(require("./components/posts"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function u(e){return e&&e.__esModule?e:{default:e}}var a=document.querySelector("#app"),i=(0,t.default)();i+=(0,r.default)(e.default),a.insertAdjacentHTML("beforeend",i),(0,r.initPosts)(),(0,t.initHeader)();
},{"./data":"paDP","./components/header":"g6BC","./components/posts":"wKfT"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map