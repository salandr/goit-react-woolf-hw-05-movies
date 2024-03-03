"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{417:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,a,i,c,u,o,s=r(9439),p=r(7838),f=r(5515),d=r(2791),h=r(7689),l=r(4390),m=r(5462),v=r(168),g=r(7924),x=(0,g.ZP)("div")(t||(t=(0,v.Z)([""]))),Z=(0,g.ZP)("ul")(a||(a=(0,v.Z)(["\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: repeat(8, 1fr);\n  }\n"]))),w=(0,g.ZP)("li")(i||(i=(0,v.Z)([""]))),j=(0,g.ZP)("img")(c||(c=(0,v.Z)(["\n  display: block;\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n"]))),y=(0,g.ZP)("p")(u||(u=(0,v.Z)(["\n  margin-top: 10px;\n"]))),b=(0,g.ZP)("p")(o||(o=(0,v.Z)(["\n  margin-top: 10px;\n"]))),I=r(184),M=function(){var n=(0,d.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],a=(0,d.useState)(!1),i=(0,s.Z)(a,2),c=i[0],u=i[1],o=(0,d.useState)(null),v=(0,s.Z)(o,2),g=v[0],M=v[1],k=(0,h.UO)().movieId;return(0,d.useEffect)((function(){u(!0),M(null),(0,l.IQ)(k).then((function(n){var e=n.cast;t(e)})).catch((function(n){M(n.message)})).finally((function(){u(!1)}))}),[k]),(0,I.jsx)(f.Z,{isLoading:c,error:g,children:(0,I.jsx)(x,{children:r.length>0?(0,I.jsx)(Z,{children:r.map((function(n){var e=n.cast_id,r=n.character,t=n.name,a=n.profile_path;return(0,I.jsxs)(w,{children:[(0,I.jsx)(j,{src:a?(0,m.o)(a):"".concat("/goit-react-woolf-hw-05-movies","/no-image.png"),alt:t}),(0,I.jsx)(y,{children:t}),(0,I.jsxs)(b,{children:["Character: ",r]})]},e)}))}):(0,I.jsx)(p.Z,{message:"There are no cast here"})})})}},7838:function(n,e,r){r.d(e,{Z:function(){return f}});var t,a,i=r(168),c=r(7924),u=(0,c.ZP)("div")(t||(t=(0,i.Z)(["\n  padding: 20px;\n"]))),o=(0,c.ZP)("p")(a||(a=(0,i.Z)(["\n  color: green;\n  font-size: 20px;\n"]))),s=r(2070),p=r(184),f=function(n){var e=n.message;return(0,p.jsx)(s.Z,{children:(0,p.jsx)(u,{children:(0,p.jsx)(o,{children:e})})})}},5515:function(n,e,r){r.d(e,{Z:function(){return p}});var t,a=r(7838),i=r(4137),c=r(168),u=(0,r(7924).ZP)("div")(t||(t=(0,c.Z)(["\n  /* position: fixed; */\n  /* top: 0; */\n  /* left: 0; */\n  /* width: 100vw; */\n  /* height: 100vh; */\n\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),o=r(184),s=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(i.iT,{visible:!0,height:"60",width:"60",color:"#a6a2c9",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},p=function(n){var e=n.children,r=n.isLoading,t=n.error,i=void 0===t?null:t;return r?(0,o.jsx)(s,{}):i?(0,o.jsx)(a.Z,{message:i}):(0,o.jsx)(o.Fragment,{children:e})}},4390:function(n,e,r){r.d(e,{IQ:function(){return d},Jh:function(){return h},Pg:function(){return f},Zh:function(){return p},yE:function(){return s}});var t=r(5861),a=r(4687),i=r.n(a),c=r(5294),u=r(6210),o=c.Z.create({baseURL:u._n,headers:{Authorization:"Bearer ".concat(u.LA)},params:{language:"en-US"}}),s=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie",{params:{include_adult:!1,query:e,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6210:function(n,e,r){r.d(e,{LA:function(){return a},MH:function(){return i},_n:function(){return t}});var t="https://api.themoviedb.org/3",a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTM2Y2U5NDg4MjY2MWVjZmQ3NWQyYzIyZTg5MDVhYSIsInN1YiI6IjYzMzQ1NmYwZDQ2NTM3MDA4MmFhMzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Yo7St9bT1yiAwYdr2Wq1_-3d7SD_Cu2hBotpJshr_I",i="https://image.tmdb.org/t/p/w500"},5462:function(n,e,r){r.d(e,{o:function(){return a}});var t=r(6210),a=function(n){return t.MH+n}}}]);
//# sourceMappingURL=417.cfd4310d.chunk.js.map