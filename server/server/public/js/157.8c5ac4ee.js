"use strict";(self["webpackChunktodo_ninja"]=self["webpackChunktodo_ninja"]||[]).push([[157],{8157:function(n,e,o){o.r(e),o.d(e,{default:function(){return y}});var r=o(3396);function a(n,e,o,a,t,s){const i=(0,r.up)("Login");return(0,r.wg)(),(0,r.j4)(i)}var t=o(9242),s=o(7139);const i={class:"background"},l=(0,r._)("h3",null,"Zaloguj się",-1),d=(0,r._)("label",{for:"nickname"},"Nazwa Użytkownika",-1),u=(0,r._)("label",{for:"password"},"Hasło",-1);function c(n,e,o,a,c,p){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("form",{onSubmit:e[4]||(e[4]=(0,t.iM)(((...n)=>p.handleLogin&&p.handleLogin(...n)),["prevent"]))},[l,d,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Nazwa Użytkownika","onUpdate:modelValue":e[0]||(e[0]=n=>c.nickname=n),id:"nickname"},null,512),[[t.nr,c.nickname]]),u,(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=n=>c.password=n),id:"password"},null,512),[[t.nr,c.password]]),(0,r._)("button",{class:"notregistered",onClick:e[2]||(e[2]=(...n)=>p.toRegister&&p.toRegister(...n))},"Nie masz konta? Zarejestruj się"),(0,r._)("button",{class:"login",onClick:e[3]||(e[3]=(...n)=>p.handleLogin&&p.handleLogin(...n))},"Zaloguj"),(0,r.Uk)(" "+(0,s.zw)(c.error),1)],32)])}o(7658);var p=o(4311);const g="/login";var k={name:"MyLogin",data(){return{nickname:"",password:"",error:""}},methods:{toRegister(){this.$router.push("/register")},async handleLogin(){const n={nickname:this.nickname,password:this.password};p.Z.post(g,n).then((n=>{200===n.status&&(this.error="",localStorage.setItem("token",n.data.token),this.$router.push("/"))}),(n=>{console.log(n.response),this.error=n.response.user.error}))}}},h=o(89);const w=(0,h.Z)(k,[["render",c]]);var m=w,f=(0,r.aZ)({name:"MyLogin",components:{Login:m}});const _=(0,h.Z)(f,[["render",a]]);var y=_}}]);
//# sourceMappingURL=157.8c5ac4ee.js.map