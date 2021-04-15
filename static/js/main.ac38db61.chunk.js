(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{56:function(e,t,n){},58:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),i=n.n(o),r=(n(56),n(35)),s=n.n(r),d=n(45),l=n(19),u=(n(58),n(108)),j=n(36),h=n.n(j),b=n(109),p=n(107),f=n(29),O=n.n(f),g="https://todo-backend-hanami.herokuapp.com/",x={headers:{Accept:"application/json","Content-Type":"application/json"}};var m={getAll:function(){return O.a.get(g,x)},create:function(e){return O.a.post(g,e,x)},update:function(e,t){return O.a.patch(e.url,t,x)},remove:function(e){return O.a.delete(e.url,x)}},v=n(2),C=function(e){var t=e.todo,n=e.notifyChange,c=Object(a.useState)(!1),o=Object(l.a)(c,2),i=o[0],r=o[1],s=function(e,t){"clickaway"!==t&&r(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,{"data-testid":"todo-delete-btn-".concat(t.id),onClick:function(){i?m.remove(t).then((function(){return n()})):r(!0)},"aria-label":"delete",className:"delete-btn",children:Object(v.jsx)(h.a,{})}),Object(v.jsx)(p.a,{"data-testid":"delete-message-snackbar",anchorOrigin:{vertical:"bottom",horizontal:"center"},open:i,autoHideDuration:6e3,onClose:s,message:"Tap again to delete",action:Object(v.jsx)(a.Fragment,{children:Object(v.jsx)(b.a,{size:"small","aria-label":"close",color:"inherit",onClick:s,children:Object(v.jsx)(h.a,{fontSize:"small"})})})})]})},k=function(e){var t=e.todo,n=e.notifyChange;return Object(v.jsx)("li",{children:Object(v.jsxs)("div",{className:"todo-flex-container",children:[Object(v.jsx)(u.a,{className:"todo-checkbox",inputProps:{"data-testid":"todo-checkbox"},checked:t.completed,onChange:function(e){m.update(t,{completed:e.target.checked}).then((function(){return n()}))}}),Object(v.jsx)("div",{className:"todo-label","data-testid":"todo-label",children:t.completed?Object(v.jsx)("s",{children:t.title}):t.title}),Object(v.jsx)(C,{todo:t,notifyChange:n})]})})},y=function(e){var t=e.todos,n=e.notifyChange;return Object(v.jsx)("div",{className:"todos-list-wrapper",children:Object(v.jsx)("ul",{children:t.map((function(e){return Object(v.jsx)(k,{todo:e,notifyChange:n},e.id)}))})})},F=function(e){var t=e.notifyChange,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(v.jsxs)("header",{className:"header",children:[Object(v.jsx)("h1",{children:"Todos"}),Object(v.jsx)("input",{"data-testid":"new-todo-input",placeholder:"What needs to be done",value:o,onChange:function(e){i(e.target.value)}}),Object(v.jsx)("span",{className:"add-btn","data-testid":"add-btn",onClick:function(){m.create({title:o}).then((function(){i(""),t()}))},children:"Add"})]})};var N=function(){var e=Object(a.useState)({data:[],isLoading:!0}),t=Object(l.a)(e,2),n=t[0],c=t[1],o=function(){var e=Object(d.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAll();case 2:t=e.sent,c({data:t.data,isLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),Object(v.jsx)("div",{className:"app",children:n.isLoading?Object(v.jsx)("p",{children:"Fetching todos..."}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(F,{notifyChange:o}),Object(v.jsx)(y,{todos:n.data,notifyChange:o})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),w()}},[[86,1,2]]]);
//# sourceMappingURL=main.ac38db61.chunk.js.map