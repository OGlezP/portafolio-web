(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{40:function(e,t,a){},48:function(e,t,a){e.exports=a(63)},53:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(53),a(8)),i=a(19),s=(a(40),a(10)),m=a(18),u=a(25),d=a(47);var E=function(e){var t=e.firstHome,a=e.firstProjects,c=e.firstContact,o=Object(i.f)().pathname,s=Object(n.useState)(!1),E=Object(l.a)(s,2),f=E[0],p=E[1];function v(e){e.preventDefault();var t=e.currentTarget;"mouseover"===e.type&&t.children[0].classList.add("transform-underline"),"mouseleave"===e.type&&t.children[0].classList.remove("transform-underline")}function b(e){var n=e.target.innerText;"HOME"===n&&setTimeout((function(){t(!0)}),400),"PROJECTS"===n&&setTimeout((function(){a(!0)}),400),"CONTACT"===n&&setTimeout((function(){c(!0)}),400),setTimeout((function(){p(!1)}),600)}return r.a.createElement(u.a,{className:"border-bottom p-0",expanded:f,expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},r.a.createElement("img",{src:"./img/logo/logo-oglez-portafolio.png"})),r.a.createElement(u.a.Toggle,{"aria-controls":"navbarNav",onClick:function(){return p(!f&&"expanded")},className:f?"openIcon":"closedIcon"}),r.a.createElement(u.a.Collapse,{id:"navbarNav"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(m.b,{className:"nav-link",to:"/",onMouseOver:"/"===o?function(){}:v,onMouseLeave:"/"===o?function(){}:v,onClick:b},"Home",r.a.createElement("div",{className:"/"===o?"menu-link-underline active-link":"menu-link-underline"})),r.a.createElement(m.b,{className:"nav-link",to:"/Projects",onClick:b,onMouseOver:"/Projects"===o?function(){}:v,onMouseLeave:"/Projects"===o?function(){}:v},"Projects",r.a.createElement("div",{className:"/Projects"===o?"menu-link-underline active-link":"menu-link-underline"})),r.a.createElement(m.b,{className:"nav-link",to:"/Contact",onClick:b,onMouseOver:"/Contact"===o?function(){}:v,onMouseLeave:"/Contact"===o?function(){}:v},"Contact",r.a.createElement("div",{className:"/Contact"===o?"menu-link-underline active-link":"menu-link-underline"})))))},f=a(6),p=a(7);var v=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){e.firstLoad?o(!0):o(!1)}),[e.firstLoad,c]),r.a.createElement("footer",{className:"border-top",id:"footer"},r.a.createElement("div",{className:c?"foot-cont":"foot-cont footer-first-enter"},r.a.createElement("span",{className:"name"},"\xa9 2020 - OGLEZP"),r.a.createElement("div",{className:"social-icons-footer"},r.a.createElement("a",{href:"https://github.com/OGlezP",target:"_blank"},r.a.createElement(f.a,{className:"icons-footer",icon:p.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/orlando-gonzalez-62762218b/",target:"_blank"},r.a.createElement(f.a,{className:"icons-footer",icon:p.d})),r.a.createElement("a",{href:"https://www.instagram.com/oglezp/",target:"_blank"},r.a.createElement(f.a,{className:"icons-footer",icon:p.a})),r.a.createElement("a",{href:"https://www.facebook.com/OGlezP",target:"_blank"},r.a.createElement(f.a,{className:"icons-footer",icon:p.c})))))},b=a(15),g=a(21);var h=function(e){console.log("home",e.first);var t={backgroundImage:"url(./img/oglez-background.jpg)"};return r.a.createElement(b.a,{id:"row-cont-home",style:t,className:"no-gutters"},r.a.createElement("div",{className:"txt-cont"},r.a.createElement("h1",{className:e.first?"logo":"logo appear"},r.a.createElement("span",{id:"line-1"},"OGLEZ.")),r.a.createElement("p",{className:e.first?"p-0 info-txt":"p-0 info-txt fade-in-txt"},"Freelance front-end and freelance concert photographer, based on Guadalajara, Jal. Mexico.")),r.a.createElement("div",{id:"social-net"},r.a.createElement("h1",null,"Social networks"),r.a.createElement(b.a,{className:"social-icons m-0"},r.a.createElement(g.a,{className:"col-icon"},r.a.createElement("a",{href:"https://github.com/OGlezP",target:"_blank"},r.a.createElement(f.a,{icon:p.b}))),r.a.createElement(g.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.linkedin.com/in/orlando-gonzalez-62762218b/",target:"_blank"},r.a.createElement(f.a,{icon:p.d}))),r.a.createElement(g.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.instagram.com/oglezp/",target:"_blank"},r.a.createElement(f.a,{icon:p.c}))),r.a.createElement(g.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.facebook.com/OGlezP",target:"_blank"},r.a.createElement(f.a,{icon:p.a}))))),r.a.createElement("div",{className:"rombo-scroll"}))},j=a(46),N=a(9);var k=function(e){var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],o=a[1];function i(e){e.target.nextSibling.querySelector(".img img").classList.toggle("hover-image")}Object(n.useEffect)((function(){setTimeout((function(){o(!1)}),800)}),[]);var m=Object(s.b)(e.projects.length,{opacity:c?0:1,transform:c?"translateY(-15%)":"translateY(0)",from:{transform:"translateY(-15%)"}});return r.a.createElement(b.a,{className:"justify-content-md-center no-gutters"},m.map((function(t,a){return r.a.createElement(s.a.div,{key:e.projects[a].id,style:t,className:"columna col-md text-center"},r.a.createElement("a",{className:"hover-layer",onMouseOver:i,onMouseLeave:i,href:e.projects[a].link,target:"_blank"}),r.a.createElement("div",{className:"project-info"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.projects[a].src,alt:""})),r.a.createElement("div",{className:"project-web-info"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.c}," "),r.a.createElement("span",null," ")," ",e.projects[a].title),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.a}),r.a.createElement("span",null," ")," ",e.projects[a].web_techonologies))))})))};var O=function(e){function t(e){e.target.nextSibling.querySelector(".img img").classList.toggle("hover-image")}var a=Object(s.b)(e.projects.length,{opacity:1,from:{opacity:0}});return r.a.createElement(b.a,{className:"justify-content-md-center no-gutters"},a.map((function(a,n){return r.a.createElement(s.a.div,{key:e.projects[n].id,style:a,className:"columna col-md text-center"},r.a.createElement("a",{className:"hover-layer",onMouseOver:t,onMouseLeave:t,href:e.projects[n].link,target:"_blank"}),r.a.createElement("div",{className:"project-info"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.projects[n].src,alt:""})),r.a.createElement("div",{className:"project-web-info"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.c}," "),r.a.createElement("span",null," ")," ",e.projects[n].title),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.a}),r.a.createElement("span",null," ")," ",e.projects[n].web_techonologies))))})))},w=a(34),y=a.n(w);var x=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),m=Object(l.a)(i,2),u=m[0],d=m[1],E=Object(n.useState)(null),f=Object(l.a)(E,2),p=f[0],v=f[1],g=Object(n.useState)([]),h=Object(l.a)(g,2),N=h[0],w=h[1],y=Object(n.useState)(!0),x=Object(l.a)(y,2),C=x[0],S=x[1],z=Object(n.useState)(!1),L=Object(l.a)(z,2),I=L[0],P=L[1];Object(n.useEffect)((function(){var e=!1;var t=function(){e||(e=!0,setTimeout((function(){fetch("/school-projects.json").then((function(e){return e.json()})).then((function(e){d(e.items)}),(function(e){o(e),console.warm(c)})),setTimeout((function(){S(!1)}),300)}),100))};return window.addEventListener("scroll",t,{passive:!0}),function(){return window.removeEventListener("scroll",t)}}),[c,u]),Object(n.useEffect)((function(){fetch("/freelance-projects.json").then((function(e){return e.json()})).then((function(e){w(e.items)}),(function(e){v(e),console.warn(p)})),e.first&&e.firstClick?P(!0):P(!1)}),[]);var T=Object(s.b)(u.length,{opacity:C?0:1,transform:C?"translateY(30%)":"translateY(0)",from:{transform:"translateY(30%)"}}),M={backgroundImage:"url(./img/title-background/back-title.jpg)",width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",filter:"blur(3px) grayscale(.3)",top:0,left:0};function G(e){var t=e.target.offsetParent.childNodes[1].lastElementChild;"mouseover"==e.type?t.classList.add("proj-info-hidden"):t.classList.remove("proj-info-hidden")}return r.a.createElement("div",{id:"section-projects"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"",style:M}),r.a.createElement("div",{className:"txt-wrapper"},r.a.createElement("h1",{className:"title-section"},"Portfolio"),r.a.createElement("p",{id:"title-section-text"},"Here are some works as a freelance and some excersice at freecodecamp.org"))),r.a.createElement("div",{className:"projects"},I?r.a.createElement(O,{projects:N}):r.a.createElement(k,{projects:N,hidden:I})),r.a.createElement(j.a,{className:"text-center school-project-wrapper"},r.a.createElement("h4",{className:C?"hidden-subtitle":""},"At FreeCodeCamp.org"),r.a.createElement(b.a,{className:"justify-content-md-center"},T.map((function(e,t){return r.a.createElement(s.a.div,{key:u[t].id,style:e,className:"col-sm-4"},r.a.createElement("a",{className:"mose-over-layer",onMouseOver:G,onMouseLeave:G,href:u[t].link,target:"_blank"}),r.a.createElement("div",{className:"project-wrapper"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:u[t].src,alt:u[t].title})),r.a.createElement("div",{className:"proj-info-wrapper"},r.a.createElement("div",null,u[t].title),r.a.createElement("div",null,u[t].web_techonologies))))})))))},C=a(12),S=a(38);var z=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){e.first&&e.firstClicked?o(!0):o(!1)}),[]);var i={backgroundImage:"url(./img/title-background/contact-title.jpg)",width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",filter:"blur(3px) grayscale(.3)",top:0,left:0};return r.a.createElement("div",{id:"section-contact"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"",style:i}),r.a.createElement("div",{className:"txt-wrapper"},r.a.createElement("h1",{className:"title-section"},"Contacto"),r.a.createElement("p",{id:"title-section-text"},"Please use the next form to get in touch, or send a direct e-mail or phone call."))),c?r.a.createElement(I,null):r.a.createElement(L,null))};function L(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){setTimeout((function(){c(!1)}),800)}),[]);var o=Object(s.b)(1,{opacity:a?0:1,transform:a?"translateY(20%)":"translateY(0)",from:{transform:"translateY(20%)"}});return r.a.createElement("div",null,o.map((function(e){return r.a.createElement(s.a.div,{key:0,style:e,className:"",id:"contact-container"},r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a.Control,{type:"email",placeholder:"E-mail"})),r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a.Control,{type:"email",placeholder:"Name"})),r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(C.a.Control,{as:"textarea",rows:"20",placeholder:"message"})),r.a.createElement(S.a,{variant:"primary",type:"submit"},"Send")),r.a.createElement("div",{id:"right-side-form",className:"rightSide"},r.a.createElement("div",{id:"right-info"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.d}),"   Guadalajara, Jal. | Mx"),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.e}),"   33 31 17 85 57"),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.b}),"   orlando.gonzalez.mtz@gmail.com"),r.a.createElement("hr",null),r.a.createElement("div",{id:"social-on-contact",className:"text-center"},r.a.createElement(f.a,{icon:p.a}),r.a.createElement(f.a,{icon:p.c}),r.a.createElement(f.a,{icon:p.b})))))})))}function I(){var e=Object(s.b)(1,{opacity:1,from:{opacity:0}});return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(s.a.div,{key:0,style:e,className:"container",id:"contact-container"},r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a.Control,{type:"email",placeholder:"E-mail"})),r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(C.a.Control,{type:"email",placeholder:"Name"})),r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(C.a.Control,{as:"textarea",rows:"20",placeholder:"message"})),r.a.createElement(S.a,{variant:"primary",type:"submit"},"Send")),r.a.createElement("div",{id:"right-side-form",className:"rightSide"},r.a.createElement("div",{id:"right-info"},r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.d}),"   Guadalajara, Jal. | Mx"),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.e}),"   33 31 17 85 57"),r.a.createElement("div",null,r.a.createElement(f.a,{icon:N.b}),"   orlando.gonzalez.mtz@gmail.com"),r.a.createElement("hr",null),r.a.createElement("div",{id:"social-on-contact",className:"text-center"},r.a.createElement(f.a,{icon:p.a,size:"2x"}),r.a.createElement(f.a,{icon:p.c,size:"2x"}),r.a.createElement(f.a,{icon:p.b,size:"2x"})))))})))}var P=function(){var e,t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),d=u[0],f=u[1],p=Object(n.useState)(!1),b=Object(l.a)(p,2),g=b[0],j=b[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),O=k[0],w=k[1],C=Object(n.useState)(!1),S=Object(l.a)(C,2),L=S[0],I=S[1],P=Object(i.f)(),T=P.pathname,M=window.localStorage,G="";G=M.getItem("url"),M.setItem("prevUrl",G),M.setItem("url",T),G=M.getItem("url"),e=M.getItem("prevUrl"),Object(n.useEffect)((function(){setTimeout((function(){f(!0)}),1200),"/Projects"===G&&w(!0),"/Contact"===G&&I(!0),"/"===G&&j(!0),setTimeout((function(){o(!0)}),1e3)}),[G]);var _=Object(s.c)(P,(function(e){return e.pathname}),{from:{position:"absolute",width:"100%",opacity:.6},enter:{opacity:1},leave:{opacity:0}});return c?r.a.createElement("div",{id:"absolute-wrapper"},r.a.createElement(E,{firstHome:function(e){return j(e)},firstProjects:function(e){return w(e)},firstContact:function(e){return I(e)}}),r.a.createElement("div",{className:"animation-wrapper"},_.map((function(t){var a=t.item,n=t.props,c=t.key;return r.a.createElement(s.a.div,{key:c,style:n},r.a.createElement("div",{id:"section-wrapper"},r.a.createElement(i.c,{location:a},r.a.createElement(i.a,{path:"/",exact:!0,render:function(){return r.a.createElement(h,{first:d,homeClicked:g})}}),r.a.createElement(i.a,{path:"/Projects",render:function(){return r.a.createElement(x,{previousURL:e,currentURL:G,firstClick:O,first:d})}}),r.a.createElement(i.a,{path:"/Contact",render:function(){return r.a.createElement(z,{previousURL:e,currentURL:G,firstClicked:L,first:d})}}))),r.a.createElement(v,{firstLoad:d,id:"foot"}))})))):r.a.createElement("div",{className:"load-wrapper"},r.a.createElement(y.a,{id:"loader",type:"bars",color:"grey"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);o.a.render(r.a.createElement(m.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.aa7480b2.chunk.js.map