webpackJsonp([22],{211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(293),s=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);var l=n(369),o=n.n(l),r=!1;var d=function(e){r||n(367)},c=n(0)(s.a,o.a,!1,d,"data-v-81c067f8",null);c.options.__file="src\\views\\otc\\ExitBondDetail.vue",t.default=c.exports},293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(22);t.default={data:function(){return{exitBondDetail:{}}},methods:{refreshPageManual:function(){var e=this;(0,a.cancelApplyDetail)({id:this.$route.query.id}).then(function(t){t.code?e.$Message.error(t.message):e.exitBondDetail=t.data}).catch(function(e){return console.log(e)})}},created:function(){this.refreshPageManual()},filters:{filterStatus:function(e){return""===e?e:6===e?"失败":5===e?"待审核":7===e?"成功":void 0},reasonFilter:function(e){return e||"无"}}}},367:function(e,t,n){var a=n(368);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(5)("02c60d2b",a,!1,{})},368:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,"\n.line[data-v-81c067f8] {\n  border-top: 1px solid #dfdfdf;\n}\n.detail .card[data-v-81c067f8] {\n  padding: 20px;\n}\n.detail .card .ivu-card-body > .ivu-row[data-v-81c067f8] {\n  margin: 20px 0;\n}\n.detail .card .ivu-card-body > .ivu-row .ivu-row[data-v-81c067f8] {\n  font-size: 16px;\n  line-height: 50px;\n}\n",""])},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detail"},[n("Row",[n("Card",{staticClass:"card"},[n("p",{attrs:{slot:"title"},slot:"title"},[n("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[n("Icon",{attrs:{type:"refresh"},on:{click:e.refreshPageManual}}),e._v("\n\t\t\t\t\t刷新\n\t\t\t\t")],1)],1),e._v(" "),n("Row",[n("h3",[e._v("退保申请")]),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[e._v("退保金额："+e._s(e.exitBondDetail.depositRecord?e.exitBondDetail.depositRecord.amount+e.exitBondDetail.depositRecord.coin.unit:""))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("状态："+e._s(e._f("filterStatus")(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.status:"")))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("申请时间："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.cancelApplyTime:""))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("审核时间："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.handleTime:""))])],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[e._v("退保原因："+e._s(e._f("reasonFilter")(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.reason:"")))])],1)],1),e._v(" "),n("p",{staticClass:"line"}),e._v(" "),n("Row",[n("h3",[e._v("用户信息")]),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[e._v("真实姓名："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.realName:""))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("会员昵称："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.username:""))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("手机号："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.mobilePhone:""))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("邮箱号："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.email:""))])],1)],1),e._v(" "),n("p",{staticClass:"line"}),e._v(" "),n("Row",[n("h3",[e._v("交易信息")]),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[e._v("申诉次数："+e._s(e.exitBondDetail.complainantNum))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("被申诉次数数："+e._s(e.exitBondDetail.defendantNum))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("总成交额："+e._s(e.exitBondDetail.money?e.exitBondDetail.money:0))]),e._v(" "),n("Col",{attrs:{span:"6"}},[e._v("总手续费："+e._s(e.exitBondDetail.fee?e.exitBondDetail.fee:0))])],1),e._v(" "),n("Row",[n("Col",{attrs:{span:"6"}},[e._v("发布广告数："+e._s(e.exitBondDetail.advertiseNum))])],1)],1)],1)],1)],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};t.default=s}});