(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{47:function(e,t,a){},57:function(e,t,a){e.exports=a(73)},62:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=(a(62),a(7)),i=a(19),s=(a(47),a(11)),m=a(18),u=a(34),f=a(56);var p=function(e){var t=e.firstHome,a=e.firstProjects,o=e.firstContact,c=Object(i.f)().pathname,s=Object(n.useState)(!1),p=Object(l.a)(s,2),d=p[0],E=p[1];function b(e){e.preventDefault();var t=e.currentTarget;"mouseover"===e.type&&t.children[0].classList.add("transform-underline"),"mouseleave"===e.type&&t.children[0].classList.remove("transform-underline")}function g(e){var n=e.target.innerText;"HOME"===n&&setTimeout((function(){t(!0)}),400),"PROJECTS"===n&&setTimeout((function(){a(!0)}),400),"CONTACT"===n&&setTimeout((function(){o(!0)}),400),setTimeout((function(){E(!1)}),600)}return r.a.createElement(u.a,{className:"border-bottom p-0",expanded:d,expand:"lg",fixed:"top"},r.a.createElement(u.a.Brand,{href:"/"},r.a.createElement("img",{src:"./img/logo/logo-oglez-portafolio.png",alt:"ogles logo"})),r.a.createElement(u.a.Toggle,{"aria-controls":"navbarNav",onClick:function(){return E(!d&&"expanded")},className:d?"openIcon":"closedIcon"}),r.a.createElement(u.a.Collapse,{id:"navbarNav"},r.a.createElement(f.a,{className:"ml-auto"},r.a.createElement(m.b,{className:"nav-link",to:"/",onMouseOver:"/"===c?function(){}:b,onMouseLeave:"/"===c?function(){}:b,onClick:g},"Home",r.a.createElement("div",{className:"/"===c?"menu-link-underline active-link":"menu-link-underline"})),r.a.createElement(m.b,{className:"nav-link",to:"/Projects",onClick:g,onMouseOver:"/Projects"===c?function(){}:b,onMouseLeave:"/Projects"===c?function(){}:b},"Projects",r.a.createElement("div",{className:"/Projects"===c?"menu-link-underline active-link":"menu-link-underline"})),r.a.createElement(m.b,{className:"nav-link",to:"/Contact",onClick:g,onMouseOver:"/Contact"===c?function(){}:b,onMouseLeave:"/Contact"===c?function(){}:b},"Contact",r.a.createElement("div",{className:"/Contact"===c?"menu-link-underline active-link":"menu-link-underline"})))))},d=a(8),E=a(6);var b=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){e.firstLoad?c(!0):c(!1)}),[e.firstLoad,o]),r.a.createElement("footer",{className:"border-top",id:"footer"},r.a.createElement("div",{className:o?"foot-cont":"foot-cont footer-first-enter"},r.a.createElement("span",{className:"name"},"\xa9 2020 - OGLEZP"),r.a.createElement("div",{className:"social-icons-footer"},r.a.createElement("a",{href:"https://github.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{className:"icons-footer",icon:E.c})),r.a.createElement("a",{href:"https://www.linkedin.com/in/orlando-gonzalez-62762218b/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{className:"icons-footer",icon:E.e})),r.a.createElement("a",{href:"https://www.instagram.com/oglezp/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{className:"icons-footer",icon:E.b})),r.a.createElement("a",{href:"https://www.facebook.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{className:"icons-footer",icon:E.d})),r.a.createElement("a",{href:"https://codepen.io/oglezp",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.a})))))},g=a(30),h=a(21);var v=function(e){var t={backgroundImage:"url(./img/oglez-background.jpg)"};return r.a.createElement(g.a,{id:"row-cont-home",style:t,className:"no-gutters"},r.a.createElement("div",{className:"txt-cont"},r.a.createElement("h1",{className:e.first?"logo":"logo appear"},r.a.createElement("span",{id:"line-1"},"OGLEZ.")),r.a.createElement("p",{className:e.first?"p-0 info-txt":"p-0 info-txt fade-in-txt"},"Freelance front-end and freelance concert photographer, based on Guadalajara, Jal. Mexico.")),r.a.createElement("div",{id:"social-net"},r.a.createElement("h1",null,"Social networks"),r.a.createElement(g.a,{className:"social-icons m-0"},r.a.createElement(h.a,{className:"col-icon"},r.a.createElement("a",{href:"https://github.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.c}))),r.a.createElement(h.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.linkedin.com/in/orlando-gonzalez-62762218b/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.e}))),r.a.createElement(h.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.instagram.com/oglezp/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.d}))),r.a.createElement(h.a,{className:"col-icon"},r.a.createElement("a",{href:"https://www.facebook.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.b}))),r.a.createElement(h.a,{className:"col-icon"},r.a.createElement("a",{href:"https://codepen.io/oglezp",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.a}))))),r.a.createElement("div",{className:"rombo-scroll"}))},j=a(53),O=a(14);var k=function(e){var t=e.freelanceProjectsResult,a=e.freeCodeCampData,o=Object(n.useState)(!0),c=Object(l.a)(o,2),i=c[0],m=c[1],u=Object(n.useState)(!0),f=Object(l.a)(u,2),p=f[0],E=f[1],b=Object(n.useState)(!0),h=Object(l.a)(b,2),v=h[0],k=h[1];Object(n.useEffect)((function(){e.first&&e.firstClick?k(!1):k(!0)}),[]),Object(n.useEffect)((function(){var e=!1,t=function(){e||(e=!0,setTimeout((function(){E(!1)}),400))};return window.addEventListener("scroll",t,{passive:!0}),function(){return window.removeEventListener("scroll",t)}}),[a]),Object(n.useEffect)((function(){setTimeout((function(){m(!1)}),800)}),[]);var w={backgroundImage:"url(./img/title-background/back-title.jpg)",width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",filter:"blur(3px) grayscale(.3)",top:0,left:0};function N(e){var t=e.target.offsetParent.childNodes[1].lastElementChild;"mouseover"===e.type?t.classList.add("proj-info-hidden"):t.classList.remove("proj-info-hidden")}function y(e){e.target.nextSibling.querySelector(".img img").classList.toggle("hover-image")}var x=Object(s.b)(t.length,{opacity:i?0:1,transform:i?"translateY(-15%)":"translateY(0)",from:{transform:"translateY(-15%)"}}),C=Object(s.b)(t.length,{opacity:1,from:{opacity:0}}),S=Object(s.b)(a.length,{opacity:p?0:1,transition:"all .3s",transitionTimingFunction:"cubic-bezier(0.08, 0.61, 1, 0.04)",transform:p?"translateY(60%)":"translateY(0)",from:{transform:"translateY(60%)"}});return r.a.createElement("div",{id:"section-projects"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"",style:w}),r.a.createElement("div",{className:"txt-wrapper"},r.a.createElement("h1",{className:"title-section"},"Portfolio"),r.a.createElement("p",{id:"title-section-text"},"Here are some works as a freelance and some exercises at https://codepen.io/ platform"))),r.a.createElement("div",{className:"projects"},r.a.createElement(g.a,{className:"justify-content-md-center no-gutters"},(v?x:C).map((function(e,a){return r.a.createElement(s.a.div,{key:t[a].id,style:e,className:"columna col-md text-center"},r.a.createElement("a",{className:"hover-layer",onMouseOver:y,onMouseLeave:y,href:t[a].link,target:"_blank",rel:"noopener noreferrer"}),r.a.createElement("div",{className:"project-info"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:t[a].src,alt:t[a].title})),r.a.createElement("div",{className:"project-web-info"},r.a.createElement("div",null,t[a].title),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(d.a,{icon:O.a}),r.a.createElement("span",null,"\xa0\xa0")," ",t[a].description))))})))),r.a.createElement(j.a,{className:"text-center school-project-wrapper"},r.a.createElement("h4",{className:p?"hidden-subtitle":""},"At FreeCodeCamp.org"),r.a.createElement("div",{className:"divisor"}),r.a.createElement(g.a,{className:"justify-content-md-center"},S.map((function(e,t){return r.a.createElement(s.a.div,{key:a[t].id,style:e,className:"col-sm-5"},r.a.createElement("a",{className:"mose-over-layer",onMouseOver:N,onMouseLeave:N,href:a[t].link,target:"_blank",rel:"noopener noreferrer"}),r.a.createElement("div",{className:"project-wrapper"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:a[t].src,alt:a[t].title})),r.a.createElement("div",{className:"proj-info-wrapper"},r.a.createElement("div",{className:"text-inf"},a[t].title),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"text-inf"},r.a.createElement(d.a,{icon:O.a}),r.a.createElement("span",null," "),a[t].description))))})))))},w=a(16),N=a(38),y=a(22),x=a.n(y),C=a(32),S=a(24),z=a(54),P=a(45),T=function(e){var t=e.formName,a=e.preSubmit,o=e.postSubmit,c=e.formValues,i=e.children,s=Object(n.useState)(!0),m=Object(l.a)(s,2),u=m[0],f=m[1];Object(n.useEffect)((function(){f(!1)}),[]);var p=Object(n.useState)(""),d=Object(l.a)(p,2),E=d[0],b=d[1],g=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},h=function(){var e=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object(N.a)({},c,{"form-name":t,infoo:E}),Object.entries(a).map((function(e){return g(e[0])+"="+g(e[1])})).join("&"))});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(C.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.t1=a,!e.t1){e.next=6;break}return e.next=5,a();case 5:e.t1=e.sent;case 6:if(e.t0=e.t1,e.t0){e.next=9;break}e.t0=!a;case 9:if(!e.t0){e.next=20;break}return e.next=12,h();case 12:if(!e.sent){e.next=17;break}o&&o(),console.log(c),e.next=18;break;case 17:throw new Error("Error submitting to Netlify");case 18:e.next=21;break;case 20:console.log("preSubmit false");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u?r.a.createElement("form",{name:t,onSubmit:v,"data-netlify":"true","netlify-honeypot":"infoo"},i):r.a.createElement("form",{onSubmit:v},i,r.a.createElement("p",{style:{opacity:"0",position:"absolute",top:"0",left:"0"}},r.a.createElement("input",{style:{width:"0",height:"0",zIndex:"-1"},name:"description",value:E,onChange:function(e){return b(e.target.value)}})))};var L=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!0),m=Object(l.a)(i,2),u=m[0],f=m[1],p=Object(n.useState)([]),b=Object(l.a)(p,2),g=b[0],h=b[1],v=Object(n.useState)("danger"),j=Object(l.a)(v,2),k=j[0],y=j[1],L=Object(n.useState)(!0),_=Object(l.a)(L,2),I=_[0],M=_[1],G=Object(n.useState)(""),Y=Object(l.a)(G,2),F=Y[0],H=Y[1],R=[];Object(n.useEffect)((function(){e.first&&e.firstClicked?c(!0):c(!1)}),[]),Object(n.useEffect)((function(){setTimeout((function(){f(!1)}),900)}),[]);var J={backgroundImage:"url(./img/title-background/contact-title.jpg)",width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"absolute",filter:"blur(3px) grayscale(.3)",top:0,left:0},D=function(){var e=Object(C.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===W.email&&(R.push("Please type an email, it wont be shared to anyone"),y("danger")),""===W.name&&R.push("Please type name"),""===W.message&&R.push("Please write down a message"),0===R.length){e.next=10;break}return H("Ups! There is an error, please provide the following info"),h(R),setTimeout((function(){M(!1)}),300),e.abrupt("return",!1);case 10:return e.next=12,new Promise((function(e){return setTimeout(e,1e3)}));case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){H("Everything is OK :), thank you!"),h(["Message has been sent"]),y("success"),setTimeout((function(){M(!1),Z({email:"",name:"",message:""})}),300),document.forms[0].reset(),document.forms[1].reset()},A=function(e){return Z(Object(N.a)({},W,Object(w.a)({},e.target.name,e.target.value)))},U=Object(n.useState)({email:"",name:"",message:""}),V=Object(l.a)(U,2),W=V[0],Z=V[1],q=function(){return I?r.a.createElement("div",null):r.a.createElement(P.a,{className:"alertt-message",variant:k,onClose:function(){return M(!0)},dismissible:!0},r.a.createElement(P.a.Heading,null,F),r.a.createElement("hr",null),r.a.createElement("ul",null,g.map((function(e,t){return r.a.createElement("li",{key:t},g[t])}))))},K=Object(s.b)(1,{opacity:u?0:1,transform:u?"translateY(20%)":"translateY(0)",from:{transform:"translateY(20%)"}}),$=Object(s.b)(1,{opacity:1,from:{opacity:0}});return r.a.createElement("div",{id:"section-contact"},r.a.createElement("div",{className:"title-container"},r.a.createElement("div",{className:"",style:J}),r.a.createElement("div",{className:"txt-wrapper"},r.a.createElement("h1",{className:"title-section"},"Contact"),r.a.createElement("p",{id:"title-section-text"},"Please use the next form to get in touch, send a direct e-mail or a phone call."))),r.a.createElement("div",null,(o?$:K).map((function(e){return r.a.createElement(s.a.div,{key:0,style:e,className:"",id:"contact-container"},r.a.createElement(q,null),r.a.createElement(T,{formName:"contact",formValues:W,preSubmit:D,postSubmit:B},r.a.createElement(S.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(S.a.Control,{type:"email",name:"email",value:W.email,onChange:A,placeholder:"E-mail"})),r.a.createElement(S.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(S.a.Control,{type:"text",name:"name",value:W.name,onChange:A,placeholder:"Name"})),r.a.createElement(S.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(S.a.Control,{as:"textarea",rows:"20",name:"message",value:W.message,onChange:A,placeholder:"message"})),r.a.createElement(z.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement("div",{id:"right-side-form",className:"rightSide"},r.a.createElement("div",{id:"right-info"},r.a.createElement("div",null,r.a.createElement(d.a,{icon:O.c}),"   Guadalajara, Jal. | Mx"),r.a.createElement("div",null,r.a.createElement(d.a,{icon:O.d}),"   33 31 17 85 57"),r.a.createElement("div",null,r.a.createElement(d.a,{icon:O.b}),"   orlando.gonzalez.mtz@gmail.com"),r.a.createElement("hr",null),r.a.createElement("div",{id:"social-on-contact",className:"text-center"},r.a.createElement("a",{href:"https://github.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.c})),r.a.createElement("a",{href:"https://www.linkedin.com/in/orlando-gonzalez-62762218b/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.e})),r.a.createElement("a",{href:"https://www.instagram.com/oglezp/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.d})),r.a.createElement("a",{href:"https://www.facebook.com/OGlezP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.b})),r.a.createElement("a",{href:"https://codepen.io/oglezp",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.a,{icon:E.a}))))))}))))},_=a(55),I=a.n(_);var M=function(){var e,t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),f=u[0],d=u[1],E=Object(n.useState)(!1),g=Object(l.a)(E,2),h=g[0],j=g[1],O=Object(n.useState)(!1),w=Object(l.a)(O,2),N=w[0],y=w[1],x=Object(n.useState)(!1),C=Object(l.a)(x,2),S=C[0],z=C[1],P=Object(n.useState)([]),T=Object(l.a)(P,2),_=T[0],M=T[1],G=Object(n.useState)([]),Y=Object(l.a)(G,2),F=Y[0],H=Y[1],R=Object(i.f)(),J=R.pathname,D=window.localStorage;D.getItem("url"),D.setItem("url",J),e=D.getItem("url"),Object(n.useEffect)((function(){fetch("/freelance-projects.json").then((function(e){return e.json()})).then((function(e){M(e.items)}),(function(e){console.warn(e)})),fetch("/school-projects.json").then((function(e){return e.json()})).then((function(e){H(e.items)}),(function(e){console.warn(e)})),setTimeout((function(){d(!0)}),1200),"/"===e&&j(!0),"/Projects"===e&&y(!0),"/Contact"===e&&z(!0),setTimeout((function(){c(!0)}),1e3)}),[e]);var B=Object(s.c)(R,(function(e){return e.pathname}),{from:{position:"absolute",width:"100%",opacity:.6},enter:{opacity:1},leave:{opacity:0}});return o?r.a.createElement("div",{id:"absolute-wrapper"},r.a.createElement(p,{firstHome:function(e){return j(e)},firstProjects:function(e){return y(e)},firstContact:function(e){return z(e)}}),r.a.createElement("div",{className:"animation-wrapper"},B.map((function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(s.a.div,{key:n,style:a},r.a.createElement("div",{id:"section-wrapper"},r.a.createElement(i.c,{location:t},r.a.createElement(i.a,{path:"/",exact:!0,render:function(){return r.a.createElement(v,{first:f,homeClicked:h})}}),r.a.createElement(i.a,{path:"/Projects",render:function(){return r.a.createElement(k,{freelanceProjectsResult:_,freeCodeCampData:F,firstClick:N,first:f})}}),r.a.createElement(i.a,{path:"/Contact",render:function(){return r.a.createElement(L,{firstClicked:S,first:f})}}))),r.a.createElement(b,{firstLoad:f,id:"foot"}))})))):r.a.createElement("div",{className:"load-wrapper"},r.a.createElement(I.a,{id:"loader",type:"bars",color:"grey"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);c.a.render(r.a.createElement(m.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.e43640a4.chunk.js.map