(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f5b":function(t,i,e){"use strict";e.r(i);var a=e("94fd"),n=e("a04c");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("1385");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"76aae364",null,!1,a["a"],s);i["default"]=r.exports},1385:function(t,i,e){"use strict";var a=e("fe5d"),n=e.n(a);n.a},"2d02":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.con[data-v-76aae364]{height:%?101?%}.tabs[data-v-76aae364]{border-top:1px solid #f1f1f1;display:flex;align-items:center;position:fixed;width:100%;bottom:0;left:0;z-index:9;height:%?101?%;background:#fff}.tabs .tab[data-v-76aae364]{text-align:center;width:25%;font-size:%?20?%;display:flex;flex-flow:column;align-items:center}.tabs .tab uni-image[data-v-76aae364]{flex-shrink:0}.tabs .tab.active[data-v-76aae364]{color:#1b66ff}',""]),t.exports=i},4194:function(t,i,e){"use strict";e.r(i);var a=e("ff77"),n=e("b459");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("c610");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"52a816e0",null,!1,a["a"],s);i["default"]=r.exports},5160:function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"tabbar",props:{tabIndex:{type:Number,default:1}},data:function(){return{lists:[{name:this.$t("common.tabbar.home"),icon:"/static/images/tabbar/tab-coin.png",activeIcon:"/static/images/tabbar/tab-coin-active.png",path:"/pages/index/index",isLogin:!1},{name:this.$t("common.tabbar.number"),icon:"/static/images/tabbar/tab-wallet.png",activeIcon:"/static/images/tabbar/tab-wallet-active.png",path:"/pages/wallet/wallet",isLogin:!0},{name:this.$t("common.tabbar.app"),icon:"/static/images/tabbar/tab-mining.png",activeIcon:"/static/images/tabbar/tab-mining-active.png",path:"/pages/app/app",isLogin:!0},{name:this.$t("common.tabbar.my"),icon:"/static/images/tabbar/tab-my.png",activeIcon:"/static/images/tabbar/tab-my-active.png",path:"/pages/my/my",isLogin:!0}]}},created:function(){uni.hideTabBar()},methods:{page:function(t,i){i=i||!1,!i||this.$tools.isLogin()?uni.switchTab({url:t}):uni.navigateTo({url:"/pages/my/login/login"})},changeLang:function(){this.lists[0].name=this.$t("common.tabbar.home"),this.lists[1].name=this.$t("common.tabbar.number"),this.lists[2].name=this.$t("common.tabbar.app"),this.lists[3].name=this.$t("common.tabbar.my")}}};i.default=a},5333:function(t,i,e){"use strict";var a=e("62a3"),n=e.n(a);n.a},"5d66":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={zPaging:e("2b02").default,uniSection:e("4194").default,tabbar:e("0f5b").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("z-paging",{ref:"paging",attrs:{"auto-show-back-to-top":!0},on:{query:function(i){arguments[0]=i=t.$handleEvent(i),t.queryList.apply(void 0,arguments)}},model:{value:t.dataList,callback:function(i){t.dataList=i},expression:"dataList"}},[e("v-uni-view",{staticClass:"box",style:"background-image:url("+t.config.backgroupPic+");",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.helpDetail(t.config.tutorial1_linkId)}}},[e("v-uni-rich-text",{attrs:{nodes:t.config.tutorial1}}),e("v-uni-view",{staticClass:"lnk"},[t._v(t._s(t.$t("common.show_detail")))])],1),e("v-uni-view",{staticClass:"box",style:"background-image:url("+t.config.backgroupPic+");",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.helpDetail(t.config.tutorial2_linkId)}}},[e("v-uni-rich-text",{attrs:{nodes:t.config.tutorial2}}),e("v-uni-view",{staticClass:"lnk"},[t._v(t._s(t.$t("common.show_detail")))])],1),e("uni-section",{staticClass:"mb-10",attrs:{title:t.$t("index.ann_title"),type:"line"}}),e("v-uni-view",{staticClass:"gridbox"},t._l(t.dataList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"grid",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.annDetail(i.id)}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"right-desc"},[t._v(t._s(i.createTime))])],1)})),1),e("template",{slot:"bottom"},[e("tabbar",{attrs:{"tab-index":0}})],1)],2),e("v-uni-view",{staticStyle:{display:"none"}},[t._v(t._s(t.naviTitle))])],1)},o=[]},"62a3":function(t,i,e){var a=e("9da7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("ed319f24",a,!0,{sourceMap:!1,shadowMode:!1})},"691c":function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5530")),o=e("26cb"),s={data:function(){return{dataList:[]}},onShow:function(){},onReachBottom:function(t){console.log(t)},computed:(0,n.default)((0,n.default)({},(0,o.mapGetters)(["config"])),{},{naviTitle:function(){var t=this.config.systemName?this.config.systemName:"";return uni.setNavigationBarTitle({title:t+this.$t("index").title}),t+this.$t("index").title}}),methods:{helpDetail:function(t){uni.navigateTo({url:"/pages/index/ann_detail/ann_detail?is_help=1&id="+t})},annDetail:function(t){uni.navigateTo({url:"/pages/index/ann_detail/ann_detail?id="+t})},queryList:function(t,i){var e=this;this.$tools.apiPost("uc/announcement/page",{pageNo:t,pageSize:i},(function(t){e.$refs.paging.complete(t.data.content)}),(function(t){e.$refs.paging.complete([]),e.$tools.error(t.message)}))}}};i.default=s},"7fdf":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};i.default=a},"82b2":function(t,i,e){var a=e("c18d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("d42c5cc0",a,!0,{sourceMap:!1,shadowMode:!1})},"94fd":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"con"},[e("v-uni-view",{staticClass:"tabs"},t._l(t.lists,(function(i,a){return e("v-uni-view",{key:a,staticClass:"tab",class:{active:t.tabIndex==a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.page(i.path,i.isLogin)}}},[e("v-uni-image",{staticStyle:{width:"38rpx"},attrs:{src:t.tabIndex==a?i.activeIcon:i.icon,mode:"widthFix"}}),e("v-uni-view",{staticClass:"txt"},[t._v(t._s(i.name))])],1)})),1)],1)},o=[]},9771:function(t,i,e){"use strict";e.r(i);var a=e("5d66"),n=e("ea49");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("5333");var s,c=e("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"ddfb06ca",null,!1,a["a"],s);i["default"]=r.exports},"9da7":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.box[data-v-ddfb06ca]{padding:%?30?%;background-color:#fff;margin:0 %?30?%;margin-bottom:%?20?%;background-size:cover;background-repeat:no-repeat;border-radius:%?40?%;color:#fff}.box .lnk[data-v-ddfb06ca]{text-align:right;margin-top:%?20?%}.box[data-v-ddfb06ca]:first-child{margin-top:%?30?%}.gridbox[data-v-ddfb06ca]{padding:0 %?30?%;background-color:#fff}.gridbox .grid[data-v-ddfb06ca]{padding:%?20?% 0}.gridbox .grid .title[data-v-ddfb06ca]{font-size:%?28?%}.gridbox .grid .right-desc[data-v-ddfb06ca]{margin-top:%?20?%;text-align:right;font-size:%?24?%;color:#999}',""]),t.exports=i},a04c:function(t,i,e){"use strict";e.r(i);var a=e("5160"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},b459:function(t,i,e){"use strict";e.r(i);var a=e("7fdf"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},c18d:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}',""]),t.exports=i},c610:function(t,i,e){"use strict";var a=e("82b2"),n=e.n(a);n.a},ea49:function(t,i,e){"use strict";e.r(i);var a=e("691c"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},fe5d:function(t,i,e){var a=e("2d02");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("09fc2055",a,!0,{sourceMap:!1,shadowMode:!1})},ff77:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"uni-section"},[e("v-uni-view",{staticClass:"uni-section-header",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}},[t.type?e("v-uni-view",{staticClass:"uni-section-header__decoration",class:t.type}):t._t("decoration"),e("v-uni-view",{staticClass:"uni-section-header__content"},[e("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{"font-size":t.titleFontSize,color:t.titleColor}},[t._v(t._s(t.title))]),t.subTitle?e("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":t.subTitleFontSize,color:t.subTitleColor}},[t._v(t._s(t.subTitle))]):t._e()],1),e("v-uni-view",{staticClass:"uni-section-header__slot-right"},[t._t("right")],2)],2),e("v-uni-view",{staticClass:"uni-section-content",style:{padding:t._padding}},[t._t("default")],2)],1)},o=[]}}]);