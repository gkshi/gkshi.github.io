(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,o){"use strict";var n={name:"button-component",props:{to:{type:String,default:""},type:{type:String,default:"default"},size:{type:String,default:"default"},mode:{type:String,default:"link"},target:{type:String,default:"_self"},disabled:{type:Boolean,default:!1}},computed:{classes:function(){var t="button-type-".concat(this.type," button-size-").concat(this.size);return this.disabled&&(t+=" disabled"),t}}},a=o(4),s=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button-component"},["link"===t.mode?o("a",{staticClass:"button",class:t.classes,attrs:{href:t.to,target:t.target},on:{click:function(e){t.$emit("click",e)}}},[t._t("default")],2):t._e(),"nuxt"===t.mode?o("nuxt-link",{staticClass:"button",class:t.classes,attrs:{to:t.to},on:{click:function(e){t.$emit("click",e)}}},[t._t("default")],2):t._e()],1)},[],!1,null,null,null);s.options.__file="index.vue";e.a=s.exports},161:function(t,e,o){var n=o(177);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(13).default)("51c16eda",n,!0,{})},162:function(t,e,o){var n=o(179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(13).default)("8313b13a",n,!0,{})},163:function(t,e,o){var n=o(181);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(13).default)("1c632a28",n,!0,{})},176:function(t,e,o){"use strict";var n=o(161);o.n(n).a},177:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,"\n.project-component[data-v-5d73bd7d]{display:block;position:relative;max-height:360px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.project-component figure[data-v-5d73bd7d]{margin:0\n}\n.project-component img[data-v-5d73bd7d]{display:block;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%;height:100%\n}\n.project-component figcaption[data-v-5d73bd7d]{text-transform:uppercase;letter-spacing:.8px;font-family:Ubuntu,sans-serif;font-weight:700;font-size:21px;line-height:29px;margin:0;transition:all .2s ease-out .1s\n}\n.project-component .labels[data-v-5d73bd7d]{flex-shrink:0;margin:20px 0 0;transition:all .2s ease-out .15s\n}\n.project-component .description[data-v-5d73bd7d]{flex-grow:1;margin:30px 0 0;font-family:Ubuntu,sans-serif;font-weight:500;color:#aba1f2;transition:all .2s ease-out .2s\n}\n.project-component .buttons[data-v-5d73bd7d]{transition:all .2s ease-out .25s\n}\n.project-component .hover[data-v-5d73bd7d]{position:absolute;top:0;left:0;width:100%;height:100%;background:#361edc;color:#f8f8f8;padding:44px 50px 50px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;transition:opacity .15s ease,visibility .15s ease\n}\n.project-component .hover.project-enter[data-v-5d73bd7d],.project-component .hover.project-enter .buttons[data-v-5d73bd7d],.project-component .hover.project-enter .description[data-v-5d73bd7d],.project-component .hover.project-enter .labels[data-v-5d73bd7d],.project-component .hover.project-enter figcaption[data-v-5d73bd7d]{opacity:0\n}\n.project-component .hover.project-enter figcaption[data-v-5d73bd7d]{margin-top:10px\n}\n.project-component .hover.project-enter .labels[data-v-5d73bd7d]{margin-top:30px\n}\n.project-component .hover.project-enter .description[data-v-5d73bd7d]{margin-top:40px\n}\n.project-component .hover.project-enter .buttons[data-v-5d73bd7d]{margin-bottom:-10px\n}\n.project-component .hover.project-leave-active[data-v-5d73bd7d]{opacity:0\n}\n@media (max-width:1280px){\n.project-component .description[data-v-5d73bd7d]{font-size:0\n}\n.project-component .buttons[data-v-5d73bd7d]{margin-top:20px\n}\n.project-component .labels[data-v-5d73bd7d]{margin-top:14px\n}\n}",""])},178:function(t,e,o){"use strict";var n=o(162);o.n(n).a},179:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,"\n.label-component[data-v-197a2384]{font-family:Ubuntu,sans-serif;font-size:14px;line-height:17px;font-weight:500;text-transform:lowercase;padding:6px 18px 7px;background:#432ce2;border-radius:20px;cursor:default\n}\n.labels .label-component[data-v-197a2384]{margin-right:8px\n}\n.labels .label-component[data-v-197a2384]:last-child{margin-right:0\n}",""])},180:function(t,e,o){"use strict";var n=o(163);o.n(n).a},181:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,"\n.page .projects[data-v-3f18930f]{display:grid;grid-template-columns:1fr 1fr;grid-gap:0\n}",""])},195:function(t,e,o){"use strict";o.r(e);var n=o(152),a={name:"project-component",components:{vButton:n.a},props:{image:{type:String,default:"/images/project.svg"}},data:function(){return{hover:!1}},methods:{enter:function(){this.hover=!0},leave:function(){this.hover=!1}}},s=(o(176),o(4)),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-component",on:{mouseenter:t.enter,mouseleave:t.leave}},[o("figure",[o("transition",{attrs:{name:"project"}},[t.hover?o("div",{staticClass:"hover flex column"},[o("figcaption",[t._t("title",[t._v("Project title")])],2),o("div",{staticClass:"labels flex"},[t._t("labels")],2),o("div",{staticClass:"description"},[t._t("description",[t._v(" ")])],2),o("div",{staticClass:"buttons"},[t._t("buttons",[o("vButton",{attrs:{type:"light",to:"#"},on:{click:function(t){}}},[t._v("Открыть")])])],2)]):t._e()]),t._t("image",[o("img",{attrs:{src:t.image}})])],2)])},[],!1,null,"5d73bd7d",null);i.options.__file="index.vue";var l=i.exports,r={name:"label-component"},c=(o(178),Object(s.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"label-component"},[this._t("default",[this._v("label")])],2)},[],!1,null,"197a2384",null));c.options.__file="index.vue";var p={name:"projects-page",head:{title:"Георгий Шинкарев - проекты"},components:{project:l,vLabel:c.exports,vButton:n.a}},d=(o(180),Object(s.a)(p,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"page"},[o("div",{staticClass:"content"},[o("section",[o("h2",[t._v("Проекты")]),o("div",{staticClass:"projects"},[o("project",{attrs:{image:"/projects/uno.svg"}},[o("template",{slot:"title"},[t._v("UNO - the game")]),o("template",{slot:"labels"},[o("vLabel",[t._v("vue.js")]),o("vLabel",[t._v("игра")]),o("vLabel",[t._v("с ботами")])],1),o("template",{slot:"description"},[t._v("Игра в UNO с ботами. До шести игроков за игровым столом,\nклассические правила и статистика по сыгранным партиям.")]),o("template",{slot:"buttons"},[o("vButton",{attrs:{type:"light",to:"#",disabled:!0}},[t._v("Скоро")])],1)],2),o("project",{attrs:{image:"/projects/linker.svg"}},[o("template",{slot:"title"},[t._v("Linker")]),o("template",{slot:"labels"},[o("vLabel",[t._v("vue.js")]),o("vLabel",[t._v("сервис")])],1),o("template",{slot:"description"},[t._v("Linker - сервис сокращения ссылок"),o("br"),t._v("со статистикой по кликам")]),o("template",{slot:"buttons"},[o("vButton",{attrs:{type:"light",to:"#",disabled:!0}},[t._v("Скоро")])],1)],2),o("project",{attrs:{image:"/projects/memoji.svg"}},[o("template",{slot:"title"},[t._v("Игра на память")]),o("template",{slot:"labels"},[o("vLabel",[t._v("javascript")]),o("vLabel",[t._v("игра")])],1),o("template",{slot:"description"},[t._v("Игра для развития памяти, в которой нужно найти все парные карточки за ограниченное время")]),o("template",{slot:"buttons"},[o("vButton",{attrs:{type:"light",mode:"nuxt",to:"/projects/memoji"}},[t._v("Играть")])],1)],2),o("project",{attrs:{image:"/projects/xo.svg"}},[o("template",{slot:"title"},[t._v("Крестики-нолики")]),o("template",{slot:"labels"},[o("vLabel",[t._v("vue.js")]),o("vLabel",[t._v("игра")]),o("vLabel",[t._v("с ботом")])],1),o("template",{slot:"description"},[t._v("Онлайн-игра в крестики-нолики с двумя режимами: игрок против игрока и игрок против бота")]),o("template",{slot:"buttons"},[o("vButton",{attrs:{type:"light",mode:"nuxt",to:"/projects/xo"}},[t._v("Играть")])],1)],2),o("project",{attrs:{image:"/projects/cities.svg"}},[o("template",{slot:"title"},[t._v("Игра в города")]),o("template",{slot:"labels"},[o("vLabel",[t._v("vue.js")]),o("vLabel",[t._v("игра")]),o("vLabel",[t._v("с ботом")])],1),o("template",{slot:"description"},[t._v("Игра в города с ботом. Названные города отмечаются на карте с помощью API Яндекс.Карт")]),o("template",{slot:"buttons"},[o("vButton",{attrs:{type:"light",mode:"nuxt",to:"/projects/cities"}},[t._v("Играть")])],1)],2)],1)])])])},[],!1,null,"3f18930f",null));d.options.__file="index.vue";e.default=d.exports}}]);