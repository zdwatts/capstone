(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(20),i=n.n(s),o=(n(73),n(4)),u=n.n(o),l=n(6),j=n(5),d=n(9),b=n(8),p=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"demo@aa.io",n=c.length>1&&void 0!==c[1]?c[1]:"password",e.next=4,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/logout",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(t,n,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:n,password:a})});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),x=(n(75),function(e){var t=e.authenticated,n=e.setAuthenticated,r=Object(c.useState)([]),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(""),p=Object(j.a)(d,2),O=p[0],f=p[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),v=x[0],w=x[1],g=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h(O,v);case 3:(a=e.sent).errors?o(a.errors):n(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"login-form-wrapper",children:Object(a.jsxs)("form",{onSubmit:g,className:"login-form",children:[Object(a.jsx)("div",{className:"errors-wrapper",children:i.map((function(e){return Object(a.jsx)("div",{className:"errors",children:Object(a.jsx)("p",{className:"error",children:e})})}))}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("h1",{className:"form-title",children:"World Foundry"}),Object(a.jsx)("h3",{className:"form-subtitle",children:"Log In"}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"input",name:"email",type:"text",value:O,onChange:function(e){f(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{className:"input",name:"password",type:"password",value:v,onChange:function(e){w(e.target.value)}})]}),Object(a.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),Object(a.jsxs)("p",{className:"cta",children:["Not a member?"," ",Object(a.jsx)("a",{className:"cta-link",href:"/signup",children:"Register here"})]})]})})}),v=(n(80),function(e){var t=e.authenticated,n=e.setAuthenticated,r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(""),p=Object(j.a)(d,2),h=p[0],O=p[1],f=Object(c.useState)(""),x=Object(j.a)(f,2),v=x[0],w=x[1],g=Object(c.useState)(""),N=Object(j.a)(g,2),y=N[0],S=N[1],k=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),v!==y){e.next=6;break}return e.next=4,m(i,h,v);case 4:e.sent.errors||n(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"signup-form-wrapper",children:Object(a.jsxs)("form",{onSubmit:k,className:"signup-form",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("h1",{className:"form-title",children:"World Foundry"}),Object(a.jsx)("h3",{className:"form-subtitle",children:"Sign Up"}),Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{className:"input",type:"text",name:"username",onChange:function(e){o(e.target.value)},value:i,required:!0})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"input",required:!0,type:"text",name:"Email",onChange:function(e){O(e.target.value)},value:h})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{className:"input",required:!0,type:"password",name:"password",onChange:function(e){w(e.target.value)},value:v})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Confirm Password"}),Object(a.jsx)("input",{className:"input",required:!0,type:"password",name:"confirm-password",onChange:function(e){S(e.target.value)},value:y})]}),Object(a.jsx)("button",{type:"submit",className:"signup-button",children:"Sign Up"}),Object(a.jsxs)("p",{className:"cta",children:["Already registered?"," ",Object(a.jsx)("a",{className:"cta-link",href:"/login",children:"Log In"})]})]})})}),w=n(42),g=function(e){return Object(a.jsx)(b.b,Object(w.a)(Object(w.a)({},e),{},{children:e.authenticated?e.children:Object(a.jsx)(b.a,{to:"/login"})}))},N=(n(81),n.p+"static/media/writer.01f77238.png"),y=function(e){var t=e.authenticated,n=Object(c.useState)(""),r=Object(j.a)(n,2),s=r[0],i=r[1];Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,n=t.username,i(n);case 5:case"end":return e.stop()}}),e)})))()}));return Object(a.jsxs)("div",{className:"content-wrapper",children:[Object(a.jsxs)("div",{className:"greeting-wrapper",children:[Object(a.jsxs)("h1",{className:"greeting",children:["Greetings, ",function(){var e;return e=t?s:"friend",e}(),"."]}),t?Object(a.jsx)("p",{className:"greeting-body",children:'Click on the directories link to view your directories and documents, or click "Write" to create a new document.'}):Object(a.jsx)("p",{className:"greeting-body",children:"Welcome to World Foundry. This is a place for those who wish to take their worlds to the next level. It is here that you will cultivate real, living people, things and places from nothing more than the written word. World Foundry will help you turn your entirely imagined creations into something indistinguishable from reality for both yourself and your readers. Feel free to try the demo login to get a feel for how the app works, or create an account and get started."})]}),Object(a.jsx)("img",{className:"splash-image",src:N,alt:""})]})},S=(n(38),function(e){var t=e.setAuthenticated,n=e.authenticated,c=Object(b.g)(),r=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t(!1),c.push("/"),window.location.reload(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(a.jsx)("button",{className:"buttons",onClick:r,children:n?"Logout":"Login"}):""}),k=function(e){var t=e.setAuthenticated,n=e.authenticated,c=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t(!0),window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?"":Object(a.jsx)("button",{className:"buttons",onClick:c,children:"Demo Login"})},C=function(e){var t=e.setAuthenticated,n=e.authenticated;e.authenticate;return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("div",{className:"main-logo",children:Object(a.jsx)("a",{href:"/",style:{textDecoration:"none"},children:Object(a.jsx)("h1",{className:"logo-text",style:{fontFamily:"Permanent Marker, cursive"},children:"World Foundry"})})}),Object(a.jsx)("div",{className:"links-wrapper",children:Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{exact:!0,to:"/",children:"Home"})}),n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/documents",activeClassName:"active",children:"Write"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/directories",activeClassName:"active",children:"Directories"})}),Object(a.jsx)("li",{children:Object(a.jsx)(S,{setAuthenticated:t,authenticated:n})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/login",activeClassName:"active",children:"Log In"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/signup",activeClassName:"active",children:"Sign Up"})}),Object(a.jsx)("li",{children:Object(a.jsx)(k,{setAuthenticated:t,authenticated:n})})]})]})})]})},E=n(34),T=n(14),_=n.n(T),A=(n(100),function(e){e.authenticate;var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(""),o=Object(j.a)(i,2),d=o[0],p=o[1],h=Object(c.useState)([]),O=Object(j.a)(h,2),f=O[0],m=O[1],x=Object(c.useState)([]),v=Object(j.a)(x,2),w=v[0],g=v[1],N=Object(b.g)(),y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TINY_MCE;Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/directories/all");case 2:t=e.sent,n=t.data.directories,m(n);case 5:case"end":return e.stop()}}),e)})))()}),[]);var S=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/documents",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,body:d,"parent-directory":w})});case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:a=e.sent,c=a.id,N.push("/documents/".concat(c));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"content-wrapper",children:Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsx)("h1",{className:"form-title",children:"Write"}),Object(a.jsxs)("form",{onSubmit:S,children:[Object(a.jsxs)("div",{className:"title-wrapper",children:[Object(a.jsx)("label",{children:"Document Title"}),Object(a.jsx)("input",{type:"text",name:"title",required:!0,onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)("div",{className:"parent-directory-wrapper",children:[Object(a.jsx)("label",{children:"Parent Directory"}),Object(a.jsx)("select",{required:!0,name:"parent-directory",onChange:function(e){g(e.target.value)},children:f.map((function(e){return Object(a.jsx)("option",{children:e.name},e.id)}))})]}),Object(a.jsx)(E.a,{required:!0,apiKey:y,plugins:"wordcount wordcount fullscreen image preview",onEditorChange:function(e,t){p(e)}}),Object(a.jsx)("div",{className:"button-wrapper",children:Object(a.jsx)("button",{type:"submit",className:"submit-button",children:"Add Document"})})]})]})})}),D=n(135),P=n(137),W=n(63),F=n.n(W),I=n(64),L=n.n(I),R=n(138),q=(n(101),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(j.a)(s,2),o=i[0],d=i[1],p=Object(c.useState)([]),h=Object(j.a)(p,2),O=h[0],f=h[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),v=x[0],w=x[1],g=Object(c.useState)(""),N=Object(j.a)(g,2),y=N[0],S=N[1],k=Object(c.useState)([]),C=Object(j.a)(k,2),E=C[0],T=C[1],A=Object(b.g)();Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/directories/");case 2:t=e.sent,n=t.data.root,r(n);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/directories/all");case 2:t=e.sent,n=t.data.directories,f(n),w(n[0].id);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/documents/");case 2:t=e.sent,T(t.data.documents);case 4:case"end":return e.stop()}}),e)})))()}),[]);var W=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,_.a.post("/api/directories/",{"parent-directory":v,"directory-name":y});case 3:e.sent.ok&&A.push("/directories/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(D.a)({root:{height:110,flexGrow:1,maxWidth:400}})();return Object(a.jsxs)("div",{className:"page-wrapper",children:[Object(a.jsx)("div",{className:"header-wrapper",children:Object(a.jsx)("h1",{className:"directories-header",children:"Directories"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"submit",className:"buttons",onClick:function(){return d(!o)},children:"Add New Directory"}),o?Object(a.jsxs)("form",{onSubmit:W,className:"new-directory-form",children:[Object(a.jsxs)("div",{className:"inputs-wrapper",children:[Object(a.jsx)("label",{children:"Parent Directory"}),Object(a.jsx)("select",{name:"parent-directory",onChange:function(e){w(e.target.value)},value:v,required:!0,children:O.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name})}))}),Object(a.jsx)("label",{children:"Directory Name"}),Object(a.jsx)("input",{type:"text",name:"directory-name",onChange:function(e){S(e.target.value)},required:!0})]}),Object(a.jsx)("button",{type:"submit",className:"buttons",children:"Add Directory"})]}):null]}),Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{className:I.root,defaultCollapseIcon:Object(a.jsx)(F.a,{}),defaultExpanded:["root"],defaultExpandIcon:Object(a.jsx)(L.a,{}),children:function e(t){return Object(a.jsxs)(R.a,{nodeId:t.id,label:t.name,children:[Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null,E.filter((function(e){return e.directory_id===t.id})).map((function(e){return Object(a.jsx)(R.a,{nodeId:"".concat(t.id,"-").concat(e.id),label:e.title,onClick:function(){return A.push("documents/".concat(e.id))}},e.id)}))]},t.id)}(n)})})]})}),H=n(65),K=(n(62),function(e){var t=e.title,n=e.body,r=Object(c.useState)(t),s=Object(j.a)(r,2),i=s[0],o=s[1],d=Object(c.useState)(n),p=Object(j.a)(d,2),h=p[0],O=p[1],f=Object(c.useState)(!1),m=Object(j.a)(f,2),x=m[0],v=m[1],w=Object(b.h)().id,g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TINY_MCE,N=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:i,body:h},e.next=3,_.a.put("/api/documents/".concat(w),t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:x?Object(a.jsx)(U,{}):Object(a.jsxs)("div",{className:"form-wrapper",children:[Object(a.jsxs)("form",{onSubmit:N,children:[Object(a.jsxs)("div",{className:"title-wrapper",children:[Object(a.jsx)("label",{children:"New Title"}),Object(a.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})]}),Object(a.jsx)(E.a,{value:h,apiKey:g,plugins:"wordcount wordcount fullscreen image preview",onEditorChange:function(e,t){O(e)}}),Object(a.jsx)("div",{className:"buttons-wrapper",children:Object(a.jsx)("button",{type:"submit",className:"buttons",children:"Save"})})]}),Object(a.jsx)("div",{className:"buttons-wrapper",children:Object(a.jsx)("button",{className:"buttons",onClick:function(){return v(!x)},children:"Cancel"})})]})})}),U=function(e){e.authenticate;var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),d=o[0],p=o[1],h=Object(b.g)(),O=Object(b.h)().id;Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/api/documents/".concat(O));case 2:t=e.sent,n=t.data,s(n.document);case 5:case"end":return e.stop()}}),e)})))()}),[O]);var f=r.title,m=r.body,x=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.delete("/api/documents/".concat(t));case 2:h.push("/directories");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"document-content-wrapper",children:d?Object(a.jsx)(K,{title:f,body:m}):Object(a.jsxs)("div",{className:"document-wrapper",children:[Object(a.jsx)("div",{className:"title-wrapper",children:Object(a.jsx)("h1",{className:"document-title",children:r.title})}),Object(a.jsx)("div",{className:"body-wrapper",children:r.body&&Object(H.a)(r.body)}),Object(a.jsxs)("div",{className:"buttons-wrapper",children:[Object(a.jsx)("button",{className:"buttons",onClick:function(){return x(r.id)},children:"Delete"}),Object(a.jsx)("button",{className:"buttons",onClick:function(){return p(!d)},children:"Edit"})]})]})})},J=(n(116),function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("div",{className:"main-logo",children:Object(a.jsx)("h1",{className:"logo-text",style:{fontFamily:"Permanent Marker, cursive"},children:"World Foundry"})}),Object(a.jsx)("ul",{className:"nav-links",children:Object(a.jsxs)("li",{children:[Object(a.jsxs)(d.b,{exact:!0,to:"/",activeClassName:"active",className:"nav-link",children:[Object(a.jsx)("i",{class:"fas fa-home"})," Home"]}),Object(a.jsxs)("a",{className:"nav-link",href:"https://github.com/zdwatts/world-foundry",children:[Object(a.jsx)("i",{class:"fab fa-github footer-icon fa-md"})," GitHub"]})]})})]})});var M=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(j.a)(s,2),o=i[0],h=i[1];return Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:e.sent.errors||r(!0),h(!0);case 5:case"end":return e.stop()}}),e)})))()}),[]),o?Object(a.jsxs)(d.a,{children:[Object(a.jsx)(C,{setAuthenticated:r,authenticated:n,authenticate:p}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{path:"/login",exact:!0,children:Object(a.jsx)(x,{setAuthenticated:r,authenticated:n})}),Object(a.jsx)(b.b,{path:"/signup",children:Object(a.jsx)(v,{setAuthenticated:r,authenticated:n})}),Object(a.jsx)(b.b,{exact:!0,path:"/",children:Object(a.jsx)(y,{authenticated:n})}),Object(a.jsx)(g,{exact:!0,path:"/documents",authenticated:n,children:Object(a.jsx)(A,{authenticate:p})}),Object(a.jsx)(g,{path:"/documents/:id",authenticated:n,children:Object(a.jsx)(U,{authenticate:p})}),Object(a.jsx)(g,{exact:!0,path:"/directories",authenticated:n,children:Object(a.jsx)(q,{})})]}),Object(a.jsx)(J,{})]}):null};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))},38:function(e,t,n){},62:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.c10b3f02.chunk.js.map