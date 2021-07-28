(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[0],{64:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(17),i=c.n(n),r=(c(64),c(14)),o=(c(68),c(30)),l=Object(o.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload,console.log(t)},logout:function(e){e.user=null}}}),j=l.actions,d=j.login,A=j.logout,b=function(e){return e.user.user},u=l.reducer,O=c(19),h=c(49),p=c.n(h),m=c(47),x=c.n(m),f=c(48),g=c.n(f),v=c(45),N=c.n(v),U=c(46),k=c.n(U),C=(c(69),c(70),c(3));var y=function(e){var t=e.title,c=e.Icon,s=e.color;return Object(C.jsxs)("div",{className:"inputOption",children:[Object(C.jsx)(c,{style:{color:s}}),Object(C.jsx)("h4",{children:t})]})},D=c(97),S=c(41),I=c.n(S),B=c(42),w=c.n(B),E=c(43),H=c.n(E),K=c(44),Q=c.n(K),J=(c(72),Object(s.forwardRef)((function(e,t){var c=e.name,s=e.description,a=e.message,n=e.photoUrl;return Object(C.jsxs)("div",{ref:t,className:"post",children:[Object(C.jsxs)("div",{className:"post__header",children:[Object(C.jsx)(D.a,{src:n,children:c[0]}),Object(C.jsxs)("div",{className:"post__info",children:[Object(C.jsx)("h2",{children:c}),Object(C.jsx)("p",{children:s})]})]}),Object(C.jsx)("div",{className:"post__body",children:Object(C.jsx)("p",{children:a})}),Object(C.jsxs)("div",{className:"post__button",children:[Object(C.jsx)(y,{Icon:I.a,title:"Like",color:"grey"}),Object(C.jsx)(y,{Icon:w.a,title:"Comment",color:"grey"}),Object(C.jsx)(y,{Icon:H.a,title:"Share",color:"grey"}),Object(C.jsx)(y,{Icon:Q.a,title:"Send",color:"grey"})]})]})}))),M=c(25),X=M.a.initializeApp({apiKey:"AIzaSyC-5NMzGnTF1hjusv3ys2KBUN6eIVOOiCU",authDomain:"linkedin-clone-aa909.firebaseapp.com",projectId:"linkedin-clone-aa909",storageBucket:"linkedin-clone-aa909.appspot.com",messagingSenderId:"614475619805",appId:"1:614475619805:web:e91d82ba581e648484ea34"}).firestore(),T=M.a.auth(),V=c(50);function F(){var e=Object(r.c)(b),t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)([]),o=Object(O.a)(i,2),l=o[0],j=o[1];Object(s.useEffect)((function(){X.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);return Object(C.jsxs)("div",{className:"feed",children:[Object(C.jsxs)("div",{className:"feed__inputContainer",children:[Object(C.jsxs)("div",{className:"feed__input",children:[Object(C.jsx)(N.a,{}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},type:"text"}),Object(C.jsx)("button",{onClick:function(t){t.preventDefault(),X.collection("posts").add({name:e.displayName,description:e.email,message:a,photoUrl:e.photoUrl||"",timestamp:M.a.firestore.FieldValue.serverTimestamp()}),n("")},type:"submit",children:"Send"})]})]}),Object(C.jsxs)("div",{className:"feed__inputOption",children:[Object(C.jsx)(y,{Icon:k.a,title:"Photo",color:"#7085F9"}),Object(C.jsx)(y,{Icon:x.a,title:"video",color:"#E7A33A"}),Object(C.jsx)(y,{Icon:g.a,title:"Event",color:"#C0CBCD"}),Object(C.jsx)(y,{Icon:p.a,title:"Write Article",color:"#7FC15E"})]})]}),Object(C.jsx)(V.a,{children:l.map((function(e){var t=e.id,c=e.data,s=c.name,a=c.description,n=c.message,i=c.photoUrl;return Object(C.jsx)(J,{name:s,description:a,message:n,photoUrl:i},t)}))})]})}c(78);var _=c(51),z=c.n(_);c(79);var Y=function(e){var t=e.avatar,c=e.Icon,s=e.title,a=e.onClick,n=Object(r.c)(b);return Object(C.jsxs)("div",{onClick:a,className:"headerOption",children:[c&&Object(C.jsx)(c,{className:"headerOption__icon"}),t&&Object(C.jsx)(D.a,{className:"headerOption__icon",children:null===n||void 0===n?void 0:n.email[0]}),Object(C.jsx)("h3",{className:"headerOption__title",children:s})]})},L=c(52),Z=c.n(L),G=c(53),P=c.n(G),R=c(54),W=c.n(R),q=c(55),$=c.n(q),ee=c(56),te=c.n(ee);var ce=function(){var e=Object(r.b)();return Object(C.jsxs)("div",{className:"header",children:[Object(C.jsxs)("div",{className:"header__left",children:[Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAaVBMVEUAd7X///8AcLEEebb7/f4Debb9/v79/v8DeLY8l8Y7lsYAbbCcyuKlz+WQxN+Lwd0KfbiDvdvl8fcAc7O+3OwgiL6x1ehFnMlytNZqsNQZhLzF4O7w9/tSo81gqtGp0ebc7PUsjsJ8udngaOvIAAADg0lEQVRoge2abZeqIBCAGV7EjXItKjc1y/7/j7xD7m5AWHdD+uScs3s8kDzOIMwMDoGrSJ4lEC6H0ckVkUEiyeQPBC+ar+pjcqm+GsQMEAntUSuaQJQ+toZC8F+7U4KJBMKE6ltUwkAqJUgiEapCAJGwpSwVgxBGtyAJh4NKCVEH4AStRZNZC+1F0V5orgXN00FyukBzZekh2XsgbzFXCMIGSQlhTCsjegrMCEQQVXfF8rOrFYm3YxjCdFnw6zbdFkJHr6AgROjdGYAbATjXOlaXEISRcgN88GEZh3NJIuclBBF0BfzXr3EoYve1ACTXPViuOAO+izRYAMLUxVLEqBK7RQcggp48yHJ6SG5cjAWRsI/0A0FN9g6Ew2p6TZhae+a6pDDXwn67UKt++rcL3+Gts072sW4gDOn5L4VjRBa7rwT3LkarDMNvmeEf8EV0tDSyC9O++dZku4uPyEb8CdO6KrbNtvjQOt5rjXnGnGGkrKmibALfP+7jBQ6fs0lCvnHIn4Tlj2KBsTkJX4cGYgLH1yiD8n+A/LcgACevrHe7ujRXQYXCEFHaIsLNZjgMnMrjstm0nLebZnXodSi6Cbvfz3Zzk3Y97I/ozOxmE2Dkql5vnCS0OQbe+WAgoZbOjcUPpLBbeU0I7dprZi4xlZYyM8ENNP3d6h2DcPkj/Ab5vDVjkllrgg/DpfNA+HN59D3DKMTahW3ILbxoa3Ru/D75x59Uni6vQ3hZOL7N8j9+ePMqRMLmACNnGHce6FUItrcgA4ThCdwU9HUIjDLuVImAjB/4+EFnjCZXba6xv/SU8oLOOEhmvQgu5GRPShQER25Pl667nFrXeBmc7ZUSA8FxLyU1mSWtTw7Fm5S4ia/Ud5KsnVtM34dlrwiIxNkV31ZhhG1sXTh01sy/DkG7W55SqC9npcLXJBBvHEzPLFU4rCeBgBeHs7MDKaaA4A5ZWggvdXKzs5chGTSOn2XKTZlX02jiJnnGOU8O8ZO8u146CWTpQdYzZIbMkBkyQ2bIDJkhA+QmDsRqDkCs3tXTqH4FtiyDxx6BkMiW/ZO4K6eH/eom+27oy2nnNB+8DPfo9j5JgswBk/PVnj1sfnzTKMScPVpf7fMnzU97JzqDfCxvhMxfsf8Ake8pX3hLIUbqkhJtSkpSF8ccTXGMKSXqk5f5vKVg6Xpkkbz06j1FZJC6HO4fbRVnSvd35FUAAAAASUVORK5CYII=",alt:""}),Object(C.jsxs)("div",{className:"header__search",children:[Object(C.jsx)(z.a,{}),Object(C.jsx)("input",{type:"text",placeholder:"Search"})]})]}),Object(C.jsxs)("div",{className:"header__right",children:[Object(C.jsx)(Y,{Icon:Z.a,title:"Home"}),Object(C.jsx)(Y,{Icon:P.a,title:"My Network"}),Object(C.jsx)(Y,{Icon:W.a,title:"Jobs"}),Object(C.jsx)(Y,{Icon:$.a,title:"Messaging"}),Object(C.jsx)(Y,{Icon:te.a,title:"Notification"}),Object(C.jsx)(Y,{avatar:!0,title:"photo",onClick:function(){e(A()),T.signOut()}})]})]})};c(80);var se=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(O.a)(n,2),o=i[0],l=i[1],j=Object(s.useState)(""),A=Object(O.a)(j,2),b=A[0],u=A[1],h=Object(s.useState)(""),p=Object(O.a)(h,2),m=p[0],x=p[1],f=Object(r.b)();return Object(C.jsxs)("div",{className:"login",children:[Object(C.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(C.jsxs)("form",{children:[Object(C.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},placeholder:"Full name (required if registering)",type:"text"}),Object(C.jsx)("input",{value:m,onChange:function(e){return x(e.target.value)},placeholder:"Profile pic (optional)",type:"text"}),Object(C.jsx)("input",{value:c,onChange:function(e){return a(e.target.value)},placeholder:"Email",type:"email"}),Object(C.jsx)("input",{value:o,onChange:function(e){return l(e.target.value)},placeholder:"Password",type:"password"}),Object(C.jsx)("button",{onClick:function(e){e.preventDefault(),T.signInWithEmailAndPassword(c,o).then((function(e){f(d({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,profileUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(C.jsxs)("p",{children:["Not a member?",Object(C.jsx)("span",{className:"login__register",onClick:function(){if(!b)return alert("plz enter a full name!");T.createUserWithEmailAndPassword(c,o).then((function(e){e.user.updateProfile({displayName:b,photoUrl:m}).then((function(){f(d({email:e.user.email,uid:e.user.uid,displayName:b,photoUrl:m}))}))})).catch((function(e){return alert(e)}))},children:"Register Now"})]})]})};c(81);var ae=function(){var e=Object(r.c)(b),t=function(e){return Object(C.jsxs)("div",{className:"sidebar__recentItems",children:[Object(C.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(C.jsx)("p",{children:e})]})};return Object(C.jsxs)("div",{className:"sidebar",children:[Object(C.jsxs)("div",{className:"sidebar__top",children:[Object(C.jsx)("img",{src:"https://cdn.pixabay.com/photo/2021/07/09/17/10/eye-6399571_960_720.jpg",alt:""}),Object(C.jsx)(D.a,{src:e.photoUrl,className:"sidebar__avatar",children:e.email[0]}),Object(C.jsx)("h2",{children:e.displayName}),Object(C.jsx)("h4",{children:e.email})]}),Object(C.jsxs)("div",{className:"sidebar__stats",children:[Object(C.jsxs)("div",{className:"sidebar__stat",children:[Object(C.jsx)("p",{children:"who viewed you"}),Object(C.jsx)("p",{className:"sidebar__statNumber",children:"2,542"})]}),Object(C.jsxs)("div",{className:"sidebar__stat",children:[Object(C.jsx)("p",{children:"views on post"}),Object(C.jsx)("p",{className:"sidebar__statNumber",children:"2,542"})]})]}),Object(C.jsxs)("div",{className:"sidebar__button",children:[Object(C.jsx)("p",{children:"Recent"}),t("reactJs"),t("programming"),t("software engineering"),t("design"),t("developer")]})]})},ne=(c(82),c(58)),ie=c.n(ne),re=c(57),oe=c.n(re);var le=function(){var e,t;return Object(C.jsxs)("div",{className:"widgets",children:[Object(C.jsxs)("div",{className:"widgets__header",children:[Object(C.jsx)("h2",{children:"Linkedin News"}),Object(C.jsx)(ie.a,{})]}),(e="react is back",t="top news -9999 readers",Object(C.jsxs)("div",{className:"widgets__article",children:[Object(C.jsx)("div",{className:"widgets__articleLeft",children:Object(C.jsx)(oe.a,{})}),Object(C.jsxs)("div",{className:"widgets__articleRight",children:[Object(C.jsx)("h4",{children:e}),Object(C.jsx)("p",{children:t})]})]}))]})};var je=function(){var e=Object(r.c)(b),t=Object(r.b)();return Object(s.useEffect)((function(){T.onAuthStateChanged((function(e){t(e?d({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.profilePic}):A())}))}),[t]),Object(C.jsxs)("div",{className:"app",children:[Object(C.jsx)(ce,{}),e?Object(C.jsxs)("div",{className:"app__body",children:[Object(C.jsx)(ae,{}),Object(C.jsx)(F,{}),Object(C.jsx)(le,{})]}):Object(C.jsx)(se,{})]})},de=Object(o.a)({reducer:{user:u}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(r.a,{store:de,children:Object(C.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.bf57e1a2.chunk.js.map