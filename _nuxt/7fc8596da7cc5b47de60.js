(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(t,n,e){"use strict";var a={name:"button-component",props:{to:{type:String,default:""},type:{type:String,default:"default"},size:{type:String,default:"default"},mode:{type:String,default:"link"},target:{type:String,default:"_self"},disabled:{type:Boolean,default:!1}},computed:{classes:function(){var t="button-type-".concat(this.type," button-size-").concat(this.size);return this.disabled&&(t+=" disabled"),t}}},o=e(4),i=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"button-component"},["link"===t.mode?e("a",{staticClass:"button",class:t.classes,attrs:{href:t.to,target:t.target},on:{click:function(n){t.$emit("click",n)}}},[t._t("default")],2):t._e(),"nuxt"===t.mode?e("nuxt-link",{staticClass:"button",class:t.classes,attrs:{to:t.to},on:{click:function(n){t.$emit("click",n)}}},[t._t("default")],2):t._e()],1)},[],!1,null,null,null);i.options.__file="index.vue";n.a=i.exports},167:function(t,n,e){var a=e(189);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(13).default)("ecef75a0",a,!0,{})},168:function(t,n,e){var a=e(191);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(13).default)("7c7765f2",a,!0,{})},188:function(t,n,e){"use strict";var a=e(167);e.n(a).a},189:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,"\n.panel-component[data-v-687d6fc0]{position:fixed;top:0;left:0;z-index:1000;width:100%;height:50px;background:#2b2b2b;color:#f8f8f8\n}\n.panel-component a[data-v-687d6fc0]{color:#f8f8f8;text-decoration:none\n}\n.panel-component .intro[data-v-687d6fc0]{height:100%;padding:0 30px\n}\n.panel-component .logo[data-v-687d6fc0]{font-size:21px;line-height:29px;font-weight:700;cursor:pointer;margin:0 50px 0 0\n}\n.panel-component .title h1[data-v-687d6fc0]{font-size:15px;line-height:19px;font-weight:700;letter-spacing:1px\n}\n.panel-component nav[data-v-687d6fc0]{font-size:14px;line-height:17px;padding:0 0 2px;height:100%\n}\n.panel-component nav a[data-v-687d6fc0]{height:100%;margin-right:30px\n}\n.panel-component nav a[data-v-687d6fc0]:last-child{margin-right:0\n}",""])},190:function(t,n,e){"use strict";var a=e(168);e.n(a).a},191:function(t,n,e){(t.exports=e(12)(!1)).push([t.i,"\n.back[data-v-09272d66]{position:fixed;top:70px;left:20px;z-index:1000\n}\n.arrow[data-v-09272d66]{display:block;width:8px;height:12px;fill:#f8f8f8;stroke:#f8f8f8;margin:0 10px 0 0\n}\n.page[data-v-09272d66],.page iframe[data-v-09272d66]{width:100%;height:100%\n}\n.page iframe[data-v-09272d66]{display:block;border:none\n}",""])},196:function(t,n,e){"use strict";e.r(n);var a={name:"panel-component",components:{logo:e(86).a},props:{title:{type:String,default:""},github:{type:String,default:""}},computed:{heading:function(){return this.title||this.$route.params.project}}},o=(e(188),e(4)),i=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"panel-component flex a-center"},[e("div",{staticClass:"intro flex grow a-center"},[e("nuxt-link",{attrs:{to:"/"}},[e("logo",{staticClass:"logo"})],1),e("div",{staticClass:"title grow"},[e("h1",[t._v(t._s(t.heading))])]),e("nav",{staticClass:"flex a-center"},[t.github?e("a",{staticClass:"flex a-center",attrs:{href:t.github,target:"_blank"}},[t._v("Github")]):t._e(),e("nuxt-link",{staticClass:"flex a-center",attrs:{to:"/"}},[t._v("Все проекты")])],1)],1)])},[],!1,null,"687d6fc0",null);i.options.__file="index.vue";var s=i.exports,c=e(152),r={name:"icon-arrow"},l=Object(o.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 10 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("g",{attrs:{"stroke-width":"1","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M3.1742439,8.00338211 L9.15980488,2.01756098 C9.32461789,1.85313821 9.41528455,1.63330081 9.41528455,1.39889431 C9.41528455,1.16435772 9.32461789,0.944650407 9.15980488,0.77996748 L8.63531707,0.255739837 C8.47076423,0.090796748 8.25079675,0 8.01639024,0 C7.78198374,0 7.56227642,0.090796748 7.3975935,0.255739837 L0.270829268,7.38237398 C0.105495935,7.54757724 0.0149593496,7.7683252 0.0156097561,8.00299187 C0.0149593496,8.23869919 0.105365854,8.45918699 0.270829268,8.62452033 L7.39095935,15.7442602 C7.55564228,15.9092033 7.77534959,16 8.00988618,16 C8.24429268,16 8.464,15.9092033 8.62881301,15.7442602 L9.15317073,15.2200325 C9.49437398,14.8788293 9.49437398,14.3233821 9.15317073,13.9823089 L3.1742439,8.00338211 Z"}})])])},[],!1,null,null,null);l.options.__file="arrow.vue";var u=l.exports,p={name:"projects-page",layout:"project",components:{vPanel:s,vButton:c.a,iconArrow:u},data:function(){return{history:!1,title:"",url:"",github:""}},mounted:function(){var t=this;this.checkExistence().then(function(){t.url="/demos/".concat(t.$route.params.project,"/"),t.history=window.history.length>2,t.getProject(t.$route.params.project)}).catch(function(){t.gotoMainPage()})},methods:{gotoMainPage:function(){return this.$router.push("/")},gotoBack:function(){this.$router.go(-1)},checkExistence:function(){var t=this;return new Promise(function(n,e){fetch("/demos/".concat(t.$route.params.project,"/")).then(function(t){404===t.status&&e(),n()}).catch(function(){e()})})},getProject:function(t){var n=this;t||this.gotoMainPage(),fetch("/demos/index.json").then(function(t){return t.json()}).then(function(e){e[t]&&(n.title=e[t].title,n.github=e[t].github)}).catch(function(t){n.gotoMainPage()})}}},f=(e(190),Object(o.a)(p,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("vPanel",{attrs:{title:t.title,github:t.github}}),t.history?e("vButton",{staticClass:"back",on:{click:function(n){return n.preventDefault(),t.gotoBack(n)}}},[e("iconArrow",{staticClass:"arrow"}),e("span",[t._v("Назад")])],1):t._e(),e("main",{staticClass:"page"},[e("iframe",{attrs:{src:t.url}})])],1)},[],!1,null,"09272d66",null));f.options.__file="_project.vue";n.default=f.exports}}]);