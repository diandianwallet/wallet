(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-get_currency-get_currency"],{"0936":function(t,e,i){var n=i("da13");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("12da3af9",n,!0,{sourceMap:!1,shadowMode:!1})},"0a5c":function(t,e,i){"use strict";i.r(e);var n=i("1a26"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"0c99":function(t,e,i){"use strict";i.r(e);var n=i("7fb6"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"1a26":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5530")),a=i("26cb"),c=n(i("7d85")),l={components:{actionSheet:c.default},data:function(){return{buyTip:"请输入购买数量",range:[{value:"bank",name:this.$t("wallet.get.bank")},{value:"alipay",name:this.$t("wallet.get.alipay")},{value:"wechatpay",name:this.$t("wallet.get.wxpay")}],type:"",wallet:{},form:{price:"",amount:"",payType:"",direction:0,unit:"",fundpwd:"",cnyMoney:""}}},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("wallet.get").title}),this.wallet=uni.getStorageSync("currentWallet"),void 0!=this.wallet&&void 0!=this.wallet.coin.minRechargeAmount&&(this.buyTip="请输入不少于"+this.wallet.coin.minRechargeAmount+"的数量"),this.form.unit=this.wallet.coin.unit,this.getPrice()},computed:(0,o.default)({buyPlaceholder:function(){return this.buyTip}},(0,a.mapGetters)(["config","setting"])),methods:{handleAmountInput:function(t){console.log(t),this.form.cnyMoney=(this.form.price*this.form.amount).toFixed(2)},handleCnyInput:function(t){console.log(t),this.form.amount=(this.form.cnyMoney/this.form.price).toFixed(8)},rangeChange:function(){this.$refs.actionSheet.open()},selectChange:function(t,e){this.type=t.name,this.form.payType=t.value},getPrice:function(){var t=this;this.$tools.apiPost("uc/ctc/price",{unit:this.wallet.coin.unit,direction:0},(function(e){t.form.price=e.data}))},handleSubmit:function(){var t=this;""==this.form.amount||this.form.amount<=0?this.$tools.error(this.$t("wallet.get.tip3")):""!=this.form.payType?this.setting?this.showPwd():this.$tools.apiPost("uc/approve/security/setting",{},(function(e){t.$store.dispatch("setSetting",e.data).then((function(){t.showPwd()}))})):this.$tools.error(this.$t("wallet.get.tip4"))},showPwd:function(){1==this.setting.fundsVerified?this.$refs.inputDialog.open():this.$tools.confirm(this.$t("common.pwd_tip"),(function(){uni.navigateTo({url:"/pages/my/pay_pwd/pay_pwd"})}))},dialogInputConfirm:function(t){var e=this;this.form.fundpwd=t,uni.showLoading({title:"处理中"}),this.$tools.apiPost("uc/ctc/new-ctc-order",this.form,(function(t){uni.hideLoading(),e.$tools.success(e.$t("wallet.get.success"),(function(){uni.navigateTo({url:"/pages/my/merchant/orders/detail/detail?id="+t.data.id+"&memberLevel=0"})}))}))}}};e.default=l},"20b8":function(t,e,i){"use strict";var n=i("0936"),o=i.n(n);o.a},"2ec9":function(t,e,i){"use strict";var n=i("700f"),o=i.n(n);o.a},"61ee":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("008e").default,uniPopupDialog:i("4445").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"coin-section m-t"},[i("v-uni-view",{staticClass:"form"},[i("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.get.label1")))]),i("v-uni-view",{staticClass:"input little-line"},[t._v(t._s(t.form.price)+" CNY")]),i("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.get.label5")))]),i("v-uni-view",{staticClass:"input little-line"},[i("v-uni-input",{staticClass:"volume",attrs:{type:"number",placeholder:t.buyPlaceholder},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCnyInput.apply(void 0,arguments)}},model:{value:t.form.cnyMoney,callback:function(e){t.$set(t.form,"cnyMoney",e)},expression:"form.cnyMoney"}}),i("v-uni-view",{staticClass:"all"},[t._v("CNY")])],1),i("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.get.label2")))]),i("v-uni-view",{staticClass:"input little-line"},[i("v-uni-input",{staticClass:"volume",attrs:{type:"number",placeholder:t.buyPlaceholder},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAmountInput.apply(void 0,arguments)}},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}}),i("v-uni-view",{staticClass:"all"},[t._v(t._s(t.wallet.coin.name))])],1),i("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.get.label4")))]),i("v-uni-view",{staticClass:"input little-line",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rangeChange.apply(void 0,arguments)}}},[t._v(t._s(t.type?t.type:t.$t("wallet.get.tip4")))])],1),i("v-uni-view",{staticClass:"tip"},[t._v(t._s(t.$t("wallet.get.tip2")))]),i("v-uni-button",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("wallet.get.submit"))+t._s(t.wallet.coin.name))])],1),i("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[i("uni-popup-dialog",{attrs:{mode:"input",title:t.$t("common").pwd_title,"input-type":"password",placeholder:t.$t("common").pwd_plac,confirmText:t.$t("common.confirm"),cancelText:t.$t("common.cancel")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogInputConfirm.apply(void 0,arguments)}}})],1),i("action-sheet",{ref:"actionSheet",attrs:{actions:t.range,"cancel-text":t.$t("common.cancel")},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.selectChange.apply(void 0,arguments)}}})],1)},a=[]},"700f":function(t,e,i){var n=i("f94d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("8479e174",n,!0,{sourceMap:!1,shadowMode:!1})},"7d85":function(t,e,i){"use strict";i.r(e);var n=i("8d8e"),o=i("0c99");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2ec9");var c,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"5a311f14",null,!1,n["a"],c);e["default"]=s.exports},"7fb6":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{zIndex:{type:Number,default:2022},actions:{type:Array,default:function(){return[]}},title:{type:String,default:""},cancelText:{type:String,default:""},description:{type:String,default:""},round:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},closeOnClickAction:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},components:{},data:function(){return{isShow:!1}},created:function(){},methods:{open:function(){this.isShow=!0,this.$emit("open")},close:function(){this.isShow=!1,this.$emit("close")},cancel:function(){this.close(),this.$emit("cancel")},clickOverlay:function(){if(!this.closeOnClickOverlay)return!1;this.close(),this.$emit("click-overlay")},select:function(t,e){this.$emit("select",t,e),this.closeOnClickAction&&this.close()}}};e.default=n},"8d8e":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniTransition:i("edc6").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-transition",{ref:"fade",staticClass:"xw-popup",style:"z-index:"+t.zIndex,attrs:{show:t.isShow&&t.overlay},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickOverlay.apply(void 0,arguments)}}}),i("uni-transition",{staticClass:"popup-bottom",attrs:{"mode-class":"slide-bottom",styles:{width:"100%","border-radius":t.round?"32rpx 32rpx 0 0":"","z-index":t.zIndex+1},show:t.isShow}},[t.title?i("v-uni-view",{staticClass:"action-title"},[t._v(t._s(t.title))]):t._e(),t.description?i("v-uni-view",{staticClass:"action-description"},[t._v(t._s(t.description))]):t._e(),t._l(t.actions,(function(e,n){return i("v-uni-view",{key:n},[e.disabled?i("v-uni-view",{staticClass:"action-disabled"},[t._v(t._s(e.name))]):i("v-uni-view",{staticClass:"action-item item-click",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.select(e,n)}}},[i("v-uni-text",{style:"color:"+e.color},[t._v(t._s(e.name))]),e.subname?i("v-uni-view",{staticClass:"action-text"},[t._v(t._s(e.subname))]):t._e()],1)],1)})),t.cancelText?i("v-uni-view",{staticClass:"action-bottom"},[i("v-uni-view",{staticClass:"bottom-top"}),i("v-uni-view",{staticClass:"bottom-btn btn-click",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v(t._s(t.cancelText))])],1):t._e(),t.safeAreaInsetBottom?i("v-uni-view",{staticClass:"bottom-safe"}):t._e()],2)],1)},a=[]},da13:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.container[data-v-3fb87ea4]{padding:%?30?%}.coin-section[data-v-3fb87ea4]{background:#fff}.coin-section .chain[data-v-3fb87ea4]{padding:%?30?% %?0?% %?10?% %?0?%}.coin-section .chain .label[data-v-3fb87ea4]{font-size:%?24?%}.coin-section .chain .row[data-v-3fb87ea4]{display:flex;padding-top:%?20?%}.coin-section .chain .row .item[data-v-3fb87ea4]{width:%?160?%;height:%?70?%;line-height:%?70?%;background-color:#f7f6fb;border-radius:%?10?%;margin-right:%?20?%;text-align:center}.coin-section .chain .row .selected[data-v-3fb87ea4]{border:%?1?% solid #007aff;background-color:#fff;color:#007aff}.coin-section .s-row[data-v-3fb87ea4]{background-color:#f7f6fb;display:flex;align-items:center;padding:%?20?% %?10?% %?20?% %?10?%}.coin-section .s-row .col[data-v-3fb87ea4]{font-size:%?34?%;color:#14191f;flex:1}.coin-section .s-row .col .icon[data-v-3fb87ea4]{width:%?60?%;height:%?60?%;vertical-align:middle;margin-right:%?10?%}.coin-section .s-row .col .coin[data-v-3fb87ea4]{font-weight:400;vertical-align:middle}.coin-section .s-row .col .subtitle[data-v-3fb87ea4]{font-size:%?24?%;font-weight:400}.coin-section .s-row .coinLogo[data-v-3fb87ea4]{width:%?46?%;height:%?46?%;margin-right:8px;display:inline-block;vertical-align:middle;float:left}.coin-section .s-row .light[data-v-3fb87ea4]{font-weight:100;font-size:%?34?%;color:#14191f}.coin-section .s-row .r[data-v-3fb87ea4]{text-align:right}.coin-section .s-row .arrow[data-v-3fb87ea4]{vertical-align:middle}.coin-section .form[data-v-3fb87ea4]{padding:%?10?% 0;display:flex;flex-direction:column}.coin-section .form .label[data-v-3fb87ea4]{margin-top:%?30?%;color:#14191f;font-size:%?24?%}.coin-section .form .balance[data-v-3fb87ea4]{margin-top:%?10?%;color:#8b9faa;font-size:%?24?%}.coin-section .form .address[data-v-3fb87ea4]{width:100%}.coin-section .form .volume[data-v-3fb87ea4]{width:%?400?%}.coin-section .form .input[data-v-3fb87ea4]{padding:%?10?% 0;display:flex;flex-direction:row;justify-content:space-between}.coin-section .form .input .all[data-v-3fb87ea4]{flex:0.5;text-align:right;font-size:%?28?%;color:#14191f;font-weight:700}.coin-section .form uni-input[data-v-3fb87ea4]{color:#8b9faa;font-size:%?28?%}.coin-section .desc[data-v-3fb87ea4]{margin-top:%?30?%;margin-bottom:%?20?%;font-size:%?28?%;color:#8b9faa;display:flex;flex-direction:column}.submit[data-v-3fb87ea4]{margin:%?60?% %?0?%;background:#0952c3;color:#fff;font-size:%?30?%}',""]),t.exports=e},e9fc:function(t,e,i){"use strict";i.r(e);var n=i("61ee"),o=i("0a5c");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("20b8");var c,l=i("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,"3fb87ea4",null,!1,n["a"],c);e["default"]=s.exports},f94d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */uni-view[data-v-5a311f14]{box-sizing:border-box}.xw-popup[data-v-5a311f14]{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background:rgba(0,0,0,.4)}.popup-bottom[data-v-5a311f14]{width:100%;\n  /* border-radius: 32rpx 32rpx 0 0; */background:#fff;overflow:hidden;position:fixed;bottom:0;left:0}.popup-bottom .action-title[data-v-5a311f14]{width:100%;font-size:%?32?%;line-height:%?96?%;text-align:center}.popup-bottom .action-description[data-v-5a311f14]{margin:0 %?32?%;padding:%?40?% 0;color:#969799;font-size:%?28?%;line-height:%?40?%;text-align:center;border-bottom:%?1?% solid #f5f5f5}.popup-bottom .action-item[data-v-5a311f14]{width:100%;padding:%?28?% %?32?%;font-size:%?32?%;background:#fff;cursor:pointer;text-align:center}.popup-bottom .action-item .action-text[data-v-5a311f14]{width:100%;margin-top:%?16?%;color:#969799;font-size:%?24?%;line-height:%?36?%}.popup-bottom .action-disabled[data-v-5a311f14]{width:100%;cursor:not-allowed;color:#c8c9cc;padding:%?28?% %?32?%;font-size:%?32?%;background:#fff;text-align:center}.popup-bottom .item-click[data-v-5a311f14]:active{background:#f5f5f5}.popup-bottom .action-bottom[data-v-5a311f14]{width:100%}.popup-bottom .action-bottom .bottom-top[data-v-5a311f14]{display:block;height:%?16?%;background:#f7f8fa}.popup-bottom .action-bottom .bottom-btn[data-v-5a311f14]{cursor:pointer;width:100%;text-align:center;padding:%?28?% %?32?%;font-size:%?32?%;background:#fff}.popup-bottom .action-bottom .btn-click[data-v-5a311f14]:active{background:#f5f5f5}.popup-bottom .bottom-safe[data-v-5a311f14]{height:constant(safe-area-inset-bottom);width:100%;background:#fff}',""]),t.exports=e}}]);