(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("Lxy_storage_library",[],t):"object"===typeof exports?exports["Lxy_storage_library"]=t():e["Lxy_storage_library"]=t()})(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}({0:function(e,t,r){r("2b45"),e.exports=r("41f5")},"24fb":function(e,t,r){"use strict";function n(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"===typeof btoa){var a=o(n),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),t.push(u))}},t}},"2b45":function(e,t,r){var n=r("887f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("499e").default;o("5436e098",n,!0,{sourceMap:!1,shadowMode:!1})},"41f5":function(e,t,r){"use strict";r.r(t),r.d(t,"UtilsLogics",(function(){return u}));var n=(e,t)=>{localStorage.setItem(e,t)},o=e=>localStorage.getItem(e),a=e=>{localStorage.removeItem(e)};const i="lxy_storage_library",s={install:function(e,t={}){e.prototype.$library=e.prototype.$library||{},e.prototype.$library[""+i]={},e.prototype.$library[""+i].setLocalStorage=n,e.prototype.$library[""+i].getLocalStorage=o,e.prototype.$library[""+i].removeLocalStorage=a}};var u=s},"499e":function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],c=a[3],f={id:e+":"+o,css:s,media:u,sourceMap:c};n[i]?n[i].parts.push(f):r.push(n[i]={id:i,parts:[f]})}return r}r.r(t),r.d(t,"default",(function(){return v}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},l=null,p="data-vue-ssr-id",d="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,o){c=r,l=o||{};var i=n(e,t);return y(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o],u=a[s.id];u.refs--,r.push(u)}t?(i=n(e,t),y(i)):i=[];for(o=0;o<r.length;o++){u=r[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function y(e){for(var t=0;t<e.length;t++){var r=e[t],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(h(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(h(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function h(e){var t,r,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(c)return f;n.parentNode.removeChild(n)}if(d){var o=u++;n=s||(s=g()),t=m.bind(null,n,o,!1),r=m.bind(null,n,o,!0)}else n=g(),t=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function m(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function x(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),l.ssrId&&e.setAttribute(p,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},"887f":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@font-face{font-family:"ICON_FONT_LOADER_FONTFACE(fontName)";src:ICON_FONT_LOADER_FONTFACE(src)}',""]),e.exports=t}})}));
//# sourceMappingURL=index.js.map