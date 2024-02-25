(this["webpackJsonpminton-react"]=this["webpackJsonpminton-react"]||[]).push([[132],{1086:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),c=a(146),n=a(128),r=a(137),j=a(26),d=a(621),i=a(1019),b=(a(985),a(768)),m=a.n(b),o=a(116),h=a(803),x=a(2);const O=()=>Object(x.jsx)(c.a,{children:Object(x.jsxs)(c.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title",children:Object(x.jsx)(j.b,{rel:"noreferrer",to:{pathname:"https://github.com/JedWatson/react-select"},target:"_blank",children:"React select"})}),Object(x.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),Object(x.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select element"}),Object(x.jsx)(d.a,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),Object(x.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),Object(x.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select (Multiple) element"}),Object(x.jsx)(d.a,{isMulti:!0,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],className:"react-select react-select-container",classNamePrefix:"react-select"})]})}),p=()=>{const[e,t]=Object(l.useState)([]),[a,s]=Object(l.useState)([]),n=[{id:1,value:"chocolate",label:"Chocolate"},{id:2,value:"strawberry",label:"Strawberry"},{id:3,value:"vanilla",label:"Vanilla"}];return Object(x.jsx)(c.a,{children:Object(x.jsxs)(c.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title",children:Object(x.jsx)(j.b,{rel:"noreferrer",to:{pathname:"http://ericgio.github.io/react-bootstrap-typeahead/"},target:"_blank",children:"Typeahead"})}),Object(x.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),Object(x.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select element"}),Object(x.jsx)(i.a,{id:"select2",labelKey:"label",multiple:!1,onChange:e=>{t(e)},options:n,placeholder:"Choose a state...",selected:e}),Object(x.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),Object(x.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select (Multiple) element"}),Object(x.jsx)(i.a,{id:"select3",labelKey:"label",multiple:!0,onChange:e=>{s(e)},options:n,placeholder:"Choose a state...",selected:a})]})})},u=()=>{const[e,t]=Object(l.useState)(new Date),[a,s]=Object(l.useState)(new Date),[d,i]=Object(l.useState)(new Date),[b,m]=Object(l.useState)(new Date),[o,O]=Object(l.useState)(new Date),[p,u]=Object(l.useState)([new Date,(new Date).setDate((new Date).getDate()+7)]),[N,g]=p;return Object(x.jsx)(c.a,{children:Object(x.jsxs)(c.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title",children:"Date & Time Picker"}),Object(x.jsxs)("p",{className:"text-muted fs-14",children:["A simple date picker using"," ",Object(x.jsx)(j.b,{target:"_blank",rel:"noreferrer",to:{pathname:"https://reactdatepicker.com/"},children:"ReactJS Datepicker"})]}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Single Date"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{hideAddon:!0,value:e,onChange:e=>{t(e)}})]})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Single Date with multiple months"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{hideAddon:!0,monthsShown:2,value:a,onChange:e=>{s(e)}})]})})]}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Custom date format"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{hideAddon:!0,dateFormat:"yyyy-MM-dd",value:d,onChange:e=>{i(e)}})]})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Specific date range"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{selectsRange:!0,startDate:N,endDate:g,hideAddon:!0,dateFormat:"yyyy/MM/dd",onChange:e=>{u(e)}})]})})]}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Select Time"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{hideAddon:!0,showTimeSelect:!0,timeFormat:"HH:mm",tI:60,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:b,onChange:e=>{m(e)}})]})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Time only"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(h.a,{hideAddon:!0,showTimeSelect:!0,showTimeSelectOnly:!0,tI:60,dateFormat:"h:mm aa",timeCaption:"Time",value:o,onChange:e=>{O(e)}})]})})]})]})})},N=()=>Object(x.jsx)(c.a,{children:Object(x.jsxs)(c.a.Body,{children:[Object(x.jsx)("h4",{className:"header-title",children:"Input Masks"}),Object(x.jsxs)("p",{className:"text-muted fs-14",children:["Input masks by"," ",Object(x.jsx)(j.b,{target:"_blank",rel:"noreferrer",to:{pathname:"https://github.com/text-mask/text-mask/tree/master/react#readme"},children:"react-text-mask"})]}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Phone Number with Area Code"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(__) ____-____",className:"form-control"})]})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"US Phone Number"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control"})]})})]}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Date"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholder:"__/__/____",className:"form-control"})]})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("label",{className:"form-label",children:"Time"})," ",Object(x.jsx)("br",{}),Object(x.jsx)(m.a,{mask:[/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/],placeholder:"__:__:__",className:"form-control"})]})})]})]})});t.default=()=>Object(x.jsxs)(s.a.Fragment,{children:[Object(x.jsx)(o.a,{breadCrumbItems:[{label:"Forms",path:"/forms/advanced"},{label:"Form Advanced",path:"/forms/advanced",active:!0}],title:"Form Advanced"}),Object(x.jsxs)(n.a,{children:[Object(x.jsx)(r.a,{lg:6,children:Object(x.jsx)(O,{})}),Object(x.jsx)(r.a,{lg:6,children:Object(x.jsx)(p,{})})]}),Object(x.jsx)(n.a,{children:Object(x.jsx)(r.a,{xs:12,children:Object(x.jsx)(u,{})})}),Object(x.jsx)(n.a,{children:Object(x.jsx)(r.a,{xs:12,children:Object(x.jsx)(N,{})})})]})},116:function(e,t,a){"use strict";a(0);var l=a(128),s=a(137),c=a(135),n=a(44),r=a.n(n),j=a(23),d=a(14),i=a(2);t.a=e=>{const{appSelector:t}=Object(j.b)(),{layoutType:a}=t((e=>({layoutType:e.Layout.layoutType})));return Object(i.jsx)(l.a,{children:Object(i.jsx)(s.a,{xs:12,children:Object(i.jsxs)("div",{className:r()("page-title-box",{"page-title-box-alt":a===d.a.LAYOUT_HORIZONTAL||a===d.a.LAYOUT_DETACHED}),children:[Object(i.jsx)("h4",{className:"page-title",children:e.title}),Object(i.jsx)("div",{className:"page-title-right",children:Object(i.jsxs)(c.a,{listProps:{className:"m-0"},children:[Object(i.jsx)(c.a.Item,{href:"/",children:"Minton"}),(e.breadCrumbItems||[]).map(((e,t)=>e.active?Object(i.jsx)(c.a.Item,{active:!0,children:e.label},t):Object(i.jsx)(c.a.Item,{href:e.path,children:e.label},t)))]})})]})})})}},803:function(e,t,a){"use strict";var l=a(0),s=a(804),c=a.n(s),n=a(44),r=a.n(n),j=a(2);const d=Object(l.forwardRef)(((e,t)=>Object(j.jsx)("input",{type:"text",className:r()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:()=>{console.log("date value changed")},ref:t}))),i=Object(l.forwardRef)(((e,t)=>Object(j.jsxs)("div",{className:"input-group position-relative",ref:t,children:[Object(j.jsx)("input",{type:"text",className:r()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),Object(j.jsx)("span",{className:"input-group-text",children:Object(j.jsx)("i",{className:"ri-calendar-event-fill"})})]})));t.a=e=>{const t=!0===(e.hideAddon||!1)?Object(j.jsx)(d,{inputClass:e.inputClass}):Object(j.jsx)(i,{inputClass:e.inputClass});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(c.a,{calendarClassName:e.calendarClassName||"shadow",selectsRange:e.selectsRange,startDate:e.startDate,endDate:e.endDate,selected:e.value,onChange:t=>e.onChange(t),customInput:t,timeIntervals:e.tI,showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}}}]);
//# sourceMappingURL=132.3db4eec7.chunk.js.map