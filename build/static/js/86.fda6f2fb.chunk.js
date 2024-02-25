(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[86],{1029:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(128),s=r(137),c=r(491),o=r(174),l=r(26),i=r(11),u=r(200),d=r(201),b=r(445),m=r(23),p=r(25),j=r(151),f=r(490),h=r(441),x=r(2);const g=()=>{const{t:e}=Object(b.a)();return Object(x.jsx)(n.a,{className:"mt-3",children:Object(x.jsxs)(s.a,{xs:12,className:"text-center",children:[Object(x.jsx)("p",{className:"text-muted",children:Object(x.jsx)(l.b,{to:"/auth/forget-password",className:"text-muted ms-1",children:e("Forgot your password?")})}),Object(x.jsxs)("p",{className:"text-muted",children:[e("Don't have an account?")," ",Object(x.jsx)(l.b,{to:"/auth/register",className:"text-primary fw-bold ms-1",children:e("Sign Up")})]})]})})};t.default=()=>{const{t:e}=Object(b.a)(),{dispatch:t,appSelector:r}=Object(m.b)(),{user:n,userLoggedIn:s,loading:l,error:O}=r((e=>({user:e.Auth.user,loading:e.Auth.loading,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn})));Object(a.useEffect)((()=>{t(Object(p.k)())}),[t]);const y=Object(d.a)(u.c().shape({email:u.e().required(e("Please enter Email")).email(e("Please enter valid Email")),password:u.e().required(e("Please enter Password"))})),v=Object(i.g)(),N=v.state&&v.state.from?v.state.from.pathname:"/dashboard/analytics";return Object(x.jsxs)(x.Fragment,{children:[(s||n)&&Object(x.jsx)(i.a,{to:N}),Object(x.jsxs)(h.a,{helpText:e("Enter your email address and password to access admin panel."),bottomLinks:Object(x.jsx)(g,{}),children:[O&&Object(x.jsx)(c.a,{variant:"danger",className:"my-2",children:O}),Object(x.jsxs)(j.b,{onSubmit:e=>{t(Object(p.i)(e.email,e.password))},resolver:y,defaultValues:{email:"QSP_FYP_PROJECT@FYP.com",password:"test"},children:[Object(x.jsx)(j.a,{type:"email",name:"email",label:e("Email address"),placeholder:e("QSP_FYP_PROJECT@FYP.com"),containerClass:"mb-2"}),Object(x.jsx)(j.a,{label:e("Password"),type:"password",name:"password",placeholder:"Enter your password",containerClass:"mb-2"}),Object(x.jsx)(j.a,{type:"checkbox",name:"checkbox",label:e("Remember me"),containerClass:"mb-3",defaultChecked:!0}),Object(x.jsx)("div",{className:"text-center d-grid",children:Object(x.jsx)(o.a,{variant:"primary",type:"submit",disabled:l,children:e("Log In")})})]}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("h5",{className:"mt-3 text-muted",children:e("Sign in with")}),Object(x.jsx)(f.a,{})]})]})]})}},128:function(e,t,r){"use strict";var a=r(44),n=r.n(a),s=r(0),c=r(45),o=r(2);const l=["xxl","xl","lg","md","sm","xs"],i=s.forwardRef(((e,t)=>{let{bsPrefix:r,className:a,as:s="div",...i}=e;const u=Object(c.a)(r,"row"),d="".concat(u,"-cols"),b=[];return l.forEach((e=>{const t=i[e];let r;delete i[e],null!=t&&"object"===typeof t?({cols:r}=t):r=t;const a="xs"!==e?"-".concat(e):"";null!=r&&b.push("".concat(d).concat(a,"-").concat(r))})),Object(o.jsx)(s,{ref:t,...i,className:n()(a,u,...b)})}));i.displayName="Row",t.a=i},130:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(0),n=r(149);function s(e){var t=Object(n.a)(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},149:function(e,t,r){"use strict";var a=r(0);t.a=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t}},151:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return f}));var a=r(0),n=r.n(a),s=r(148),c=r(2);var o=e=>{let{defaultValues:t,resolver:r,children:a,onSubmit:o,formClass:l}=e;const i=Object(s.d)({defaultValues:t,resolver:r}),{handleSubmit:u,register:d,control:b,formState:{errors:m}}=i;return Object(c.jsx)("form",{onSubmit:u(o),className:l,noValidate:!0,children:Array.isArray(a)?a.map((e=>e.props&&e.props.name?n.a.createElement(e.type,{...{...e.props,register:d,key:e.props.name,errors:m,control:b}}):e)):a})},l=r(1030),i=r(902),u=r(44),d=r.n(u);const b=e=>{let{name:t,placeholder:r,refCallback:n,errors:s,control:o,register:u,className:b,...m}=e;const[p,j]=Object(a.useState)(!1);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(l.a,{className:"mb-0",children:[Object(c.jsx)(i.a.Control,{type:p?"text":"password",placeholder:r,name:t,id:t,as:"input",ref:e=>{n&&n(e)},className:b,isInvalid:!(!s||!s[t]),...u?u(t):{},autoComplete:t,...m}),Object(c.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":p}),"data-password":p?"true":"false",children:Object(c.jsx)("span",{className:"password-eye",onClick:()=>{j(!p)}})})]}),s&&s[t]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:s[t].message}):null]})},m=e=>{let{type:t,name:r,placeholder:a,endIcon:n,register:s,errors:o,comp:l,rows:u,className:d,refCallback:m,...p}=e;return Object(c.jsx)(c.Fragment,{children:"password"===t&&n?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(b,{name:r,placeholder:a,refCallback:m,errors:o,register:s,className:d,...p})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Control,{type:t,placeholder:a,name:r,as:l,id:r,ref:e=>{m&&m(e)},className:d,isInvalid:!(!o||!o[r]),...s?s(r):{},rows:u,...p}),o&&o[r]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[r].message}):null]})})},p=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:l,rows:u,className:d,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Check,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},className:d,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",className:"d-block",children:o[a].message}):null]})},j=e=>{let{type:t,label:r,name:a,placeholder:n,register:s,errors:o,comp:l,className:u,children:d,refCallback:b,...m}=e;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.a.Select,{type:t,label:r,name:a,id:a,ref:e=>{b&&b(e)},children:d,className:u,isInvalid:!(!o||!o[a]),...s?s(a):{},...m}),o&&o[a]?Object(c.jsx)(i.a.Control.Feedback,{type:"invalid",children:o[a].message}):null]})};var f=e=>{let{label:t,type:r,name:a,placeholder:n,endIcon:s,register:o,errors:l,control:u,className:d,labelClassName:b,containerClass:f,refCallback:h,children:x,rows:g,...O}=e;const y="textarea"===r?"textarea":"select"===r?"select":"input",v=void 0===s||s;return Object(c.jsx)(c.Fragment,{children:"hidden"===r?Object(c.jsx)("input",{type:r,name:a,...o?o(a):{},...O}):Object(c.jsx)(c.Fragment,{children:"select"===r?Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(j,{type:r,name:a,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:d,children:x,...O})]}):Object(c.jsx)(c.Fragment,{children:"checkbox"===r||"radio"===r?Object(c.jsx)(i.a.Group,{className:f,children:Object(c.jsx)(p,{type:r,label:t,name:a,placeholder:n,refCallback:h,errors:l,register:o,comp:y,className:d,rows:g,...O})}):Object(c.jsxs)(i.a.Group,{className:f,children:[t?Object(c.jsx)(i.a.Label,{className:b,children:t}):null,Object(c.jsx)(m,{type:r,name:a,placeholder:n,endIcon:v,refCallback:h,errors:l,register:o,comp:y,className:d,rows:g,...O})]})})})})}},156:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-dark.f85dba6d.png"},162:function(e,t,r){"use strict";t.a=r.p+"static/media/logo-light.3f7305d3.png"},168:function(e,t,r){"use strict";var a=r(27),n=r.n(a),s=r(0),c=r(44),o=r.n(c),l=r(2);const i={"aria-label":n.a.string,onClick:n.a.func,variant:n.a.oneOf(["white"])},u=s.forwardRef(((e,t)=>{let{className:r,variant:a,...n}=e;return Object(l.jsx)("button",{ref:t,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),r),...n})}));u.displayName="CloseButton",u.propTypes=i,u.defaultProps={"aria-label":"Close"},t.a=u},169:function(e,t,r){var a=r(170);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},170:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a},e.exports.default=e.exports,e.exports.__esModule=!0},173:function(e,t,r){var a=r(186),n=r(187),s=r(169),c=r(188);e.exports=function(e,t){return a(e)||n(e,t)||s(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},186:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},187:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,s=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);c=!0);}catch(l){o=!0,n=l}finally{try{c||null==r.return||r.return()}finally{if(o)throw n}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},188:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},441:function(e,t,r){"use strict";r(0);var a=r(106),n=r(128),s=r(137),c=r(146),o=r(26),l=r(156),i=r(162),u=r(2);t.a=e=>{let{helpText:t,bottomLinks:r,children:d,isCombineForm:b}=e;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"account-pages mt-5 mb-5",children:Object(u.jsx)(a.a,{children:Object(u.jsx)(n.a,{className:"justify-content-center",children:Object(u.jsxs)(s.a,{md:8,lg:6,xl:b?9:4,children:[Object(u.jsx)(c.a,{children:Object(u.jsxs)(c.a.Body,{className:"p-4",children:[Object(u.jsxs)("div",{className:"text-center w-75 m-auto",children:[Object(u.jsxs)("div",{className:"auth-logo",children:[Object(u.jsx)(o.b,{to:"/",className:"logo logo-dark text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:l.a,alt:"",height:"22"})})}),Object(u.jsx)(o.b,{to:"/",className:"logo logo-light text-center",children:Object(u.jsx)("span",{className:"logo-lg",children:Object(u.jsx)("img",{src:i.a,alt:"",height:"22"})})})]}),t&&Object(u.jsx)("p",{className:"text-muted mb-4 mt-3",children:t})]}),d]})}),r]})})})}),Object(u.jsxs)("footer",{className:"footer footer-alt",children:[(new Date).getFullYear()," \xa9 QSP theme by RHATech"]})]})}},445:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a=r(173),n=r.n(a),s=r(46),c=r.n(s),o=r(0),l=r(105);function i(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),i.apply(void 0,t))}function b(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function m(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],n=!!t.options&&t.options.fallbackLng,s=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var c=function(e,r){var a=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===a||2===a};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!c(a,e)||n&&!c(s,e))))}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,a=Object(o.useContext)(l.a)||{},s=a.i18n,c=a.defaultNS,i=r||s||Object(l.d)();if(i&&!i.reportNamespaces&&(i.reportNamespaces=new l.b),!i){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},p=[u,{},!1];return p.t=u,p.i18n={},p.ready=!1,p}i.options.react&&void 0!==i.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=j(j(j({},Object(l.c)()),i.options.react),t),h=f.useSuspense,x=f.keyPrefix,g=e||c||i.options&&i.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],i.reportNamespaces.addUsedNamespaces&&i.reportNamespaces.addUsedNamespaces(g);var O=(i.isInitialized||i.initializedStoreOnce)&&g.every((function(e){return m(e,i,f)}));function y(){return i.getFixedT(null,"fallback"===f.nsMode?g:g[0],x)}var v=Object(o.useState)(y),N=n()(v,2),w=N[0],C=N[1],k=Object(o.useRef)(!0);Object(o.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function r(){k.current&&C(y)}return k.current=!0,O||h||b(i,g,(function(){k.current&&C(y)})),e&&i&&i.on(e,r),t&&i&&i.store.on(t,r),function(){k.current=!1,e&&i&&e.split(" ").forEach((function(e){return i.off(e,r)})),t&&i&&t.split(" ").forEach((function(e){return i.store.off(e,r)}))}}),[i,g.join()]);var P=Object(o.useRef)(!0);Object(o.useEffect)((function(){k.current&&!P.current&&C(y),P.current=!1}),[i]);var S=[w,i,O];if(S.t=w,S.i18n=i,S.ready=O,O)return S;if(!O&&!h)return S;throw new Promise((function(e){b(i,g,(function(){e()}))}))}},490:function(e,t,r){"use strict";r(0);var a=r(26),n=r(44),s=r.n(n),c=r(2);const o=[{variant:"purple",icon:"facebook"},{variant:"danger",icon:"google"},{variant:"info",icon:"twitter"},{variant:"secondary",icon:"github"}];t.a=()=>Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:"social-list list-inline mt-3 mb-0",children:(o||[]).map(((e,t)=>Object(c.jsx)("li",{className:"list-inline-item",children:Object(c.jsx)(a.b,{to:"#",className:s()("social-list-item","border-"+e.variant,"text-"+e.variant),children:Object(c.jsx)("i",{className:s()("mdi","mdi-"+e.icon)})})},t)))})})},491:function(e,t,r){"use strict";var a=r(44),n=r.n(a),s=r(0),c=r(134),o=r(130),l=r(113),i=r(45),u=r(192),d=r(168),b=r(119),m=r(109),p=r(2);const j=Object(b.a)("h4");j.displayName="DivStyledAsH4";const f=Object(m.a)("alert-heading",{Component:j}),h=Object(m.a)("alert-link",{Component:l.a}),x={variant:"primary",show:!0,transition:u.a,closeLabel:"Close alert"},g=s.forwardRef(((e,t)=>{const{bsPrefix:r,show:a,closeLabel:s,closeVariant:l,className:b,children:m,variant:j,onClose:f,dismissible:h,transition:x,...g}=Object(c.a)(e,{show:"onClose"}),O=Object(i.a)(r,"alert"),y=Object(o.a)((e=>{f&&f(!1,e)})),v=!0===x?u.a:x,N=Object(p.jsxs)("div",{role:"alert",...v?void 0:g,ref:t,className:n()(b,O,j&&"".concat(O,"-").concat(j),h&&"".concat(O,"-dismissible")),children:[h&&Object(p.jsx)(d.a,{onClick:y,"aria-label":s,variant:l}),m]});return v?Object(p.jsx)(v,{unmountOnExit:!0,...g,ref:void 0,in:a,children:N}):a?N:null}));g.displayName="Alert",g.defaultProps=x,t.a=Object.assign(g,{Link:h,Heading:f})}}]);
//# sourceMappingURL=86.fda6f2fb.chunk.js.map