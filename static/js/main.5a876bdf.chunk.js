(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(5)),i=c.n(d),r=c(0),o=function(e){var t=e.todos,c=e.setSelectedTodoId,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":s===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:s===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.setQuery,s=e.filterType,a=e.setFilterType;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h,m=function(e){var t=e.setSelectedTodoId,c=e.selectedTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],i=a[1],o=Object(l.useState)(!0),j=Object(n.a)(o,2),h=j[0],m=j[1];return Object(l.useEffect)((function(){var e;(e=c.userId,b("/users/".concat(e))).then(i).then((function(){return m(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),h?Object(r.jsx)(u,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",d&&Object(r.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));c(14);var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),d=Object(n.a)(a,2),i=d[0],O=d[1],x=Object(l.useState)(null),f=Object(n.a)(x,2),p=f[0],N=f[1],v=Object(l.useState)(""),y=Object(n.a)(v,2),g=y[0],T=y[1],S=Object(l.useState)(h.All),k=Object(n.a)(S,2),C=k[0],w=k[1],I=Object(l.useMemo)((function(){return c.find((function(e){return e.id===p}))}),[p]),A=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title,c=e.completed,s=t.toLowerCase().includes(g.toLowerCase());switch(C){case h.All:return s;case h.Active:return s&&!c;case h.Completed:return s&&c;default:return s}}))}),[g,c,C]);return Object(l.useEffect)((function(){b("/todos").then(s).finally((function(){return O(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{query:g,setQuery:T,filterType:C,setFilterType:w})}),Object(r.jsx)("div",{className:"block",children:i?Object(r.jsx)(u,{}):Object(r.jsx)(o,{todos:A,setSelectedTodoId:N,selectedTodoId:p})})]})})}),I&&Object(r.jsx)(m,{setSelectedTodoId:N,selectedTodo:I})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a876bdf.chunk.js.map