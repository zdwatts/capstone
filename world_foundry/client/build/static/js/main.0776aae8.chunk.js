(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),s=n(20),i=n.n(s),u=(n(67),n(4)),o=n.n(u),j=n(6),l=n(7),d=n(10),b=n(8),p=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,a,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"demo@aa.io",n=r.length>1&&void 0!==r[1]?r[1]:"password",e.next=4,fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 4:return a=e.sent,e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/logout",{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(o.a.mark((function e(t,n,a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,email:n,password:a})});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),m=(n(69),function(e){var t=e.authenticated,n=e.setAuthenticated,c=Object(r.useState)([]),s=Object(l.a)(c,2),i=s[0],u=s[1],d=Object(r.useState)(""),p=Object(l.a)(d,2),O=p[0],x=p[1],f=Object(r.useState)(""),m=Object(l.a)(f,2),v=m[0],g=m[1],w=function(){var e=Object(j.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h(O,v);case 3:(a=e.sent).errors?u(a.errors):n(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"login-form-wrapper",children:Object(a.jsxs)("form",{onSubmit:w,className:"login-form",children:[Object(a.jsx)("div",{className:"errors-wrapper",children:i.map((function(e){return Object(a.jsx)("div",{className:"errors",children:Object(a.jsx)("p",{className:"error",children:e})})}))}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("h1",{className:"form-title",children:"Writer's Workshop"}),Object(a.jsx)("h3",{className:"form-subtitle",children:"Log In"}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"input",name:"email",type:"text",value:O,onChange:function(e){x(e.target.value)}})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{className:"input",name:"password",type:"password",value:v,onChange:function(e){g(e.target.value)}})]}),Object(a.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),Object(a.jsxs)("p",{className:"cta",children:["Not a member?"," ",Object(a.jsx)("a",{className:"cta-link",href:"/signup",children:"Register here"})]})]})})}),v=(n(74),function(e){var t=e.authenticated,n=e.setAuthenticated,c=Object(r.useState)(""),s=Object(l.a)(c,2),i=s[0],u=s[1],d=Object(r.useState)(""),p=Object(l.a)(d,2),h=p[0],O=p[1],x=Object(r.useState)(""),m=Object(l.a)(x,2),v=m[0],g=m[1],w=Object(r.useState)(""),y=Object(l.a)(w,2),N=y[0],S=y[1],k=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),v!==N){e.next=6;break}return e.next=4,f(i,h,v);case 4:e.sent.errors||n(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)("div",{className:"signup-form-wrapper",children:Object(a.jsxs)("form",{onSubmit:k,className:"signup-form",children:[Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("h1",{className:"form-title",children:"Writer's Workshop"}),Object(a.jsx)("h3",{className:"form-subtitle",children:"Sign Up"}),Object(a.jsx)("label",{children:"Username"}),Object(a.jsx)("input",{className:"input",type:"text",name:"username",onChange:function(e){u(e.target.value)},value:i,required:!0})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"input",required:!0,type:"text",name:"Email",onChange:function(e){O(e.target.value)},value:h})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{className:"input",required:!0,type:"password",name:"password",onChange:function(e){g(e.target.value)},value:v})]}),Object(a.jsxs)("div",{className:"input-wrapper",children:[Object(a.jsx)("label",{children:"Confirm Password"}),Object(a.jsx)("input",{className:"input",required:!0,type:"password",name:"confirm-password",onChange:function(e){S(e.target.value)},value:N})]}),Object(a.jsx)("button",{type:"submit",className:"signup-button",children:"Sign Up"}),Object(a.jsxs)("p",{className:"cta",children:["Already registered?"," ",Object(a.jsx)("a",{className:"cta-link",href:"/login",children:"Log In"})]})]})})}),g=n(40),w=function(e){return Object(a.jsx)(b.b,Object(g.a)(Object(g.a)({},e),{},{children:e.authenticated?e.children:Object(a.jsx)(b.a,{to:"/login"})}))},y=(n(75),function(e){var t=e.authenticated,n=Object(r.useState)(""),c=Object(l.a)(n,2),s=c[0],i=c[1];Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,n=t.username,i(n);case 5:case"end":return e.stop()}}),e)})))()}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("h1",{className:"greeting",children:["Greetings, ",function(){var e;return e=t?s:"Guest",e}(),"."]})})}),N=(n(36),function(e){var t=e.setAuthenticated,n=e.authenticated,r=Object(b.g)(),c=function(){var e=Object(j.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t(!1),r.push("/"),window.location.reload(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(a.jsx)("button",{className:"buttons",onClick:c,children:n?"Logout":"Login"}):""}),S=function(e){var t=e.setAuthenticated,n=e.authenticated,r=function(){var e=Object(j.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t(!0),window.location.reload(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?"":Object(a.jsx)("button",{className:"buttons",onClick:r,children:"Demo Login"})},k=function(e){var t=e.setAuthenticated,n=e.authenticated;e.authenticate;return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("div",{className:"main-logo",children:Object(a.jsx)("a",{href:"/",style:{textDecoration:"none"},children:Object(a.jsx)("h1",{className:"logo-text",style:{fontFamily:"Permanent Marker, cursive"},children:"World Foundry"})})}),Object(a.jsx)("div",{className:"links-wrapper",children:Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{exact:!0,to:"/",children:"Home"})}),n?Object(a.jsx)(d.b,{to:"/documents",activeClassName:"active",children:"Write"}):Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/login",activeClassName:"active",children:"Log In"})}),n?Object(a.jsx)(d.b,{to:"/directories",activeClassName:"active",children:"Directories"}):Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/signup",activeClassName:"active",children:"Sign Up"})}),Object(a.jsx)("li",{children:Object(a.jsx)(S,{setAuthenticated:t,authenticated:n})}),Object(a.jsx)("li",{children:Object(a.jsx)(N,{setAuthenticated:t,authenticated:n})})]})})]})},C=n(59),E=n(19),D=n.n(E),A=function(e){e.authenticate;var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),d=u[0],p=u[1],h=Object(r.useState)([]),O=Object(l.a)(h,2),x=O[0],f=O[1],m=Object(r.useState)([]),v=Object(l.a)(m,2),g=v[0],w=v[1],y=Object(b.g)(),N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_TINY_MCE;Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/directories/all");case 2:t=e.sent,n=t.data.directories,f(n);case 5:case"end":return e.stop()}}),e)})))()}),[]);var S=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D.a.post("/api/documents/",{title:c,body:d,"parent-directory":g});case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:a=e.sent,r=a.id,y.push("/documents/".concat(r));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"document-wrapper",children:Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:S,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Document Title"}),Object(a.jsx)("input",{type:"text",name:"title",required:!0,onChange:function(e){s(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Parent Directory: "}),Object(a.jsx)("select",{required:!0,name:"parent-directory",onChange:function(e){w(e.target.value)},children:x.map((function(e){return Object(a.jsx)("option",{children:e.name})}))})]}),Object(a.jsx)(C.a,{required:!0,apiKey:N,plugins:"wordcount wordcount fullscreen image preview",onEditorChange:function(e,t){p(e)}}),Object(a.jsx)("button",{type:"submit",children:"Add Document"})]})})})},T=n(113),P=n(115),_=n(57),W=n.n(_),I=n(58),L=n.n(I),q=n(116),R=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(l.a)(s,2),u=i[0],d=i[1],p=Object(r.useState)([]),h=Object(l.a)(p,2),O=h[0],x=h[1],f=Object(r.useState)(""),m=Object(l.a)(f,2),v=m[0],g=m[1],w=Object(r.useState)(""),y=Object(l.a)(w,2),N=y[0],S=y[1],k=Object(b.g)();Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/directories/");case 2:t=e.sent,n=t.data.root,c(n);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/directories/all");case 2:t=e.sent,n=t.data.directories,x(n),g(n[0].id);case 6:case"end":return e.stop()}}),e)})))()}),[]);var C=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D.a.post("/api/directories/",{"parent-directory":v,"directory-name":N});case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:a=e.sent,r=a.id,k.push("/directories/".concat(r));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(T.a)({root:{height:110,flexGrow:1,maxWidth:400}})();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Directories"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),d(!1===u)},children:"Create New Directory"}),u?Object(a.jsxs)("form",{onSubmit:C,className:"new-directory-form",children:[Object(a.jsx)("label",{children:"Parent Directory: "}),Object(a.jsx)("select",{name:"parent-directory",onChange:function(e){g(e.target.value)},value:v,children:O.map((function(e){return Object(a.jsx)("option",{value:e.id,children:e.name})}))}),Object(a.jsx)("label",{children:"Directory Name"}),Object(a.jsx)("input",{type:"text",name:"directory-name",onChange:function(e){S(e.target.value)},required:!0}),Object(a.jsx)("button",{type:"submit",children:"Add Directory"})]}):null]}),Object(a.jsx)("div",{children:Object(a.jsx)(P.a,{className:E.root,defaultCollapseIcon:Object(a.jsx)(W.a,{}),defaultExpanded:["root"],defaultExpandIcon:Object(a.jsx)(L.a,{}),children:function e(t){return Object(a.jsx)(q.a,{nodeId:t.id,label:t.name,children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.id)}(n)})})]})},U=function(e){e.authenticate;var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(b.h)().id;return Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("/api/documents/".concat(i));case 2:t=e.sent,n=t.data,console.log(n.document),s(n.document);case 6:case"end":return e.stop()}}),e)})))()}),[i]),Object(a.jsxs)("div",{className:"document-wrapper",children:[Object(a.jsx)("div",{className:"title-wrapper",children:Object(a.jsx)("h1",{children:c.title})}),Object(a.jsx)("div",{className:"body-wrapper",children:Object(a.jsx)("p",{children:c.body})})]})};var F=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),i=Object(l.a)(s,2),u=i[0],h=i[1];return Object(r.useEffect)((function(){Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:e.sent.errors||c(!0),h(!0);case 5:case"end":return e.stop()}}),e)})))()}),[]),u?Object(a.jsxs)(d.a,{children:[Object(a.jsx)(k,{setAuthenticated:c,authenticated:n,authenticate:p}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{path:"/login",exact:!0,children:Object(a.jsx)(m,{setAuthenticated:c,authenticated:n})}),Object(a.jsx)(b.b,{path:"/signup",children:Object(a.jsx)(v,{setAuthenticated:c,authenticated:n})}),Object(a.jsx)(b.b,{exact:!0,path:"/",children:Object(a.jsx)(y,{authenticated:n})}),Object(a.jsx)(w,{exact:!0,path:"/documents",authenticated:n,children:Object(a.jsx)(A,{authenticate:p})}),Object(a.jsx)(w,{path:"/documents/:id",authenticated:n,children:Object(a.jsx)(U,{authenticate:p})}),Object(a.jsx)(w,{exact:!0,path:"/directories",authenticated:n,children:Object(a.jsx)(R,{})})]})]}):null};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.0776aae8.chunk.js.map