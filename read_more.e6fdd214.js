parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xVrw":[function(require,module,exports) {
$(document).ready(function(){function e(){var e=document.querySelectorAll(".articleDots"),n=document.querySelectorAll(".articleReadMore"),t=document.querySelectorAll(".btnReadMore");"none"===e[0].style.display?(e.forEach(function(e){e.style.display="inline"}),t.forEach(function(e){e.innerHTML="Read more"}),n.forEach(function(e){e.style.display="none"})):(e.forEach(function(e){e.style.display="none"}),t.forEach(function(e){e.innerHTML="Hide text"}),n.forEach(function(e){e.style.display="inline"}))}document.querySelectorAll(".article__text--button").forEach(function(n){n.addEventListener("click",e)})});
},{}]},{},["xVrw"], null)
//# sourceMappingURL=/project-team-14/read_more.e6fdd214.js.map