"use strict";(self["webpackChunktodo_ninja"]=self["webpackChunktodo_ninja"]||[]).push([[259],{3259:function(e,a,n){n.r(a),n.d(a,{default:function(){return V}});var r=n(3396);function s(e,a,n,s,o,t){const l=(0,r.up)("Register");return(0,r.wg)(),(0,r.j4)(l)}var o=n(9242);const t={class:"background"},l=(0,r._)("h3",null,"Zarejestruj się",-1),i={class:"form-group"},m=(0,r._)("label",{for:"name"},"Imię",-1),d={class:"form-group"},u=(0,r._)("label",{for:"surname"},"Nazwisko",-1),p={class:"form-group"},c=(0,r._)("label",{for:"nickname"},"Nick",-1),_={class:"form-group"},h=(0,r._)("label",{for:"email"},"E-mail",-1),f={class:"form-group"},g=(0,r._)("label",{for:"password"},"Hasło",-1),w={class:"form-group"};function k(e,a,n,s,k,v){return(0,r.wg)(),(0,r.iD)("div",t,[(0,r._)("form",{onSubmit:a[6]||(a[6]=(0,o.iM)(((...a)=>e.handleSubmit&&e.handleSubmit(...a)),["prevent"]))},[l,(0,r._)("div",i,[m,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Imię","onUpdate:modelValue":a[0]||(a[0]=e=>k.first_name=e),id:"name"},null,512),[[o.nr,k.first_name]])]),(0,r._)("div",d,[u,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Nazwisko","onUpdate:modelValue":a[1]||(a[1]=e=>k.last_name=e),id:"surname"},null,512),[[o.nr,k.last_name]])]),(0,r._)("div",p,[c,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Nazwa Użytkownika","onUpdate:modelValue":a[2]||(a[2]=e=>k.nickname=e),id:"nickname"},null,512),[[o.nr,k.nickname]])]),(0,r._)("div",_,[h,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"E-mail","onUpdate:modelValue":a[3]||(a[3]=e=>k.email=e),id:"email"},null,512),[[o.nr,k.email]])]),(0,r._)("div",f,[g,(0,r.wy)((0,r._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":a[4]||(a[4]=e=>k.password=e),id:"password"},null,512),[[o.nr,k.password]])]),(0,r._)("div",w,[(0,r._)("button",{class:"register",style:{"margin-top":"40px"},onClick:a[5]||(a[5]=(...e)=>v.handleRegister&&v.handleRegister(...e))},"Zarejestruj")])],32)])}n(7658);var v=n(4311);const y="/register";var b={data(){return{first_name:"",last_name:"",nickname:"",email:"",password:"",error:""}},methods:{async handleRegister(){const e={first_name:this.first_name,last_name:this.last_name,nickname:this.nickname,email:this.email,password:this.password};v.Z.post(y,e).then((e=>{console.log(e),this.error="",this.$router.push("/login")}),(e=>{console.log(e.response),this.error=e.response.user.error})),console.log(e)}}},j=n(89);const R=(0,j.Z)(b,[["render",k]]);var U=R,Z=(0,r.aZ)({name:"MyRegister",components:{Register:U}});const x=(0,j.Z)(Z,[["render",s]]);var V=x}}]);
//# sourceMappingURL=259.2ef33a81.js.map