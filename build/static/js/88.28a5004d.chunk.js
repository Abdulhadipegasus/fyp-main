(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[88],{1036:function(e,t,r){"use strict";r.r(t);r(0);var n=r(128),s=r(137),a=r(174),c=r(26),o=r(445),l=r(200),i=r(201),u=r(151),d=r(441),b=r(212),j=r(2);const f=()=>{const{t:e}=Object(o.a)();return Object(j.jsx)(n.a,{className:"mt-3",children:Object(j.jsx)(s.a,{xs:12,className:"text-center",children:Object(j.jsxs)("p",{className:"text-muted",children:[e("Not you? return")," ",Object(j.jsx)(c.b,{to:"/auth/login",className:"text-primary fw-medium ms-1",children:Object(j.jsx)("b",{children:e("Sign In")})})]})})})};t.default=()=>{const{t:e}=Object(o.a)(),t=Object(i.a)(l.c().shape({password:l.e().required(e("Please enter Password"))}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(d.a,{bottomLinks:Object(j.jsx)(f,{}),children:[Object(j.jsxs)("div",{className:"text-center w-75 m-auto mt-4",children:[Object(j.jsx)("img",{src:b.a,alt:"",height:"88",className:"rounded-circle avatar-lg img-thumbnail"}),Object(j.jsx)("h4",{className:"text-dark-50 text-center mt-3",children:e("Hi ! Nik Patel ")}),Object(j.jsx)("p",{className:"text-muted mb-4",children:e("Enter your password to access the admin.")})]}),Object(j.jsxs)(u.b,{onSubmit:()=>{},resolver:t,children:[Object(j.jsx)(u.a,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),Object(j.jsx)("div",{className:"d-grid text-center",children:Object(j.jsx)(a.a,{variant:"primary",type:"submit",children:e("Log In")})})]})]})})}},109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(44),s=r.n(n),a=/-(.)/g;var c=r(0),o=r(45),l=r(2);const i=e=>{return e[0].toUpperCase()+(t=e,t.replace(a,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e){let{displayName:t=i(e),Component:r,defaultProps:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=c.forwardRef(((t,n)=>{let{className:a,bsPrefix:c,as:i=r||"div",...u}=t;const d=Object(o.a)(c,e);return Object(l.jsx)(i,{ref:n,className:s()(a,d),...u})}));return a.defaultProps=n,a.displayName=t,a}},117:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(0),s=r(2);const a=["as","disabled"];function c(e){let{tagName:t,disabled:r,href:n,target:s,rel:a,onClick:c,tabIndex:o=0,type:l}=e;t||(t=null!=n||null!=s||null!=a?"a":"button");const i={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},i];const u=e=>{(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==c||c(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:o,href:"a"===t&&r?void 0:n,target:"a"===t?s:void 0,"aria-disabled":r||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},i]}const o=n.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,o=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);const[l,{tagName:i}]=c(Object.assign({tagName:r,disabled:n},o));return Object(s.jsx)(i,Object.assign({},o,l,{ref:t}))}));o.displayName="Button",t.a=o},120:function(e,t,r){"use strict";var n=r(0);const s=n.createContext(null);s.displayName="CardHeaderContext",t.a=s},128:function(e,t,r){"use strict";var n=r(44),s=r.n(n),a=r(0),c=r(45),o=r(2);const l=["xxl","xl","lg","md","sm","xs"],i=a.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:a="div",...i}=e;const u=Object(c.a)(r,"row"),d="".concat(u,"-cols"),b=[];return l.forEach((e=>{const t=i[e];let r;delete i[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const n="xs"!==e?"-".concat(e):"";null!=r&&b.push("".concat(d).concat(n,"-").concat(r))})),Object(o.jsx)(a,{ref:t,...i,className:s()(n,u,...b)})}));i.displayName="Row",t.a=i},137:function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var n=r(44),s=r.n(n),a=r(0),c=r(45),o=r(2);const l=["xxl","xl","lg","md","sm","xs"];function i(e){let{as:t,bsPrefix:r,className:n,...a}=e;r=Object(c.a)(r,"col");const o=[],i=[];return l.forEach((e=>{const t=a[e];let n,s,c;delete a[e],"object"===typeof t&&null!=t?({span:n,offset:s,order:c}=t):n=t;const l="xs"!==e?"-".concat(e):"";n&&o.push(!0===n?"".concat(r).concat(l):"".concat(r).concat(l,"-").concat(n)),null!=c&&i.push("order".concat(l,"-").concat(c)),null!=s&&i.push("offset".concat(l,"-").concat(s))})),[{...a,className:s()(n,...o,...i)},{as:t,bsPrefix:r,spans:o}]}const u=a.forwardRef(((e,t)=>{const[{className:r,...n},{as:a="div",bsPrefix:c,spans:l}]=i(e);return Object(o.jsx)(a,{...n,ref:t,className:s()(r,!l.length&&c)})}));u.displayName="Col",t.a=u},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return m}));var n=r(0),s=r.n(n),a=r(148),c=r(2);var o=e=>{let{defaultValues:t,resolver:r,children:n,onSubmit:o,formClass:l}=e;const i=Object(a.d)({defaultValues:t,resolver:r}),{handleSubmit:u,register:d,control:b,formState:{errors:j}}=i;return Object(c.jsx)("form",{onSubmit:u(o),className:l,noValidate:!0,children:Array.isArray(n)?n.map((e=>e.props&&e.props.name?s.a.createElement(e.type,{...{...e.props,register:d,key:e.props.name,errors:j,control:b}}):e)):n})},l=r(1030),i=r(902),u=r(44),d=r.n(u);const b=e=>{let{name:t,placeholder:r,refCallback:s,errors:a,control:o,register:u,className:b,...j}=e;const[f,p]=Object(n.useState)(!1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{className:"mb-0",children:[Object(c.jsx)(i.a.Control,{type:f?"text":"password",placeholder:r,name:t,id:t,as:"input",ref:e=>{s&&s(e)},className:b,isInvalid:!(!a||!a[t]),...u?u(t):{},autoComplete:t,...j}),Object(c.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":f}),"data-password":f?"true":"false",children:Object(c.jsx)("span",{className:"password-eye",onClick:()=>{p(!f)}})})]}),a&&a[t]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:a[t].message}):null]})},j=e=>{let{type:t,name:r,placeholder:n,endIcon:s,register:a,errors:o,comp:l,rows:u,className:d,refCallback:j,...f}=e;return Object(c.jsx)(c.Fragment,{children:"password"===t&&s?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{name:r,placeholder:n,refCallback:j,errors:o,register:a,className:d,...f})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Control,{type:t,placeholder:n,name:r,as:l,id:r,ref:e=>{j&&j(e)},className:d,isInvalid:!(!o||!o[r]),...a?a(r):{},rows:u,...f}),o&&o[r]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},f=e=>{let{type:t,label:r,name:n,placeholder:s,register:a,errors:o,comp:l,rows:u,className:d,refCallback:b,...j}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Check,{type:t,label:r,name:n,id:n,ref:e=>{b&&b(e)},className:d,isInvalid:!(!o||!o[n]),...a?a(n):{},...j}),o&&o[n]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[n].message}):null]})},p=e=>{let{type:t,label:r,name:n,placeholder:s,register:a,errors:o,comp:l,className:u,children:d,refCallback:b,...j}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Select,{type:t,label:r,name:n,id:n,ref:e=>{b&&b(e)},children:d,className:u,isInvalid:!(!o||!o[n]),...a?a(n):{},...j}),o&&o[n]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",children:o[n].message}):null]})};var m=e=>{let{label:t,type:r,name:n,placeholder:s,endIcon:a,register:o,errors:l,control:u,className:d,labelClassName:b,containerClass:m,refCallback:x,children:A,rows:g,...h}=e;const y="textarea"===r?"textarea":"select"===r?"select":"input",O=void 0===a||a;return Object(c.jsx)(c.Fragment,{children:"hidden"===r?Object(c.jsx)("input",{type:r,name:n,...o?o(n):{},...h}):Object(c.jsx)(c.Fragment,{children:"select"===r?Object(c.jsxs)(i.a.Group,{className:m,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(p,{type:r,name:n,placeholder:s,refCallback:x,errors:l,register:o,comp:y,className:d,children:A,...h})]}):Object(c.jsx)(c.Fragment,{children:"checkbox"===r||"radio"===r?Object(c.jsx)(i.a.Group,{className:m,children:Object(c.jsx)(f,{type:r,label:t,name:n,placeholder:s,refCallback:x,errors:l,register:o,comp:y,className:d,rows:g,...h})}):Object(c.jsxs)(i.a.Group,{className:m,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(j,{type:r,name:n,placeholder:s,endIcon:O,refCallback:x,errors:l,register:o,comp:y,className:d,rows:g,...h})]})})})})}},156:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-dark.f85dba6d.png"},162:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-light.3f7305d3.png"},169:function(e,t,r){var n=r(170);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},173:function(e,t,r){var n=r(186),s=r(187),a=r(169),c=r(188);e.exports=function(e,t){return n(e)||s(e,t)||a(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},187:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,s,a=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);c=!0);}catch(l){o=!0,s=l}finally{try{c||null==r.return||r.return()}finally{if(o)throw s}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},212:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQkU4MDI2MTU1REExMUU5OEE5MkVEMEMxQ0I0MTVDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQkU4MDI2MjU1REExMUU5OEE5MkVEMEMxQ0I0MTVDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTgwMjVGNTVEQTExRTk4QTkyRUQwQzFDQjQxNUNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNCRTgwMjYwNTVEQTExRTk4QTkyRUQwQzFDQjQxNUNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggL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"},441:function(e,t,r){"use strict";r(0);var n=r(106),s=r(128),a=r(137),c=r(146),o=r(26),l=r(156),i=r(162),u=r(2);t.a=e=>{let{helpText:t,bottomLinks:r,children:d,isCombineForm:b}=e;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"account-pages mt-5 mb-5",children:Object(u.jsx)(n.a,{children:Object(u.jsx)(s.a,{className:"justify-content-center",children:Object(u.jsxs)(a.a,{md:8,lg:6,xl:b?9:4,children:[Object(u.jsx)(c.a,{children:Object(u.jsxs)(c.a.Body,{className:"p-4",children:[Object(u.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(u.jsxs)("div",{className:"auth-logo",children:[Object(u.jsx)(o.b,{to:"/",className:"logo logo-dark text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:l.a,alt:"",height:"22"})})}),Object(u.jsx)(o.b,{to:"/",className:"logo logo-light text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:i.a,alt:"",height:"22"})})})]}),t&&Object(u.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),d]})}),r]})})})}),Object(u.jsxs)("footer",{className:"footer footer-alt",children:[(new Date).getFullYear()," \xa9 QSP theme by RHATech"]})]})}},445:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(173),s=r.n(n),a=r(46),c=r.n(a),o=r(0),l=r(105);function i(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),i.apply(void 0,t))}function b(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function j(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],s=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var c=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!c(n,e)||s&&!c(a,e))))}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(o.useContext)(l.a)||{},a=n.i18n,c=n.defaultNS,i=r||a||Object(l.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new l.b),!i){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}i.options.react&&void 0!==i.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=p(p(p({},Object(l.c)()),i.options.react),t),x=m.useSuspense,A=m.keyPrefix,g=e||c||i.options&&i.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(g);var h=(i.isInitialized||i.initializedStoreOnce)&&g.every((function(e){return j(e,i,m)}));function y(){return i.getFixedT(null,"fallback"===m.nsMode?g:g[0],A)}var O=Object(o.useState)(y),N=s()(O,2),v=N[0],I=N[1],w=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function r(){w.current&&I(y)}return w.current=!0,h||x||b(i,g,(function(){w.current&&I(y)})),e&&i&&i.on(e,r),t&&i&&i.store.on(t,r),function(){w.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,r)})),t&&i&&t.split(" ").forEach((function(e){return i.store.off(e,r)}))}}),[i,g.join()]);var E=Object(o.useRef)(!0);Object(o.useEffect)((function(){w.current&&!E.current&&I(y),E.current=!1}),[i]);var k=[v,i,h];if(k.t=v,k.i18n=i,k.ready=h,h)return k;if(!h&&!x)return k;throw new Promise((function(e){b(i,g,(function(){e()}))}))}}}]);
//# sourceMappingURL=88.28a5004d.chunk.js.map