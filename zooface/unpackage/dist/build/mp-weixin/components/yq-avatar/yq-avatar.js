(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/yq-avatar/yq-avatar"],{"126b":function(t,i,e){},"16f6":function(t,i,e){"use strict";e.r(i);var s=e("61c4"),h=e("e5c5");for(var a in h)"default"!==a&&function(t){e.d(i,t,(function(){return h[t]}))}(a);e("c3e6");var n,r=e("f0c5"),o=Object(r["a"])(h["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);i["default"]=o.exports},"61c4":function(t,i,e){"use strict";var s,h=function(){var t=this,i=t.$createElement,e=(t._self._c,t.__get_style([t.imgStyle]));t.$mp.data=Object.assign({},{$root:{s0:e}})},a=[];e.d(i,"b",(function(){return h})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return s}))},"9c0a":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=h(e("4795"));function h(t){return t&&t.__esModule?t:{default:t}}function a(t,i,e,s,h,a,n){try{var r=t[a](n),o=r.value}catch(l){return void e(l)}r.done?i(o):Promise.resolve(o).then(s,h)}function n(t){return function(){var i=this,e=arguments;return new Promise((function(s,h){var n=t.apply(i,e);function r(t){a(n,s,h,r,o,"next",t)}function o(t){a(n,s,h,r,o,"throw",t)}r(void 0)}))}}function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,h,a=!0,n=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return a=t.done,t},e:function(t){n=!0,h=t},f:function(){try{a||null==s.return||s.return()}finally{if(n)throw h}}}}function o(t,i){if(t){if("string"===typeof t)return l(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,i):void 0}}function l(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,s=new Array(i);e<i;e++)s[e]=t[e];return s}var c=50,p={name:"yq-avatar",data:function(){return{cvsStyleHeight:"0px",styleDisplay:"none",styleTop:"-10000px",prvTop:"-10000px",imgStyle:{},selStyle:{},showOper:!0,imgSrc:{imgSrc:""},btnWidth:"19%",btnDsp:"flex"}},watch:{avatarSrc:function(){this.imgSrc.imgSrc=this.avatarSrc}},props:{avatarSrc:"",avatarStyle:"",selWidth:"",selHeight:"",expWidth:"",expHeight:"",minScale:"",maxScale:"",canScale:"",canRotate:"",lockWidth:"",lockHeight:"",stretch:"",lock:"",noTab:"",inner:"",quality:"",index:"",bgImage:""},created:function(){var i=this;this.ctxCanvas=t.createCanvasContext("avatar-canvas",this),this.ctxCanvasOper=t.createCanvasContext("oper-canvas",this),this.ctxCanvasPrv=t.createCanvasContext("prv-canvas",this),this.qlty=parseInt(this.quality)||.9,this.imgSrc.imgSrc=this.avatarSrc,this.letRotate="false"===this.canRotate||"true"===this.inner?0:1,this.letScale="false"===this.canScale?0:1,this.isin="true"===this.inner?1:0,this.indx=this.index||void 0,this.mnScale=this.minScale||.3,this.mxScale=this.maxScale||4,this.noBar="true"===this.noTab?1:0,this.stc=this.stretch,this.lck=this.lock,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),this.noBar?(this.moreHeight=0,this.fWindowResize()):t.showTabBar({complete:function(t){i.moreHeight="showTabBar:ok"===t.errMsg?50:0,i.fWindowResize()}})},methods:{fWindowResize:function(){var i=t.getSystemInfoSync();this.platform=i.platform,this.pixelRatio=i.pixelRatio,this.windowWidth=i.windowWidth,this.windowHeight=i.windowHeight+this.moreHeight,this.cvsStyleHeight=this.windowHeight-c-2+"px",this.pxRatio=this.windowWidth/750;var e=this.avatarStyle;if(e&&!0!==e&&(e=e.trim())){e=e.split(";");var s,h={},a=r(e);try{for(a.s();!(s=a.n()).done;){var n=s.value;if(n){if(n=n.trim().split(":"),n[1].indexOf("upx")>=0){var o=n[1].trim().split(" ");for(var l in o)o[l]&&o[l].indexOf("upx")>=0&&(o[l]=parseFloat(o[l])*this.pxRatio+"px");n[1]=o.join(" ")}h[n[0].trim()]=n[1].trim()}}}catch(p){a.e(p)}finally{a.f()}this.imgStyle=h}this.expWidth&&(this.exportWidth=this.expWidth.indexOf("upx")>=0?parseInt(this.expWidth)*this.pxRatio:parseInt(this.expWidth)),this.expHeight&&(this.exportHeight=this.expHeight.indexOf("upx")>=0?parseInt(this.expHeight)*this.pxRatio:parseInt(this.expHeight)),"flex"===this.styleDisplay&&this.fDrawInit(!0),this.fHideImg()},fSelect:function(){var i=this;this.fSelecting||(this.fSelecting=!0,setTimeout((function(){i.fSelecting=!1}),500),t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.showLoading({mask:!0});var s=i.imgPath=e.tempFilePaths[0];t.getImageInfo({src:s,success:function(e){if(i.imgWidth=e.width,i.imgHeight=e.height,i.path=s,!i.hasSel){var h=i.selStyle||{};if(!i.selWidth||!i.selHeight)return void t.showModal({title:"裁剪框的宽或高没有设置",showCancel:!1});var a=i.selWidth.indexOf("upx")>=0?parseInt(i.selWidth)*i.pxRatio:parseInt(i.selWidth),n=i.selHeight.indexOf("upx")>=0?parseInt(i.selHeight)*i.pxRatio:parseInt(i.selHeight);h.width=a+"px",h.height=n+"px",h.top=(i.windowHeight-n-c)/2+"px",h.left=(i.windowWidth-a)/2+"px",i.selStyle=h}i.noBar?i.fDrawInit(!0):t.hideTabBar({complete:function(){i.fDrawInit(!0)}})},fail:function(){t.showToast({title:"error3",duration:2e3})},complete:function(){t.hideLoading()}})}}))},fUpload:function(){var i=this;if(!this.fUploading){this.fUploading=!0,setTimeout((function(){i.fUploading=!1}),1e3);var e=this.selStyle,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height),r=this.exportWidth||a,o=this.exportHeight||n;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn})},fail:function(i){t.showToast({title:"error1",duration:2e3})},complete:function(){t.hideLoading(),i.noBar||t.showTabBar()}},this)}},fPrvUpload:function(){var i=this;if(!this.fPrvUploading){this.fPrvUploading=!0,setTimeout((function(){i.fPrvUploading=!1}),1e3);var e=this.selStyle,s=(parseInt(e.width),parseInt(e.height),this.prvX),h=this.prvY,a=this.prvWidth,n=this.prvHeight,r=this.exportWidth||a,o=this.exportHeight||n;t.showLoading({mask:!0}),this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,destWidth:r,destHeight:o,canvasId:"prv-canvas",fileType:"png",quality:this.qlty,success:function(t){t=t.tempFilePath,i.$emit("upload",{avatar:i.imgSrc,path:t,index:i.indx,data:i.rtn})},fail:function(){t.showToast({title:"error_prv",duration:2e3})},complete:function(){i.noBar||t.showTabBar()}},this)}},fDrawInit:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.windowWidth,s=this.windowHeight,h=this.imgWidth,a=this.imgHeight,n=h/a,r=e-40,o=s-c-80,l=(this.pixelRatio,parseInt(this.selStyle.width)),p=parseInt(this.selStyle.height);switch(this.fixWidth=0,this.fixHeight=0,this.lckWidth=0,this.lckHeight=0,this.stc){case"x":this.fixWidth=1;break;case"y":this.fixHeight=1;break;case"long":n>1?this.fixWidth=1:this.fixHeight=1;break;case"short":n>1?this.fixHeight=1:this.fixWidth=1;break;case"longSel":l>p?this.fixWidth=1:this.fixHeight=1;break;case"shortSel":l>p?this.fixHeight=1:this.fixWidth=1;break}switch(this.lck){case"x":this.lckWidth=1;break;case"y":this.lckHeight=1;break;case"long":n>1?this.lckWidth=1:this.lckHeight=1;break;case"short":n>1?this.lckHeight=1:this.lckWidth=1;break;case"longSel":l>p?this.lckWidth=1:this.lckHeight=1;break;case"shortSel":l>p?this.lckHeight=1:this.lckWidth=1;break}this.fixWidth?(r=l,o=r/n):this.fixHeight?(o=p,r=o*n):n<1?a<o?(r=h,o=a):(o=o,r=o*n):h<r?(r=h,o=a):(r=r,o=r/n),this.isin&&(this.scaleWidth=0,this.scaleHeight=0,r<l&&(r=l,o=r/n,this.lckHeight=0),o<p&&(o=p,r=o*n,this.lckWidth=0)),this.scaleSize=1,this.rotateDeg=0,this.posWidth=(e-r)/2,this.posHeight=(s-o-c)/2,this.useWidth=r,this.useHeight=o;var d=this.selStyle,u=parseInt(d.left),f=parseInt(d.top),g=parseInt(d.width),v=parseInt(d.height),x=(this.canvas,this.canvasOper,this.ctxCanvas,this.ctxCanvasOper);x.setLineWidth(3),x.setStrokeStyle("grey"),x.setGlobalAlpha(.4),x.strokeRect(u,f,g,v),x.setStrokeStyle("red"),x.moveTo(u+20,f),x.lineTo(u,f),x.lineTo(u,f+20),x.moveTo(u+g-20,f),x.lineTo(u+g,f),x.lineTo(u+g,f+20),x.moveTo(u+20,f+v),x.lineTo(u,f+v),x.lineTo(u,f+v-20),x.moveTo(u+g-20,f+v),x.lineTo(u+g,f+v),x.lineTo(u+g,f+v-20),x.stroke(),x.draw(!1,(function(){i&&(t.styleDisplay="flex",t.styleTop="0",t.fDrawImage(!0))})),this.$emit("avtinit")},fDrawImage:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Date.now();if(!(e-this.drawTm<20)){this.drawTm=e;var s=this.ctxCanvas;s.translate(this.posWidth+this.useWidth/2,this.posHeight+this.useHeight/2),this.bgImage?s.drawImage(this.bgImage,-this.posWidth-this.useWidth/2,-this.posHeight-this.useHeight/2,this.windowWidth,this.windowHeight-c):s.fillRect(-this.posWidth-this.useWidth/2,-this.posHeight-this.useHeight/2,this.windowWidth,this.windowHeight-c),s.scale(this.scaleSize,this.scaleSize),s.rotate(this.rotateDeg*Math.PI/180),s.drawImage(this.imgPath,-this.useWidth/2,-this.useHeight/2,this.useWidth,this.useHeight),i?setTimeout((function(){s.draw(!0,(function(){t.fDrawImage()}))}),20):s.draw(!1)}},fHideImg:function(){this.prvImg="",this.prvTop="-10000px",this.showOper=!0,this.prvImgData=null,this.target=null},fClose:function(){this.styleDisplay="none",this.styleTop="-10000px",this.hasSel=!1,this.fHideImg(),this.noBar||t.showTabBar()},fPreview:function(){var i=this;if(!this.fPreviewing){this.fPreviewing=!0,setTimeout((function(){i.fPreviewing=!1}),1e3);var e=this.selStyle,s=parseInt(e.left),h=parseInt(e.top),a=parseInt(e.width),n=parseInt(e.height);t.showLoading({mask:!0}),t.canvasToTempFilePath({x:s,y:h,width:a,height:n,canvasId:"avatar-canvas",fileType:"png",quality:this.qlty,success:function(t){i.prvImgTmp=t=t.tempFilePath;var e=i.ctxCanvasPrv,s=i.windowWidth,h=parseInt(i.cvsStyleHeight),a=parseInt(i.selStyle.width),n=parseInt(i.selStyle.height),r=s-40,o=h-80,l=r/a,c=n*l;c<o?(a=r,n=c):(l=o/n,a*=l,n=o),e.setFillStyle("black"),e.fillRect(0,0,s,h),i.prvX=s=(s-a)/2,i.prvY=h=(h-n)/2,i.prvWidth=a,i.prvHeight=n,e.drawImage(t,s,h,a,n),e.draw(!1),"android"!=i.platform&&(i.showOper=!1),i.prvTop="0"},fail:function(){t.showToast({title:"error2",duration:2e3})},complete:function(){t.hideLoading()}},this)}},fChooseImg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(i){var s=i.selWidth,h=i.selHeight,a=i.expWidth,n=i.expHeight,r=i.quality,o=i.canRotate,l=i.canScale,p=i.minScale,d=i.maxScale,u=i.stretch,f=i.inner,g=i.lock;a&&(this.exportWidth=a.indexOf("upx")>=0?parseInt(a)*this.pxRatio:parseInt(a)),n&&(this.exportHeight=n.indexOf("upx")>=0?parseInt(n)*this.pxRatio:parseInt(n)),this.letRotate="false"===o?0:1,this.letScale="false"===l?0:1,this.qlty=parseInt(r)||.9,this.mnScale=p||.3,this.mxScale=d||4,this.stc=u,this.isin="true"===f?1:0,this.lck=g,this.isin?(this.btnWidth="24%",this.btnDsp="none"):(this.btnWidth="19%",this.btnDsp="flex"),s&&h&&(s=s.indexOf("upx")>=0?parseInt(s)*this.pxRatio:parseInt(s),h=h.indexOf("upx")>=0?parseInt(h)*this.pxRatio:parseInt(h),this.selStyle.width=s+"px",this.selStyle.height=h+"px",this.selStyle.top=(this.windowHeight-h-c)/2+"px",this.selStyle.left=(this.windowWidth-s)/2+"px",this.hasSel=!0)}this.rtn=e,this.indx=t,this.fSelect()},fRotate:function(){this.rotateDeg+=90-this.rotateDeg%90,this.fDrawImage()},fStart:function(t){var i=t.touches,e=i[0],s=i[1];if(this.touch0=e,this.touch1=s,s){var h=s.x-e.x,a=s.y-e.y;this.fgDistance=Math.sqrt(h*h+a*a)}},fMove:function(t){var i=t.touches,e=i[0],s=i[1];if(s){var h=s.x-e.x,a=s.y-e.y,n=Math.sqrt(h*h+a*a),r=.005*(n-this.fgDistance),o=this.scaleSize+r;do{if(!this.letScale)break;if(o<this.mnScale)break;if(o>this.mxScale)break;if(this.isin){var l=this.useWidth*o,c=this.useHeight*o,p=this.posWidth+this.useWidth/2,d=this.posHeight+this.useHeight/2,u=p-l/2,f=d-c/2,g=u+l,v=f+c,x=parseInt(this.selStyle.left),m=parseInt(this.selStyle.top),w=parseInt(this.selStyle.width),y=parseInt(this.selStyle.height);if(x<u||x+w>g||m<f||m+y>v)break;this.scaleWidth=(this.useWidth-l)/2,this.scaleHeight=(this.useHeight-c)/2}this.scaleSize=o}while(0);this.fgDistance=n,s.x!==e.x&&this.letRotate&&(h=(this.touch1.y-this.touch0.y)/(this.touch1.x-this.touch0.x),a=(s.y-e.y)/(s.x-e.x),this.rotateDeg+=180*Math.atan((a-h)/(1+h*a))/Math.PI,this.touch0=e,this.touch1=s),this.fDrawImage()}else if(this.touch0){var S=e.x-this.touch0.x,I=e.y-this.touch0.y,H=this.posWidth+S,W=this.posHeight+I;if(this.isin){var b=this.useWidth*this.scaleSize,k=this.useHeight*this.scaleSize,T=H+this.useWidth/2,D=W+this.useHeight/2,R=T-b/2,P=D-k/2,C=R+b,O=P+k,M=parseInt(this.selStyle.left),q=parseInt(this.selStyle.top),U=parseInt(this.selStyle.width),B=parseInt(this.selStyle.height);!this.lckWidth&&Math.abs(S)<100&&(M>=R&&M+U<=C?this.posWidth=H:M<R?this.posWidth=M-this.scaleWidth:M+U>C&&(this.posWidth=M-(b-U)-this.scaleWidth)),!this.lckHeight&&Math.abs(I)<100&&(q>=P&&q+B<=O?this.posHeight=W:q<P?this.posHeight=q-this.scaleHeight:q+B>O&&(this.posHeight=q-(k-B)-this.scaleHeight))}else Math.abs(S)<100&&!this.lckWidth&&(this.posWidth=H),Math.abs(I)<100&&!this.lckHeight&&(this.posHeight=W);this.touch0=e,this.fDrawImage()}},fEnd:function(t){var i=t.touches,e=i&&i[0];i&&i[1];e?this.touch0=e:(this.touch0=null,this.touch1=null)},fGetImgData:function(){var i=this;return new Promise((function(e,s){var h=i.prvX,a=i.prvY,n=i.prvWidth,r=i.prvHeight;t.canvasGetImageData({canvasId:"prv-canvas",x:h,y:a,width:n,height:r,success:function(t){e(t.data)},fail:function(t){s(t)}},i)}))},fColorChange:function(i){var e=this;return n(s.default.mark((function h(){var a,n,r,o,l,c,p,d,u,f,g,v,x,m,w,y,S,I,H,W,b,k,T,D,R,P,C;return s.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=Date.now(),!(a-e.prvTm<100)){s.next=3;break}return s.abrupt("return");case 3:if(e.prvTm=a,t.showLoading({mask:!0}),e.prvImgData){s.next=11;break}return s.next=8,e.fGetImgData().catch((function(i){t.showToast({title:"error_read",duration:2e3})}));case 8:if(e.prvImgData=s.sent){s.next=10;break}return s.abrupt("return");case 10:e.target=new Uint8ClampedArray(e.prvImgData.length);case 11:if(n=e.prvImgData,r=e.target,o=i.detail.value,0===o)r=n;else for(o=(o+100)/200,o<.005&&(o=0),o>.995&&(o=1),b=n.length-1;b>=0;b-=4)l=n[b-3]/255,c=n[b-2]/255,p=n[b-1]/255,y=Math.max(l,c,p),w=Math.min(l,c,p),v=y-w,y===w?u=0:y===l&&c>=p?u=(c-p)/v*60:y===l&&c<p?u=(c-p)/v*60+360:y===c?u=(p-l)/v*60+120:y===p&&(u=(l-c)/v*60+240),g=(y+w)/2,0===g||y===w?f=0:0<g&&g<=.5?f=v/(2*g):g>.5&&(f=v/(2-2*g)),n[b]&&(d=n[b]),o<.5?f=f*o/.5:o>.5&&(f=2*f+2*o-f*o/.5-1),0===f?l=c=p=Math.round(255*g):(g<.5?m=g*(1+f):g>=.5&&(m=g+f-g*f),x=2*g-m,S=u/360,I=S+1/3,H=S,W=S-1/3,k=function(t){return t<0?t+1:t>1?t-1:t},T=function(t){return t<1/6?x+6*(m-x)*t:t>=1/6&&t<.5?m:t>=.5&&t<2/3?x+6*(m-x)*(2/3-t):x},l=I=Math.round(255*T(k(I))),c=H=Math.round(255*T(k(H))),p=W=Math.round(255*T(k(W)))),d&&(r[b]=d),r[b-3]=l,r[b-2]=c,r[b-1]=p;D=e.prvX,R=e.prvY,P=e.prvWidth,C=e.prvHeight,e.ctxCanvasPrv.draw(!1),t.canvasPutImageData({canvasId:"prv-canvas",x:D,y:R,width:P,height:C,data:r,fail:function(i){t.showToast({title:"error_put",duration:2e3})},complete:function(){t.hideLoading()}},e);case 16:case"end":return s.stop()}}),h)})))()},btop:function(t){return new Promise((function(i,e){var s=t.split(","),h=s[0].match(/:(.*?);/)[1],a=atob(s[1]),n=a.length,r=new Uint8Array(n);while(n--)r[n]=a.charCodeAt(n);return i((window.URL||window.webkitURL).createObjectURL(new Blob([r],{type:h})))}))}}};i.default=p}).call(this,e("543d")["default"])},c3e6:function(t,i,e){"use strict";var s=e("126b"),h=e.n(s);h.a},e5c5:function(t,i,e){"use strict";e.r(i);var s=e("9c0a"),h=e.n(s);for(var a in s)"default"!==a&&function(t){e.d(i,t,(function(){return s[t]}))}(a);i["default"]=h.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/yq-avatar/yq-avatar-create-component',
    {
        'components/yq-avatar/yq-avatar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("16f6"))
        })
    },
    [['components/yq-avatar/yq-avatar-create-component']]
]);
