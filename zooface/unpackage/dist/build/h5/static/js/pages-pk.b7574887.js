(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pk"],{"0100":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"html[data-v-6606ded8],\nbody[data-v-6606ded8]{position:fixed;height:100%}uni-page-body[data-v-6606ded8]{height:100%}.bg[data-v-6606ded8]{background:url(http://img.zooseefun.net/pk/bg.png) no-repeat;background-size:100% 100%;height:100%}.pk[data-v-6606ded8]{width:%?397?%;height:%?283?%;margin-top:75%;margin-left:%?40?%}.animal[data-v-6606ded8]{margin-top:%?30?%;margin-left:%?62?%;margin-bottom:%?20?%}.ani-pic[data-v-6606ded8]{width:%?160?%;height:%?160?%;float:left}.ani-text[data-v-6606ded8]{background:url(http://img.zooseefun.net/pk/log.png) no-repeat;background-size:100% 100%;width:%?475?%;height:%?165?%;float:left;color:#f8f8f8;font-size:%?20?%}.te[data-v-6606ded8]{width:%?360?%;height:%?91?%;margin-top:%?30?%;margin-left:%?75?%}.pk-btn[data-v-6606ded8]{margin-top:%?40?%;margin-left:auto;margin-right:auto;background:url(http://img.zooseefun.net/pk/btn.png) no-repeat;background-size:100% 100%;width:%?538?%;height:%?126?%;line-height:%?126?%;color:#fff;font-size:%?30?%}.pk-btn[data-v-6606ded8]:after{border:none!important}",""]),t.exports=e},1320:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{checked:!1,pic:"",num:0,name:"",option:{}}},onLoad:function(e){t.log(e),String.prototype.bool=function(){return/^true$/i.test(e.check)},this.checked="true".bool(),this.option=e,t.log(""===e.pic||null===e.pic),e.hasOwnProperty("data")&&(this.option=JSON.parse(e.data)),this.pic=this.option.pic,this.name=this.option.name,this.num=this.option.num,uni.showShareMenu()},methods:{check:function(t){this.checked=!this.checked},go:function(){this.checked?uni.redirectTo({url:"select"}):uni.showToast({title:"请勾选用户协议",icon:"none"})},xieyi:function(){uni.redirectTo({url:"prot?u=pk&data="+JSON.stringify(this.option)})}}};e.default=n}).call(this,n("5a52")["default"])},"1e8f":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bg"},[n("v-uni-image",{staticClass:"pk",attrs:{src:"http://img.zooseefun.net/pk/pk.png"}}),n("v-uni-view",{staticClass:"animal"},[n("v-uni-image",{staticClass:"ani-pic",attrs:{src:t.pic}}),n("v-uni-view",{staticClass:"ani-text"},[n("v-uni-view",{staticClass:"te"},[t._v("你的朋友变成了"+t._s(t.name)+"，可爱程度超过了全网"+t._s(t.num)+"%的用户，自豪的向你发出可爱颜值PK邀请")])],1)],1),n("v-uni-button",{staticClass:"pk-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go.apply(void 0,arguments)}}},[t._v("应战")]),n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"30upx"}},[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.check.apply(void 0,arguments)}}},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#ee9260",value:"",checked:t.checked}}),n("v-uni-text",{staticStyle:{color:"#333333"}},[t._v("我已阅读并同意")]),n("v-uni-text",{staticStyle:{color:"#ee9260"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.xieyi()}}},[t._v("《用户协议》")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"5fe0":function(t,e,n){var i=n("0100");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("be64b8c0",i,!0,{sourceMap:!1,shadowMode:!1})},"63ba":function(t,e,n){"use strict";n.r(e);var i=n("1320"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},6633:function(t,e,n){"use strict";var i=n("5fe0"),a=n.n(i);a.a},8685:function(t,e,n){"use strict";n.r(e);var i=n("1e8f"),a=n("63ba");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6633");var c,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"6606ded8",null,!1,i["a"],c);e["default"]=u.exports}}]);