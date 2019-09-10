(function(t){function e(e){for(var n,i,c=e[0],a=e[1],h=e[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,h||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/color-game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var u=a;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},1894:function(t,e,r){"use strict";var n=r("3e9f"),o=r.n(n);o.a},"3ab0":function(t,e,r){"use strict";var n=r("e1ce"),o=r.n(n);o.a},"3e9f":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper",attrs:{id:"app"}},[t.showInstructions?r("div",{staticClass:"info"},[t._v("\n    test your vision!  select the tile that is not the same color as the rest.\n    "),r("button",{on:{click:t.hideInstructions}},[t._v("start")])]):t._e(),t.showInstructions||t.gameOver?t._e():r("div",{staticClass:"high"},[t._v("\n    high: "+t._s(t.high>t.score?t.high:t.score)+"\n  ")]),t.showInstructions||t.gameOver?t._e():r("Game",{key:t.score,attrs:{score:t.currentHighest},on:{"update-score":t.updateScore}}),t.showInstructions||t.gameOver?t._e():r("Scoreboard",{attrs:{score:t.score,time:t.timeLeft,incorrect:t.incorrect}}),t.gameOver?r("div",{staticClass:"info"},[t._v("\n    game over 🙁"),r("br"),t._v(t._s(t.high>t.score?"":"new high")+"score: "+t._s(t.score)+"\n    "),r("button",{on:{click:t.reset}},[t._v("start over")])]):t._e()],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"board"},t._l(t.tileCount,function(e){return r("div",{key:e,staticClass:"tile",style:[e===t.correctTile?t.lightColor:t.colorStyle],on:{click:function(r){return t.check(e===t.correctTile)}}})}),0)},c=[],a=(r("c5f6"),{name:"Game",props:{score:Number},methods:{check:function(t){this.$emit("update-score",t)},setBoard:function(){var t=this.score>=0?Math.floor(Math.pow(this.score,.5))+2:2,e=60-2*this.score;e<1&&(e=1);for(var r=Math.pow(t,2),n=[],o=0;o<3;o+=1)n.push(15+Math.floor(200*Math.random()));var s=n.map(function(t){return t+e}),i=(300-6*t)/t,c=Math.floor(Math.random()*r)+1;return{colorStyle:{background:"rgb(".concat(n.join(", "),")"),height:"".concat(i,"px"),width:"".concat(i,"px")},lightColor:{background:"rgb(".concat(s.join(", "),")"),height:"".concat(i,"px"),width:"".concat(i,"px")},tileCount:r,correctTile:c}}},data:function(){return this.setBoard()}}),h=a,u=(r("3ab0"),r("2877")),l=Object(u["a"])(h,i,c,!1,null,"39a8dc85",null),f=l.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"scoreboard"},[r("div",{class:{red:t.incorrect}},[t._v(t._s(t.score))]),r("div",{staticClass:"timer"},[t._v(":"+t._s(t.time>=10?"":"0")+t._s(t.time))])])},p=[],v={name:"Scoreboard",props:{score:Number,time:Number,incorrect:Boolean}},m=v,g=(r("1894"),Object(u["a"])(m,d,p,!1,null,"6ed6659e",null)),b=g.exports,w=r("5118"),_={name:"app",components:{Game:f,Scoreboard:b},methods:{updateScore:function(t){t?(this.setTimer(),this.$set(this,"incorrect",!1),this.score>=this.currentHighest&&this.$set(this,"currentHighest",this.currentHighest+=1),this.$set(this,"score",this.score+=1)):(this.$set(this,"incorrect",!0),this.$set(this,"score",this.score-=2))},tick:function(){var t=this;this.tickInterval&&Object(w["clearInterval"])(this.tickInterval),this.tickInterval=Object(w["setInterval"])(function(){var e=Math.floor((t.startTime-Date.now())/1e3);t.$set(t,"timeLeft",16+e),t.timeLeft<0&&(Object(w["clearInterval"])(t.tickInterval),t.endGame())},50)},setTimer:function(){this.$set(this,"startTime",Date.now()),this.tick()},hideInstructions:function(){this.$set(this,"showInstructions",!1)},endGame:function(){this.$set(this,"gameOver",!0),this.score>this.high&&(window.localStorage.setItem("high",this.score),this.$set(this,"high",this.score))},reset:function(){this.$set(this,"gameOver",!1),this.$set(this,"score",0),this.$set(this,"currentHighest",0),this.$set(this,"startTime",Date.now()),this.$set(this,"timeLeft",15)}},data:function(){var t="undefined"===typeof window.localStorage.high?0:window.localStorage.high;return{score:0,currentHighest:0,startTime:Date.now(),timeLeft:15,showInstructions:t<1,gameOver:!1,incorrect:!1,high:t}}},y=_,O=(r("034f"),Object(u["a"])(y,o,s,!1,null,null,null)),$=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t($)}}).$mount("#app")},"64a9":function(t,e,r){},e1ce:function(t,e,r){}});
//# sourceMappingURL=app.5701c351.js.map