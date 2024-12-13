(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(354),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"body {\n\tbackground-color: black;\n\tcolor: white;\n\tmargin: 0;\n\tline-height: 1.6;\n}\n\nh1 {\n\ttext-align: center;\n}\n\n#single-param,\n#double-param {\n\tdisplay: block;\n\tmargin: 0 auto 20px;\n\twidth: max(150px, 40%);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tflex-wrap: wrap;\n\tgap: 5px;\n}\n\nbutton {\n\tbackground-color: inherit;\n\tcolor: inherit;\n\tborder: 1px solid white;\n\tpadding: 5px 10px;\n\tborder-radius: 15px;\n\tcursor: pointer;\n}\n\nbutton[disabled] {\n\tcolor: rgb(140 140 140);\n\tborder-color: rgb(140 140 140);\n\tcursor: auto;\n}\n\ndiv:not([class]) {\n\tmargin-left: 15px;\n\tmargin-top: 10px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;CACC,uBAAuB;CACvB,YAAY;CACZ,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;;CAEC,cAAc;CACd,mBAAmB;CACnB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,6BAA6B;CAC7B,eAAe;CACf,QAAQ;AACT;;AAEA;CACC,yBAAyB;CACzB,cAAc;CACd,uBAAuB;CACvB,iBAAiB;CACjB,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,uBAAuB;CACvB,8BAA8B;CAC9B,YAAY;AACb;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;AACjB",sourcesContent:["body {\n\tbackground-color: black;\n\tcolor: white;\n\tmargin: 0;\n\tline-height: 1.6;\n}\n\nh1 {\n\ttext-align: center;\n}\n\n#single-param,\n#double-param {\n\tdisplay: block;\n\tmargin: 0 auto 20px;\n\twidth: max(150px, 40%);\n}\n\n.button-container {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tflex-wrap: wrap;\n\tgap: 5px;\n}\n\nbutton {\n\tbackground-color: inherit;\n\tcolor: inherit;\n\tborder: 1px solid white;\n\tpadding: 5px 10px;\n\tborder-radius: 15px;\n\tcursor: pointer;\n}\n\nbutton[disabled] {\n\tcolor: rgb(140 140 140);\n\tborder-color: rgb(140 140 140);\n\tcursor: auto;\n}\n\ndiv:not([class]) {\n\tmargin-left: 15px;\n\tmargin-top: 10px;\n}\n"],sourceRoot:""}]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),t.push(c))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],u=r.base?d[0]+r.base:d[0],c=o[u]||0,l="".concat(u," ").concat(c);o[u]=c+1;var p=n(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var A=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:A,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var d=r(e,a),u=0;u<o.length;u++){var c=n(o[u]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),a=n.n(r),o=n(825),i=n.n(o),s=n(659),d=n.n(s),u=n(56),c=n.n(u),l=n(540),p=n.n(l),f=n(113),A=n.n(f),h=n(208),m={};m.styleTagTransform=A(),m.setAttributes=c(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=p(),a()(h.A,m),h.A&&h.A.locals&&h.A.locals;class b{constructor(e=null,t=null){this.data=e,this.next=t}}const x={parameterRequired:{returns:["contains","find","at"],edit:["append","prepend","removeAt"],doubleParameter:["insertAt"]},parameterNotRequired:{edit:["pop"],returns:["size","firstNode","tail"],visualStructure:["toString"]}},v=document.getElementById("output"),C=document.querySelector(".button-container"),g=document.getElementById("single-param"),y=document.getElementById("method-description"),B=document.getElementById("double-param"),E=new class{constructor(){this.head=null}append(e){if(null==this.head)this.head=new b(e);else{let t=this.head;for(;t.next;)t=t.next;t.next=new b(e)}}prepend(e){let t=new b(e);t.next=this.head,this.head=t}size(){let e=1,t=this.head;if(null==this.head)return 0;for(;t.next;)t=t.next,e++;return e}firstNode(){return this.head}tail(){let e=this.head;for(;e.next;)e=e.next;return e}at(e){if(e<=0)return"Index does not exist";let t=this.head;for(let n=1;n<e;n++){if(null==t.next)return"Index does not exist";t=t.next}return t}pop(){let e=this.head;for(;e&&null!=e.next.next;)e=e.next;e.next=null}contains(e){let t=this.head;for(;t.next;){if(t.data===e)return!0;t=t.next}return!1}find(e){let t=this.head,n=1;for(;t.next;){if(t.data===e)return n;t=t.next,n++}return null}toString(){let e=this.head,t="";for(;e;)t+=`( ${e.data} ) -> `,e=e.next;return t+="null",t}insertAt(e,t){let n,r=this.head,a=1;for(null==this.head&&(this.head=new b(e));r;)if(a===t){const t=new b(e);t.next=r,n.next=t}else n=r,r=r.next,a++;n.next=new b(e)}removeAt(e){if(Number(e)<=0)return;if(1==Number(e))return void(this.head=this.head.next);let t,n=this.head,r=1;for(;n;){if(r===Number(e))return void(t.next=n.next);t=n,n=n.next,r++}}};E.append("dog"),E.append("cat"),E.append("frog"),E.prepend("bird"),E.append("fox"),E.prepend("rabbit"),E.insertAt("wolf",7),C.addEventListener("click",(e=>{if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.method;x.parameterRequired.edit.includes(t)?(E[t](g.value),v.textContent=JSON.stringify(E)):x.parameterRequired.returns.includes(t)?v.textContent=JSON.stringify(E[t](g.value)):x.parameterNotRequired.returns.includes(t)?v.textContent=JSON.stringify(E[t]()):x.parameterNotRequired.edit.includes(t)?(E[t](),v.textContent=JSON.stringify(E)):x.parameterNotRequired.visualStructure.includes(t)?v.textContent=E[t]():x.parameterRequired.doubleParameter.includes(t)&&(E[t](g.value,B.value),v.textContent=JSON.stringify(E))}));let w="",N="";function S(){const e=document.querySelectorAll("button[no-parameter]"),t=document.querySelectorAll("button[single-parameter]"),n=document.querySelectorAll("button[double-parameter]"),r=g.value,a=r.split("").length,o=B.value,i=w.split("").length,s=N.split("").length;""==o&&a<=1&&i<=1&&1!==s?(e.forEach((e=>e.disabled?e.disabled=!1:e.disabled=!0)),t.forEach((e=>e.disabled?e.disabled=!1:e.disabled=!0)),n.forEach((e=>e.disabled=!0))):""!==r&&""==o?(t.forEach((e=>e.disabled=!1)),n.forEach((e=>e.disabled=!0))):""==r&&""==o&&1==s?(e.forEach((e=>e.disabled=!1)),n.forEach((e=>e.disabled=!0))):(""!==r&&""!==o||""===r&&""!==B)&&(e.forEach((e=>e.disabled=!0)),t.forEach((e=>e.disabled=!0)),n.forEach((e=>e.disabled=!1))),w=g.value,N=B.value}g.addEventListener("input",S),B.addEventListener("input",S),C.addEventListener("mouseover",(e=>{"BUTTON"===e.target.nodeName&&(y.textContent=e.target.dataset.description)}))})();
//# sourceMappingURL=main.b792655c32523080f4e9.js.map