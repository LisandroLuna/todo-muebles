(this["webpackJsonptodo-muebles"]=this["webpackJsonptodo-muebles"]||[]).push([[0],{32:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(2),n=c.n(s),i=c(34),l=c.n(i),r=(c(41),c(42),c(14)),j=c(5),o=(c(43),c(44),c(3)),d=c(22),b=n.a.createContext([]),m=function(){return Object(s.useContext)(b)};function u(e){var t=e.children,c=Object(s.useState)([]),n=Object(j.a)(c,2),i=n[0],l=n[1];return Object(a.jsx)(b.Provider,{value:{items:i,addItem:function(e){if(!1===function(e){var t=function(t){return t.id===e.id};if(i.some(t))return!0;return!1}(e)){var t=[].concat(Object(d.a)(i),[e]);l(t),console.log(t),console.log("Item added: "+e.title)}else{var c=Object(d.a)(i);c.map((function(t){return t.id===e.id&&(t.total+=e.total,!0)})),l(c),console.log("Item updated: "+e.title)}},removeItem:function(e){if(1===e.total){var t=i.filter((function(t){return t.id!==e.id}));l(t),console.log("Item removed")}else{var c=Object(d.a)(i);c.map((function(t){return t.id===e.id&&(t.total-=1,!0)})),l(c),console.log("Item removed")}},size:function(){var e=0;return i.map((function(t){return e+=t.total})),e}(),clearItems:function(){l([])}},children:t})}var O=function(){var e=m().size,t=Object(s.useState)(0),c=Object(j.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){i(e)}),[e]),Object(a.jsx)(o.b,{to:"/cart",className:"ml-auto",children:Object(a.jsx)("i",{className:"fas fa-shopping-cart",children:Object(a.jsx)("span",{className:"badge badge-danger m-1",children:n})})})},x=c.p+"static/media/logo.cb44023d.svg",h=c(28),v=(c(49),h.a.initializeApp({apiKey:"AIzaSyCmlsXLxY4KyE5tarZ05sTxfwOJxgALSsU",authDomain:"todo-muebles.firebaseapp.com",databaseURL:"https://todo-muebles.firebaseio.com",projectId:"todo-muebles",storageBucket:"todo-muebles.appspot.com",messagingSenderId:"79353251862",appId:"1:79353251862:web:d07faee0974383ba060d37",measurementId:"G-V5E31J89JM"}));function f(){return h.a.firestore(v)}function p(e){var t=e.cat;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o.b,{className:"dropdown-item",to:"/todo-muebles/items/"+t.id,children:t.title})})}var N=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){f().collection("categories").get().then((function(e){n(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(r.a)({id:c},t)})))}))}),[]),Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/todo-muebles/",children:Object(a.jsx)("img",{className:"logo",src:x,alt:"Todo Muebles"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(a.jsxs)("ul",{className:"navbar-nav menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/todo-muebles/",children:"Inicio"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Nosotros"})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)(o.b,{className:"nav-link dropdown-toggle","data-toggle":"dropdown",to:"/todo-muebles/items/",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Productos"}),Object(a.jsx)("div",{className:"dropdown-menu",children:c.map((function(e){return Object(a.jsx)(p,{cat:e},e.id)}))})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Contacto"})})]}),Object(a.jsx)(O,{})]})]})};c(52);var g=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsxs)("ul",{className:"nav justify-content-center",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/todo-muebles/",children:"Inicio"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Nosotros"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Productos"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Contacto"})})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-facebook-square"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-twitter-square"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-instagram"})})]})]})},w=(c(53),c(54),c(20));c(55),c(56);function I(e){var t=e.count,c=e.item,s=e.home,n=m().addItem;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:function(){return n(Object(r.a)(Object(r.a)({},c),{},{total:t}))},className:"btn btn-info ml-auto mr-auto",children:1===s?"Agregar al Carrito":"Comprar "+t})})}var y=function(e){var t=e.count,c=e.onAdd,s=e.home;return Object(a.jsx)("div",{className:"col text-center",children:Object(a.jsx)(I,{count:t,item:c,home:s})})};var k=function(e){var t=e.initial,c=e.min,n=e.max,i=e.onAdd,l=e.home,r=Object(s.useState)(t),o=Object(j.a)(r,2),d=o[0],b=o[1];return Object(a.jsxs)("div",{className:"col text-center m-2",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("button",{className:"btn btn-success ml-auto",onClick:function(){return b(d+1)},disabled:d===n,children:"+"}),Object(a.jsx)("b",{value:d,className:"m-4",children:d}),Object(a.jsx)("button",{className:"btn btn-danger mr-auto",onClick:function(){return b(d-1)},disabled:d===c,children:"-"})]}),Object(a.jsx)(y,{onAdd:i,count:d,home:l})]})};var S=function(e){var t=e.item;return Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card h-100",children:[Object(a.jsx)(o.b,{to:"/todo-muebles/item/"+t.id,className:"card-link",children:Object(a.jsx)("img",Object(w.a)({src:t.image,className:"card-img-top",alt:t.title.toLowerCase()},"alt",t.title))}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(o.b,{to:"/todo-muebles/item/"+t.id,item:t,className:"card-link",children:t.title})}),Object(a.jsxs)("b",{children:["$",t.price]}),Object(a.jsx)("p",{className:"card-text",children:t.descS}),Object(a.jsx)(k,{initial:1,min:1,max:10,onAdd:t,home:1})]})]})})};var C=function(e){var t=e.items;return Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:t.map((function(e){return Object(a.jsx)(S,{item:e},e.id)}))})},A=c(8),E=c.n(A);var z=function(){return Object(a.jsxs)("div",{className:"row row-cols-1 row-cols-md-3",children:[Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})}),Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})}),Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})})]})},F=c.p+"static/media/home-banner.20842ae3.gif";var L=function(){return Object(a.jsx)("div",{className:"col-lg-12 banner",children:Object(a.jsx)("img",{className:"img-fluid w-100",src:F,alt:"Promociones"})})},J=c.p+"static/media/top-home-banner.cfc727df.svg";var M=function(){return Object(a.jsx)("div",{className:"col-lg-12 banner",children:Object(a.jsx)("img",{className:"img-fluid w-100",src:J,alt:"Medios de pago"})})};var P=function(e){var t=e.greeting,c=Object(s.useState)([]),n=Object(j.a)(c,2),i=n[0],l=n[1],o=Object(s.useState)(!0),d=Object(j.a)(o,2),b=d[0],m=d[1],u=Object(s.useState)(!1),O=Object(j.a)(u,2),x=O[0],h=O[1];return Object(s.useEffect)((function(){f().collection("items").get().then((function(e){0===e.size&&h(!0),l(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(r.a)({id:c},t)})))})).catch((function(){h(!0)})).finally((function(){m(!1)}))}),[]),Object(a.jsxs)("div",{className:"col-lg-12 home",children:[Object(a.jsx)(M,{}),Object(a.jsxs)("div",{className:"col-md-9 mx-auto p-5",children:[Object(a.jsx)("p",{className:"lead text-center mt-3",children:t}),b?Object(a.jsx)(z,{}):Object(a.jsx)(C,{items:i}),x?Object(a.jsx)("p",{className:"lead text-center",children:"No se pudo conectar al servidor."}):"",Object(a.jsx)(L,{})]})]})};c(59),c(32);var T=function(e){var t=e.item;return Object(a.jsxs)("div",{className:"wrapper row",children:[Object(a.jsxs)("div",{className:"preview col-md-6",children:[Object(a.jsx)("div",{className:"preview-pic tab-content",children:Object(a.jsx)("div",{className:"tab-pane active",id:"pic-1",children:Object(a.jsx)("img",{src:t.image,alt:t.title})})}),Object(a.jsx)("ul",{className:"preview-thumbnail nav nav-tabs",children:Object(a.jsx)("li",{className:"active",children:Object(a.jsx)("a",{"data-target":"#pic-1","data-toggle":"tab",children:Object(a.jsx)("img",{src:t.image,alt:t.title})})})})]}),Object(a.jsxs)("div",{className:"details col-md-6",children:[Object(a.jsx)("h3",{className:"product-title",children:t.title}),Object(a.jsx)("p",{className:"product-description",children:t.descL}),Object(a.jsxs)("h4",{className:"price",children:["Precio: ",Object(a.jsxs)("span",{children:["$",t.price]})]}),Object(a.jsx)(k,{initial:1,min:1,max:10,onAdd:t,home:0})]})]})};var $=function(){return Object(a.jsxs)("div",{className:"wrapper row",children:[Object(a.jsx)("div",{className:"preview col-md-6",children:Object(a.jsx)("div",{className:"preview-pic tab-content",children:Object(a.jsx)(E.a,{width:"100%",height:400})})}),Object(a.jsxs)("div",{className:"details col-md-6",children:[Object(a.jsx)("h3",{className:"product-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"product-description",children:Object(a.jsx)(E.a,{count:3})}),Object(a.jsx)("h4",{className:"price",children:Object(a.jsx)(E.a,{})}),Object(a.jsxs)("div",{className:"col text-center",children:[Object(a.jsx)("p",{children:Object(a.jsx)(E.a,{})}),Object(a.jsxs)("div",{className:"col text-center",children:[Object(a.jsx)(E.a,{})," "]})]})]})]})},q=c(6);var B=function(){var e=Object(q.f)().id,t=Object(s.useState)({}),c=Object(j.a)(t,2),n=c[0],i=c[1],l=Object(s.useState)(!0),o=Object(j.a)(l,2),d=o[0],b=o[1],m=Object(s.useState)(!1),u=Object(j.a)(m,2),O=(u[0],u[1]);return Object(s.useEffect)((function(){f().collection("items").doc(e).get().then((function(t){t.exists||O(!0),i(Object(r.a)({id:e},t.data())),b(!1)})).catch(O(!0)).finally()}),[]),Object(a.jsx)("div",{className:"col-lg-12 home",children:Object(a.jsx)("div",{className:"col-md-9 mx-auto p-5",children:d?Object(a.jsx)($,{}):Object(a.jsx)(T,{item:n})})})};function K(e){var t=e.item,c=e.del,s=parseFloat(t.price*t.total).toFixed(2);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(a.jsx)(o.b,{to:"/item/"+t.id,children:t.title})," ",Object(a.jsxs)("b",{className:"ml-auto p-2",children:["$",s]}),Object(a.jsx)("span",{className:"badge badge-primary badge-pill p-2",children:t.total}),Object(a.jsx)("button",{className:"btn btn-danger p-2 m-1",onClick:function(){return c(t)},children:"X"})]})})}var U=function(){var e=m(),t=e.items,c=e.size,n=e.removeItem,i=Object(s.useState)(0),l=Object(j.a)(i,2),r=l[0],d=l[1],b=Object(s.useState)(0),u=Object(j.a)(b,2),O=u[0],x=u[1];return Object(s.useEffect)((function(){d(c);var e=0;t.map((function(t){return e+=t.price})),x(parseFloat(e).toFixed(2))})),Object(a.jsxs)("div",{className:"col-lg-9 p-5",children:[Object(a.jsxs)("h2",{children:["Cart List ",Object(a.jsx)("span",{className:"badge badge-primary badge-pill",children:r})]}),Object(a.jsxs)("ul",{className:"list-group-flush",children:[t.length>0?t.map((function(e){return Object(a.jsx)(K,{item:e,del:n},e.id)})):Object(a.jsxs)("p",{className:"lead p-5",children:["Carrito vac\xedo. Ir al ",Object(a.jsx)(o.b,{to:"/",children:"Inicio"})]}),Object(a.jsxs)("li",{className:"list-group-item list-group-item-info d-flex justify-content-between align-items-center",children:[Object(a.jsx)(o.b,{to:"#",children:Object(a.jsx)("b",{children:"Total"})})," ",Object(a.jsxs)("b",{className:"ml-auto p-2 pr-5",children:["$",O]})]})]})]})};var W=function(){return Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsx)(U,{})})};var X=function(){var e=Object(q.f)().categoryId,t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],l=Object(s.useState)(!0),o=Object(j.a)(l,2),d=o[0],b=o[1],m=Object(s.useState)(!1),u=Object(j.a)(m,2),O=u[0],x=u[1];return Object(s.useEffect)((function(){var t=function(e){e.get().then((function(e){0===e.size&&x(!0),i(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(r.a)({id:c},t)})))})).catch((function(){x(!0)})).finally((function(){b(!1)}))};void 0===e||null===e?function(){var e=f().collection("items");t(e)}():function(e){console.log(e),e=parseInt(e);var c=f().collection("items").where("categoryId","==",e);t(c)}(e)}),[e]),Object(a.jsx)("div",{className:"col-lg-12 home",children:Object(a.jsxs)("div",{className:"col-md-9 mx-auto p-5",children:[d?Object(a.jsx)(z,{}):Object(a.jsx)(C,{items:n}),O?Object(a.jsx)("p",{className:"lead text-center",children:"No hay productos que coincidan con tu b\xfasqueda."}):""]})})};var D=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)(u,{children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(N,{})}),Object(a.jsx)("div",{className:"row mx-0",children:Object(a.jsxs)(q.c,{children:[Object(a.jsx)(q.a,{path:"/todo-muebles/item/:id",children:Object(a.jsx)(B,{})}),Object(a.jsx)(q.a,{path:"/todo-muebles/items/:categoryId",children:Object(a.jsx)(X,{})}),Object(a.jsx)(q.a,{path:"/todo-muebles/items/",children:Object(a.jsx)(X,{})}),Object(a.jsx)(q.a,{path:"/todo-muebles/cart",children:Object(a.jsx)(W,{})}),Object(a.jsx)(q.a,{exact:!0,path:"/todo-muebles/",children:Object(a.jsx)(P,{greeting:"Todo Muebles"})})]})}),Object(a.jsx)(g,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.7496e16e.chunk.js.map