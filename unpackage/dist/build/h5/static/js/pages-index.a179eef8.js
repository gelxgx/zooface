(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index"],{"06a6":function(n,t,e){var i=e("e280");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var c=e("4f06").default;c("58fff2e4",i,!0,{sourceMap:!1,shadowMode:!1})},"2fe0":function(n,t,e){"use strict";e.r(t);var i=e("df9f"),c=e("6c5f");for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);e("5d97");var a,u=e("f0c5"),r=Object(u["a"])(c["default"],i["b"],i["c"],!1,null,"6c8cdf74",null,!1,i["a"],a);t["default"]=r.exports},"5d97":function(n,t,e){"use strict";var i=e("06a6"),c=e.n(i);c.a},"6c5f":function(n,t,e){"use strict";e.r(t);var i=e("d70c"),c=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=c.a},d70c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{checked:!1}},onLoad:function(n){String.prototype.bool=function(){return/^true$/i.test(n.check)},this.checked="true".bool()},methods:{check:function(n){this.checked=!this.checked},go:function(){this.checked?uni.redirectTo({url:"select"}):uni.showToast({title:"请勾选用户协议",icon:"none"})},xieyi:function(){uni.redirectTo({url:"prot"})}}};t.default=i},df9f:function(n,t,e){"use strict";var i,c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"dialog"},[e("v-uni-image",{attrs:{src:"http://img.zooseefun.net/dialog-text@2x.png"}})],1),e("v-uni-view",{staticClass:"button",staticStyle:{"text-align":"center"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.go()}}},[e("v-uni-view",[e("v-uni-image",{staticClass:"camera",attrs:{src:"http://img.zooseefun.net/camera@2x.png"}}),e("v-uni-text",[n._v("去看看")])],1)],1),e("v-uni-view",{staticStyle:{"text-align":"center","font-size":"30upx"}},[e("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.check.apply(void 0,arguments)}}},[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#ee9260",value:"",checked:n.checked}}),e("v-uni-text",{staticStyle:{color:"#FFFFFF"}},[n._v("我已阅读并同意")]),e("v-uni-text",{staticStyle:{color:"#ee9260"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.xieyi()}}},[n._v("《用户协议》")])],1)],1)],1)},o=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}))},e280:function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nuni-checkbox .uni-checkbox-input[data-v-6c8cdf74]{width:%?20?%!important;height:%?20?%!important}.content[data-v-6c8cdf74]{background:url(http://img.zooseefun.net/bg@2x.png) no-repeat;background-size:100% 100%;position:absolute;width:100%;height:100%}.dialog[data-v-6c8cdf74]{width:%?498?%;height:%?355?%;margin-top:90%;margin-left:%?9?%;background:url(http://img.zooseefun.net/dialog@2x.png) no-repeat;background-size:100% 100%}.dialog uni-image[data-v-6c8cdf74]{width:%?284?%;height:%?108?%;margin-top:%?121?%;margin-left:%?81?%}.button[data-v-6c8cdf74]{border:none;background:url(http://img.zooseefun.net/button@2x.png) no-repeat;background-size:100% 100%;width:%?538?%;height:%?127?%;margin:0 auto}.button uni-image[data-v-6c8cdf74]{margin-right:%?18?%;vertical-align:middle}.button uni-text[data-v-6c8cdf74]{color:#fff;font-size:%?30?%}.camera[data-v-6c8cdf74]{width:%?59?%;height:%?52?%}.button uni-view[data-v-6c8cdf74]{padding-top:%?30?%}\n\n",""]),n.exports=t}}]);