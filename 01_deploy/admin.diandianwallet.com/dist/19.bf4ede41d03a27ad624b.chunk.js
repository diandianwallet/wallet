webpackJsonp([19],{206:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(288),o=t.n(a);for(var s in a)"default"!==s&&function(e){t.d(r,e,function(){return a[e]})}(s);var n=t(354),l=t.n(n),i=!1;var p=function(e){i||t(352)},m=t(0)(o.a,l.a,!1,p,"data-v-2cda9431",null);m.options.__file="src\\views\\system\\AddAuditEmployee.vue",r.default=m.exports},288:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(11),o=t(22);r.default={data:function(){return{uerpsCheck:!1,employeeID:null,swtichMore:!1,roleArr:[],departArr:[],formWrapperObj:{id:null,username:null,password:null,enable:0,passwdCheck:null,roleId:null,departmentId:null,realName:null,mobilePhone:null,qq:null,email:null,avatar:null},ruleFrom:{username:[{required:!0,message:this.$t("modifyuser.usernamecannotbeempty"),trigger:"blur"}],role:[{required:!0,message:this.$t("modifyuser.pleaseselectarole"),trigger:"blur"}],depart:[{required:!0,message:this.$t("modifyuser.pleaseselectyourdepartment"),trigger:"blur"}],realName:[{required:!0,message:this.$t("modifyuser.pleasefillinthecorrectformat"),trigger:"blur"}],mobilePhone:[{required:!0,message:this.$t("modifyuser.pleasefillinthecorrectmobilenumber"),trigger:"blur"}],email:[{type:"email",message:this.$t("modifyuser.pleasefillinthecorrectemailaddress"),trigger:"blur"}]}}},methods:{confrimSub:function(){for(var e=this,r=JSON.parse(JSON.stringify(this.formWrapperObj)),t=["id","qq","email","avatar","enable","passwdCheck"],a=0;a<t.length;a++)delete r[t[a]];for(var s in r){if(!r[s])return void this.$Message.warning(this.$t("systeminformationmaintenance.pleaseimprovetheinformation"));if(!this.employeeID&&this.formWrapperObj.password!==this.formWrapperObj.passwdCheck)return void this.$Message.warning(this.$t("modifyuser.thetwopasswordsareinconsistent"))}(0,o.addAuditEmployee)(this.formWrapperObj).then(function(r){r.code?e.$Message.error(r.message):(console.log(r),e.$router.push("/system/employee"),e.$Message.success(r.message))})}},created:function(){var e=this;(0,o.roleManage)().then(function(r){r.code?e.$Message.error(r.message):e.roleArr=r.data.content}),(0,o.departmentManage)().then(function(r){r.code?e.$Message.error(r.message):e.departArr=r.data.content}),this.employeeID=(0,a.getStore)("employeeID"),this.employeeID&&(0,o.employeeDetail)({id:this.employeeID}).then(function(r){r.code?e.$Message.error(r.message):e.formWrapperObj=r.data,console.log(r)})},watch:{formWrapperObj:{handler:function(e,r){this.employeeID||(e.password!==e.passwdCheck?this.uerpsCheck=!0:this.uerpsCheck=!1)},deep:!0}}}},352:function(e,r,t){var a=t(353);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(5)("2a40ac52",a,!1,{})},353:function(e,r,t){(e.exports=t(4)(!1)).push([e.i,"\n.mainEmployeeContent .ivu-form-item[data-v-2cda9431] {\n  margin: 25px auto;\n  width: 380px;\n}\n.mainEmployeeContent .ivu-form-item-content a[data-v-2cda9431] {\n  position: absolute;\n  right: -60px;\n  top: 0;\n}\n.mainEmployeeContent .dashLine[data-v-2cda9431] {\n  text-align: center;\n  border-top: 1px dashed #d2d2d2;\n}\n.mainEmployeeContent .dashLine Button[data-v-2cda9431] {\n  color: #b3b1b1;\n}\n.mainEmployeeContent .dashLine Button[data-v-2cda9431]:hover {\n  color: #57a3f3;\n}\n",""])},354:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n          "+e._s(e.$t("modifyuser.modifyuser"))+" ")]),e._v(" "),t("Row",{staticClass:"mainEmployeeContent"},[t("Form",{ref:"formCustom",attrs:{model:e.formWrapperObj,rules:e.ruleFrom,"label-width":90,"label-position":"right"}},[t("FormItem",{attrs:{label:e.$t("auditdetails.username"),prop:"username"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.username,callback:function(r){e.$set(e.formWrapperObj,"username",r)},expression:"formWrapperObj.username"}})],1),e._v(" "),t("FormItem",{staticClass:"resetRequired",class:{resetFromErr:e.uerpsCheck},attrs:{label:e.$t("collectionconfigurationmanagement.password"),prop:"password"}},[t("Input",{attrs:{type:"password"},model:{value:e.formWrapperObj.password,callback:function(r){e.$set(e.formWrapperObj,"password",r)},expression:"formWrapperObj.password"}}),e._v(" "),e.uerpsCheck?t("div",{staticClass:"ivu-form-item-error-tip"},[e._v(e._s(e.$t("modifyuser.thetwopasswordsareinconsistent")))]):e._e()],1),e._v(" "),e.employeeID?e._e():t("FormItem",{staticClass:"resetRequired",class:{resetFromErr:e.uerpsCheck},attrs:{label:e.$t("modifyuser.confirmpassword"),prop:"passwdCheck"}},[t("Input",{attrs:{type:"password"},model:{value:e.formWrapperObj.passwdCheck,callback:function(r){e.$set(e.formWrapperObj,"passwdCheck",r)},expression:"formWrapperObj.passwdCheck"}}),e._v(" "),e.uerpsCheck?t("div",{staticClass:"ivu-form-item-error-tip"},[e._v(e._s(e.$t("modifyuser.thetwopasswordsareinconsistent")))]):e._e()],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("auditdetails.realname"),prop:"realName"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.realName,callback:function(r){e.$set(e.formWrapperObj,"realName",r)},expression:"formWrapperObj.realName"}})],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("modifyuser.contactnumber"),prop:"mobilePhone"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.mobilePhone,callback:function(r){e.$set(e.formWrapperObj,"mobilePhone",r)},expression:"formWrapperObj.mobilePhone"}})],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("modifyuser.role"),prop:"role"}},[t("Select",{model:{value:e.formWrapperObj.roleId,callback:function(r){e.$set(e.formWrapperObj,"roleId",r)},expression:"formWrapperObj.roleId"}},e._l(e.roleArr,function(r){return t("Option",{key:r.id,attrs:{value:r.id}},[e._v(e._s(r.role))])})),e._v(" "),t("router-link",{attrs:{to:"/system/rolemanage"}},[e._v(e._s(e.$t("rolemanagement.addrole")))])],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("personalinformation.department"),prop:"depart"}},[t("Select",{model:{value:e.formWrapperObj.departmentId,callback:function(r){e.$set(e.formWrapperObj,"departmentId",r)},expression:"formWrapperObj.departmentId"}},e._l(e.departArr,function(r){return t("Option",{key:r.id,attrs:{value:r.id}},[e._v(e._s(r.name))])})),e._v(" "),t("router-link",{attrs:{to:"/system/departmanage"}},[e._v(e._s(e.$t("departmentmanagement.adddepartment")))])],1),e._v(" "),t("Row",{staticClass:"dashLine"},[t("Button",{attrs:{type:"text"},on:{click:function(r){e.swtichMore=!e.swtichMore}}},[e.swtichMore?t("span",[e._v(e._s(e.$t("modifyuser.putaway"))+" "),t("Icon",{attrs:{type:"chevron-up"}})],1):t("span",[e._v(e._s(e.$t("membermanagement.more"))+" "),t("Icon",{attrs:{type:"chevron-down"}})],1)])],1),e._v(" "),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.swtichMore,expression:"swtichMore"}]},[t("FormItem",{attrs:{label:e.$t("modifyuser.userstatus")}},[t("RadioGroup",{model:{value:e.formWrapperObj.enable,callback:function(r){e.$set(e.formWrapperObj,"enable",r)},expression:"formWrapperObj.enable"}},[t("Radio",{attrs:{label:"0"}},[e._v(e._s(e.$t("querymarginstrategy.normal")))]),e._v(" "),t("Radio",{attrs:{label:"1"}},[e._v(e._s(e.$t("currencyextensionmanagement.disable")))])],1)],1),e._v(" "),t("FormItem",{attrs:{label:"QQ：",prop:"tencentQQ"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.qq,callback:function(r){e.$set(e.formWrapperObj,"qq",r)},expression:"formWrapperObj.qq"}})],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("currencywithdrawalauditmanagement.email"),prop:"email"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.email,callback:function(r){e.$set(e.formWrapperObj,"email",r)},expression:"formWrapperObj.email"}})],1),e._v(" "),t("FormItem",{attrs:{label:e.$t("modifyuser.headportrait"),prop:"avatar"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.avatar,callback:function(r){e.$set(e.formWrapperObj,"avatar",r)},expression:"formWrapperObj.avatar"}})],1)],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"success",long:""},on:{click:e.confrimSub}},[e._v(e._s(e.$t("modifyuser.confirm")))])],1)],1)],1)],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};r.default=o}});