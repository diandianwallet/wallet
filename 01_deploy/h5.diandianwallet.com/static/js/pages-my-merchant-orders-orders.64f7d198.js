(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-merchant-orders-orders"],{"3a3c":function(t,e,i){var o=i("e998");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("20a1eb9f",o,!0,{sourceMap:!1,shadowMode:!1})},"3ff6":function(t,e,i){"use strict";i.r(e);var o=i("d7f7"),s=i("f34a");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("6919");var a,c=i("f0c5"),r=Object(c["a"])(s["default"],o["b"],o["c"],!1,null,"6e263bdf",null,!1,o["a"],a);e["default"]=r.exports},6919:function(t,e,i){"use strict";var o=i("3a3c"),s=i.n(o);s.a},"8f93":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,n=o(i("5530")),a=i("26cb"),c={data:function(){return{dataList:[],memberLevel:0}},onLoad:function(t){var e=this;s=this,t.memberLevel&&(this.memberLevel=t.memberLevel),setTimeout((function(){uni.setNavigationBarTitle({title:e.$t("my.merchant.orders").title})}))},filters:{formatStatus:function(t){return 0==t?s.$t("my.merchant.orders.status0"):1==t?s.$t("my.merchant.orders.status1"):2==t?s.$t("my.merchant.orders.status2"):3==t?s.$t("my.merchant.orders.status3"):4==t?s.$t("my.merchant.orders.status4"):5==t?s.$t("my.merchant.orders.status5"):6==t?s.$t("my.merchant.orders.status6"):"-"}},computed:(0,n.default)({},(0,a.mapGetters)(["config","setting","userInfo"])),methods:{queryList:function(t,e){var i=this;this.$tools.apiPost("uc/ctc/page-query",{pageNo:t,pageSize:e,memberLevel:this.memberLevel},(function(t){i.$refs.paging.complete(t.data.content)}),(function(t){i.$refs.paging.complete([]),i.$tools.error(t.message)}))},goDetail:function(t){uni.navigateTo({url:"/pages/my/merchant/orders/detail/detail?id="+t.id+"&memberLevel="+this.memberLevel,success:function(e){e.eventChannel.emit("setData",t)}})}}};e.default=c},d7f7:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={zPaging:i("2b02").default,uniIcons:i("de5d").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("z-paging",{ref:"paging",attrs:{"auto-show-back-to-top":!0},on:{query:function(e){arguments[0]=e=t.$handleEvent(e),t.queryList.apply(void 0,arguments)}},model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},[i("v-uni-view",{staticClass:"coin-section m-t"},t._l(t.dataList,(function(e,o){return i("v-uni-view",{key:o,staticClass:"block little-line",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"s-row"},[i("v-uni-view",{staticClass:"col"},[i("v-uni-text",{staticClass:"coin",class:{buy:0==e.direction,sell:1==e.direction}},[t._v(t._s(0==e.direction?t.$t("my.merchant.orders.direction0"):t.$t("my.merchant.orders.direction1")))]),i("v-uni-text",{staticClass:"coin"},[t._v(t._s(e.unit))])],1),i("v-uni-view",{staticClass:"col r light"},[i("v-uni-text",{staticClass:"status"},[t._v(t._s(t._f("formatStatus")(e.status)))]),i("uni-icons",{staticClass:"gt",attrs:{type:"right",size:"20"}})],1)],1),i("v-uni-view",{staticClass:"s-row"},[i("v-uni-view",{staticClass:"col subtitle row-title"},[t._v(t._s(t.$t("my.merchant.orders.time")))]),i("v-uni-view",{staticClass:"col subtitle row-title"},[t._v(t._s(t.$t("my.merchant.orders.count"))+"("+t._s(e.unit)+")")]),i("v-uni-view",{staticClass:"col r subtitle row-title"},[t._v(t._s(t.$t("my.merchant.orders.total"))+"(CNY)")])],1),i("v-uni-view",{staticClass:"s-row"},[i("v-uni-view",{staticClass:"col subtitle row-amount"},[t._v(t._s(e.createTime))]),i("v-uni-view",{staticClass:"col subtitle row-amount"},[t._v(t._s(e.amount))]),i("v-uni-view",{staticClass:"col r subtitle row-amount"},[t._v(t._s(e.money))])],1)],1)})),1)],1)],1)},n=[]},e998:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.coin-section[data-v-6e263bdf]{background:#fff}.coin-section .block[data-v-6e263bdf]{padding:%?20?% 0;border-bottom:1px solid #f3f3f3}.coin-section .block .s-row[data-v-6e263bdf]{display:flex;align-items:center;padding:%?10?% %?30?% %?0?% %?30?%}.coin-section .block .s-row .subtitle[data-v-6e263bdf]{padding:%?4?% 0 %?10?% 0}.coin-section .block .s-row .col[data-v-6e263bdf]{font-size:%?28?%;color:#14191f;flex:1}.coin-section .block .s-row .col .coin[data-v-6e263bdf]{font-weight:700;padding-right:%?10?%}.coin-section .block .s-row .col .buy[data-v-6e263bdf]{color:#0952c3}.coin-section .block .s-row .col .sell[data-v-6e263bdf]{color:red}.coin-section .block .s-row .col .status[data-v-6e263bdf]{font-size:%?28?%;font-weight:10}.coin-section .block .s-row .coinLogo[data-v-6e263bdf]{width:%?36?%;height:%?36?%;margin-right:8px;display:inline-block;vertical-align:middle;float:left}.coin-section .block .s-row .light[data-v-6e263bdf]{font-weight:700;font-size:%?34?%;color:#14191f;display:flex;align-items:center;justify-content:flex-end}.coin-section .block .s-row .r[data-v-6e263bdf]{text-align:right}.coin-section .block .s-row .row-title[data-v-6e263bdf]{font-size:%?28?%;font-weight:400;color:#8b9faa}.coin-section .block .s-row .row-amount[data-v-6e263bdf]{font-size:%?28?%;font-weight:400;color:#14191f}.coin-section .block .s-row .gt[data-v-6e263bdf]{font-weight:10}',""]),t.exports=e},f34a:function(t,e,i){"use strict";i.r(e);var o=i("8f93"),s=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=s.a}}]);