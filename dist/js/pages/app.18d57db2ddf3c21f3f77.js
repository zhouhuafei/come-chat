webpackJsonp([1],{27:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(12),o=n(i),s=a(29),r=n(s);a(70),window.addEventListener("load",function(){setTimeout(function(){new o.default({el:"#app",template:"<app></app>",components:{app:r.default}})},0)})},29:function(t,e,a){function n(t){a(30)}var i=a(35)(a(36),a(69),n,"data-v-57a5204a",null);t.exports=i.exports},30:function(t,e,a){var n=a(31);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(33)("8749cf8c",n,!0)},31:function(t,e,a){e=t.exports=a(32)(void 0),e.push([t.i,".g-view[data-v-57a5204a]{padding:40px 0}.g-view .g-input[data-v-57a5204a]{display:block;text-align:center;position:relative}.g-view .g-input input[data-v-57a5204a]{height:40px;line-height:40px;padding:0 40px 0 20px;width:100%;border:none}.g-view .g-input .icon-clear[data-v-57a5204a]{position:absolute;top:0;right:0;width:40px;text-align:center;height:100%;line-height:40px}.g-view .tail[data-v-57a5204a],.g-view .write[data-v-57a5204a]{position:fixed;left:0;width:100%;z-index:99}.g-view .write[data-v-57a5204a]{bottom:0}.g-view .tail[data-v-57a5204a]{top:0;z-index:99}.g-view .char-item[data-v-57a5204a]{padding:20px;margin-top:20px;background:#fff;overflow:hidden;position:relative}.g-view .char-item .char-item-message[data-v-57a5204a]{color:#0089ff}.g-view .char-item .char-item-tail[data-v-57a5204a]{color:#eb9e05}.g-view .char-item .char-item-close[data-v-57a5204a]{position:absolute;left:4px;bottom:4px}",""])},32:function(t,e){function a(t,e){var a=t[1]||"",i=t[3];if(!i)return a;if(e&&"function"==typeof btoa){var o=n(i);return[a].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([o]).join("\n")}return[a].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=a(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&n[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),e.push(s))}},e}},33:function(t,e,a){function n(t){for(var e=0;e<t.length;e++){var a=t[e],n=u[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(o(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var s=[],i=0;i<a.parts.length;i++)s.push(o(a.parts[i]));u[a.id]={id:a.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,a,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(v)return h;n.parentNode.removeChild(n)}if(g){var o=p++;n=f||(f=i()),e=s.bind(null,n,o,!1),a=s.bind(null,n,o,!0)}else n=i(),e=r.bind(null,n),a=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}function s(t,e,a,n){var i=a?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function r(t,e){var a=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=a(34),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,a){v=a;var i=l(t,e);return n(i),function(e){for(var a=[],o=0;o<i.length;o++){var s=i[o],r=u[s.id];r.refs--,a.push(r)}e?(i=l(t,e),n(i)):i=[];for(var o=0;o<a.length;o++){var r=a[o];if(0===r.refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete u[r.id]}}}};var m=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},34:function(t,e){t.exports=function(t,e){for(var a=[],n={},i=0;i<e.length;i++){var o=e[i],s=o[0],r=o[1],c=o[2],l=o[3],u={id:t+":"+i,css:r,media:c,sourceMap:l};n[s]?n[s].parts.push(u):a.push(n[s]={id:s,parts:[u]})}return a}},35:function(t,e){t.exports=function(t,e,a,n,i){var o,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n);var l;if(i?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):a&&(l=a),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(t,e){return l.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:s,options:c}}},36:function(t,e,a){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var i=io("47.100.125.178:5553"),o=a(14),s=a(68);e.default={data:function(){return{smallTail:s[Math.round(Math.random()*(s.length-1))],chatMessage:"",oldChatMessage:"",nowPage:1,nowCount:20,isLoadingOver:!1,chatList:[]}},methods:{fnSubmit:function(t){t.preventDefault(),t.stopPropagation(),this.chatMessage&&this.oldChatMessage!==this.chatMessage?(i.emit("post",{chatMessage:this.chatMessage,smallTail:this.smallTail}),this.oldChatMessage=this.chatMessage,this.chatMessage=""):alert("不可为空 or 发送重复的讯息")},fnClear:function(){this.chatMessage=""},fnFresh:function(){this.smallTail=s[Math.round(Math.random()*(s.length-1))]},fnDelete:function(t){i.emit("delete",t)}},mounted:function(){var t=this,e=document.querySelector(".g-wrap");[].slice.call(e.querySelectorAll("script")).forEach(function(t){e.removeChild(t)}),i.on("post",function(e){t.chatList.unshift(e.result)}),i.on("delete",function(e){t.chatList.forEach(function(a,n){a._id===e.item._id&&t.chatList.splice(n,1)})});var a=o.whenScrollBottom(),s=new a({callback:{success:function(){i.emit("reqChatRecord",{nowPage:t.nowPage,nowCount:t.nowCount})},failure:function(){}}});i.on("resChatRecord",function(e){var a=e.result,i=a.data;i.length?(t.chatList=[].concat(n(t.chatList),n(i)),++t.nowPage>a.allPage&&(t.isLoadingOver=!0,s.dataLoadOver())):t.isLoadingOver=!0})}}},68:function(t,e,a){"use strict";t.exports=["我是VIP玩家","我是RMB玩家","楼下全是渣","我的心愿是世界和平","在座各位都是渣,我是VIP小尾巴","妈妈说做人要低调","妈妈说不要跟没有尾巴的人一起玩","想达到朕的水平,你冲的钱还不够","谁的尾巴长,谁的尾巴短","啥都没有,就是钱多","啥都没有,就是梗多","今天你充钱了么","妈妈说签到要低调","签到要快,姿势要帅","签退不急,姿势不齐","双击可以签两次"]},69:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"g-view"},[a("div",{staticClass:"tail"},[a("label",{staticClass:"g-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.smallTail,expression:"smallTail"}],attrs:{type:"text",placeholder:"custom tail"},domProps:{value:t.smallTail},on:{input:function(e){e.target.composing||(t.smallTail=e.target.value)}}}),t._v(" "),a("span",{staticClass:"icon-clear iconfont icon-qingkong",on:{click:function(e){e.preventDefault(),t.fnFresh(e)}}})])]),t._v(" "),a("div",{staticClass:"char"},t._l(t.chatList,function(e){return a("div",{staticClass:"char-item"},[a("div",{staticClass:"char-item-message"},[t._v(t._s(e.chatMessage))]),t._v(" "),a("div",{staticClass:"char-item-tail"},[t._v("---- "+t._s(e.smallTail))]),t._v(" "),a("div",{staticClass:"char-item-close iconfont icon-guanbi",on:{click:function(a){a.preventDefault(),t.fnDelete(e)}}})])})),t._v(" "),a("div",{staticClass:"write"},[a("form",{on:{submit:t.fnSubmit}},[a("label",{staticClass:"g-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chatMessage,expression:"chatMessage"}],attrs:{type:"text",placeholder:"enter to send"},domProps:{value:t.chatMessage},on:{input:function(e){e.target.composing||(t.chatMessage=e.target.value)}}}),t._v(" "),a("span",{staticClass:"icon-clear iconfont icon-qingkong",on:{click:t.fnClear}})])])]),t._v(" "),t.isLoadingOver?t._e():a("div",{staticClass:"g-loading"},[a("div",{staticClass:"g-loading-icon iconfont icon-jiazaizhong"})]),t._v(" "),t.isLoadingOver&&t.chatList.length?a("div",{staticClass:"g-over"},[a("div",{staticClass:"g-over-icon iconfont icon-meiyoushuju"}),t._v(" "),a("div",{staticClass:"g-over-text"},[t._v("没有数据了")])]):t._e(),t._v(" "),t.isLoadingOver&&!t.chatList.length?a("div",{staticClass:"g-no-data"},[a("div",{staticClass:"g-no-data-icon iconfont icon-meiyoushuju"}),t._v(" "),a("div",{staticClass:"g-no-data-text"},[t._v("数据为空")])]):t._e()])},staticRenderFns:[]}},70:function(t,e){}},[27]);
//# sourceMappingURL=app.18d57db2ddf3c21f3f77.js.map