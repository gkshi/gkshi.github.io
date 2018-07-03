webpackJsonp([1],{"2aAs":function(e,t){},HJnh:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("7+uW"),s=i("fC7K"),a=i("mvHQ"),n=i.n(a),o={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",e._g({class:e.getClass(),on:{click:function(t){return t.preventDefault(),e.strike(t)}}},{mouseenter:e.mouseenter,mouseleave:e.mouseleave}))},staticRenderFns:[]};var c={name:"Grid",components:{Cell:i("VU/8")({name:"Cell",props:["order"],data:function(){return{mark:"",empty:!0,hover:!1,frozen:!1}},watch:{mark:function(){this.length&&(this.empty=!1)}},computed:{activePlayerSign:function(){return this.$root.$children[0].activePlayerSign}},methods:{mouseenter:function(){this.empty&&!this.frozen&&(this.hover=!0)},mouseleave:function(){this.empty&&!this.frozen&&(this.hover=!1)},getClass:function(){var e="cell";return this.hover&&(e+=" cell--hover-"+this.activePlayerSign),this.mark.length&&(e+=" cell--"+this.mark),this.empty&&!this.frozen||(e+=" cell--disabled"),e},strike:function(){this.empty&&!this.frozen&&(this.empty=!1,this.hover=!1,this.mark=this.$root.$children[0].activePlayerSign,this.$bus.emit("strike",this.order))}},created:function(){var e=this;this.$bus.$on("clearGrid",function(){e.mark="",e.empty=!0,e.frozen=!1}),this.$bus.$on("freezeGrid",function(){e.frozen=!0}),this.$bus.$on("unfreezeGrid",function(){e.frozen=!1})}},o,!1,function(e){i("2aAs")},"data-v-fe7d5c3a",null).exports}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",this._l(9,function(e,i){return t("cell",{key:e.id,attrs:{order:i+1}})}))},staticRenderFns:[]};var l=i("VU/8")(c,h,!1,function(e){i("HJnh")},"data-v-19cb3d1a",null).exports,u=i("fZjL"),v=i.n(u),m={name:"Bot",methods:{getOtherSign:function(e){if(e)return"x"===e?"o":"x"},imitateClick:function(e,t){if(e){t||(t=500),this.$bus.emit("freezeGrid");var i=this;setTimeout(function(){i.$bus.emit("unfreezeGrid"),document.querySelector(".grid").children[e-1].click()},t)}},move:function(){var e=!1,t=null,i=this.$root.$children[0].cells,r=[],s=[],a=[],n=this.$root.$children[0].activePlayerSign,o=this.getOtherSign(n),c=this.$root.$children[0].winCombinations,h=[],l=[];if(v()(i).forEach(function(e){i[e]===n?r.push(Number(e)):i[e]===o?s.push(Number(e)):a.push(Number(e))}),c.forEach(function(e){var t=!0;for(var r in e)if(i[e[r]]===o){t=!1;break}t&&h.push(e)}),r.length>0&&h.every(function(r){var s=0,a=null;for(var o in r)i[r[o]]===n&&s++,i[r[o]].length||(a=r[o]);return!(s>1)||(t=a,e=!0,!1)}),e||(c.forEach(function(e){var t=!0;for(var r in e)if(i[e[r]]===n){t=!1;break}t&&l.push(e)}),l.every(function(r){var s=0,a=null;for(var n in r)i[r[n]]===o&&s++,i[r[n]].length||(a=r[n]);return!(s>1)||(t=a,e=!0,!1)})),e||i[5].length||(t=5,e=!0),!e)if(h.length){var u=Math.floor(Math.random()*h.length),m=null;h[u].every(function(e){return e%2&&!i[e].length?(m=e,!1):!!i[e].length||(m=e,!1)}),t=m}else{var f=Math.floor(Math.random()*a.length);t=a[f]}t&&this.imitateClick(t)}},created:function(){this.$bus.on("botMove",this.move)}},f={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{hidden:""}},[this._v(" ")])},staticRenderFns:[]},d={name:"App",data:function(){return{score:{x:0,o:0},activePlayer:"player1",activePlayerSign:"x",activePlayerText:"Начинайте игру",gameMode:"with_bot",gameStatus:"turn",gameWinCombination:null,gameStarter:"x",cells:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},winCombinations:[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]}},methods:{start:function(){"with_bot"===this.gameMode&&"player1"!==this.activePlayer&&this.$bus.emit("botMove")},resetSettings:function(){this.gameStatus=this.$options.data().gameStatus,this.gameWinCombination=null,this.cells=this.$options.data().cells,this.$bus.emit("clearGrid")},restart:function(e){this.resetSettings(),e?(this.changeActivePlayer(),this.changePlayerText()):(this.changeActivePlayer(!0),this.changePlayerText(!0)),this.$bus.emit("unfreezeGrid"),this.start()},newRound:function(){"turn"!==this.gameStatus?this.restart(!0):this.restart()},makeMove:function(e){switch(this.cells[e]=this.activePlayerSign,this.checkGameStatus(e),this.gameStatus){case"turn":this.changeActivePlayer(),this.changePlayerText(),"bot"===this.activePlayer&&this.$bus.emit("botMove");break;case"draw":this.activePlayerText="Ничья",this.$bus.emit("freezeGrid");break;case"win":switch(this.gameMode){case"with_bot":"player1"===this.activePlayer?this.activePlayerText="Вы победили":this.activePlayerText="Победил бот";break;case"with_user":"player1"===this.activePlayer?this.activePlayerText="Победил игрок 1":this.activePlayerText="Победил игрок 2"}this.$bus.emit("freezeGrid"),this.score[this.activePlayerSign]++}},checkGameStatus:function(e){this.isWin(e)?this.gameStatus="win":this.isGridFull()?this.gameStatus="draw":this.gameStatus="turn"},isWin:function(e){var t=this,i=!1,r=this.cells[e],s=[];return this.winCombinations.forEach(function(t){for(var i in t)if(t[i]===e){s.push(t);break}}),s.every(function(e){var s=0;for(var a in e)t.cells[e[a]]===r&&s++;return 3!==s||(t.gameWinCombination=e.join(""),i=!0,!1)}),i},isGridFull:function(){var e=!0;for(var t in this.cells)if(!this.cells[t].length){e=!1;break}return e},changeActivePlayer:function(e){if(e)return this.activePlayer=this.$options.data().activePlayer,void(this.activePlayerSign=this.$options.data().activePlayerSign);"with_bot"===this.gameMode?"player1"===this.activePlayer?this.activePlayer="bot":this.activePlayer="player1":"player1"===this.activePlayer?this.activePlayer="player2":this.activePlayer="player1","x"===this.activePlayerSign?this.activePlayerSign="o":this.activePlayerSign="x"},changePlayerText:function(){"with_bot"===this.gameMode&&("player1"===this.activePlayer?this.activePlayerText="Ваш ход":this.activePlayerText="Ход бота"),"with_user"===this.gameMode&&("player1"===this.activePlayer?this.activePlayerText="Ход игрока 1":this.activePlayerText="Ход игрока 2")},changeGameMode:function(e){this.saveScore(),this.gameMode=e.target.value,this.getScore(),this.changeActivePlayer(!0),this.changePlayerText(),this.restart()},resetScore:function(){this.score={x:0,o:0}},getScore:function(){var e=null;switch(this.gameMode){case"with_bot":e=sessionStorage.getItem("score_bot");break;case"with_user":e=sessionStorage.getItem("score_user")}e?this.score=JSON.parse(e):this.resetScore()},saveScore:function(){var e=n()(this.score);switch(this.gameMode){case"with_bot":sessionStorage.setItem("score_bot",e);break;case"with_user":sessionStorage.setItem("score_user",e)}},getGridClass:function(){var e="grid";return this.gameWinCombination&&(e+=" grid--win-"+this.gameWinCombination),e},getButtonClass:function(){var e="button";return"win"===this.gameStatus&&(e+=" button--active"),e},clearSession:function(){sessionStorage.removeItem("score_bot"),sessionStorage.removeItem("score_user")}},computed:{},created:function(){var e=this;window.Game=this,this.clearSession(),this.$bus.on("strike",function(t){e.makeMove(t)}),this.$bus.$on("win",function(t){e.score[t]++}),this.start()},components:{Grid:l,Bot:i("VU/8")(m,f,!1,null,null,null).exports}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("bot"),e._v(" "),e._m(0),e._v(" "),i("main",[i("div",{staticClass:"intro"},[i("div",{staticClass:"mode-toggle"},[i("label",[i("input",{attrs:{type:"radio",name:"mode",value:"with_bot",checked:""},on:{change:e.changeGameMode}}),e._v(" Игрок против бота\n        ")]),e._v(" "),i("label",[i("input",{attrs:{type:"radio",name:"mode",value:"with_user"},on:{change:e.changeGameMode}}),e._v(" 2 игрока ")])]),e._v(" "),i("section",{staticClass:"game"},[i("header",[i("div",[e._v(e._s(e.activePlayerText))]),e._v(" "),i("div",[e._v("Счет "+e._s(e.score.x)+":"+e._s(e.score.o))])]),e._v(" "),i("grid",{class:e.getGridClass()}),e._v(" "),i("footer",[i("a",{class:e.getButtonClass(),attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.newRound(t)}}},[e._v("Начать заново")])])],1)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("div",{staticClass:"intro"},[t("h1",[this._v("Крестики-нолики онлайн")]),this._v(" "),t("a",{attrs:{href:"https://github.com/gkshi/xo",target:"_blank"}},[this._v("GitHub")])])])}]};var y=i("VU/8")(d,g,!1,function(e){i("hx+6")},null,null).exports;r.a.use(s.a),r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:y},template:"<App/>"})},"hx+6":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.024a97e6c86a20a73505.js.map