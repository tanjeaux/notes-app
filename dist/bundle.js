(()=>{var t={187:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,c(o.key),o)}}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,n);var a=new(t.bind.apply(t,i));return e&&r(a,e.prototype),a}(t,arguments,i(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,n,e){return(n=c(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(n){var e=function(n,e){if("object"!=t(n)||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}var u=function(e){function c(){var n,e,r,u;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),a((e=this,r=i(r=c),n=function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(e,o()?Reflect.construct(r,u||[],i(e).constructor):r.apply(e,u))),"_shadowRoot",null),a(n,"_style",null),n._shadowRoot=n.attachShadow({mode:"open"}),n._style=document.createElement("style"),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&r(t,n)}(c,e),u=c,(s=[{key:"_updateStyle",value:function(){this._style.textContent="\n      :host {\n        display: block;\n      }\n\n      div {\n        padding: 22px 10px;\n        color: white;\n        background-color: #27374D;\n        box-shadow: 0 4px 4px #27374da2;\n      }\n\n      .app-name {\n        margin: 0;\n        font-size: 1.5rem;\n        text-align: left;\n        margin-left: 25px;\n      }\n\n      @media screen and (max-width: 768px) {\n        div {\n          width: 100%;\n        }\n      }\n    "}},{key:"_emptyContent",value:function(){this._shadowRoot.innerHTML=""}},{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this._emptyContent(),this._updateStyle(),this._shadowRoot.appendChild(this._style),this._shadowRoot.innerHTML+='\n    <div>\n      <h1 class="app-name">NotesApp</h1>\n    </div>\n    '}}])&&n(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),u;var u,s}(e(HTMLElement));customElements.define("app-bar",u)},137:()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,c(o.key),o)}}function e(t){var n="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(o())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,n);var a=new(t.bind.apply(t,i));return e&&r(a,e.prototype),a}(t,arguments,i(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,n,e){return(n=c(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(n){var e=function(n,e){if("object"!=t(n)||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(e)?e:e+""}var u=function(e){function c(){var n,e,r,u;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),a((e=this,r=i(r=c),n=function(n,e){if(e&&("object"===t(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)}(e,o()?Reflect.construct(r,u||[],i(e).constructor):r.apply(e,u))),"_shadowRoot",null),a(n,"_style",null),n._shadowRoot=n.attachShadow({mode:"open"}),n._style=document.createElement("style"),n}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&r(t,n)}(c,e),u=c,(s=[{key:"_updateStyle",value:function(){this._style.textContent="\n    :host {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    div {\n      width: 100%;\n      max-width: 532px;\n    }\n    \n    .container {\n      width: 100%;\n      max-width: 500px;\n      border-radius: 10px;\n      margin: 10px;\n      background: #EEF5FF;\n      padding: 10px;\n      flex-grow: 1;\n      height: fit-content;\n    }\n    \n    .container-header {\n      align-items: center;\n      color: #27374D;\n      border-bottom: 2px solid #27374D;\n      width: 100%;\n      max-width: 120px;\n      padding: 5px;\n      margin: auto;\n      margin-top: 15px;\n    }\n    \n    .form {\n      display: flex;\n      padding: 16px;\n      flex-direction: column;\n      height: fit-content;\n      border-radius: 16px;\n    }\n    \n    .form-group {\n      display: flex;\n      flex-direction: column;\n    }\n    \n    .form-group label {\n      color: #27374D;\n      margin-bottom: 4px;\n      font-size: 20px;\n      font-weight: bold;\n    }\n    \n    .shadow {\n      box-shadow: 0 3px 5px #27374da2;\n    }\n    \n    input[type=text], textarea{\n      background: #FFF7FC;\n      border: 2px solid #27374D;\n      border-radius: 8px;\n      padding: 10px;\n      box-sizing: border-box;\n      margin-bottom: 8px;\n      font-size: 18px;\n    }\n    \n    .button-submit {\n      width: fit-content;\n      border-radius: 5px;\n      padding: 12px 24px;\n      border: 2px solid #27374D;\n      background: #FFF7FC;\n      color: #27374D;\n      font-size: 20px;\n      font-weight: bold;\n      margin-top: 12px;\n      align-self: center;\n      cursor: pointer;\n    }\n    \n    .button-submit:hover {\n      background: #27374D;\n      color: white;\n    }\n    \n    input[type=text], textarea, .button-submit:focus {\n      outline: none;\n    }\n    \n    .text-center {\n      text-align: center;\n    }\n\n    @media screen and (max-width: 768px) {\n      container {\n        width: 100%;\n      }\n    }\n    "}},{key:"_emptyContent",value:function(){this._shadowRoot.innerHTML=""}},{key:"connectedCallback",value:function(){this.render(),this._shadowRoot.querySelector("#form").addEventListener("submit",this._handleSubmit.bind(this))}},{key:"_handleSubmit",value:function(t){t.preventDefault();var n=this._shadowRoot.querySelector("#title").value,e=this._shadowRoot.querySelector("#description").value,o={id:"notes-".concat(Math.random().toString(36).substring(2,9)),title:n,body:e,createdAt:(new Date).toISOString(),archived:!1};this.dispatchEvent(new CustomEvent("note-added",{detail:o})),this._shadowRoot.querySelector("#title").value="",this._shadowRoot.querySelector("#description").value=""}},{key:"render",value:function(){this._emptyContent(),this._updateStyle(),this._shadowRoot.appendChild(this._style),this._shadowRoot.innerHTML+='\n    <div>\n      <div class="container shadow" id="add-note">\n        <h2 class="container-header text-center">New Note</h2>\n        <form class="form" action="#" id="form">\n          <div class="form-group form-title">\n            <label for="title">Title</label>\n            <input type="text" id="title" name="title" required>\n          </div>\n          <div class="form-group form-desc">\n            <label for="description">Description</label>\n            <textarea name="description" id="description" cols="30" rows="6" required></textarea>\n          </div>\n          <input type="submit" value="ADD" name="submit" class="button-submit">\n        </form>\n      </div>\n    </div>\n    '}}])&&n(u.prototype,s),Object.defineProperty(u,"prototype",{writable:!1}),u;var u,s}(e(HTMLElement));customElements.define("input-note",u)},919:(t,n,e)=>{"use strict";e.d(n,{A:()=>c});var o=e(601),r=e.n(o),i=e(314),a=e.n(i)()(r());a.push([t.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "poppins", sans-serif;\n}\n\nmain {\n  width: 100%;\n  padding: 20px;\n  margin: 0 auto;\n  box-shadow: 0 3px 5px #27374da2;\n}\n\n.loadingIndicator {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.text-loading {\n  background-color: rgb(34, 250, 34);\n  padding: 10px;\n  color: black;\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n  font-style: italic;\n}\n',""]);const c=a},314:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var n=[];function e(t){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===t){e=o;break}return e}function o(t,o){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=o.base?u[0]+o.base:u[0],l=i[s]||0,d="".concat(s," ").concat(l);i[s]=l+1;var f=e(d),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var y=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:d,updater:y,references:1})}a.push(d)}return a}function r(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=o(t,r),s=0;s<i.length;s++){var l=e(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=u}}},659:t=>{"use strict";var n={};t.exports=function(t,e){var o=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},56:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},113:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return t[o](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";var t=e(72),n=e.n(t),o=e(825),r=e.n(o),i=e(659),a=e.n(i),c=e(56),u=e.n(c),s=e(540),l=e.n(s),d=e(113),f=e.n(d),p=e(919),y={};function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_(o.key),o)}}function b(t){var n="function"==typeof Map?new Map:void 0;return b=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(n){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return function(t,n,e){if(v())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,n);var r=new(t.bind.apply(t,o));return e&&g(r,e.prototype),r}(t,arguments,w(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),g(e,t)},b(t)}function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}function g(t,n){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},g(t,n)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function x(t,n,e){return(n=_(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _(t){var n=function(t,n){if("object"!=h(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(n)?n:n+""}y.styleTagTransform=f(),y.setAttributes=u(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=l(),n()(p.A,y),p.A&&p.A.locals&&p.A.locals,e(187),e(137);var S=function(t){function n(){var t,e,o,r;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),x((e=this,o=w(o=n),t=function(t,n){if(n&&("object"===h(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(e,v()?Reflect.construct(o,r||[],w(e).constructor):o.apply(e,r))),"_shadowRoot",null),x(t,"_style",null),x(t,"_note",{id:null,title:null,body:null,createdAt:null}),t._shadowRoot=t.attachShadow({mode:"open"}),t._style=document.createElement("style"),t}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&g(t,n)}(n,t),e=n,(o=[{key:"_emptyContent",value:function(){this._shadowRoot.innerHTML=""}},{key:"note",get:function(){return this._note},set:function(t){this._note=t,this.render()}},{key:"_updateStyle",value:function(){this._style.textContent="\n      :host {\n        display: block;\n      }\n\n      .container {\n        padding: 3%;\n      }\n\n      .list {\n        display: grid;\n        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n        gap: 5%;\n        margin-top: 1rem;\n        margin-bottom: 20rem;\n        justify-items: center;\n        justify-content: center;\n      }\n\n      .card-note {\n        display: block;\n        background: #EEF5FF;\n        border-radius: 5px;\n        box-shadow: 0 3px 5px #27374da2;\n        width: 300px;\n        padding: 20px;\n        height: fit-content;\n      }\n      \n      .note-info {\n        padding: 20px;\n        margin: -20px;\n        border: 2px solid #222831;\n        border-radius: 5px;\n        height: 200px;\n        height: fit-content;\n      }\n      \n      .note-title h2 {\n        font-weight: bold;\n      }\n      \n      .note-description {\n        margin-top: 10px;\n      }\n\n      .note-date {\n        margin-top: 2rem;\n        font-size: 12px;\n        font-style: italic;\n        text-align: right;\n      }\n\n      .note-delete {\n        margin-top: 1rem;\n        align-self: right;\n      }\n\n      .button-delete {\n        color: #fff;\n        background-color: rgb(255, 72, 72);\n        border-radius: 5px;\n        padding: 8px 12px;\n        font-size: 14px;\n        cursor: pointer;\n      }\n\n      .button-delete:hover {\n        background-color: darkred;\n      }\n\n      @media screen and (max-width: 768px) {\n        .list {\n          justify-items: center;\n          justify-content: center;\n        }\n      }\n    "}},{key:"render",value:function(){this._emptyContent(),this._updateStyle(),this._shadowRoot.appendChild(this._style),this._shadowRoot.innerHTML+='\n      <div class="container">\n        <div class="list">\n        '.concat(this._note.map((function(t){return'\n          <div class="card-note">\n            <div class="note-info">\n              <div class="note-title">\n                <h2>'.concat(t.title,'</h2>\n              </div>\n              <div class="note-description">\n                <p>').concat(t.body,'</p>\n              </div>\n              <div class="note-date">\n                <p>').concat(new Date(t.createdAt).toLocaleString(),'</p>\n              </div>\n              <div class="note-delete">\n                <button type="button" class="button-delete" id=""').concat(t.id,">Delete</button>\n              </div>\n            </div>\n          </div>\n          ")})).join(""),"\n        </div>\n      </div>\n    ")}}])&&m(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o}(b(HTMLElement));customElements.define("note-item",S);class O{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const j=new WeakMap;function E(t){return j.has(t)||j.set(t,{transforms:[],values:new Map}),j.get(t)}const P=()=>{},k=t=>t,R=["","X","Y","Z"],T={x:"translateX",y:"translateY",z:"translateZ"},C={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},D={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:C,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:k},skew:C},A=new Map,M=t=>`--motion-${t}`,L=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{R.forEach((n=>{L.push(t+n),A.set(M(t+n),D[t])}))}));const F=(t,n)=>L.indexOf(t)-L.indexOf(n),q=new Set(L),z=t=>q.has(t),I=(t,n)=>`${t} ${n}(var(${M(n)}))`,H=t=>t.startsWith("--"),N=new Set,V={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},$=t=>"object"==typeof t&&Boolean(t.createAnimation),B=t=>"function"==typeof t,U=t=>"number"==typeof t,W=t=>Array.isArray(t)&&!U(t[0]),X=t=>1e3*t,J=(t,n)=>document.createElement("div").animate(t,n),K={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{J({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(J({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{J({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},Y={},Z={};for(const t in K)Z[t]=()=>(void 0===Y[t]&&(Y[t]=K[t]()),Y[t]);const G=(t,n)=>B(t)?Z.linearEasing()?`linear(${((t,n)=>{let e="";const o=Math.round(n/.015);for(let n=0;n<o;n++)e+=t((r=o-1)-0==0?1:(n-0)/(r-0))+", ";var r;return e.substring(0,e.length-2)})(t,n)})`:V.easing:(t=>Array.isArray(t)&&U(t[0]))(t)?Q(t):t,Q=([t,n,e,o])=>`cubic-bezier(${t}, ${n}, ${e}, ${o})`;function tt(t){return T[t]&&(t=T[t]),z(t)?M(t):t}const nt=(t,n,e)=>{n=tt(n),H(n)?t.style.setProperty(n,e):t.style[n]=e};function et(t,n,e,o={},r){const i=window.__MOTION_DEV_TOOLS_RECORD,a=!1!==o.record&&i;let c,{duration:u=V.duration,delay:s=V.delay,endDelay:l=V.endDelay,repeat:d=V.repeat,easing:f=V.easing,persist:p=!1,direction:y,offset:h,allowWebkitAcceleration:m=!1,autoplay:b=!0}=o;const v=E(t),g=z(n);let w=Z.waapi();g&&((t,n)=>{T[n]&&(n=T[n]);const{transforms:e}=E(t);var o,r;r=n,-1===(o=e).indexOf(r)&&o.push(r),t.style.transform=(t=>t.sort(F).reduce(I,"").trim())(e)})(t,n);const x=tt(n),_=function(t,n){return t.has(n)||t.set(n,new O),t.get(n)}(v.values,x),S=A.get(x);return function(t,n=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(n&&t.commitStyles(),t.cancel())}catch(t){}}(_.animation,!($(f)&&_.generator)&&!1!==o.record),()=>{const v=()=>{var n,e;return null!==(e=null!==(n=((t,n)=>{n=tt(n);let e=H(n)?t.style.getPropertyValue(n):getComputedStyle(t)[n];if(!e&&0!==e){const t=A.get(n);t&&(e=t.initialValue)}return e})(t,x))&&void 0!==n?n:null==S?void 0:S.initialValue)&&void 0!==e?e:0};let O=function(t,n){for(let e=0;e<t.length;e++)null===t[e]&&(t[e]=e?t[e-1]:n());return t}((t=>Array.isArray(t)?t:[t])(e),v);const j=function(t,n){var e;let o=(null==n?void 0:n.toDefaultUnit)||k;const r=t[t.length-1];if("string"==typeof r){const t=(null===(e=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===e?void 0:e[2])||"";t&&(o=n=>n+t)}return o}(O,S);if($(f)){const t=f.createAnimation(O,"opacity"!==n,v,x,_);f=t.easing,O=t.keyframes||O,u=t.duration||u}if(H(x)&&(Z.cssRegisterProperty()?function(t){if(!N.has(t)){N.add(t);try{const{syntax:n,initialValue:e}=A.has(t)?A.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:n,initialValue:e})}catch(t){}}}(x):w=!1),g&&!Z.linearEasing()&&(B(f)||W(f)&&f.some(B))&&(w=!1),w){S&&(O=O.map((t=>U(t)?S.toDefaultUnit(t):t))),1!==O.length||Z.partialKeyframes()&&!a||O.unshift(v());const n={delay:X(s),duration:X(u),endDelay:X(l),easing:W(f)?void 0:G(f,u),direction:y,iterations:d+1,fill:"both"};c=t.animate({[x]:O,offset:h,easing:W(f)?f.map((t=>G(t,u))):void 0},n),c.finished||(c.finished=new Promise(((t,n)=>{c.onfinish=t,c.oncancel=n})));const e=O[O.length-1];c.finished.then((()=>{p||(nt(t,x,e),c.cancel())})).catch(P),m||(c.playbackRate=1.000001)}else if(r&&g)O=O.map((t=>"string"==typeof t?parseFloat(t):t)),1===O.length&&O.unshift(parseFloat(v())),c=new r((n=>{nt(t,x,j?j(n):n)}),O,Object.assign(Object.assign({},o),{duration:u,easing:f}));else{const n=O[O.length-1];nt(t,x,S&&U(n)?S.toDefaultUnit(n):n)}return a&&i(t,n,O,{duration:u,delay:s,easing:f,repeat:d,offset:h},"motion-one"),_.setAnimation(c),c&&!b&&c.pause(),c}}var ot="https://notes-api.dicoding.dev/v2",rt=function(){fetch("".concat(ot,"/notes")).then((function(t){return t.json()})).then((function(t){t.error?at(t.message):(console.log(t.data),it(t.data))})).catch((function(t){at(t)}))},it=function(t){document.querySelectorAll("note-item").forEach((function(n){n.note=t,n.shadowRoot.querySelectorAll(".card-note").forEach((function(t){var e=t.querySelector(".button-delete");e&&e.addEventListener("click",(function(){var e,o=Array.from(t.parentNode.children).indexOf(t);e=n.note[o].id,ct(),fetch("".concat(ot,"/notes/").concat(e),{method:"DELETE"}).then((function(t){return t.json()})).then((function(t){ut(),at(t.message),rt()})).catch((function(t){ut(),at(t)}))}))}))}))},at=function(){alert(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Check your internet connection")};document.addEventListener("DOMContentLoaded",(function(){rt();var t=document.querySelector("input-note");t&&t.addEventListener("note-added",(function(t){var n;n=t.detail,ct(),fetch("".concat(ot,"/notes"),{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":"12345"},body:JSON.stringify({title:n.title,body:n.body})}).then((function(t){return console.log("addNote",t),t.json()})).then((function(t){ut(),at(t.message),t.error||rt()})).catch((function(t){ut(),at(t)}))}))}));var ct=function(){var t=document.querySelector(".loadingIndicator");document.querySelector(".text-loading"),t.style.display="flex"},ut=function(){document.querySelector(".loadingIndicator").style.display="none"},st=document.querySelector(".loadingIndicator");st.addEventListener("transitionstart",(function(){et(st,{opacity:[0,1],duration:300,easing:"ease-in-out"})})),st.addEventListener("transitionend",(function(){et(st,{opacity:[1,0],duration:300,easing:"ease-in-out"})}))})()})();