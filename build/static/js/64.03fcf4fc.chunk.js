/*! For license information please see 64.03fcf4fc.chunk.js.LICENSE.txt */
(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[64],{107:function(t,e,r){"use strict";var n=r(0);e.a=function(t){var e=Object(n.useRef)(t);return Object(n.useEffect)((function(){e.current=t}),[t]),e}},108:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(0),o=r(107);function a(t){var e=Object(o.a)(t);return Object(n.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},109:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(44),o=r.n(n),a=/-(.)/g;var i=r(0),s=r(45),c=r(2);const u=t=>{return t[0].toUpperCase()+(e=t,e.replace(a,(function(t,e){return e.toUpperCase()}))).slice(1);var e};function l(t){let{displayName:e=u(t),Component:r,defaultProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=i.forwardRef(((e,n)=>{let{className:a,bsPrefix:i,as:u=r||"div",...l}=e;const f=Object(s.a)(i,t);return Object(c.jsx)(u,{ref:n,className:o()(a,f),...l})}));return a.defaultProps=n,a.displayName=e,a}},110:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(0),o=r(108);function a(t,e,r,a){void 0===a&&(a=!1);var i=Object(o.a)(r);Object(n.useEffect)((function(){var r="function"===typeof t?t():t;return r.addEventListener(e,i,a),function(){return r.removeEventListener(e,i,a)}}),[t])}},111:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0);function o(){var t=Object(n.useRef)(!0),e=Object(n.useRef)((function(){return t.current}));return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}},112:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0);function o(t){var e=Object(n.useRef)(null);return Object(n.useEffect)((function(){e.current=t})),e.current}},113:function(t,e,r){"use strict";var n=r(0),o=(r(115),r(107),r(108));r(110),r(118);r(111),r(112);r(126),new WeakMap;var a=r(117),i=r(2);const s=["onKeyDown"];const c=n.forwardRef(((t,e)=>{let{onKeyDown:r}=t,n=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,s);const[c]=Object(a.b)(Object.assign({tagName:"a"},n)),u=Object(o.a)((t=>{c.onKeyDown(t),null==r||r(t)}));return((l=n.href)&&"#"!==l.trim()||n.role)&&"button"!==n.role?Object(i.jsx)("a",Object.assign({ref:e},n,{onKeyDown:r})):Object(i.jsx)("a",Object.assign({ref:e},n,c,{onKeyDown:u}));var l}));c.displayName="Anchor";e.a=c},115:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0);function o(){return Object(n.useState)(null)}},117:function(t,e,r){"use strict";r.d(e,"b",(function(){return i}));var n=r(0),o=r(2);const a=["as","disabled"];function i(t){let{tagName:e,disabled:r,href:n,target:o,rel:a,onClick:i,tabIndex:s=0,type:c}=t;e||(e=null!=n||null!=o||null!=a?"a":"button");const u={tagName:e};if("button"===e)return[{type:c||"button",disabled:r},u];const l=t=>{(r||"a"===e&&function(t){return!t||"#"===t.trim()}(n))&&t.preventDefault(),r?t.stopPropagation():null==i||i(t)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:s,href:"a"===e&&r?void 0:n,target:"a"===e?o:void 0,"aria-disabled":r||void 0,rel:"a"===e?a:void 0,onClick:l,onKeyDown:t=>{" "===t.key&&(t.preventDefault(),l(t))}},u]}const s=n.forwardRef(((t,e)=>{let{as:r,disabled:n}=t,s=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,a);const[c,{tagName:u}]=i(Object.assign({tagName:r,disabled:n},s));return Object(o.jsx)(u,Object.assign({},s,c,{ref:e}))}));s.displayName="Button",e.a=s},118:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(110),o=r(0);function a(t,e,r){void 0===r&&(r=!1);var a=Object(o.useCallback)((function(){return document}),[]);return Object(n.a)(a,t,e,r)}},119:function(t,e,r){"use strict";var n=r(0),o=r(44),a=r.n(o),i=r(2);e.a=t=>n.forwardRef(((e,r)=>Object(i.jsx)("div",{...e,ref:r,className:a()(e.className,t)})))},120:function(t,e,r){"use strict";var n=r(0);const o=n.createContext(null);o.displayName="CardHeaderContext",e.a=o},126:function(t,e,r){"use strict";(function(t){var n=r(0),o="undefined"!==typeof t&&t.navigator&&"ReactNative"===t.navigator.product,a="undefined"!==typeof document;e.a=a||o?n.useLayoutEffect:n.useEffect}).call(this,r(69))},128:function(t,e,r){"use strict";var n=r(44),o=r.n(n),a=r(0),i=r(45),s=r(2);const c=["xxl","xl","lg","md","sm","xs"],u=a.forwardRef(((t,e)=>{let{bsPrefix:r,className:n,as:a="div",...u}=t;const l=Object(i.a)(r,"row"),f="".concat(l,"-cols"),p=[];return c.forEach((t=>{const e=u[t];let r;delete u[t],null!=e&&"object"===typeof e?({cols:r}=e):r=e;const n="xs"!==t?"-".concat(t):"";null!=r&&p.push("".concat(f).concat(n,"-").concat(r))})),Object(s.jsx)(a,{ref:e,...u,className:o()(n,l,...p)})}));u.displayName="Row",e.a=u},135:function(t,e,r){"use strict";var n=r(44),o=r.n(n),a=r(0),i=r(45),s=r(113),c=r(2);const u=a.forwardRef(((t,e)=>{let{bsPrefix:r,active:n,children:a,className:u,as:l="li",linkAs:f=s.a,linkProps:p,href:d,title:m,target:h,...b}=t;const v=Object(i.a)(r,"breadcrumb-item");return Object(c.jsx)(l,{ref:e,...b,className:o()(v,u,{active:n}),"aria-current":n?"page":void 0,children:n?a:Object(c.jsx)(f,{...p,href:d,title:m,target:h,children:a})})}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var l=u;const f=a.forwardRef(((t,e)=>{let{bsPrefix:r,className:n,listProps:a,children:s,label:u,as:l="nav",...f}=t;const p=Object(i.a)(r,"breadcrumb");return Object(c.jsx)(l,{"aria-label":u,className:n,ref:e,...f,children:Object(c.jsx)("ol",{...a,className:o()(p,null==a?void 0:a.className),children:s})})}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};e.a=Object.assign(f,{Item:l})},137:function(t,e,r){"use strict";r.d(e,"b",(function(){return u}));var n=r(44),o=r.n(n),a=r(0),i=r(45),s=r(2);const c=["xxl","xl","lg","md","sm","xs"];function u(t){let{as:e,bsPrefix:r,className:n,...a}=t;r=Object(i.a)(r,"col");const s=[],u=[];return c.forEach((t=>{const e=a[t];let n,o,i;delete a[t],"object"===typeof e&&null!=e?({span:n,offset:o,order:i}=e):n=e;const c="xs"!==t?"-".concat(t):"";n&&s.push(!0===n?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(n)),null!=i&&u.push("order".concat(c,"-").concat(i)),null!=o&&u.push("offset".concat(c,"-").concat(o))})),[{...a,className:o()(n,...s,...u)},{as:e,bsPrefix:r,spans:s}]}const l=a.forwardRef(((t,e)=>{const[{className:r,...n},{as:a="div",bsPrefix:i,spans:c}]=u(t);return Object(s.jsx)(a,{...n,ref:e,className:o()(r,!c.length&&i)})}));l.displayName="Col",e.a=l},146:function(t,e,r){"use strict";var n=r(44),o=r.n(n),a=r(0),i=r(45),s=r(109),c=r(119),u=r(2);const l=a.forwardRef(((t,e)=>{let{bsPrefix:r,className:n,variant:a,as:s="img",...c}=t;const l=Object(i.a)(r,"card-img");return Object(u.jsx)(s,{ref:e,className:o()(a?"".concat(l,"-").concat(a):l,n),...c})}));l.displayName="CardImg";var f=l,p=r(120);const d=a.forwardRef(((t,e)=>{let{bsPrefix:r,className:n,as:s="div",...c}=t;const l=Object(i.a)(r,"card-header"),f=Object(a.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return Object(u.jsx)(p.a.Provider,{value:f,children:Object(u.jsx)(s,{ref:e,...c,className:o()(n,l)})})}));d.displayName="CardHeader";var m=d;const h=Object(c.a)("h5"),b=Object(c.a)("h6"),v=Object(s.a)("card-body"),g=Object(s.a)("card-title",{Component:h}),y=Object(s.a)("card-subtitle",{Component:b}),x=Object(s.a)("card-link",{Component:"a"}),S=Object(s.a)("card-text",{Component:"p"}),w=Object(s.a)("card-footer"),O=Object(s.a)("card-img-overlay"),j=a.forwardRef(((t,e)=>{let{bsPrefix:r,className:n,bg:a,text:s,border:c,body:l,children:f,as:p="div",...d}=t;const m=Object(i.a)(r,"card");return Object(u.jsx)(p,{ref:e,...d,className:o()(n,m,a&&"bg-".concat(a),s&&"text-".concat(s),c&&"border-".concat(c)),children:l?Object(u.jsx)(v,{children:f}):f})}));j.displayName="Card",j.defaultProps={body:!1};e.a=Object.assign(j,{Img:f,Title:g,Subtitle:y,Body:v,Link:x,Text:S,Header:m,Footer:w,ImgOverlay:O})},954:function(t,e,r){t.exports=function(t,e){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=r(t),o=r(e);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t){return Object.entries(t).sort().reduce((function(t,e){var r=u(e,2),n=r[0],o=r[1];return t[n]=o,t}),{})},m=function(t,e){return"number"==typeof t&&"number"==typeof e||"string"==typeof t&&"string"==typeof e?t===e:Array.isArray(t)&&Array.isArray(e)?JSON.stringify(t)===JSON.stringify(e):"object"===i(t)&&"object"===i(e)&&JSON.stringify(d(t))===JSON.stringify(d(e))},h=function(t,e){var r=t.start,n=t.step,o=t.disabled,a=t.range;return e.step===n&&m(e.start,r)&&e.disabled===o&&m(e.range,a)},b=function(e){var r=u(t.useState(null),2),i=r[0],f=r[1],p=n.default.createRef();t.useEffect((function(){var t=e.instanceRef,r=t&&Object.prototype.hasOwnProperty.call(t,"current");return t&&t instanceof Function&&t(p.current),r&&(t.current=p.current),function(){r&&(t.current=null)}}),[p]);var d=function(t){var e=Number(t.target.getAttribute("data-value"));i&&i.set(e)},m=function(t){var e=p.current;e&&(t?e.setAttribute("disabled",!0):e.removeAttribute("disabled"))},h=e.onUpdate,b=e.onChange,v=e.onSlide,g=e.onStart,y=e.onEnd,x=e.onSet,S=function(t){g&&(t.off("start"),t.on("start",g)),v&&(t.off("slide"),t.on("slide",v)),h&&(t.off("update"),t.on("update",h)),b&&(t.off("change"),t.on("change",b)),x&&(t.off("set"),t.on("set",x)),y&&(t.off("end"),t.on("end",y))},w=function(){e.clickablePips&&l(p.current.querySelectorAll(".noUi-value")).forEach((function(t){t.style.cursor="pointer",t.addEventListener("click",d)}))},O=function(){var t=o.default.create(p.current,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e));S(t),f(t)};t.useEffect((function(){var t=e.disabled,r=p.current;return r&&(m(t),O()),function(){i&&i.destroy(),r&&l(r.querySelectorAll(".noUi-value")).forEach((function(t){t.removeEventListener("click",d)}))}}),[]),t.useEffect((function(){i&&w()}),[i]);var j=e.start,E=e.disabled,N=e.range,P=e.step,C=e.margin,k=e.padding,A=e.limit,U=e.pips,D=e.snap,V=e.animate;t.useEffect((function(){i&&(function(t){p.current.noUiSlider.updateOptions(t)}({range:N,step:P,padding:k,margin:C,limit:A,pips:U,snap:D,animate:V}),i.set(j),w()),m(E)}),[j,E,N,P,C,k,A,U,D,V]),t.useEffect((function(){i&&S(i)}),[h,b,v,g,y,x]);var M=e.id,R=e.className,L=e.style,H={};return M&&(H.id=M),R&&(H.className=R),n.default.createElement("div",c({},H,{ref:p,style:L}))};return b.defaultProps={animate:!0,behaviour:"tap",className:null,clickablePips:!1,connect:!1,direction:"ltr",disabled:!1,format:null,margin:null,limit:null,keyboardSupport:!0,id:null,instanceRef:null,padding:0,pips:null,snap:!1,step:null,style:null,orientation:"horizontal",tooltips:!1,onChange:function(){},onEnd:function(){},onSet:function(){},onSlide:function(){},onStart:function(){},onUpdate:function(){}},n.default.memo(b,h)}(r(0),r(955))},955:function(t,e,r){var n,o,a;o=[],void 0===(a="function"===typeof(n=function(){"use strict";var t="14.7.0";function e(t){return"object"===typeof t&&"function"===typeof t.to&&"function"===typeof t.from}function r(t){t.parentElement.removeChild(t)}function n(t){return null!==t&&void 0!==t}function o(t){t.preventDefault()}function a(t){return t.filter((function(t){return!this[t]&&(this[t]=!0)}),{})}function i(t,e){return Math.round(t/e)*e}function s(t,e){var r=t.getBoundingClientRect(),n=t.ownerDocument,o=n.documentElement,a=b(n);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),e?r.top+a.y-o.clientTop:r.left+a.x-o.clientLeft}function c(t){return"number"===typeof t&&!isNaN(t)&&isFinite(t)}function u(t,e,r){r>0&&(d(t,e),setTimeout((function(){m(t,e)}),r))}function l(t){return Math.max(Math.min(t,100),0)}function f(t){return Array.isArray(t)?t:[t]}function p(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function d(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function m(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function h(t,e){return t.classList?t.classList.contains(e):new RegExp("\\b"+e+"\\b").test(t.className)}function b(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function v(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function g(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(r){}return t}function y(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function x(t,e){return 100/(e-t)}function S(t,e,r){return 100*e/(t[r+1]-t[r])}function w(t,e){return S(t,t[0]<0?e+Math.abs(t[0]):e-t[0],0)}function O(t,e){return e*(t[1]-t[0])/100+t[0]}function j(t,e){for(var r=1;t>=e[r];)r+=1;return r}function E(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=j(r,t),o=t[n-1],a=t[n],i=e[n-1],s=e[n];return i+w([o,a],r)/x(i,s)}function N(t,e,r){if(r>=100)return t.slice(-1)[0];var n=j(r,e),o=t[n-1],a=t[n],i=e[n-1];return O([o,a],(r-i)*x(i,e[n]))}function P(t,e,r,n){if(100===n)return n;var o=j(n,t),a=t[o-1],s=t[o];return r?n-a>(s-a)/2?s:a:e[o-1]?t[o-1]+i(n-t[o-1],e[o-1]):n}function C(e,r,n){var o;if("number"===typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.");if(!c(o="min"===e?0:"max"===e?100:parseFloat(e))||!c(r[0]))throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.");n.xPct.push(o),n.xVal.push(r[0]),o?n.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(n.xSteps[0]=r[1]),n.xHighestCompleteStep.push(0)}function k(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=S([r.xVal[t],r.xVal[t+1]],e,0)/x(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],o=Math.ceil(Number(n.toFixed(3))-1),a=r.xVal[t]+r.xNumSteps[t]*o;r.xHighestCompleteStep[t]=a}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function A(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var o=[];for(n in t)t.hasOwnProperty(n)&&o.push([t[n],n]);for(o.length&&"object"===typeof o[0][0]?o.sort((function(t,e){return t[0][0]-e[0][0]})):o.sort((function(t,e){return t[0]-e[0]})),n=0;n<o.length;n++)C(o[n][1],o[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)k(n,this.xNumSteps[n],this)}A.prototype.getDistance=function(e){var r,n=[];for(r=0;r<this.xNumSteps.length-1;r++){var o=this.xNumSteps[r];if(o&&e/o%1!==0)throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' of "+this.xPct[r]+"% range must be divisible by step.");n[r]=S(this.xVal,e,r)}return n},A.prototype.getAbsoluteDistance=function(t,e,r){var n,o=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[o+1];)o++;else t===this.xPct[this.xPct.length-1]&&(o=this.xPct.length-2);r||t!==this.xPct[o+1]||o++;var a=1,i=e[o],s=0,c=0,u=0,l=0;for(n=r?(t-this.xPct[o])/(this.xPct[o+1]-this.xPct[o]):(this.xPct[o+1]-t)/(this.xPct[o+1]-this.xPct[o]);i>0;)s=this.xPct[o+1+l]-this.xPct[o+l],e[o+l]*a+100-100*n>100?(c=s*n,a=(i-100*n)/e[o+l],n=1):(c=e[o+l]*s/100*a,a=0),r?(u-=c,this.xPct.length+l>=1&&l--):(u+=c,this.xPct.length-l>=1&&l++),i=e[o+l]*a;return t+u},A.prototype.toStepping=function(t){return t=E(this.xVal,this.xPct,t)},A.prototype.fromStepping=function(t){return N(this.xVal,this.xPct,t)},A.prototype.getStep=function(t){return t=P(this.xPct,this.xSteps,this.snap,t)},A.prototype.getDefaultStep=function(t,e,r){var n=j(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},A.prototype.getNearbySteps=function(t){var e=j(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},A.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(p);return Math.max.apply(null,t)},A.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var U={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number},D={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},V={tooltips:".__tooltips",aria:".__aria"};function M(r){if(e(r))return!0;throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function R(e,r){if(!c(r))throw new Error("noUiSlider ("+t+"): 'step' is not numeric.");e.singleStep=r}function L(e,r){if(!c(r))throw new Error("noUiSlider ("+t+"): 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=r}function H(e,r){if(!c(r))throw new Error("noUiSlider ("+t+"): 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=r}function z(e,r){if("object"!==typeof r||Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new A(r,e.snap,e.singleStep)}function F(e,r){if(r=f(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.");e.handles=r.length,e.start=r}function T(e,r){if(e.snap=r,"boolean"!==typeof r)throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}function I(e,r){if(e.animate=r,"boolean"!==typeof r)throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}function B(e,r){if(e.animationDuration=r,"number"!==typeof r)throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}function _(e,r){var n,o=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(n=1;n<e.handles;n++)o.push(r);o.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==e.handles+1)throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.");o=r}e.connect=o}function q(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function J(e,r){if(!c(r))throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.");0!==r&&(e.margin=e.spectrum.getDistance(r))}function K(e,r){if(!c(r))throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(r),!e.limit||e.handles<2)throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function X(e,r){var n;if(!c(r)&&!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!c(r[0])&&!c(r[1]))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){for(Array.isArray(r)||(r=[r,r]),e.padding=[e.spectrum.getDistance(r[0]),e.spectrum.getDistance(r[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).");var o=r[0]+r[1],a=e.spectrum.xVal[0];if(o/(e.spectrum.xVal[e.spectrum.xVal.length-1]-a)>1)throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function Y(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function W(e,r){if("string"!==typeof r)throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.");var n=r.indexOf("tap")>=0,o=r.indexOf("drag")>=0,a=r.indexOf("fixed")>=0,i=r.indexOf("snap")>=0,s=r.indexOf("hover")>=0,c=r.indexOf("unconstrained")>=0;if(a){if(2!==e.handles)throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles");J(e,e.start[1]-e.start[0])}if(c&&(e.margin||e.limit))throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||i,drag:o,fixed:a,snap:i,hover:s,unconstrained:c}}function $(e,r){if(!1!==r)if(!0===r){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(!0)}else{if(e.tooltips=f(r),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.");e.tooltips.forEach((function(e){if("boolean"!==typeof e&&("object"!==typeof e||"function"!==typeof e.to))throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")}))}}function G(t,e){t.ariaFormat=e,M(e)}function Q(t,e){t.format=e,M(e)}function Z(e,r){if(e.keyboardSupport=r,"boolean"!==typeof r)throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}function tt(t,e){t.documentElement=e}function et(e,r){if("string"!==typeof r&&!1!==r)throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=r}function rt(e,r){if("object"!==typeof r)throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.");if("string"===typeof e.cssPrefix)for(var n in e.cssClasses={},r)r.hasOwnProperty(n)&&(e.cssClasses[n]=e.cssPrefix+r[n]);else e.cssClasses=r}function nt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:U,format:U},o={step:{r:!1,t:R},keyboardPageMultiplier:{r:!1,t:L},keyboardDefaultStep:{r:!1,t:H},start:{r:!0,t:F},connect:{r:!0,t:_},direction:{r:!0,t:Y},snap:{r:!1,t:T},animate:{r:!1,t:I},animationDuration:{r:!1,t:B},range:{r:!0,t:z},orientation:{r:!1,t:q},margin:{r:!1,t:J},limit:{r:!1,t:K},padding:{r:!1,t:X},behaviour:{r:!0,t:W},ariaFormat:{r:!1,t:G},format:{r:!1,t:Q},tooltips:{r:!1,t:$},keyboardSupport:{r:!0,t:Z},documentElement:{r:!1,t:tt},cssPrefix:{r:!0,t:et},cssClasses:{r:!0,t:rt}},a={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:D,keyboardPageMultiplier:5,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(o).forEach((function(i){if(!n(e[i])&&void 0===a[i]){if(o[i].r)throw new Error("noUiSlider ("+t+"): '"+i+"' is required.");return!0}o[i].t(r,n(e[i])?e[i]:a[i])})),r.pips=e.pips;var i=document.createElement("div"),s=void 0!==i.style.msTransform,c=void 0!==i.style.transform;r.transformRule=c?"transform":s?"msTransform":"webkitTransform";var u=[["left","top"],["right","bottom"]];return r.style=u[r.dir][r.ort],r}function ot(e,i,c){var p,x,S,w,O,j,E=v(),N=y()&&g(),P=e,C=i.spectrum,k=[],A=[],U=[],D=0,M={},R=e.ownerDocument,L=i.documentElement||R.documentElement,H=R.body,z=-1,F=0,T=1,I=2,B="rtl"===R.dir||1===i.ort?0:100;function _(t,e){var r=R.createElement("div");return e&&d(r,e),t.appendChild(r),r}function q(t,e){var r=_(t,i.cssClasses.origin),n=_(r,i.cssClasses.handle);return _(n,i.cssClasses.touchArea),n.setAttribute("data-handle",e),i.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",(function(t){return vt(t,e)}))),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",i.ort?"vertical":"horizontal"),0===e?d(n,i.cssClasses.handleLower):e===i.handles-1&&d(n,i.cssClasses.handleUpper),r}function J(t,e){return!!e&&_(t,i.cssClasses.connect)}function K(t,e){var r=_(e,i.cssClasses.connects);x=[],(S=[]).push(J(r,t[0]));for(var n=0;n<i.handles;n++)x.push(q(e,n)),U[n]=n,S.push(J(r,t[n+1]))}function X(t){return d(t,i.cssClasses.target),0===i.dir?d(t,i.cssClasses.ltr):d(t,i.cssClasses.rtl),0===i.ort?d(t,i.cssClasses.horizontal):d(t,i.cssClasses.vertical),d(t,"rtl"===getComputedStyle(t).direction?i.cssClasses.textDirectionRtl:i.cssClasses.textDirectionLtr),_(t,i.cssClasses.base)}function Y(t,e){return!!i.tooltips[e]&&_(t.firstChild,i.cssClasses.tooltip)}function W(){return P.hasAttribute("disabled")}function $(t){return x[t].hasAttribute("disabled")}function G(){O&&(St("update"+V.tooltips),O.forEach((function(t){t&&r(t)})),O=null)}function Q(){G(),O=x.map(Y),yt("update"+V.tooltips,(function(t,e,r){if(O[e]){var n=t[e];!0!==i.tooltips[e]&&(n=i.tooltips[e].to(r[e])),O[e].innerHTML=n}}))}function Z(){St("update"+V.aria),yt("update"+V.aria,(function(t,e,r,n,o){U.forEach((function(t){var e=x[t],n=Ot(A,t,0,!0,!0,!0),a=Ot(A,t,100,!0,!0,!0),s=o[t],c=i.ariaFormat.to(r[t]);n=C.fromStepping(n).toFixed(1),a=C.fromStepping(a).toFixed(1),s=C.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",n),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",c)}))}))}function tt(e,r,n){if("range"===e||"steps"===e)return C.xVal;if("count"===e){if(r<2)throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.");var o=r-1,a=100/o;for(r=[];o--;)r[o]=o*a;r.push(100),e="positions"}return"positions"===e?r.map((function(t){return C.fromStepping(n?C.getStep(t):t)})):"values"===e?n?r.map((function(t){return C.fromStepping(C.getStep(C.toStepping(t)))})):r:void 0}function et(t,e,r){function n(t,e){return(t+e).toFixed(7)/1}var o={},i=C.xVal[0],s=C.xVal[C.xVal.length-1],c=!1,u=!1,l=0;return(r=a(r.slice().sort((function(t,e){return t-e}))))[0]!==i&&(r.unshift(i),c=!0),r[r.length-1]!==s&&(r.push(s),u=!0),r.forEach((function(a,i){var s,f,p,d,m,h,b,v,g,y,x=a,S=r[i+1],w="steps"===e;if(w&&(s=C.xNumSteps[i]),s||(s=S-x),!1!==x)for(void 0===S&&(S=x),s=Math.max(s,1e-7),f=x;f<=S;f=n(f,s)){for(v=(m=(d=C.toStepping(f))-l)/t,y=m/(g=Math.round(v)),p=1;p<=g;p+=1)o[(h=l+p*y).toFixed(5)]=[C.fromStepping(h),0];b=r.indexOf(f)>-1?T:w?I:F,!i&&c&&f!==S&&(b=0),f===S&&u||(o[d.toFixed(5)]=[f,b]),l=d}})),o}function rt(t,e,r){var n=R.createElement("div"),o=[];o[F]=i.cssClasses.valueNormal,o[T]=i.cssClasses.valueLarge,o[I]=i.cssClasses.valueSub;var a=[];a[F]=i.cssClasses.markerNormal,a[T]=i.cssClasses.markerLarge,a[I]=i.cssClasses.markerSub;var s=[i.cssClasses.valueHorizontal,i.cssClasses.valueVertical],c=[i.cssClasses.markerHorizontal,i.cssClasses.markerVertical];function u(t,e){var r=e===i.cssClasses.value,n=r?o:a;return e+" "+(r?s:c)[i.ort]+" "+n[t]}function l(t,o,a){if((a=e?e(o,a):a)!==z){var s=_(n,!1);s.className=u(a,i.cssClasses.marker),s.style[i.style]=t+"%",a>F&&((s=_(n,!1)).className=u(a,i.cssClasses.value),s.setAttribute("data-value",o),s.style[i.style]=t+"%",s.innerHTML=r.to(o))}}return d(n,i.cssClasses.pips),d(n,0===i.ort?i.cssClasses.pipsHorizontal:i.cssClasses.pipsVertical),Object.keys(t).forEach((function(e){l(e,t[e][0],t[e][1])})),n}function ot(){w&&(r(w),w=null)}function at(t){ot();var e=t.mode,r=t.density||1,n=t.filter||!1,o=et(r,e,tt(e,t.values||!1,t.stepped||!1)),a=t.format||{to:Math.round};return w=P.appendChild(rt(o,n,a))}function it(){var t=p.getBoundingClientRect(),e="offset"+["Width","Height"][i.ort];return 0===i.ort?t.width||p[e]:t.height||p[e]}function st(t,e,r,n){var o=function(o){return!!(o=ct(o,n.pageOffset,n.target||e))&&!(W()&&!n.doNotReject)&&!(h(P,i.cssClasses.tap)&&!n.doNotReject)&&!(t===E.start&&void 0!==o.buttons&&o.buttons>1)&&(!n.hover||!o.buttons)&&(N||o.preventDefault(),o.calcPoint=o.points[i.ort],void r(o,n))},a=[];return t.split(" ").forEach((function(t){e.addEventListener(t,o,!!N&&{passive:!0}),a.push([t,o])})),a}function ct(t,e,r){var n,o,a=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(a){var c=function(t){return t.target===r||r.contains(t.target)||t.target.shadowRoot&&t.target.shadowRoot.contains(r)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,c);if(u.length>1)return!1;n=u[0].pageX,o=u[0].pageY}else{var l=Array.prototype.find.call(t.changedTouches,c);if(!l)return!1;n=l.pageX,o=l.pageY}}return e=e||b(R),(i||s)&&(n=t.clientX+e.x,o=t.clientY+e.y),t.pageOffset=e,t.points=[n,o],t.cursor=i||s,t}function ut(t){var e=100*(t-s(p,i.ort))/it();return e=l(e),i.dir?100-e:e}function lt(t){var e=100,r=!1;return x.forEach((function(n,o){if(!$(o)){var a=A[o],i=Math.abs(a-t);(i<e||i<=e&&t>a||100===i&&100===e)&&(r=o,e=i)}})),r}function ft(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&dt(t,e)}function pt(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return dt(t,e);var r=(i.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Et(r>0,100*r/e.baseSize,e.locations,e.handleNumbers)}function dt(t,e){e.handle&&(m(e.handle,i.cssClasses.active),D-=1),e.listeners.forEach((function(t){L.removeEventListener(t[0],t[1])})),0===D&&(m(P,i.cssClasses.drag),Ct(),t.cursor&&(H.style.cursor="",H.removeEventListener("selectstart",o))),e.handleNumbers.forEach((function(t){wt("change",t),wt("set",t),wt("end",t)}))}function mt(t,e){if(e.handleNumbers.some($))return!1;var r;1===e.handleNumbers.length&&(r=x[e.handleNumbers[0]].children[0],D+=1,d(r,i.cssClasses.active)),t.stopPropagation();var n=[],a=st(E.move,L,pt,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:it(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:A.slice()}),s=st(E.end,L,dt,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),c=st("mouseout",L,ft,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,a.concat(s,c)),t.cursor&&(H.style.cursor=getComputedStyle(t.target).cursor,x.length>1&&d(P,i.cssClasses.drag),H.addEventListener("selectstart",o,!1)),e.handleNumbers.forEach((function(t){wt("start",t)}))}function ht(t){t.stopPropagation();var e=ut(t.calcPoint),r=lt(e);if(!1===r)return!1;i.events.snap||u(P,i.cssClasses.tap,i.animationDuration),kt(r,e,!0,!0),Ct(),wt("slide",r,!0),wt("update",r,!0),wt("change",r,!0),wt("set",r,!0),i.events.snap&&mt(t,{handleNumbers:[r]})}function bt(t){var e=ut(t.calcPoint),r=C.getStep(e),n=C.fromStepping(r);Object.keys(M).forEach((function(t){"hover"===t.split(".")[0]&&M[t].forEach((function(t){t.call(j,n)}))}))}function vt(t,e){if(W()||$(e))return!1;var r=["Left","Right"],n=["Down","Up"],o=["PageDown","PageUp"],a=["Home","End"];i.dir&&!i.ort?r.reverse():i.ort&&!i.dir&&(n.reverse(),o.reverse());var s,c=t.key.replace("Arrow",""),u=c===o[0],l=c===o[1],f=c===n[0]||c===r[0]||u,p=c===n[1]||c===r[1]||l,d=c===a[0],m=c===a[1];if(!f&&!p&&!d&&!m)return!0;if(t.preventDefault(),p||f){var h=i.keyboardPageMultiplier,b=f?0:1,v=Ht(e)[b];if(null===v)return!1;!1===v&&(v=C.getDefaultStep(A[e],f,i.keyboardDefaultStep)),(l||u)&&(v*=h),v=Math.max(v,1e-7),v*=f?-1:1,s=k[e]+v}else s=m?i.spectrum.xVal[i.spectrum.xVal.length-1]:i.spectrum.xVal[0];return kt(e,C.toStepping(s),!0,!0),wt("slide",e),wt("update",e),wt("change",e),wt("set",e),!1}function gt(t){t.fixed||x.forEach((function(t,e){st(E.start,t.children[0],mt,{handleNumbers:[e]})})),t.tap&&st(E.start,p,ht,{}),t.hover&&st(E.move,p,bt,{hover:!0}),t.drag&&S.forEach((function(e,r){if(!1!==e&&0!==r&&r!==S.length-1){var n=x[r-1],o=x[r],a=[e];d(e,i.cssClasses.draggable),t.fixed&&(a.push(n.children[0]),a.push(o.children[0])),a.forEach((function(t){st(E.start,t,mt,{handles:[n,o],handleNumbers:[r-1,r]})}))}}))}function yt(t,e){M[t]=M[t]||[],M[t].push(e),"update"===t.split(".")[0]&&x.forEach((function(t,e){wt("update",e)}))}function xt(t){return t===V.aria||t===V.tooltips}function St(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(M).forEach((function(t){var n=t.split(".")[0],o=t.substring(n.length);e&&e!==n||r&&r!==o||xt(o)&&r!==o||delete M[t]}))}function wt(t,e,r){Object.keys(M).forEach((function(n){var o=n.split(".")[0];t===o&&M[n].forEach((function(t){t.call(j,k.map(i.format.to),e,k.slice(),r||!1,A.slice(),j)}))}))}function Ot(t,e,r,n,o,a){var s;return x.length>1&&!i.events.unconstrained&&(n&&e>0&&(s=C.getAbsoluteDistance(t[e-1],i.margin,0),r=Math.max(r,s)),o&&e<x.length-1&&(s=C.getAbsoluteDistance(t[e+1],i.margin,1),r=Math.min(r,s))),x.length>1&&i.limit&&(n&&e>0&&(s=C.getAbsoluteDistance(t[e-1],i.limit,0),r=Math.min(r,s)),o&&e<x.length-1&&(s=C.getAbsoluteDistance(t[e+1],i.limit,1),r=Math.max(r,s))),i.padding&&(0===e&&(s=C.getAbsoluteDistance(0,i.padding[0],0),r=Math.max(r,s)),e===x.length-1&&(s=C.getAbsoluteDistance(100,i.padding[1],1),r=Math.min(r,s))),!((r=l(r=C.getStep(r)))===t[e]&&!a)&&r}function jt(t,e){var r=i.ort;return(r?e:t)+", "+(r?t:e)}function Et(t,e,r,n){var o=r.slice(),a=[!t,t],i=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach((function(t,r){var n=Ot(o,t,o[t]+e,a[r],i[r],!1);!1===n?e=0:(e=n-o[t],o[t]=n)})):a=i=[!0];var s=!1;n.forEach((function(t,n){s=kt(t,r[t]+e,a[n],i[n])||s})),s&&n.forEach((function(t){wt("update",t),wt("slide",t)}))}function Nt(t,e){return i.dir?100-t-e:t}function Pt(t,e){A[t]=e,k[t]=C.fromStepping(e);var r="translate("+jt(10*(Nt(e,0)-B)+"%","0")+")";x[t].style[i.transformRule]=r,At(t),At(t+1)}function Ct(){U.forEach((function(t){var e=A[t]>50?-1:1,r=3+(x.length+e*t);x[t].style.zIndex=r}))}function kt(t,e,r,n,o){return o||(e=Ot(A,t,e,r,n,!1)),!1!==e&&(Pt(t,e),!0)}function At(t){if(S[t]){var e=0,r=100;0!==t&&(e=A[t-1]),t!==S.length-1&&(r=A[t]);var n=r-e,o="translate("+jt(Nt(e,n)+"%","0")+")",a="scale("+jt(n/100,"1")+")";S[t].style[i.transformRule]=o+" "+a}}function Ut(t,e){return null===t||!1===t||void 0===t?A[e]:("number"===typeof t&&(t=String(t)),t=i.format.from(t),!1===(t=C.toStepping(t))||isNaN(t)?A[e]:t)}function Dt(t,e,r){var n=f(t),o=void 0===A[0];e=void 0===e||!!e,i.animate&&!o&&u(P,i.cssClasses.tap,i.animationDuration),U.forEach((function(t){kt(t,Ut(n[t],t),!0,!1,r)}));for(var a=1===U.length?0:1;a<U.length;++a)U.forEach((function(t){kt(t,A[t],!0,!0,r)}));Ct(),U.forEach((function(t){wt("update",t),null!==n[t]&&e&&wt("set",t)}))}function Vt(t){Dt(i.start,t)}function Mt(e,r,n,o){if(!((e=Number(e))>=0&&e<U.length))throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e);kt(e,Ut(r,e),!0,!0,o),wt("update",e),n&&wt("set",e)}function Rt(){var t=k.map(i.format.to);return 1===t.length?t[0]:t}function Lt(){for(var t in St(V.aria),St(V.tooltips),i.cssClasses)i.cssClasses.hasOwnProperty(t)&&m(P,i.cssClasses[t]);for(;P.firstChild;)P.removeChild(P.firstChild);delete P.noUiSlider}function Ht(t){var e=A[t],r=C.getNearbySteps(e),n=k[t],o=r.thisStep.step,a=null;if(i.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==o&&n+o>r.stepAfter.startValue&&(o=r.stepAfter.startValue-n),a=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?o=null:0===e&&(a=null);var s=C.countStepDecimals();return null!==o&&!1!==o&&(o=Number(o.toFixed(s))),null!==a&&!1!==a&&(a=Number(a.toFixed(s))),[a,o]}function zt(){return U.map(Ht)}function Ft(t,e){var r=Rt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach((function(e){void 0!==t[e]&&(c[e]=t[e])}));var a=nt(c);o.forEach((function(e){void 0!==t[e]&&(i[e]=a[e])})),C=a.spectrum,i.margin=a.margin,i.limit=a.limit,i.padding=a.padding,i.pips?at(i.pips):ot(),i.tooltips?Q():G(),A=[],Dt(n(t.start)?t.start:r,e)}function Tt(){p=X(P),K(i.connect,p),gt(i.events),Dt(i.start),i.pips&&at(i.pips),i.tooltips&&Q(),Z()}return Tt(),j={destroy:Lt,steps:zt,on:yt,off:St,get:Rt,set:Dt,setHandle:Mt,reset:Vt,__moveHandles:function(t,e,r){Et(t,e,A,r)},options:c,updateOptions:Ft,target:P,removePips:ot,removeTooltips:G,getTooltips:function(){return O},getOrigins:function(){return x},pips:at}}function at(e,r){if(!e||!e.nodeName)throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+t+"): Slider was already initialized.");var n=ot(e,nt(r),r);return e.noUiSlider=n,n}return{__spectrum:A,version:t,cssClasses:D,create:at}})?n.apply(e,o):n)||(t.exports=a)},956:function(t,e,r){}}]);
//# sourceMappingURL=64.03fcf4fc.chunk.js.map