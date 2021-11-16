(this["webpackJsonplogin-app"]=this["webpackJsonplogin-app"]||[]).push([[0],{136:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),s=i(37),n=i.n(s),o=(i(77),i(15)),c=i(16),l=i(18),p=i(17),u=i(11),d=i(10),x="REGISTER",m="REGISTER_SUCCESS",b="REGISTER_FAILED",h="REGISTER_RESET",f="SIGNIN",k="SIGNIN_SUCCESS",j="SIGNIN_FAILED",y=i(1),g=function(e){Object(l.a)(i,e);var t=Object(p.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"submitSignIn",value:function(e){var t=this;if(e.preventDefault(),this._email.value&&this._password.value){var i=this.props.userData.find((function(e){return e.email===t._email.value}));if(console.log(i),void 0!==i)return i.password!==this._password.value?void alert("Password is incorect!"):(console.log("foundUser: ",i),this.props.submitSignIn(i),this.props.history.push("/dashboard"));alert("No user ".concat(this._email.value," in the local storage"))}else alert("Fill in the form")}},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"bg-gray-200 w-screen h-screen flex justify-center items-center",children:Object(y.jsxs)("div",{className:"lg:w-1/3 md:w-3/5 sm:w-5/6 text-center",children:[Object(y.jsx)("p",{className:"text-3xl font-bold mb-8",children:"Welcome \ud83d\udc4b"}),Object(y.jsxs)("form",{className:"w-full",onSubmit:function(t){return e.submitSignIn(t)},children:[Object(y.jsx)("input",{type:"email",placeholder:"Email",className:"bg-white w-full rounded px-3 py-2 mb-4",ref:function(t){return e._email=t}}),Object(y.jsx)("input",{type:"password",placeholder:"Password",className:"bg-white w-full rounded px-3 py-2 mb-4",ref:function(t){return e._password=t}}),Object(y.jsx)("button",{type:"submit",className:"bg-blue-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4",children:"Login"})]}),Object(y.jsx)(u.b,{to:"/register",children:Object(y.jsx)("button",{type:"button",className:"text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4",children:"Register New Account"})})]})})}}]),i}(a.a.Component),O={submitSignIn:function(e){return function(t){try{t({type:f}),setTimeout((function(){t({type:k,payload:e})}),1)}catch(i){t({type:j,error:i})}}}},w=Object(d.b)((function(e){return{userData:e.register.data}}),O)(g),v=i(68),S=i.n(v),_={loop:!0,autoplay:!0,animationData:i(69),rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},D=function(e){Object(l.a)(i,e);var t=Object(p.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(y.jsx)("div",{children:Object(y.jsx)(S.a,{options:_,height:25,width:100})})}}]),i}(a.a.Component),N=D,E=function(e){Object(l.a)(i,e);var t=Object(p.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"submitRegister",value:function(e){var t=this;if(e.preventDefault(),this._email.value&&this._password.value&&this._confirmPassword.value)if(this._password.value===this._confirmPassword.value){var i={key:Date.now(),email:this._email.value,password:this._password.value};console.log(i),this.props.submitRegister(i),setTimeout((function(){console.log(t.props.userJSON)}),4e3)}else alert("Password not match");else alert("Fill in the form")}},{key:"resetRegister",value:function(){this.props.resetRegister()}},{key:"render",value:function(){var e=this;return Object(y.jsx)("div",{className:"bg-gray-200 w-screen h-screen flex justify-center items-center",children:Object(y.jsxs)("div",{className:"lg:w-1/3 md:w-3/5 sm:w-5/6 text-center",children:[Object(y.jsx)("p",{className:"text-3xl font-bold mb-8",children:"Hello New User \u270c\ufe0f"}),Object(y.jsxs)("form",{className:"w-full",onSubmit:function(t){return e.submitRegister(t)},children:[Object(y.jsx)("input",{type:"email",placeholder:"Email",className:"bg-white w-full rounded px-3 py-2 mb-4",ref:function(t){return e._email=t}}),Object(y.jsx)("input",{type:"password",placeholder:"Password",className:"bg-white w-full rounded px-3 py-2 mb-4",ref:function(t){return e._password=t}}),Object(y.jsx)("input",{type:"password",placeholder:"Repeat password",className:"bg-white w-full rounded px-3 py-2 mb-4",ref:function(t){return e._confirmPassword=t}}),this.props.registerData.isSignedUp?Object(y.jsx)(u.b,{to:"/",children:Object(y.jsx)("button",{type:"button",className:"bg-green-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4",children:"Finished"})}):this.props.registerData.isLoading?Object(y.jsx)("button",{type:"button",disabled:!0,className:"bg-gray-400 text-gray-500 animate-pulse font-semibold w-full rounded px-3 py-2 mt-4 mb-4",children:Object(y.jsx)(N,{})}):Object(y.jsx)("button",{type:"submit",className:"bg-blue-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4",children:"Sign up"})]}),this.props.registerData.isSignedUp?Object(y.jsx)("button",{onClick:function(){return e.resetRegister()},className:"text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4",children:"Register again"}):Object(y.jsx)(u.b,{to:"/",children:Object(y.jsx)("button",{type:"submit",className:"text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4",children:"Signed up already? Login here"})})]})})}}]),i}(a.a.Component),G={submitRegister:function(e){return function(t){try{t({type:x}),setTimeout((function(){t({type:m,payload:e})}),4e3)}catch(i){t({type:b,error:i})}}},resetRegister:function(){return{type:h}}},A=Object(d.b)((function(e){return{registerData:e.register,userJSON:JSON.stringify(e.register.data)}}),G)(E),I=function(e){Object(l.a)(i,e);var t=Object(p.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"bg-gray-200 w-screen h-screen flex justify-center items-center",children:Object(y.jsxs)("div",{className:"lg:w-1/3 md:w-3/5 sm:w-5/6 text-center",children:[Object(y.jsxs)("p",{className:"text-3xl font-bold mb-8",children:["Hello ",this.props.userData.email," \ud83d\ude80"]}),Object(y.jsx)(u.b,{to:"/",children:Object(y.jsx)("button",{className:"w-2/3 border-2 border-blue-600 text-blue-600 font-semibold rounded px-3 py-2 mt-4",children:"Return to login page"})}),Object(y.jsx)("div",{})]})})}}]),i}(a.a.Component),R=Object(d.b)((function(e){return{userData:e.signin.user}}),{})(I),B=i(3);var V=Object(d.b)((function(e){return{isSignedIn:e.signin.isSignedIn}}),{})((function(){return Object(y.jsx)(u.a,{basename:"/react-day-7",children:Object(y.jsxs)(B.c,{children:[Object(y.jsx)(B.a,{path:"/",component:w,exact:!0}),Object(y.jsx)(B.a,{path:"/register",component:A,exact:!0}),Object(y.jsx)(B.a,{path:"/dashboard",component:R,exact:!0})]})})})),F=i(70),L=i(72),P=i(12),T=i(71),U=i.n(T),C=i(4),J=i(30),M={isLoading:!1,isSignedUp:!1,data:[],error:null},H=function(e,t){switch(t.type){case x:return{isLoading:!0,isSignedUp:!1,data:Object(J.a)(e.data),error:null};case m:return{isLoading:!1,isSignedUp:!0,data:[].concat(Object(J.a)(e.data),[t.payload]),error:null};case b:return{isLoading:!1,isSignedUp:!1,data:Object(J.a)(e.data),error:t.error};case h:return{isLoading:!1,isSignedUp:!1,data:Object(J.a)(e.data),error:null};default:return M}},z={isLoading:!1,isSignIn:!1,user:{},error:null},W=function(e,t){switch(t.type){case f:return{isLoading:!0,isSignIn:!1,user:{},error:null};case k:return{isLoading:!1,isSignIn:!0,user:t.payload,error:null};case j:return{isLoading:!1,isSignIn:!1,user:e.data,error:t.error};default:return z}},Y=Object(C.b)({register:H,signin:W}),q={key:"root",storage:U.a},K=Object(P.g)(q,Y),Q=Object(L.a)({reducer:K,middleware:function(e){return e({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})}}),X=Object(P.h)(Q);n.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(d.a,{store:Q,children:Object(y.jsx)(F.a,{loading:null,persistor:X,children:Object(y.jsx)(V,{})})})}),document.getElementById("root"))},69:function(e){e.exports=JSON.parse('{"v":"5.1.10","fr":60,"ip":0,"op":240,"w":800,"h":600,"nm":"Dot Animation","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Dot-2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":120,"s":[800,600,0],"e":[1059.5,600,0],"to":[43.25,0,0],"ti":[-43.25,0,0]},{"t":135}],"ix":2},"a":{"a":0,"k":[330.824,71.341,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.263,0],[0,39.263],[-39.263,0]],"o":[[0,39.263],[-39.263,0],[0,-39.263],[39.263,0]],"v":[[71.091,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":125,"s":[0.500118300494,0.500118240656,0.500118300494,1],"e":[0.247058823705,0.247058823705,0.247058823705,1]},{"t":135}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[330.823,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":120,"op":180,"st":113,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Dot-1_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":75,"s":[800.278,600,0],"e":[1059.341,600,0],"to":[43.1770820617676,0,0],"ti":[-43.1770820617676,0,0]},{"t":90}],"ix":2},"a":{"a":0,"k":[330.824,71.341,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.262,0],[0,39.263],[-39.263,0]],"o":[[0,39.263],[-39.263,0],[0,-39.263],[39.262,0]],"v":[[71.091,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":80,"s":[0.749386536841,0.749386417165,0.749386477003,1],"e":[0.501960813999,0.501960813999,0.501960813999,1]},{"t":90}],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[71.341,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":195,"st":40,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Dot-1/1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[541.528,600,0],"ix":2},"a":{"a":0,"k":[72.074,71.341,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":30,"s":[0,0,100],"e":[100,100,100]},{"t":45}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.262,0],[0,39.263],[-39.263,0]],"o":[[0,39.263],[-39.263,0],[0,-39.263],[39.262,0]],"v":[[71.091,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.749386536841,0.749386417165,0.749386477003,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[71.341,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":30,"op":211,"st":-5,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Dot-25 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[800,600,0],"ix":2},"a":{"a":0,"k":[330.824,71.341,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.263,0],[0,39.263],[-39.262,0]],"o":[[0,39.263],[-39.262,0],[0,-39.263],[39.263,0]],"v":[[71.092,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.899969003715,0.899968943876,0.899968943876,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[590.306,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.263,0],[0,39.263],[-39.263,0]],"o":[[0,39.263],[-39.263,0],[0,-39.263],[39.263,0]],"v":[[71.091,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.899969003715,0.899968943876,0.899968943876,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[330.823,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-39.263],[39.262,0],[0,39.263],[-39.263,0]],"o":[[0,39.263],[-39.263,0],[0,-39.263],[39.262,0]],"v":[[71.091,0],[0,71.091],[-71.091,0],[0,-71.091]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.899969003715,0.899968943876,0.899968943876,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[71.341,71.341],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"ix":3,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Pre-comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,300,0],"ix":2},"a":{"a":0,"k":[800,600,0],"ix":1},"s":{"a":0,"k":[30,30,100],"ix":6}},"ao":0,"w":1600,"h":1200,"ip":0,"op":240,"st":0,"bm":0}],"markers":[]}')},77:function(e,t,i){}},[[136,1,2]]]);
//# sourceMappingURL=main.0ae359d0.chunk.js.map