webpackJsonp([17],{228:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(310),a=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,function(){return r[n]})}(o);var s=t(423),i=t.n(s),l=!1;var c=function(n){l||t(421)},m=t(0)(a.a,i.a,!1,c,null,null);m.options.__file="src\\views\\system\\CoinProTocol.vue",e.default=m.exports},310:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(22),a={id:"",protocol:"",protocolname:"",rpcserver:"",rpcuser:"",rpcpassword:"",browser:"",symbol:"",chainid:0};e.default={components:{},data:function(){var n=this;return{columnList:[{title:this.$t("currencyagreementmanagement.agreementno"),key:"protocol",width:100},{title:this.$t("currencywithdrawalauditmanagement.agreementname"),key:"protocolname"},{title:"RPCServer",key:"rpcserver"},{title:"RPCUser",key:"rpcuser"},{title:"RPCPassword",key:"rpcpassword"},{title:this.$t("currencyagreementmanagement.blockbrowser"),key:"browser"},{title:this.$t("currencyagreementmanagement.agreementprimarycurrencyname1"),key:"symbol"},{title:this.$t("currencyagreementmanagement.chainid1"),key:"chainid"},{title:this.$t("perpetualcontractcurrencystandardmanagement.operation"),width:80,render:function(e,t){return[e("Button",{props:{type:"info",size:"small"},on:{click:function(){n.handleForm(t.index,t.row)}}},n.$t("perpetualcontractcurrencystandardmanagement.modify"))]}}],query:{status:"-1",pageNo:1,pageSize:10},list:[],total:0,loading:!0,index:null,formName:null,formMap:{add:this.$t("collectionconfigurationmanagement.new"),edit:this.$t("collectionconfigurationmanagement.edit")},formData:a,formRules:{protocol:[{required:!0,message:this.$t("currencyagreementmanagement.pleaseenterauniqueagreementid"),trigger:"blur"}],protocolname:[{required:!0,message:this.$t("currencyagreementmanagement.pleaseentercontent"),trigger:"blur"}]},formVisible:!1,formLoading:!1}},methods:{changePage:function(n){this.query.pageNo=n,this.getList()},onReset:function(){this.query={status:"-1",pageNo:1,pageSize:10},this.getList()},onSubmit:function(){this.$router.push({path:"",query:this.query}),this.getList()},getList:function(){var n=this;this.loading=!0,(0,r.coinprotocolList)(this.query).then(function(e){n.loading=!1,e.code&&n.$Message.error(e.message);var t=e.data.content||[],r=[],a=!0,o=!1,s=void 0;try{for(var i,l=t[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var c=i.value;c.protocol=c.protocol+"",r.push(c)}}catch(n){o=!0,s=n}finally{try{!a&&l.return&&l.return()}finally{if(o)throw s}}n.list=r,n.total=e.data.totalElements||0}).catch(function(){n.loading=!1,n.list=[],n.total=0,n.roles=[]})},resetForm:function(){this.$refs.dataForm&&this.$refs.dataForm.resetFields()},handleForm:function(n,e){this.formVisible=!0,this.formData=JSON.parse(JSON.stringify(a)),null!==e&&(this.formData=Object.assign({},e)),this.formName="add",this.resetForm(),null!==n&&(this.index=n,this.formName="edit")},hideForm:function(){return this.formVisible=!1,!0},formSubmit:function(){var n=this;if(this.formLoading)return!1;this.$refs.dataForm.validate(function(e){if(e){n.formLoading=!0;var t=Object.assign({},n.formData);"add"===n.formName&&delete t.id,(0,r.coinprotocolSave)(t).then(function(e){if(n.formLoading=!1,e.code)return n.$Message.error(e.message),!1;n.$Message.success(n.$t("currencywithdrawalauditmanagement.operationsuccessful")),n.formVisible=!1,"add"===n.formName?e.data&&e.data.id&&(t.id=e.data.id,n.list.unshift(t)):n.list.splice(n.index,1,t),n.getList()})}})}},mounted:function(){},created:function(){var n=this.$route.query;this.query=Object.assign(this.query,n),this.query.limit=parseInt(this.query.limit),this.getList()}}},421:function(n,e,t){var r=t(422);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(5)("4efdf134",r,!1,{})},422:function(n,e,t){(n.exports=t(4)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},423:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[n._v("\n        "+n._s(n.$t("currencyagreementmanagement.currencyagreementmanagement"))+" \n\t\t"),t("Button",{attrs:{type:"primary",size:"small"},on:{click:n.onReset}},[t("Icon",{attrs:{type:"refresh"}}),n._v("\n          "+n._s(n.$t("perpetualcontractcurrencystandardmanagement.refresh"))+" ")],1)],1),n._v(" "),t("Row",{staticClass:"functionWrapper"},[t("div",{staticClass:"btnsWrapper clearfix"},[t("Button",{attrs:{type:"primary"},on:{click:function(e){n.handleForm(null,null)}}},[n._v(n._s(n.$t("currencyagreementmanagement.addprotocols")))])],1)]),n._v(" "),t("Row",[t("Table",{attrs:{columns:n.columnList,data:n.list,loading:n.loading,border:""}})],1),n._v(" "),t("Row",{staticClass:"pageWrapper"},[t("Page",{staticClass:"buttomPage",attrs:{total:n.total,pageSize:n.query.pageSize,current:n.query.page,"show-elevator":""},on:{"on-change":n.changePage}})],1),n._v(" "),t("Modal",{attrs:{title:n.formMap[n.formName],"mask-closable":!1},model:{value:n.formVisible,callback:function(e){n.formVisible=e},expression:"formVisible"}},[t("Form",{ref:"dataForm",attrs:{model:n.formData,rules:n.formRules}},[t("FormItem",{attrs:{label:n.$t("currencyagreementmanagement.agreementid"),prop:"protocol"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.protocol,callback:function(e){n.$set(n.formData,"protocol",e)},expression:"formData.protocol"}})],1),n._v(" "),t("FormItem",{attrs:{label:n.$t("currencyagreementmanagement.agreementname1"),prop:"protocolname"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.protocolname,callback:function(e){n.$set(n.formData,"protocolname",e)},expression:"formData.protocolname"}})],1),n._v(" "),t("FormItem",{attrs:{label:"RPCServer：",prop:"rpcserver"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.rpcserver,callback:function(e){n.$set(n.formData,"rpcserver",e)},expression:"formData.rpcserver"}})],1),n._v(" "),t("FormItem",{attrs:{label:"RPCUser：",prop:"rpcuser"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.rpcuser,callback:function(e){n.$set(n.formData,"rpcuser",e)},expression:"formData.rpcuser"}})],1),n._v(" "),t("FormItem",{attrs:{label:"RPCPassword：",prop:"rpcpassword"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.rpcpassword,callback:function(e){n.$set(n.formData,"rpcpassword",e)},expression:"formData.rpcpassword"}})],1),n._v(" "),t("FormItem",{attrs:{label:n.$t("currencyagreementmanagement.blockbrowser1"),prop:"browser"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.browser,callback:function(e){n.$set(n.formData,"browser",e)},expression:"formData.browser"}})],1),n._v(" "),t("FormItem",{attrs:{label:n.$t("currencyagreementmanagement.nameofagreementprimarycurrency"),prop:"symbol"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.symbol,callback:function(e){n.$set(n.formData,"symbol",e)},expression:"formData.symbol"}})],1),n._v(" "),t("FormItem",{attrs:{label:n.$t("currencyagreementmanagement.chainid"),prop:"chainid"}},[t("Input",{attrs:{placeholder:n.$t("currencywithdrawalauditmanagement.pleaseenter"),clearable:""},model:{value:n.formData.chainid,callback:function(e){n.$set(n.formData,"chainid",e)},expression:"formData.chainid"}})],1)],1),n._v(" "),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("Button",{on:{click:n.hideForm}},[n._v(n._s(n.$t("currencywithdrawalauditmanagement.cancel")))]),n._v(" "),t("Button",{attrs:{type:"primary",loading:n.formLoading},on:{click:n.formSubmit}},[n._v(n._s(n.$t("collectionconfigurationmanagement.determine")))])],1)],1)],1)],1)};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.default=a}});