(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[70],{107:function(e,t,a){"use strict";var s=a(0);t.a=function(e){var t=Object(s.useRef)(e);return Object(s.useEffect)((function(){t.current=e}),[e]),t}},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(0),c=a(107);function n(e){var t=Object(c.a)(e);return Object(s.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},109:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var s=a(44),c=a.n(s),n=/-(.)/g;var r=a(0),i=a(45),l=a(2);const o=e=>{return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){let{displayName:t=o(e),Component:a,defaultProps:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=r.forwardRef(((t,s)=>{let{className:n,bsPrefix:r,as:o=a||"div",...d}=t;const j=Object(i.a)(r,e);return Object(l.jsx)(o,{ref:s,className:c()(n,j),...d})}));return n.defaultProps=s,n.displayName=t,n}},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(0),c=a(108);function n(e,t,a,n){void 0===n&&(n=!1);var r=Object(c.a)(a);Object(s.useEffect)((function(){var a="function"===typeof e?e():e;return a.addEventListener(t,r,n),function(){return a.removeEventListener(t,r,n)}}),[e])}},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0);function c(){var e=Object(s.useRef)(!0),t=Object(s.useRef)((function(){return e.current}));return Object(s.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0);function c(e){var t=Object(s.useRef)(null);return Object(s.useEffect)((function(){t.current=e})),t.current}},113:function(e,t,a){"use strict";var s=a(0),c=(a(115),a(107),a(108));a(110),a(118);a(111),a(112);a(126),new WeakMap;var n=a(117),r=a(2);const i=["onKeyDown"];const l=s.forwardRef(((e,t)=>{let{onKeyDown:a}=e,s=function(e,t){if(null==e)return{};var a,s,c={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,i);const[l]=Object(n.b)(Object.assign({tagName:"a"},s)),o=Object(c.a)((e=>{l.onKeyDown(e),null==a||a(e)}));return((d=s.href)&&"#"!==d.trim()||s.role)&&"button"!==s.role?Object(r.jsx)("a",Object.assign({ref:t},s,{onKeyDown:a})):Object(r.jsx)("a",Object.assign({ref:t},s,l,{onKeyDown:o}));var d}));l.displayName="Anchor";t.a=l},1135:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(146),r=a(128),i=a(137),l=a(174),o=a(116),d=a(44),j=a.n(d),b=a(2);const u=e=>{const t=e.children||null,a=e.tag||"div",s=e.color||"secondary",c=e.size||"";return Object(b.jsx)(a,{role:"status",className:j()({"spinner-border":"bordered"===e.type,"spinner-grow":"grow"===e.type},["text-".concat(s)],{["avatar-".concat(c)]:c},e.className),children:t})};u.defaultProps={tag:"div",type:"bordered"};var m=u;const O=["primary","secondary","success","danger","warning","info","light","dark","blue","pink"],f=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Border spinner"}),Object(b.jsx)("p",{className:"sub-header",children:"Use the border spinners for a lightweight loading indicator."}),Object(b.jsx)(m,{className:"m-2",color:"primary"})]})}),h=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Growing spinner"}),Object(b.jsx)("p",{className:"sub-header",children:"If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!"}),Object(b.jsx)(m,{type:"grow",color:"success"})]})}),x=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Colors"}),Object(b.jsxs)("p",{className:"sub-header",children:["All standard visual variants are available for both animation styles by setting the"," ",Object(b.jsx)("code",{children:"variant"})," property."]}),(O||[]).map(((e,t)=>Object(b.jsx)(m,{className:"m-2",color:e},t)))]})}),p=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Color Growing spinner"}),Object(b.jsx)("p",{className:"sub-header",children:"Here it is in blue, along with the supported variants."}),(O||[]).map(((e,t)=>Object(b.jsx)(m,{className:"m-2",type:"grow",color:e},t)))]})}),v=()=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Alignment"}),Object(b.jsx)("p",{className:"sub-header",children:"Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation."}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(m,{})})]})})}),g=()=>Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Placement"}),Object(b.jsxs)("p",{className:"sub-header",children:["Use ",Object(b.jsx)("code",{children:"flexbox utilities"}),", ",Object(b.jsx)("code",{children:"float utilities"}),", or ",Object(b.jsx)("code",{children:"text alignment"})," ","utilities to place spinners exactly where you need them in any situation."]}),Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("strong",{children:"Loading..."}),Object(b.jsx)(m,{className:"ms-auto"})]})]})})}),y=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Size"}),Object(b.jsxs)("p",{className:"sub-header",children:["Add ",Object(b.jsx)("code",{children:"size"})," attribute to make spinner with sizes including lg, md or sm."]}),Object(b.jsxs)("div",{className:"row",children:[(["lg","md","sm"]||[]).map(((e,t)=>Object(b.jsxs)("div",{className:"col-lg-6",children:[Object(b.jsx)(m,{className:"text-primary m-2",color:"primary",size:e}),Object(b.jsx)(m,{className:"text-secondary m-2",type:"grow",size:e})]},t))),Object(b.jsxs)("div",{className:"col-lg-6",children:[Object(b.jsx)(m,{className:"spinner-border-sm m-2"}),Object(b.jsx)(m,{type:"grow",className:"spinner-grow-sm m-2"})]})]})]})}),N=()=>Object(b.jsx)(n.a,{children:Object(b.jsxs)(n.a.Body,{children:[Object(b.jsx)("h4",{className:"header-title",children:"Buttons spinner"}),Object(b.jsx)("p",{className:"sub-header",children:"Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed."}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{md:6,children:Object(b.jsxs)("div",{className:"button-list mb-1 mb-sm-0",children:[Object(b.jsxs)(l.a,{color:"primary",disabled:!0,children:[Object(b.jsx)(m,{className:"spinner-border-sm",tag:"span",color:"white"}),Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}),Object(b.jsxs)(l.a,{color:"primary",disabled:!0,children:[Object(b.jsx)(m,{className:"spinner-border-sm me-1",tag:"span",color:"white"}),"Loading..."]})]})}),Object(b.jsx)(i.a,{md:6,children:Object(b.jsxs)("div",{className:"button-list",children:[Object(b.jsxs)(l.a,{variant:"success",disabled:!0,children:[Object(b.jsx)(m,{className:"spinner-grow-sm",tag:"span",color:"white",type:"grow"}),Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})]}),Object(b.jsxs)(l.a,{variant:"success",disabled:!0,children:[Object(b.jsx)(m,{className:"spinner-grow-sm me-1",tag:"span",color:"white",type:"grow"}),"Loading..."]})]})})]})]})});t.default=()=>Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(o.a,{breadCrumbItems:[{label:"Base UI",path:"/ui/spinners"},{label:"Spinners",path:"/ui/spinners",active:!0}],title:"Spinners"}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(f,{})}),Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(h,{})})]}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(x,{})}),Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(p,{})})]}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(v,{})}),Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(g,{})})]}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(y,{})}),Object(b.jsx)(i.a,{lg:6,children:Object(b.jsx)(N,{})})]})]})},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a(0);function c(){return Object(s.useState)(null)}},116:function(e,t,a){"use strict";a(0);var s=a(128),c=a(137),n=a(135),r=a(44),i=a.n(r),l=a(23),o=a(14),d=a(2);t.a=e=>{const{appSelector:t}=Object(l.b)(),{layoutType:a}=t((e=>({layoutType:e.Layout.layoutType})));return Object(d.jsx)(s.a,{children:Object(d.jsx)(c.a,{xs:12,children:Object(d.jsxs)("div",{className:i()("page-title-box",{"page-title-box-alt":a===o.a.LAYOUT_HORIZONTAL||a===o.a.LAYOUT_DETACHED}),children:[Object(d.jsx)("h4",{className:"page-title",children:e.title}),Object(d.jsx)("div",{className:"page-title-right",children:Object(d.jsxs)(n.a,{listProps:{className:"m-0"},children:[Object(d.jsx)(n.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(d.jsx)(n.a.Item,{active:!0,children:e.label},t):Object(d.jsx)(n.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},117:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var s=a(0),c=a(2);const n=["as","disabled"];function r(e){let{tagName:t,disabled:a,href:s,target:c,rel:n,onClick:r,tabIndex:i=0,type:l}=e;t||(t=null!=s||null!=c||null!=n?"a":"button");const o={tagName:t};if("button"===t)return[{type:l||"button",disabled:a},o];const d=e=>{(a||"a"===t&&function(e){return!e||"#"===e.trim()}(s))&&e.preventDefault(),a?e.stopPropagation():null==r||r(e)};return[{role:"button",disabled:void 0,tabIndex:a?void 0:i,href:"a"===t&&a?void 0:s,target:"a"===t?c:void 0,"aria-disabled":a||void 0,rel:"a"===t?n:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}const i=s.forwardRef(((e,t)=>{let{as:a,disabled:s}=e,i=function(e,t){if(null==e)return{};var a,s,c={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,n);const[l,{tagName:o}]=r(Object.assign({tagName:a,disabled:s},i));return Object(c.jsx)(o,Object.assign({},i,l,{ref:t}))}));i.displayName="Button",t.a=i},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(110),c=a(0);function n(e,t,a){void 0===a&&(a=!1);var n=Object(c.useCallback)((function(){return document}),[]);return Object(s.a)(n,e,t,a)}},119:function(e,t,a){"use strict";var s=a(0),c=a(44),n=a.n(c),r=a(2);t.a=e=>s.forwardRef(((t,a)=>Object(r.jsx)("div",{...t,ref:a,className:n()(t.className,e)})))},120:function(e,t,a){"use strict";var s=a(0);const c=s.createContext(null);c.displayName="CardHeaderContext",t.a=c},126:function(e,t,a){"use strict";(function(e){var s=a(0),c="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,n="undefined"!==typeof document;t.a=n||c?s.useLayoutEffect:s.useEffect}).call(this,a(69))},128:function(e,t,a){"use strict";var s=a(44),c=a.n(s),n=a(0),r=a(45),i=a(2);const l=["xxl","xl","lg","md","sm","xs"],o=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:n="div",...o}=e;const d=Object(r.a)(a,"row"),j="".concat(d,"-cols"),b=[];return l.forEach((e=>{const t=o[e];let a;delete o[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const s="xs"!==e?"-".concat(e):"";null!=a&&b.push("".concat(j).concat(s,"-").concat(a))})),Object(i.jsx)(n,{ref:t,...o,className:c()(s,d,...b)})}));o.displayName="Row",t.a=o},135:function(e,t,a){"use strict";var s=a(44),c=a.n(s),n=a(0),r=a(45),i=a(113),l=a(2);const o=n.forwardRef(((e,t)=>{let{bsPrefix:a,active:s,children:n,className:o,as:d="li",linkAs:j=i.a,linkProps:b,href:u,title:m,target:O,...f}=e;const h=Object(r.a)(a,"breadcrumb-item");return Object(l.jsx)(d,{ref:t,...f,className:c()(h,o,{active:s}),"aria-current":s?"page":void 0,children:s?n:Object(l.jsx)(j,{...b,href:u,title:m,target:O,children:n})})}));o.displayName="BreadcrumbItem",o.defaultProps={active:!1,linkProps:{}};var d=o;const j=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,listProps:n,children:i,label:o,as:d="nav",...j}=e;const b=Object(r.a)(a,"breadcrumb");return Object(l.jsx)(d,{"aria-label":o,className:s,ref:t,...j,children:Object(l.jsx)("ol",{...n,className:c()(b,null==n?void 0:n.className),children:i})})}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(j,{Item:d})},137:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var s=a(44),c=a.n(s),n=a(0),r=a(45),i=a(2);const l=["xxl","xl","lg","md","sm","xs"];function o(e){let{as:t,bsPrefix:a,className:s,...n}=e;a=Object(r.a)(a,"col");const i=[],o=[];return l.forEach((e=>{const t=n[e];let s,c,r;delete n[e],"object"===typeof t&&null!=t?({span:s,offset:c,order:r}=t):s=t;const l="xs"!==e?"-".concat(e):"";s&&i.push(!0===s?"".concat(a).concat(l):"".concat(a).concat(l,"-").concat(s)),null!=r&&o.push("order".concat(l,"-").concat(r)),null!=c&&o.push("offset".concat(l,"-").concat(c))})),[{...n,className:c()(s,...i,...o)},{as:t,bsPrefix:a,spans:i}]}const d=n.forwardRef(((e,t)=>{const[{className:a,...s},{as:n="div",bsPrefix:r,spans:l}]=o(e);return Object(i.jsx)(n,{...s,ref:t,className:c()(a,!l.length&&r)})}));d.displayName="Col",t.a=d},146:function(e,t,a){"use strict";var s=a(44),c=a.n(s),n=a(0),r=a(45),i=a(109),l=a(119),o=a(2);const d=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,variant:n,as:i="img",...l}=e;const d=Object(r.a)(a,"card-img");return Object(o.jsx)(i,{ref:t,className:c()(n?"".concat(d,"-").concat(n):d,s),...l})}));d.displayName="CardImg";var j=d,b=a(120);const u=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:i="div",...l}=e;const d=Object(r.a)(a,"card-header"),j=Object(n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return Object(o.jsx)(b.a.Provider,{value:j,children:Object(o.jsx)(i,{ref:t,...l,className:c()(s,d)})})}));u.displayName="CardHeader";var m=u;const O=Object(l.a)("h5"),f=Object(l.a)("h6"),h=Object(i.a)("card-body"),x=Object(i.a)("card-title",{Component:O}),p=Object(i.a)("card-subtitle",{Component:f}),v=Object(i.a)("card-link",{Component:"a"}),g=Object(i.a)("card-text",{Component:"p"}),y=Object(i.a)("card-footer"),N=Object(i.a)("card-img-overlay"),w=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,bg:n,text:i,border:l,body:d,children:j,as:b="div",...u}=e;const m=Object(r.a)(a,"card");return Object(o.jsx)(b,{ref:t,...u,className:c()(s,m,n&&"bg-".concat(n),i&&"text-".concat(i),l&&"border-".concat(l)),children:d?Object(o.jsx)(h,{children:j}):j})}));w.displayName="Card",w.defaultProps={body:!1};t.a=Object.assign(w,{Img:j,Title:x,Subtitle:p,Body:h,Link:v,Text:g,Header:m,Footer:y,ImgOverlay:N})},174:function(e,t,a){"use strict";var s=a(44),c=a.n(s),n=a(0),r=a(117),i=a(45),l=a(2);const o=n.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:n,size:o,active:d,className:j,...b}=e;const u=Object(i.a)(s,"btn"),[m,{tagName:O}]=Object(r.b)({tagName:a,...b}),f=O;return Object(l.jsx)(f,{...b,...m,ref:t,className:c()(j,u,d&&"active",n&&"".concat(u,"-").concat(n),o&&"".concat(u,"-").concat(o),b.href&&b.disabled&&"disabled")})}));o.displayName="Button",o.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=o}}]);
//# sourceMappingURL=70.ea133611.chunk.js.map