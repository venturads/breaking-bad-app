(this["webpackJsonpbreaking-bad-app"]=this["webpackJsonpbreaking-bad-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(23),a(3)),o=a.n(i),s=a(14),u=a(2),m=a(15),d=a.n(m),E=a(16),p=a.n(E),f=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:p.a,alt:""}))},g=(a(42),function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status)))))}),h=a(17),b=a.n(h),v=function(){return r.a.createElement("img",{src:b.a,style:{width:"200px",margin:"auto",display:"block"}})},w=function(e){var t=e.items;return e.isLoading?r.a.createElement(v,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(g,{key:e.char_id,item:e})})))},k=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("from",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search characters",value:l,onChange:function(e){return a=e.target.value,i(a),void t(a);var a},autoFocus:!0})))};var y=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(u.a)(l,2),m=i[0],E=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),h=g[0],b=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://www.breakingbadapi.com/api/characters?name=".concat(h));case 2:t=e.sent,c(t.data),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(k,{getQuery:function(e){return b(e)}}),r.a.createElement(w,{isLoading:m,items:a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3fadd22d.chunk.js.map