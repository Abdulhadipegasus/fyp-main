(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[87],{1034:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(26),s=a(11),c=a(128),o=a(137),l=a(491),i=a(174),u=a(445),d=a(200),b=a(201),m=a(23),p=a(25),j=a(151),f=a(490),h=a(441),x=a(2);const g=()=>{const{t:e}=Object(u.a)();return Object(x.jsx)(c.a,{className:"mt-3",children:Object(x.jsx)(o.a,{xs:12,className:"text-center",children:Object(x.jsxs)("p",{className:"text-muted",children:[e("Already have account?")," ",Object(x.jsx)(n.b,{to:"/auth/login",className:"text-primary fw--medium ms-1",children:e("Sign In")})]})})})};t.default=()=>{const{t:e}=Object(u.a)(),{dispatch:t,appSelector:a}=Object(m.b)(),{loading:n,userSignUp:c,error:o}=a((e=>({loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp})));Object(r.useEffect)((()=>{t(Object(p.k)())}),[t]);const O=Object(b.a)(d.c().shape({fullname:d.e().required(e("Please enter Fullname")),email:d.e().required("Please enter Email").email("Please enter valid Email"),password:d.e().required(e("Please enter Password")),checkboxsignup:d.a().oneOf([!0],"Must accept Terms and Conditions")}));return Object(x.jsxs)(x.Fragment,{children:[c?Object(x.jsx)(s.a,{to:"/auth/confirm"}):null,Object(x.jsxs)(h.a,{helpText:e("Don't have an account? Create your own account, it takes less than a minute"),bottomLinks:Object(x.jsx)(g,{}),children:[o&&Object(x.jsx)(l.a,{variant:"danger",className:"my-2",children:o}),Object(x.jsxs)(j.b,{onSubmit:e=>{t(Object(p.m)(e.fullname,e.email,e.password))},resolver:O,defaultValues:{},children:[Object(x.jsx)(j.a,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-2"}),Object(x.jsx)(j.a,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-2"}),Object(x.jsx)(j.a,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-2"}),Object(x.jsx)(j.a,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3"}),Object(x.jsx)("div",{className:"text-center d-grid",children:Object(x.jsx)(i.a,{type:"submit",disabled:n,children:e("Sign Up")})})]}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("h5",{className:"mt-3 text-muted",children:e("Sign Up using")}),Object(x.jsx)(f.a,{})]})]})]})}},128:function(e,t,a){"use strict";var r=a(44),n=a.n(r),s=a(0),c=a(45),o=a(2);const l=["xxl","xl","lg","md","sm","xs"],i=s.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,as:s="div",...i}=e;const u=Object(c.a)(a,"row"),d="".concat(u,"-cols"),b=[];return l.forEach((e=>{const t=i[e];let a;delete i[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const r="xs"!==e?"-".concat(e):"";null!=a&&b.push("".concat(d).concat(r,"-").concat(a))})),Object(o.jsx)(s,{ref:t,...i,className:n()(r,u,...b)})}));i.displayName="Row",t.a=i},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),n=a(149);function s(e){var t=Object(n.a)(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},149:function(e,t,a){"use strict";var r=a(0);t.a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t}},151:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return f}));var r=a(0),n=a.n(r),s=a(148),c=a(2);var o=e=>{let{defaultValues:t,resolver:a,children:r,onSubmit:o,formClass:l}=e;const i=Object(s.d)({defaultValues:t,resolver:a}),{handleSubmit:u,register:d,control:b,formState:{errors:m}}=i;return Object(c.jsx)("form",{onSubmit:u(o),className:l,noValidate:!0,children:Array.isArray(r)?r.map((e=>e.props&&e.props.name?n.a.createElement(e.type,{...{...e.props,register:d,key:e.props.name,errors:m,control:b}}):e)):r})},l=a(1030),i=a(902),u=a(44),d=a.n(u);const b=e=>{let{name:t,placeholder:a,refCallback:n,errors:s,control:o,register:u,className:b,...m}=e;const[p,j]=Object(r.useState)(!1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{className:"mb-0",children:[Object(c.jsx)(i.a.Control,{type:p?"text":"password",placeholder:a,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:b,isInvalid:!(!s||!s[t]),...u?u(t):{},autoComplete:t,...m}),Object(c.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:Object(c.jsx)("span",{className:"password-eye",onClick:()=>{j(!p)}})})]}),s&&s[t]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:s[t].message}):null]})},m=e=>{let{type:t,name:a,placeholder:r,endIcon:n,register:s,errors:o,comp:l,rows:u,className:d,refCallback:m,...p}=e;return Object(c.jsx)(c.Fragment,{children:"password"===t&&n?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{name:a,placeholder:r,refCallback:m,errors:o,register:s,className:d,...p})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Control,{type:t,placeholder:r,name:a,as:l,id:a,ref:e=>{m&&m(e)},className:d,isInvalid:!(!o||!o[a]),...s?s(a):{},rows:u,...p}),o&&o[a]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})})},p=e=>{let{type:t,label:a,name:r,placeholder:n,register:s,errors:o,comp:l,rows:u,className:d,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Check,{type:t,label:a,name:r,id:r,ref:e=>{b&&b(e)},className:d,isInvalid:!(!o||!o[r]),...s?s(r):{},...m}),o&&o[r]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})},j=e=>{let{type:t,label:a,name:r,placeholder:n,register:s,errors:o,comp:l,className:u,children:d,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Select,{type:t,label:a,name:r,id:r,ref:e=>{b&&b(e)},children:d,className:u,isInvalid:!(!o||!o[r]),...s?s(r):{},...m}),o&&o[r]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",children:o[r].message}):null]})};var f=e=>{let{label:t,type:a,name:r,placeholder:n,endIcon:s,register:o,errors:l,control:u,className:d,labelClassName:b,containerClass:f,refCallback:h,children:x,rows:g,...O}=e;const y="textarea"===a?"textarea":"select"===a?"select":"input",v=void 0===s||s;return Object(c.jsx)(c.Fragment,{children:"hidden"===a?Object(c.jsx)("input",{type:a,name:r,...o?o(r):{},...O}):Object(c.jsx)(c.Fragment,{children:"select"===a?Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(j,{type:a,name:r,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:d,children:x,...O})]}):Object(c.jsx)(c.Fragment,{children:"checkbox"===a||"radio"===a?Object(c.jsx)(i.a.Group,{className:f,children:Object(c.jsx)(p,{type:a,label:t,name:r,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:d,rows:g,...O})}):Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(m,{type:a,name:r,placeholder:n,endIcon:v,refCallback:h,errors:l,register:o,comp:y,className:d,rows:g,...O})]})})})})}},156:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-dark.f85dba6d.png"},162:function(e,t,a){"use strict";t.a=a.p+"static/media/logo-light.3f7305d3.png"},168:function(e,t,a){"use strict";var r=a(27),n=a.n(r),s=a(0),c=a(44),o=a.n(c),l=a(2);const i={"aria-label":n.a.string,onClick:n.a.func,variant:n.a.oneOf(["white"])},u=s.forwardRef(((e,t)=>{let{className:a,variant:r,...n}=e;return Object(l.jsx)("button",{ref:t,type:"button",className:o()("btn-close",r&&"btn-close-".concat(r),a),...n})}));u.displayName="CloseButton",u.propTypes=i,u.defaultProps={"aria-label":"Close"},t.a=u},169:function(e,t,a){var r=a(170);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r},e.exports.default=e.exports,e.exports.__esModule=!0},173:function(e,t,a){var r=a(186),n=a(187),s=a(169),c=a(188);e.exports=function(e,t){return r(e)||n(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},187:function(e,t){e.exports=function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,s=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(s.push(r.value),!t||s.length!==t);c=!0);}catch(l){o=!0,n=l}finally{try{c||null==a.return||a.return()}finally{if(o)throw n}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},441:function(e,t,a){"use strict";a(0);var r=a(106),n=a(128),s=a(137),c=a(146),o=a(26),l=a(156),i=a(162),u=a(2);t.a=e=>{let{helpText:t,bottomLinks:a,children:d,isCombineForm:b}=e;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"account-pages mt-5 mb-5",children:Object(u.jsx)(r.a,{children:Object(u.jsx)(n.a,{className:"justify-content-center",children:Object(u.jsxs)(s.a,{md:8,lg:6,xl:b?9:4,children:[Object(u.jsx)(c.a,{children:Object(u.jsxs)(c.a.Body,{className:"p-4",children:[Object(u.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(u.jsxs)("div",{className:"auth-logo",children:[Object(u.jsx)(o.b,{to:"/",className:"logo logo-dark text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:l.a,alt:"",height:"22"})})}),Object(u.jsx)(o.b,{to:"/",className:"logo logo-light text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:i.a,alt:"",height:"22"})})})]}),t&&Object(u.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),d]})}),a]})})})}),Object(u.jsxs)("footer",{className:"footer footer-alt",children:[(new Date).getFullYear()," \xa9 QSP theme by RHATech"]})]})}},445:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(173),n=a.n(r),s=a(46),c=a.n(s),o=a(0),l=a(105);function i(){if(console&&console.warn){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];"string"===typeof a[0]&&(a[0]="react-i18next:: ".concat(a[0])),(e=console).warn.apply(e,a)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),i.apply(void 0,t))}function b(e,t,a){e.loadNamespaces(t,(function(){if(e.isInitialized)a();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),a()}))}}))}function m(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,a){var r=t.services.backendConnector.state["".concat(e,"|").concat(a)];return-1===r||2===r};return!(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!c(r,e)||n&&!c(s,e))))}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.i18n,r=Object(o.useContext)(l.a)||{},s=r.i18n,c=r.defaultNS,i=a||s||Object(l.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new l.b),!i){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[u,{},!1];return p.t=u,p.i18n={},p.ready=!1,p}i.options.react&&void 0!==i.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=j(j(j({},Object(l.c)()),i.options.react),t),h=f.useSuspense,x=f.keyPrefix,g=e||c||i.options&&i.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(g);var O=(i.isInitialized||i.initializedStoreOnce)&&g.every((function(e){return m(e,i,f)}));function y(){return i.getFixedT(null,"fallback"===f.nsMode?g:g[0],x)}var v=Object(o.useState)(y),N=n()(v,2),w=N[0],C=N[1],k=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function a(){k.current&&C(y)}return k.current=!0,O||h||b(i,g,(function(){k.current&&C(y)})),e&&i&&i.on(e,a),t&&i&&i.store.on(t,a),function(){k.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,a)})),t&&i&&t.split(" ").forEach((function(e){return i.store.off(e,a)}))}}),[i,g.join()]);var S=Object(o.useRef)(!0);Object(o.useEffect)((function(){k.current&&!S.current&&C(y),S.current=!1}),[i]);var F=[w,i,O];if(F.t=w,F.i18n=i,F.ready=O,O)return F;if(!O&&!h)return F;throw new Promise((function(e){b(i,g,(function(){e()}))}))}},490:function(e,t,a){"use strict";a(0);var r=a(26),n=a(44),s=a.n(n),c=a(2);const o=[{variant:"purple",icon:"facebook"},{variant:"danger",icon:"google"},{variant:"info",icon:"twitter"},{variant:"secondary",icon:"github"}];t.a=()=>Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:"social-list list-inline mt-3 mb-0",children:(o||[]).map(((e,t)=>Object(c.jsx)("li",{className:"list-inline-item",children:Object(c.jsx)(r.b,{to:"#",className:s()("social-list-item","border-"+e.variant,"text-"+e.variant),children:Object(c.jsx)("i",{className:s()("mdi","mdi-"+e.icon)})})},t)))})})},491:function(e,t,a){"use strict";var r=a(44),n=a.n(r),s=a(0),c=a(134),o=a(130),l=a(113),i=a(45),u=a(192),d=a(168),b=a(119),m=a(109),p=a(2);const j=Object(b.a)("h4");j.displayName="DivStyledAsH4";const f=Object(m.a)("alert-heading",{Component:j}),h=Object(m.a)("alert-link",{Component:l.a}),x={variant:"primary",show:!0,transition:u.a,closeLabel:"Close alert"},g=s.forwardRef(((e,t)=>{const{bsPrefix:a,show:r,closeLabel:s,closeVariant:l,className:b,children:m,variant:j,onClose:f,dismissible:h,transition:x,...g}=Object(c.a)(e,{show:"onClose"}),O=Object(i.a)(a,"alert"),y=Object(o.a)((e=>{f&&f(!1,e)})),v=!0===x?u.a:x,N=Object(p.jsxs)("div",{role:"alert",...v?void 0:g,ref:t,className:n()(b,O,j&&"".concat(O,"-").concat(j),h&&"".concat(O,"-dismissible")),children:[h&&Object(p.jsx)(d.a,{onClick:y,"aria-label":s,variant:l}),m]});return v?Object(p.jsx)(v,{unmountOnExit:!0,...g,ref:void 0,in:r,children:N}):r?N:null}));g.displayName="Alert",g.defaultProps=x,t.a=Object.assign(g,{Link:h,Heading:f})}}]);
//# sourceMappingURL=87.b4205ab4.chunk.js.map