(function(e){function t(t){for(var n,a,s=t[0],i=t[1],c=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},u=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Highest-produce/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"dark",dark:""}},[e._v(" Highest produce "),r("v-spacer"),e._v("Click to remove ")],1),r("v-main",[r("HelloWorld")],1)],1)},u=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"text-center",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},e._l(e.numbers,(function(t,n){return r("v-col",{key:n},[r("v-btn",{attrs:{color:"secondary"},on:{click:function(t){return e.remove(n)}}},[e._v(e._s(t))])],1)})),1),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("v-list",[r("v-text-field",{attrs:{type:"number",label:"Regular"},model:{value:e.toAdd,callback:function(t){e.toAdd=t},expression:"toAdd"}}),r("v-list-item",[r("v-btn",{attrs:{color:"success"},on:{click:e.addNumber}},[e._v("Add to list")]),r("v-spacer"),r("v-btn",{attrs:{color:"info"},on:{click:e.getHighest}},[e._v("Produce")])],1)],1)],1)],1),e.highestProduce?r("v-row",{attrs:{justify:"center"}},[r("v-col",[e._v("The highest product:")]),r("v-col",[e._v(e._s(e.highestProduce))])],1):e._e()],1)},s=[],i=(r("4de4"),r("a434"),{name:"HelloWorld",data:function(){return{numbers:[1,5,6,-2,-11],toAdd:null,highestProduce:null}},methods:{getHighest:function(){var e=this.numbers[0]*this.numbers[1]*this.numbers[2],t=this.numbers.filter((function(e){return e<0}));console.log(t),t.length<2||(e=this.numbers[0]*this.numbers[this.numbers.length-1]*this.numbers[this.numbers.length-2]),this.highestProduce=e},addNumber:function(){this.numbers.push(this.toAdd),this.numbers.sort((function(e,t){return t-e}))},remove:function(e){this.numbers.splice(e,1)}}}),c=i,l=r("2877"),d=r("6544"),p=r.n(d),f=r("8336"),v=r("62ad"),h=r("a523"),b=r("8860"),m=r("da13"),g=r("0fd9"),y=r("2fa4"),_=r("8654"),w=Object(l["a"])(c,a,s,!1,null,null,null),j=w.exports;p()(w,{VBtn:f["a"],VCol:v["a"],VContainer:h["a"],VList:b["a"],VListItem:m["a"],VRow:g["a"],VSpacer:y["a"],VTextField:_["a"]});var O={name:"App",components:{HelloWorld:j},data:function(){return{}}},x=O,P=r("7496"),V=r("40dc"),k=r("f6c4"),A=Object(l["a"])(x,o,u,!1,null,null,null),H=A.exports;p()(A,{VApp:P["a"],VAppBar:V["a"],VMain:k["a"],VSpacer:y["a"]});var S=r("f309");n["a"].use(S["a"]);var M=new S["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:M,render:function(e){return e(H)}}).$mount("#app")}});
//# sourceMappingURL=app.ba396edc.js.map