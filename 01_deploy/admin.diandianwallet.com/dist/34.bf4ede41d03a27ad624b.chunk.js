webpackJsonp([34],{197:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(278),o=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var i=e(325),s=e.n(i),c=!1;var l=function(n){c||e(323)},d=e(0)(o.a,s.a,!1,l,null,null);d.options.__file="src\\views\\error-page\\404.vue",t.default=d.exports},278:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Error404",methods:{backPage:function(){this.$router.go(-1)},goHome:function(){this.$router.push({name:"home_index"})}}}},323:function(n,t,e){var r=e(324);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(5)("1615c22d",r,!1,{})},324:function(n,t,e){(n.exports=e(4)(!1)).push([n.i,"\n@keyframes error404animation {\n0% {\n    transform: rotateZ(0deg);\n}\n20% {\n    transform: rotateZ(-60deg);\n}\n40% {\n    transform: rotateZ(-10deg);\n}\n60% {\n    transform: rotateZ(50deg);\n}\n80% {\n    transform: rotateZ(-20deg);\n}\n100% {\n    transform: rotateZ(0deg);\n}\n}\n.error404-body-con {\n  width: 700px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.error404-body-con-title {\n  text-align: center;\n  font-size: 240px;\n  font-weight: 700;\n  color: #2d8cf0;\n  height: 260px;\n  line-height: 260px;\n  margin-top: 40px;\n}\n.error404-body-con-title span {\n  display: inline-block;\n  color: #19be6b;\n  font-size: 230px;\n  animation: error404animation 3s ease 0s infinite alternate;\n}\n.error404-body-con-message {\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 12px;\n  color: #dddde2;\n}\n.error404-btn-con {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 40px;\n}\n",""])},325:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"error404"},[e("div",{staticClass:"error404-body-con"},[e("Card",[e("div",{staticClass:"error404-body-con-title"},[n._v("4"),e("span",[e("Icon",{attrs:{type:"ios-navigate-outline"}})],1),n._v("4")]),n._v(" "),e("p",{staticClass:"error404-body-con-message"},[n._v("YOU  LOOK  LOST")]),n._v(" "),e("div",{staticClass:"error404-btn-con"},[e("Button",{staticStyle:{width:"200px"},attrs:{size:"large",type:"text"},on:{click:n.goHome}},[n._v(n._s(n.$t("youdonthavepermission.returntothehomepage")))]),n._v(" "),e("Button",{staticStyle:{width:"200px","margin-left":"40px"},attrs:{size:"large",type:"primary"},on:{click:n.backPage}},[n._v(n._s(n.$t("oopstheserveriswrong.returntothepreviouspage")))])],1)])],1)])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};t.default=o}});