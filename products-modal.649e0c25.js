parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TRez":[function(require,module,exports) {
menuBtnRef1=document.querySelector("[data-more-button-1]"),mobileMenuRef1=document.querySelector("[data-more-1]"),menuBtnRef1.addEventListener("click",()=>{mobileMenuRef1.classList.toggle("shown")}),menuBtnRef2=document.querySelector("[data-more-button-2]"),mobileMenuRef2=document.querySelector("[data-more-2]"),menuBtnRef2.addEventListener("click",()=>{mobileMenuRef2.classList.toggle("shown")}),menuBtnRef3=document.querySelector("[data-more-button-3]"),mobileMenuRef3=document.querySelector("[data-more-3]"),menuBtnRef3.addEventListener("click",()=>{mobileMenuRef3.classList.toggle("shown")});
},{}]},{},["TRez"], null)
//# sourceMappingURL=/goit-markup-project-01/products-modal.649e0c25.js.map