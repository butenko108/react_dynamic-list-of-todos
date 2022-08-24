(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(5)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.setSelectedTodoId,s=e.selectedTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":s===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:s===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.setQuery,s=e.filterType,a=e.setFilterType;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h,m=function(e){var t=e.setSelectedTodoId,c=e.selectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],i=a[1],r=Object(l.useState)(!0),j=Object(n.a)(r,2),h=j[0],m=j[1];return Object(l.useEffect)((function(){var e;(e=c.userId,b("/users/".concat(e))).then(i).then((function(){return m(!1)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),h?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===d||void 0===d?void 0:d.email),children:null===d||void 0===d?void 0:d.name})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));c(14);var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),d=Object(n.a)(a,2),i=d[0],O=d[1],x=Object(l.useState)(null),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useMemo)((function(){return c.find((function(e){return e.id===p}))}),[p]),y=Object(l.useState)(""),g=Object(n.a)(y,2),T=g[0],S=g[1],k=Object(l.useState)(h.All),C=Object(n.a)(k,2),w=C[0],I=C[1],A=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title,c=e.completed,s=t.toLowerCase().includes(T.toLowerCase());switch(w){case h.All:return s;case h.Active:return s&&!c;case h.Completed:return s&&c;default:return s}}))}),[T,c,w]);return Object(l.useEffect)((function(){b("/todos").then(s).finally((function(){return O(!1)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{query:T,setQuery:S,filterType:w,setFilterType:I})}),Object(o.jsx)("div",{className:"block",children:i?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:A,setSelectedTodoId:v,selectedTodoId:p})})]})})}),void 0!==N&&Object(o.jsx)(m,{setSelectedTodoId:v,selectedTodo:N})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ad5926c2.chunk.js.map