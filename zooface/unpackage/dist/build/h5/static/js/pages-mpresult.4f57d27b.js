(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mpresult"],{"1d63":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"s-switch-container"},t._l(t.switchArr,(function(e){return n("v-uni-view",{key:e.key,staticClass:"s-switch-item",class:{"s-switch-selected":e.selected},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectItem(e)}}},[t._v(t._s(e.value))])})),1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},"423a":function(t,e,n){var i=n("c692");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7ffcbedb",i,!0,{sourceMap:!1,shadowMode:!1})},"54f8":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(i["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,u=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return u=t.done,t},e:function(t){s=!0,o=t},f:function(){try{u||null==a["return"]||a["return"]()}finally{if(s)throw o}}}}},"753b":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("54f8")),o={name:"SSwitch",props:{defaultValue:{type:Number,default:0},switchList:{type:Array,default:[{key:0,value:"是"},{key:1,value:"否"}]}},data:function(){return{switchArr:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,n=(0,a.default)(this.switchArr);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.key===i.key?(i.selected=!0,this.$emit("switchValue",i)):i.selected=!1}}catch(o){n.e(o)}finally{n.f()}}}},created:function(){for(var t=0;t<2;t++){var e={key:this.switchList[t].key,value:this.switchList[t].value,selected:this.defaultValue===this.switchList[t].key};this.switchList[t].key===this.defaultValue&&this.$emit("switchValue",e),this.switchArr.push(e)}}};e.default=o},"7abc":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.s-switch-container[data-v-09482412]{font-size:%?30?%;color:rgba(0,0,0,.5);text-align:center;line-height:%?90?%}.s-switch-item[data-v-09482412]{background:url(http://img.zooseefun.net/result/cli.png) no-repeat;background-size:100% 100%;width:%?235?%;height:%?90?%;display:inline-block}.s-switch-selected[data-v-09482412]{background:url(http://img.zooseefun.net/result/iscli.png) no-repeat;background-size:100% 100%;color:#fff}',""]),t.exports=e},8936:function(t,e,n){"use strict";n.r(e);var i=n("1d63"),a=n("f5d8");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d0c1");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"09482412",null,!1,i["a"],u);e["default"]=r.exports},"8ca7":function(t,e,n){"use strict";var i=n("423a"),a=n.n(i);a.a},"913c":function(t,e,n){"use strict";(function(t){var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("8936")),o={data:function(){return{path:"",arr:[{key:0,value:"动物图像"},{key:1,value:"对比图像"}],animal_pic:"",animal_pic_co:"",loadPic:"",num:0,name:""}},components:{sswitch:a.default},onShareAppMessage:function(t){return{title:"我在zooface里变成动物后颜值打败了"+this.num+"%的人，快来挑战我吧~",path:"/pages/pk?num="+this.num+"&pic="+this.loadPic+"&name="+this.name}},onLoad:function(){var e=this;uni.getStorage({key:"data",success:function(t){var n=JSON.parse(t.data);e.animal_pic=n.animal,e.animal_pic_co=n.animal_human,e.path="https://faceback.zooseefun.net"+e.animal_pic},fail:function(){uni.showToast({icon:"none",title:"无数据"})}});var n=JSON.parse(uni.getStorageSync("animalPic"));t.log(n),this.loadPic=n.path,this.name=n.name,uni.showShareMenu(),this.num=Math.floor(-99*Math.random()+100)},methods:{download:function(){var e=this.path;uni.showLoading({title:"正在保存"}),t.log(11),uni.getSetting({success:function(n){t.log(n),n.authSetting["scope.writePhotosAlbum"]?(t.log("已授权"),t.log(e),uni.downloadFile({url:e,success:function(e){t.log(e),200===e.statusCode&&uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){uni.showToast({icon:"none",title:"保存成功"}),uni.hideLoading()},fail:function(){uni.showToast({icon:"none",title:"保存失败"}),uni.hideLoading()}})},fail:function(){uni.showToast({icon:"none",title:"保存失败"}),uni.hideLoading()}})):(t.log("未授权"),uni.hideLoading(),uni.authorize({scope:"scope.writePhotosAlbum",success:function(){t.log("授权成功"),uni.showLoading({title:"正在保存"}),uni.downloadFile({url:e,success:function(e){t.log("下载"+e),200===e.statusCode&&uni.saveImageToPhotosAlbum({filePath:e.tempFilePath,success:function(){uni.showToast({icon:"none",title:"保存成功"}),uni.hideLoading()},fail:function(){uni.showToast({icon:"none",title:"保存失败"}),uni.hideLoading()}})}})},fail:function(){uni.showToast({icon:"none",title:"用户拒绝授权"}),uni.hideLoading()}}))}})},saveAlbum:function(){t.log(1)},getSwitchValue:function(e){t.log(e),0===e.key?this.path="https://faceback.zooseefun.net"+this.animal_pic:1===e.key&&(this.path="https://faceback.zooseefun.net"+this.animal_pic_co),t.log(this.path)},again:function(){uni.redirectTo({url:"select"})},share:function(){}}};e.default=o}).call(this,n("5a52")["default"])},"9dee":function(t,e,n){"use strict";var i={"s-switch":n("8936").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"top"},[n("s-switch",{attrs:{defaultValue:0,switchList:t.arr},on:{switchValue:function(e){arguments[0]=e=t.$handleEvent(e),t.getSwitchValue.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-cover-image",{staticStyle:{width:"96upx",height:"96upx",position:"absolute",right:"13upx","z-index":"99999"},attrs:{src:"http://img.zooseefun.net/mpresult/download.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.download.apply(void 0,arguments)}}}),n("v-uni-image",{attrs:{src:t.path,mode:"aspectFit"}})],1),n("v-uni-view",{staticStyle:{width:"100%",height:"166upx","margin-top":"40upx","margin-left":"43upx"}},[n("v-uni-image",{staticStyle:{width:"120upx",height:"120upx",float:"left"},attrs:{src:t.loadPic}}),n("v-uni-view",{staticClass:"log"},[n("v-uni-view",{staticClass:"te"},[t._v("WOW,变成动物的你可爱程度超过了"+t._s(t.num)+"%的用户，快去跟你的好友PK一下")])],1),n("v-uni-button",{staticClass:"go",attrs:{"open-type":"share"}})],1),n("v-uni-view",[n("v-uni-view",{staticClass:"again",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("v-uni-text",{staticStyle:{"margin-left":"50upx"}},[t._v("再玩一次")])],1),n("v-uni-button",{staticClass:"share",attrs:{"open-type":"share"}},[n("v-uni-image",{attrs:{src:"http://img.zooseefun.net/mpresult/share.png"}}),n("v-uni-text",[t._v("去分享")])],1)],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},ae59:function(t,e,n){var i=n("7abc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("92206ace",i,!0,{sourceMap:!1,shadowMode:!1})},c692:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".top[data-v-3484dae5]{margin-top:%?20?%}.main uni-image[data-v-3484dae5]{width:100%;height:100%\r\n\t/* width: auto;\n\t\theight: auto;\n\t\tmax-width: 100%;\n\t\tmax-height: 100%; */}.main[data-v-3484dae5]{width:%?752?%;height:%?693?%;margin-top:%?40?%;background-color:#d8d8d8}.again[data-v-3484dae5]{background:url(http://img.zooseefun.net/result/button.png) no-repeat;background-size:100% 100%;width:%?334?%;height:%?122?%;margin-top:%?20?%;text-align:center;color:#fff;line-height:%?122?%;float:left;font-size:%?30?%;margin-left:%?38?%}.share[data-v-3484dae5]{background:url(http://img.zooseefun.net/mpresult/sharebtn.png) no-repeat;background-size:100% 100%;width:%?334?%;height:%?122?%;margin-top:%?20?%;text-align:center;color:#fff;line-height:%?122?%;float:left;font-size:%?30?%}.share uni-image[data-v-3484dae5]{width:%?56?%;height:%?42?%;vertical-align:middle}.log[data-v-3484dae5]{background:url(http://img.zooseefun.net/mpresult/log.png) no-repeat;background-size:100% 100%;width:%?386?%;height:%?166?%;color:#555;float:left}.go[data-v-3484dae5]{background:url(http://img.zooseefun.net/mpresult/go.png) no-repeat;background-size:100% 100%;width:%?155?%;height:%?155?%;border:none!important;float:left}.go[data-v-3484dae5]:after{border:none!important}.te[data-v-3484dae5]{font-size:%?20?%;height:%?91?%;width:%?255?%;margin-left:%?74?%;margin-top:%?32?%;color:#fff}.share[data-v-3484dae5]:after{border:none!important}html[data-v-3484dae5],\r\nbody[data-v-3484dae5]{padding-top:%?130?%!important;position:fixed}",""]),t.exports=e},ca3f:function(t,e,n){"use strict";n.r(e);var i=n("9dee"),a=n("d5f6");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("8ca7");var u,s=n("f0c5"),r=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3484dae5",null,!1,i["a"],u);e["default"]=r.exports},d0c1:function(t,e,n){"use strict";var i=n("ae59"),a=n.n(i);a.a},d5f6:function(t,e,n){"use strict";n.r(e);var i=n("913c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},f5d8:function(t,e,n){"use strict";n.r(e);var i=n("753b"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);