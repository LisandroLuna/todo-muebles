(this["webpackJsonptodo-muebles"]=this["webpackJsonptodo-muebles"]||[]).push([[0],{31:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(2),n=c.n(s),i=c(33),r=c.n(i),l=(c(40),c(41),c(14)),j=c(3),o=(c(42),c(43),c(4)),d=c(21),b=n.a.createContext([]),m=function(){return Object(s.useContext)(b)};function u(e){var t=e.children,c=Object(s.useState)([]),n=Object(j.a)(c,2),i=n[0],r=n[1];return Object(a.jsx)(b.Provider,{value:{items:i,addItem:function(e){if(!1===function(e){var t=function(t){return t.id===e.id};if(i.some(t))return!0;return!1}(e)){var t=[].concat(Object(d.a)(i),[e]);r(t),console.log(t),console.log("Item added: "+e.title)}else{var c=Object(d.a)(i);c.map((function(t){return t.id===e.id&&(t.total+=e.total,!0)})),r(c),console.log("Item updated: "+e.title)}},removeItem:function(e){if(1===e.total){var t=i.filter((function(t){return t.id!==e.id}));r(t),console.log("Item removed")}else{var c=Object(d.a)(i);c.map((function(t){return t.id===e.id&&(t.total-=1,!0)})),r(c),console.log("Item removed")}},size:function(){var e=0;return i.map((function(t){return e+=t.total})),e}(),clearItems:function(){r([])}},children:t})}var O=function(){var e=m().size,t=Object(s.useState)(0),c=Object(j.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){i(e)}),[e]),Object(a.jsx)(o.b,{to:"/cart",className:"ml-auto",children:Object(a.jsx)("i",{className:"fas fa-shopping-cart",children:Object(a.jsx)("span",{className:"badge badge-danger m-1",children:n})})})},x=c.p+"static/media/logo.cb44023d.svg",h=c(27),v=(c(48),h.a.initializeApp({apiKey:"AIzaSyCmlsXLxY4KyE5tarZ05sTxfwOJxgALSsU",authDomain:"todo-muebles.firebaseapp.com",databaseURL:"https://todo-muebles.firebaseio.com",projectId:"todo-muebles",storageBucket:"todo-muebles.appspot.com",messagingSenderId:"79353251862",appId:"1:79353251862:web:d07faee0974383ba060d37",measurementId:"G-V5E31J89JM"}));function p(){return h.a.firestore(v)}function f(e){var t=e.cat;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o.b,{className:"dropdown-item",to:"/categories/"+t.key,children:t.title})})}var N=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){p().collection("categories").get().then((function(e){n(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(l.a)({id:c},t)})))}))}),[]),Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/",children:Object(a.jsx)("img",{className:"logo",src:x,alt:"Todo Muebles"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(a.jsxs)("ul",{className:"navbar-nav menu",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/",children:"Inicio"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Nosotros"})}),Object(a.jsxs)("li",{className:"nav-item dropdown",children:[Object(a.jsx)(o.b,{className:"nav-link dropdown-toggle","data-toggle":"dropdown",to:"/items/",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Productos"}),Object(a.jsx)("div",{className:"dropdown-menu",children:c.map((function(e){return Object(a.jsx)(f,{cat:e},e.id)}))})]}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Contacto"})})]}),Object(a.jsx)(O,{})]})]})};c(51);var g=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsxs)("ul",{className:"nav justify-content-center",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/",children:"Inicio"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Nosotros"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/categories/",children:"Productos"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(o.b,{className:"nav-link",to:"#",children:"Contacto"})})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-facebook-square"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-twitter-square"})}),Object(a.jsx)("a",{href:"#",children:Object(a.jsx)("i",{className:"fab fa-instagram"})})]})]})};c(52),c(53),c(54),c(55);var w=function(e){var t=e.count,c=e.item,s=e.home,n=m().addItem;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{onClick:function(){return n(Object(l.a)(Object(l.a)({},c),{},{total:t}))},className:"btn btn-info ml-auto mr-auto",children:1===s?"Agregar al Carrito":"Comprar "+t})})};var y=function(e){var t=e.count,c=e.onAdd,s=e.home;return Object(a.jsx)("div",{className:"col text-center",children:Object(a.jsx)(w,{count:t,item:c,home:s})})};var S=function(e){var t=e.initial,c=e.min,n=e.max,i=e.onAdd,r=e.home,l=Object(s.useState)(t),o=Object(j.a)(l,2),d=o[0],b=o[1];return Object(a.jsxs)("div",{className:"col text-center m-2",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("button",{className:"btn btn-success ml-auto",onClick:function(){return b(d+1)},disabled:d===n,children:"+"}),Object(a.jsx)("b",{value:d,className:"m-4",children:d}),Object(a.jsx)("button",{className:"btn btn-danger mr-auto",onClick:function(){return b(d-1)},disabled:d===c,children:"-"})]}),Object(a.jsx)(y,{onAdd:i,count:d,home:r})]})};var I=function(e){var t=e.item;return Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card h-100",children:[Object(a.jsx)(o.b,{to:"/item/"+t.id,className:"card-link",children:Object(a.jsx)("img",{src:t.image,className:"card-img-top",alt:t.title})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(o.b,{to:"/categories/"+t.id,item:t,className:"card-link",children:t.title})}),Object(a.jsxs)("b",{children:["$",t.price]}),Object(a.jsx)("p",{className:"card-text",children:t.descS}),Object(a.jsx)(S,{initial:1,min:1,max:10,onAdd:t,home:1})]})]})})};var k=function(e){var t=e.items;return Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-3",children:t.map((function(e){return Object(a.jsx)(I,{item:e},e.id)}))})},C=c(8),E=c.n(C);var A=function(){return Object(a.jsxs)("div",{className:"row row-cols-1 row-cols-md-3",children:[Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})}),Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})}),Object(a.jsx)("div",{className:"col mb-4",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)(E.a,{width:"100%",height:200}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"card-text",children:Object(a.jsx)(E.a,{count:3})})]})]})})]})},F=c.p+"static/media/home-banner.20842ae3.gif";var q=function(){return Object(a.jsx)("div",{className:"col-lg-12 banner",children:Object(a.jsx)("img",{className:"img-fluid w-100",src:F,alt:"Promociones"})})},z=c.p+"static/media/top-home-banner.c5ae1533.svg";var P=function(){return Object(a.jsx)("div",{className:"col-lg-12 banner",children:Object(a.jsx)("img",{className:"img-fluid w-100",src:z,alt:"Medios de pago"})})};var K=function(e){var t=e.greeting,c=Object(s.useState)([]),n=Object(j.a)(c,2),i=n[0],r=n[1],o=Object(s.useState)(!0),d=Object(j.a)(o,2),b=d[0],m=d[1],u=Object(s.useState)(!1),O=Object(j.a)(u,2),x=O[0],h=O[1];return Object(s.useEffect)((function(){p().collection("items").get().then((function(e){0===e.size&&h(!0),r(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(l.a)({id:c},t)})))})).catch((function(){h(!0)})).finally((function(){m(!1)}))}),[]),Object(a.jsxs)("div",{className:"col-lg-12 home",children:[Object(a.jsx)(P,{}),Object(a.jsxs)("div",{className:"col-md-9 mx-auto p-5",children:[Object(a.jsx)("p",{className:"lead text-center mt-3",children:t}),b?Object(a.jsx)(A,{}):Object(a.jsx)(k,{items:i}),x?Object(a.jsx)("p",{className:"lead text-center",children:"No se pudo conectar al servidor."}):"",Object(a.jsx)(q,{})]})]})};c(58),c(31);function L(e){var t=e.item;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"preview col-md-6",children:[Object(a.jsx)("div",{className:"preview-pic tab-content",children:Object(a.jsx)("div",{className:"tab-pane active",id:"pic-1",children:Object(a.jsx)("img",{src:t.image,alt:t.title})})}),Object(a.jsx)("ul",{className:"preview-thumbnail nav nav-tabs",children:Object(a.jsx)("li",{className:"active",children:Object(a.jsx)("a",{"data-target":"#pic-1","data-toggle":"tab",children:Object(a.jsx)("img",{src:t.image,alt:t.title})})})})]}),Object(a.jsxs)("div",{className:"details col-md-6",children:[Object(a.jsx)("h3",{className:"product-title",children:t.title}),Object(a.jsx)("p",{className:"product-description",children:t.descL}),Object(a.jsxs)("h4",{className:"price",children:["Precio: ",Object(a.jsxs)("span",{children:["$",t.price]})]}),Object(a.jsxs)("p",{className:"price",children:["Stock: ",t.stock," unidades"]}),Object(a.jsx)(S,{initial:1,min:1,max:10,onAdd:t,home:0})]})]})}var T=function(e){var t=e.item;return Object(a.jsx)("div",{className:"wrapper row",children:void 0===t.title?Object(a.jsxs)("p",{className:"lead m-auto text-center",children:["Producto no encontrado. Ir al ",Object(a.jsx)(o.b,{to:"/",children:"Inicio"})]}):Object(a.jsx)(L,{item:t})})};var D=function(){return Object(a.jsxs)("div",{className:"wrapper row",children:[Object(a.jsx)("div",{className:"preview col-md-6",children:Object(a.jsx)("div",{className:"preview-pic tab-content",children:Object(a.jsx)(E.a,{width:"100%",height:400})})}),Object(a.jsxs)("div",{className:"details col-md-6",children:[Object(a.jsx)("h3",{className:"product-title",children:Object(a.jsx)(E.a,{})}),Object(a.jsx)("p",{className:"product-description",children:Object(a.jsx)(E.a,{count:3})}),Object(a.jsx)("h4",{className:"price",children:Object(a.jsx)(E.a,{})}),Object(a.jsxs)("div",{className:"col text-center",children:[Object(a.jsx)("p",{children:Object(a.jsx)(E.a,{})}),Object(a.jsxs)("div",{className:"col text-center",children:[Object(a.jsx)(E.a,{})," "]})]})]})]})},J=c(6);var M=function(){var e=Object(J.f)().id,t=Object(s.useState)({}),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!0),o=Object(j.a)(r,2),d=o[0],b=o[1],m=Object(s.useState)(!1),u=Object(j.a)(m,2),O=(u[0],u[1]);return Object(s.useEffect)((function(){p().collection("items").doc(e).get().then((function(t){t.exists||O(!0),i(Object(l.a)({id:e},t.data())),b(!1)})).catch(O(!0)).finally()}),[]),Object(a.jsx)("div",{className:"col-lg-12 home",children:Object(a.jsx)("div",{className:"col-md-9 mx-auto p-5",children:d?Object(a.jsx)(D,{}):Object(a.jsx)(T,{item:n})})})};var $=function(e){var t=e.id;return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-3"}),Object(a.jsx)("div",{className:"col-md-6 text-center mx-auto p-5",children:Object(a.jsxs)("div",{className:"alert alert-success",role:"alert",children:[Object(a.jsx)("h4",{className:"alert-heading",children:"Felicitaciones!"}),Object(a.jsxs)("p",{children:["Su orden ha sido generada con el ID: ",Object(a.jsx)("b",{children:t})]})]})}),Object(a.jsx)("div",{className:"col-md-3"})]})};var U=function(e){var t=e.item,c=e.del,s=parseFloat(t.price*t.total).toFixed(2);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(a.jsx)(o.b,{to:"/item/"+t.id,children:t.title})," ",Object(a.jsxs)("b",{className:"ml-auto p-2",children:["$",s]}),Object(a.jsx)("span",{className:"badge badge-primary badge-pill p-2",children:t.total}),Object(a.jsx)("button",{className:"btn btn-danger p-2 m-1",onClick:function(){return c(t)},children:"X"})]})})};var B=function(){var e=m(),t=e.items,c=e.size,n=e.removeItem,i=e.clearItems,r=Object(s.useState)(0),l=Object(j.a)(r,2),d=l[0],b=l[1],u=Object(s.useState)(0),O=Object(j.a)(u,2),x=O[0],h=O[1],v=Object(s.useState)(""),f=Object(j.a)(v,2),N=f[0],g=f[1],w=Object(s.useState)(""),y=Object(j.a)(w,2),S=y[0],I=y[1],k=Object(s.useState)(""),C=Object(j.a)(k,2),E=C[0],A=C[1],F=Object(s.useState)(!1),q=Object(j.a)(F,2),z=q[0],P=q[1],K=Object(s.useState)(""),L=Object(j.a)(K,2),T=L[0],D=L[1],J=Object(s.useState)(!0),M=Object(j.a)(J,2),B=M[0],W=M[1],X=Object(s.useState)(""),G=Object(j.a)(X,2),R=G[0],V=G[1];function Y(){return S!==E?(P(!0),!1):(P(!1),!0)}return Object(s.useEffect)((function(){b(c);var e=0;t.map((function(t){return e+=t.price*t.total})),h(parseFloat(e).toFixed(2))}),[c,t]),Object(a.jsx)("div",{children:B?Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-lg-6 p-5",children:[Object(a.jsxs)("h2",{children:["Cart List ",Object(a.jsx)("span",{className:"badge badge-primary badge-pill",children:d})]}),Object(a.jsxs)("ul",{className:"list-group-flush",children:[t.length>0?t.map((function(e){return Object(a.jsx)(U,{item:e,del:n},e.id)})):Object(a.jsxs)("p",{className:"lead p-5",children:["Carrito vac\xedo. Ir al ",Object(a.jsx)(o.b,{to:"/",children:"Inicio"})]}),Object(a.jsxs)("li",{className:"list-group-item list-group-item-info d-flex justify-content-between align-items-center",children:[Object(a.jsx)(o.b,{to:"#",children:Object(a.jsx)("b",{children:"Total"})})," ",Object(a.jsxs)("b",{className:"ml-auto p-2 pr-5",children:["$",x]})]})]})]}),Object(a.jsxs)("div",{className:"col-lg-6 p-5",children:[Object(a.jsx)("h2",{children:"Datos Personales:"}),Object(a.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),Y()){var c=p(),a=c.collection("orders"),s={buyer:{name:N,phone:T,email:S},items:t,date:new Date,total:x};a.add(s).then((function(e){s.items.map((function(e){return c.collection("items").doc(e.id).update({stock:e.stock-e.total}),!0})),console.log(e.id),V(e.id),W(!1),i()})).catch((function(e){console.log(e)}))}},children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col p-3",children:Object(a.jsx)("input",{required:!0,onChange:function(e){return g(e.target.value)},type:"text",className:"form-control",id:"name",placeholder:"Nombre"})}),Object(a.jsx)("div",{className:"col-6 p-3",children:Object(a.jsx)("input",{required:!0,type:"number",onChange:function(e){return D(e.target.value)},className:"form-control",id:"phone",placeholder:"Telefono"})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6 p-3",children:Object(a.jsx)("input",{required:!0,onKeyUpCapture:function(){return Y()},onChange:function(e){return I(e.target.value)},type:"email",className:"form-control",id:"email",placeholder:"Email"})}),Object(a.jsx)("div",{className:"col-6 p-3",children:Object(a.jsx)("input",{required:!0,onKeyUpCapture:function(){return Y()},onChange:function(e){return A(e.target.value)},type:"email",className:"form-control",id:"email2",placeholder:"Confirme Email"})})]}),Object(a.jsx)("div",{className:"text-right pt-4",children:z?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Los emails no coinciden!"}),Object(a.jsx)("button",{disabled:"{true}",type:"submit",className:"btn btn-success mt-auto",children:"Comprar"})]}):Object(a.jsx)("button",{type:"submit",className:"btn btn-success mt-auto",children:"Comprar"})})]})]})]}):Object(a.jsx)($,{id:R})})};var W=function(){return Object(a.jsx)("div",{className:"col-lg-12",children:Object(a.jsx)(B,{})})};var X=function(){var e=Object(J.f)().categoryKey,t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(!0),d=Object(j.a)(r,2),b=d[0],m=d[1],u=Object(s.useState)(!1),O=Object(j.a)(u,2),x=O[0],h=O[1],v=Object(s.useState)(void 0),f=Object(j.a)(v,2),N=f[0],g=f[1];return Object(s.useEffect)((function(){var t,c=function(e){e.get().then((function(e){0===e.size&&h(!0),i(e.docs.map((function(e){var t=e.data(),c=e.id;return Object(l.a)({id:c},t)})))})).catch((function(){h(!0)})).finally((function(){m(!1)}))};t=e,p().collection("categories").where("key","==",t).get().then((function(e){g(e.docs[0].id)})),void 0===N||null===N?function(){var e=p().collection("items");c(e)}():function(e){e=parseInt(e);var t=p().collection("items").where("categoryId","==",e);c(t)}(N)}),[N,e]),Object(a.jsx)("div",{className:"col-lg-12 home",children:Object(a.jsxs)("div",{className:"col-md-9 mx-auto p-5",children:[b?Object(a.jsx)(A,{}):Object(a.jsx)(k,{items:n}),x?Object(a.jsxs)("p",{className:"lead text-center",children:["No hay productos que coincidan con tu b\xfasqueda. Ir al ",Object(a.jsx)(o.b,{to:"/",children:"Inicio"})]}):""]})})};var G=function(){return Object(a.jsx)(o.a,{children:Object(a.jsx)(u,{children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(N,{})}),Object(a.jsx)("div",{className:"row mx-0",children:Object(a.jsxs)(J.c,{children:[Object(a.jsx)(J.a,{path:"/item/:id",children:Object(a.jsx)(M,{})}),Object(a.jsx)(J.a,{path:"/categories/:categoryKey",children:Object(a.jsx)(X,{})}),Object(a.jsx)(J.a,{path:"/categories/",children:Object(a.jsx)(X,{})}),Object(a.jsx)(J.a,{path:"/cart",children:Object(a.jsx)(W,{})}),Object(a.jsx)(J.a,{exact:!0,path:"/",children:Object(a.jsx)(K,{greeting:"Todo Muebles"})})]})}),Object(a.jsx)(g,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.ccb6a97f.chunk.js.map