webpackJsonp([2],{0:function(t,e){},"2VTx":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("WsXB")},null,null).exports,r=n("/ocq"),o={name:"Main",data:function(){return{list:[],date:""}},mounted:function(){this.getMilk()},methods:{getMilk:function(){var t=this;this.$http.get("http://localhost:3003/milk").then(function(e){t.list=e.body[0].data,t.date=e.body[0].date},function(){console.log("error")})}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[this._v(this._s(this.date)+"日食量表")]),this._v(" "),e("div",{staticClass:"table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.list,stripe:"",align:"center","header-align":"center","show-summary":""}},[e("el-table-column",{attrs:{prop:"time",label:"时间"}}),this._v(" "),e("el-table-column",{attrs:{prop:"yield",label:"食量"}})],1)],1)])},staticRenderFns:[]};var c=n("VU/8")(o,l,!1,function(t){n("2VTx")},"data-v-277a2240",null).exports;a.default.use(r.a);var u=new r.a({routes:[{path:"/",redirect:{path:"/css-expose/main"}},{path:"/css-expose/",name:"CssExpose",component:function(t){return n.e(0).then(function(){return t(n("2NXm"))}.bind(null,n)).catch(n.oe)},children:[{path:"main",component:c,name:"Main"}]}]}),d=n("akNi"),p=n("HJEs"),h=n.n(p);n("bJtw");a.default.config.productionTip=!1,a.default.use(d.a),a.default.use(h.a),new a.default({el:"#app",router:u,components:{App:s},template:"<App/>"})},WsXB:function(t,e){},bJtw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.139ce278ea39364d3fb9.js.map