(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/s-switch/s-switch"],{"58bf":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}))},b5c6:function(t,e,n){"use strict";function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u,a=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}function i(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"SSwitch",props:{defaultValue:{type:Number,default:0},switchList:{type:Array,default:[{key:0,value:"是"},{key:1,value:"否"}]}},data:function(){return{switchArr:[]}},methods:{selectItem:function(t){if(!1===t.selected){var e,n=r(this.switchArr);try{for(n.s();!(e=n.n()).done;){var i=e.value;t.key===i.key?(i.selected=!0,this.$emit("switchValue",i)):i.selected=!1}}catch(u){n.e(u)}finally{n.f()}}}},created:function(){for(var t=0;t<2;t++){var e={key:this.switchList[t].key,value:this.switchList[t].value,selected:this.defaultValue===this.switchList[t].key};this.switchList[t].key===this.defaultValue&&this.$emit("switchValue",e),this.switchArr.push(e)}}};e.default=a},c222:function(t,e,n){"use strict";n.r(e);var r=n("b5c6"),i=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=i.a},d679:function(t,e,n){"use strict";n.r(e);var r=n("58bf"),i=n("c222");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("e83a");var a,c=n("f0c5"),o=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"4187922d",null,!1,r["a"],a);e["default"]=o.exports},e83a:function(t,e,n){"use strict";var r=n("fc1b"),i=n.n(r);i.a},fc1b:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/s-switch/s-switch-create-component',
    {
        'components/s-switch/s-switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d679"))
        })
    },
    [['components/s-switch/s-switch-create-component']]
]);