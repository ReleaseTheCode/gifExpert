(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),i=n.n(c),r=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),p=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,c,i,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.giphy.com/v1/gifs/search?","api_key=nocx7098gYkuybtCFpzqkQpOVMiAIB9y","limit=8",n="q="+encodeURI(e),t.next=6,fetch("".concat("https://api.giphy.com/v1/gifs/search?","&").concat("api_key=nocx7098gYkuybtCFpzqkQpOVMiAIB9y","&").concat("limit=8","&").concat(n));case 6:return a=t.sent,t.next=9,a.json();case 9:return c=t.sent,i=c.data,r=i.map((function(t){var e=t.id,n=t.title,a=t.images;return{id:e,title:n,url:null===a||void 0===a?void 0:a.downsized_medium.url}})),t.abrupt("return",r);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-2s",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({gifs:[],loading:!0}),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){return i({gifs:t,loading:!1})}))}),[t]),c}(e),c=n.loading,i=n.gifs;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:i.map((function(t){return Object(u.jsx)(b,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["Hunter X"]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t,e){return Object(u.jsx)(m,{category:t},t)}))})]})};i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef88f3d0.chunk.js.map