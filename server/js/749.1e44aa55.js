"use strict";(self["webpackChunktodo_ninja"]=self["webpackChunktodo_ninja"]||[]).push([[749],{4749:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(3396),o=n(7139),l=n(3369),s=n(6824);const i=(0,a._)("div",{class:"arrowback"},null,-1),r=(0,a._)("div",{class:"break"},null,-1),c={style:{"test-align":"center"}};function u(t,e,n,u,d,h){const g=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(l.K,{fluid:"",class:"pa-0 ma-0",style:{"background-color":"#c2c2c2",height:"100%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s.o,{class:"text-center pa-0 ma-0"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{to:"/",class:"pa-0 ma-0"},{default:(0,a.w5)((()=>[i])),_:1})])),_:1}),r,(0,a._)("h1",c,"Witaj "+(0,o.zw)(t.nickname),1),(0,a._)("button",{class:"logout_button",onClick:e[0]||(e[0]=(...e)=>t.logout&&t.logout(...e))},"Wyloguj się")])),_:1})}n(7658);var d=n(4311),h=(0,a.aZ)({data(){return{nickname:""}},components:{},mounted(){d.Z.get("http://localhost:5000/data",{headers:{token:localStorage.getItem("token")}}).then((t=>{this.nickname=t.data.user.nickname}))},methods:{handleView(){this.mobileView=window.innerWidth<=800},logout(){localStorage.clear(),this.$router.push("/login")}},created(){null===localStorage.getItem("token")&&this.$router.push("/login"),this.handleView(),window.addEventListener("resize",this.handleView)}}),g=n(89);const k=(0,g.Z)(h,[["render",u]]);var w=k}}]);
//# sourceMappingURL=749.1e44aa55.js.map