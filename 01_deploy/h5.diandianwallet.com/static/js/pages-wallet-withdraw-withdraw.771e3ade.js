(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-withdraw-withdraw"],{5846:function(t,i,a){"use strict";a.r(i);var e=a("7585"),n=a("7394");for(var o in n)"default"!==o&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("fa23");var c,l=a("f0c5"),s=Object(l["a"])(n["default"],e["b"],e["c"],!1,null,"0c76b5e6",null,!1,e["a"],c);i["default"]=s.exports},7394:function(t,i,a){"use strict";a.r(i);var e=a("7527"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},7527:function(t,i,a){"use strict";var e=a("4ea4");a("acd8"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("ade3")),o=e(a("5530")),c=a("26cb"),l={data:function(){return{form:{address:"",money:"",payPwd:""},wallet:{},fee:0,maxNum:0}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/my/withdraw_record/withdraw_record"})},onLoad:function(){uni.setNavigationBarTitle({title:this.$t("wallet.withdraw").title}),this.wallet=uni.getStorageSync("currentWallet"),this.wallet||this.$tools.error(this.$t("wallet.withdraw.tip1"),(function(){uni.switchTab({url:"/pages/wallet/wallet"})})),this.form.coinName=this.wallet.coin.name,this.getMaxWithdraw()},computed:(0,o.default)({},(0,c.mapGetters)(["config","setting"])),methods:{scan:function(){var t=this;uni.chooseImage({count:1,success:function(i){var a=i.tempFilePaths[0];qrcode.decode(a),qrcode.callback=function(i){"Failed to load the image"==i||"error decoding QR Code"==i?uni.showToast({title:t.$t("common.qrcode_error"),icon:"none"}):t.form.address=i}}})},handleSubmit:function(){var t=this;this.form.money<this.wallet.coin.minWithdrawAmount?this.$tools.error(this.$t("wallet.withdraw.tip2")+this.wallet.coin.minWithdrawAmount+this.wallet.coin.name):this.form.money>parseFloat(this.maxNum)?this.$tools.error(this.$t("wallet.withdraw.tip3")+this.maxNum+this.wallet.coin.name):this.setting?this.showPwd():this.$tools.apiPost("uc/approve/security/setting",{},(function(i){t.$store.dispatch("setSetting",i.data).then((function(){t.showPwd()}))}))},showPwd:function(){1==this.setting.fundsVerified?this.$refs.inputDialog.open():this.$tools.confirm(this.$t("common.pwd_tip"),(function(){uni.navigateTo({url:"/pages/my/pay_pwd/pay_pwd"})}))},dialogInputConfirm:function(t){var i=this;this.form.payPwd=t,this.$tools.apiPost("uc/withdraw/create",this.form,(function(t){i.$tools.success(i.$t("wallet.withdraw.success"),(function(){uni.switchTab({url:"/pages/wallet/wallet"})}))}))},getFee:function(){var t=this;this.$tools.apiPost("uc/withdraw/withdraw-fee",{unit:this.wallet.coin.unit,amount:this.form.money},(function(i){t.fee=i.message}))},all:function(){this.form.money=this.maxNum},getMaxWithdraw:function(){var t=this;this.$tools.apiPost("uc/withdraw/max-withdraw-num",{unit:this.wallet.coin.unit},(function(i){t.maxNum=i.message}))}},watch:(0,n.default)({},"form.money",(function(t,i){this.getFee()}))};i.default=l},7585:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniIcons:a("de5d").default,uniPopup:a("008e").default,uniPopupDialog:a("4445").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"coin-section m-t"},[a("v-uni-view",{staticClass:"form"},[a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.withdraw.label1")))]),a("v-uni-view",{staticClass:"input little-line",staticStyle:{"align-items":"center"}},[a("v-uni-input",{staticClass:"address",attrs:{type:"text",placeholder:t.$t("wallet.withdraw.plac1")},model:{value:t.form.address,callback:function(i){t.$set(t.form,"address",i)},expression:"form.address"}}),a("v-uni-view",{staticStyle:{width:"80rpx",display:"flex","justify-content":"flex-end"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.scan.apply(void 0,arguments)}}},[a("uni-icons",{attrs:{type:"scan",size:"50rpx"}})],1)],1),a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.withdraw.label2")))]),a("v-uni-view",{staticClass:"input little-line"},[a("v-uni-input",{staticClass:"volume",attrs:{type:"number",placeholder:t.$t("wallet.withdraw.plac2")+t.wallet.coin.minWithdrawAmount},model:{value:t.form.money,callback:function(i){t.$set(t.form,"money",i)},expression:"form.money"}}),a("v-uni-view",{staticClass:"all",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.all.apply(void 0,arguments)}}},[t._v(t._s(t.$t("wallet.withdraw.all")))])],1),a("v-uni-view",{staticClass:"balance"},[t._v(t._s(t.$t("wallet.withdraw.label3"))+" "+t._s(t.maxNum)+" "+t._s(t.wallet.coin.name))]),a("v-uni-text",{staticClass:"label"},[t._v(t._s(t.$t("wallet.withdraw.label4"))+" "+t._s(t.fee)+" "+t._s(t.wallet.coin.name))])],1),a("v-uni-button",{staticClass:"submit",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleSubmit.apply(void 0,arguments)}}},[t._v(t._s(t.$t("wallet.withdraw.submit")))]),a("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.$t("wallet.withdraw.label5"))+t._s(t.wallet.coin.minWithdrawAmount)+" "+t._s(t.wallet.coin.name)),t._v("。"),a("br"),t._v(t._s(t.config.withdraw_coin_remark))])],1),a("uni-popup",{ref:"inputDialog",attrs:{type:"dialog"}},[a("uni-popup-dialog",{attrs:{mode:"input",title:t.$t("common").pwd_title,"input-type":"password",placeholder:t.$t("common").pwd_plac,confirmText:t.$t("common.confirm"),cancelText:t.$t("common.cancel")},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.dialogInputConfirm.apply(void 0,arguments)}}})],1)],1)},o=[]},"7a56":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.container[data-v-0c76b5e6]{padding:%?30?%}.coin-section[data-v-0c76b5e6]{background:#fff}.coin-section .chain[data-v-0c76b5e6]{padding:%?30?% %?0?% %?10?% %?0?%}.coin-section .chain .label[data-v-0c76b5e6]{font-size:%?24?%}.coin-section .chain .row[data-v-0c76b5e6]{display:flex;padding-top:%?20?%}.coin-section .chain .row .item[data-v-0c76b5e6]{width:%?160?%;height:%?70?%;line-height:%?70?%;background-color:#f7f6fb;border-radius:%?10?%;margin-right:%?20?%;text-align:center}.coin-section .chain .row .selected[data-v-0c76b5e6]{border:%?1?% solid #007aff;background-color:#fff;color:#007aff}.coin-section .s-row[data-v-0c76b5e6]{background-color:#f7f6fb;display:flex;align-items:center;padding:%?20?% %?10?% %?20?% %?10?%}.coin-section .s-row .col[data-v-0c76b5e6]{font-size:%?34?%;color:#14191f;flex:1}.coin-section .s-row .col .icon[data-v-0c76b5e6]{width:%?60?%;height:%?60?%;vertical-align:middle;margin-right:%?10?%}.coin-section .s-row .col .coin[data-v-0c76b5e6]{font-weight:400;vertical-align:middle}.coin-section .s-row .col .subtitle[data-v-0c76b5e6]{font-size:%?24?%;font-weight:400}.coin-section .s-row .coinLogo[data-v-0c76b5e6]{width:%?46?%;height:%?46?%;margin-right:8px;display:inline-block;vertical-align:middle;float:left}.coin-section .s-row .light[data-v-0c76b5e6]{font-weight:100;font-size:%?34?%;color:#14191f}.coin-section .s-row .r[data-v-0c76b5e6]{text-align:right}.coin-section .s-row .arrow[data-v-0c76b5e6]{vertical-align:middle}.coin-section .form[data-v-0c76b5e6]{padding:%?10?% 0;display:flex;flex-direction:column}.coin-section .form .label[data-v-0c76b5e6]{margin-top:%?30?%;color:#14191f;font-size:%?24?%}.coin-section .form .balance[data-v-0c76b5e6]{margin-top:%?10?%;color:#8b9faa;font-size:%?24?%}.coin-section .form .address[data-v-0c76b5e6]{width:100%}.coin-section .form .volume[data-v-0c76b5e6]{width:%?400?%}.coin-section .form .input[data-v-0c76b5e6]{padding:%?10?% 0;display:flex;flex-direction:row;justify-content:space-between}.coin-section .form .input .all[data-v-0c76b5e6]{flex:0.5;text-align:right;font-size:%?28?%;color:#14191f;font-weight:700}.coin-section .form uni-input[data-v-0c76b5e6]{color:#8b9faa;font-size:%?28?%}.coin-section .desc[data-v-0c76b5e6]{margin-top:%?30?%;margin-bottom:%?20?%;font-size:%?28?%;color:#8b9faa;display:flex;flex-direction:column}.submit[data-v-0c76b5e6]{margin:%?60?% %?0?%;background:#0952c3;color:#fff;font-size:%?30?%}',""]),t.exports=i},"89b6":function(t,i,a){var e=a("7a56");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("a8930816",e,!0,{sourceMap:!1,shadowMode:!1})},fa23:function(t,i,a){"use strict";var e=a("89b6"),n=a.n(e);n.a}}]);