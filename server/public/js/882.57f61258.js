(self["webpackChunktodo_ninja"]=self["webpackChunktodo_ninja"]||[]).push([[882],{4715:function(i,t,e){i.exports={data(){return{isLoading:!0,isclicked1:!0,isclicked2:!0,isclicked3:!0,isclicked4:!0,isclicked5:!1,isclicked6:!1,isclicked7:!1,isclicked8:!1,myInterval:null,lettersArray:["ZZ","ZJ","ZD","ZT","ZC","ZP","ZS","ZN","ZB","ZM","JZ","JJ","JD","JT","JC","JP","JS","JN","JB","JM","DZ","DJ","DD","DT","DC","DP","DS","DN","DB","DM","TZ","TJ","TD","TT","TC","TP","TS","TN","TB","TM","CZ","CJ","CD","CT","CC","CP","CS","CN","CB","CM","PZ","PJ","PD","PT","PC","PP","PS","PN","PB","PM","SZ","SJ","SD","ST","SC","SP","SS","SN","SB","SM","NZ","NJ","ND","NT","NC","NP","NS","NN","NB","NM","BZ","BJ","BD","BT","BC","BP","BS","BN","BB","BM","MZ","MJ","MD","MT","MC","MP","MS","MN","MB","MM"],numbers:new Set,num:0,x:0,rangeArray:[0,0],opcjaEweliny:!1,waskie:1,shuffledArray:null,napis:"WĄSKO",currentSrc1:0,currentSrc2:0,currentSrc3:0,currentSrc4:0,imagesArray:[e(2791),e(8514),e(247),e(4223),e(7109),e(1839),e(1105),e(9056),e(3344),e(6067),e(397),e(6769),e(9572),e(5876),e(3154),e(7360),e(5464),e(7493),e(5448),e(8681),e(158),e(3681),e(5990),e(5918),e(9938),e(3801),e(1037),e(4814),e(606),e(5602),e(6595),e(2219),e(1025),e(9023),e(2332),e(3704),e(3831),e(5199),e(1958),e(2045),e(2616),e(1893),e(1276),e(9584),e(6538),e(899),e(2107),e(3709),e(1371),e(5970),e(5049),e(2812)],notyet:!1,przerwa:!1}},methods:{getRandomInt:function(i,t){return i=Math.ceil(i),t=Math.floor(t),Math.floor(Math.random()*(t-i+1))+i},setRangeFunction:function(){this.a=document.getElementById("lrange").value,console.log(this.a),this.b=document.getElementById("rrange").value,console.log(this.b)},getRandomItem:function(i){let t=Array.from(i);return t[Math.floor(Math.random()*t.length)]},autoPlay:function(){var i=document.getElementById("interwał").value;console.log(i),this.myInterval=setInterval(this.rangeFunction,i)},buttons(){const i=document.querySelector(".button-open");i.style.display="block";const t=document.querySelector(".button-hide");t.style.display="none"},showOptions1:function(){this.isclicked2=!this.isclicked2,this.isclicked3=!this.isclicked3,this.isclicked4=!this.isclicked4,this.isclicked5=!this.isclicked5},showOptions2:function(){this.isclicked1=!this.isclicked1,this.isclicked3=!this.isclicked3,this.isclicked4=!this.isclicked4,this.isclicked6=!this.isclicked6},showOptions3:function(){this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked4=!this.isclicked4,this.isclicked7=!this.isclicked7},showOptions4:function(){this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked3=!this.isclicked3},showOptions4a:function(){this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked3=!this.isclicked3,this.isclicked8=!this.isclicked8},showOptions4b:function(){this.isclicked3=!this.isclicked3,this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked7=!this.isclicked7},showOptions5:function(){this.isclicked2=!this.isclicked2,this.isclicked3=!this.isclicked3,this.isclicked4=!this.isclicked4,this.isclicked5=!this.isclicked5},showOptions6:function(){this.isclicked1=!this.isclicked1,this.isclicked3=!this.isclicked3,this.isclicked4=!this.isclicked4,this.isclicked6=!this.isclicked6},showOptions7:function(){this.isclicked3=!this.isclicked3,this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked7=!this.isclicked7},showOptions9:function(){this.opcjaEweliny=!this.opcjaEweliny,this.isclicked1=!this.isclicked1,this.isclicked2=!this.isclicked2,this.isclicked3=!this.isclicked3,this.isclicked8=!1}}}},2904:function(i){i.exports={methods:{showOptions:function(){var i=document.getElementById("Options");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptions2:function(){var i=document.getElementById("Options2");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptions3:function(){var i=document.getElementById("Options3");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptions4:function(){var i=document.getElementById("Options4");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptionsx:function(){var i=document.getElementById("Optionsx");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptionsx2:function(){var i=document.getElementById("Optionsx2");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptionsx3:function(){var i=document.getElementById("Optionsx3");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptionsx4:function(){var i=document.getElementById("Optionsx4");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"}}}},7982:function(i,t,e){"use strict";e.r(t);var s=e(5057),n={};for(var c in s)"default"!==c&&(n[c]=function(i){return s[i]}.bind(0,c));e.d(t,n);const o=s["default"];t["default"]=o},1738:function(i,t,e){"use strict";e.r(t);var s=e(1791),n={};for(var c in s)"default"!==c&&(n[c]=function(i){return s[i]}.bind(0,c));e.d(t,n);const o=s["default"];t["default"]=o},9882:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return X}});var s=e(3396),n=e(3369),c=e(6824),o=e(8521);const l=(0,s._)("div",{class:"arrowback"},null,-1),r={key:0},u={key:1},d=(0,s._)("div",{class:"site"},[(0,s._)("div",{id:"displayNumber"})],-1);function a(i,t,e,a,p,h){const m=(0,s.up)("router-link"),b=(0,s.up)("MyNavbarNumbersMobile"),y=(0,s.up)("MyNavbarNumbers");return(0,s.wg)(),(0,s.j4)(n.K,{fluid:"",class:"pa-0 ma-0",style:{"background-color":"#c2c2c2",height:"100%"}},{default:(0,s.w5)((()=>[(0,s.Wm)(c.o,{class:"text-center pa-0 ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,{to:"/palowanie",class:"pa-0 ma-0"},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.Wm)(o.D,{cols:"12",class:"pa-0 ma-0"},{default:(0,s.w5)((()=>[i.mobileView?((0,s.wg)(),(0,s.iD)("span",r,[(0,s.Wm)(b)])):((0,s.wg)(),(0,s.iD)("span",u,[(0,s.Wm)(y)]))])),_:1}),(0,s.Wm)(o.D,{cols:"12",class:"pa-0 ma-0"},{default:(0,s.w5)((()=>[d])),_:1})])),_:1})])),_:1})}e(7658);const p={id:"vuebuttons"},h={class:"sidebar-numbers"},m={class:"btn-group",style:{width:"100%"}},b={key:0},y={key:1},g={key:2},k={key:3},f={key:4},w=(0,s._)("input",{type:"text",id:"lrange",class:"btnnumber2",name:"zakresl",placeholder:"Zakres lewy (np: 1)"},null,-1),v=[w],x={key:5},B=(0,s._)("input",{type:"text",id:"rrange",class:"btnnumber2",name:"zakresr",placeholder:"Zakres prawy (np: 999)"},null,-1),N=[B],M={key:6},I={key:7},E=(0,s._)("input",{type:"text2",id:"interwał",class:"btnnumber2",name:"interwał",placeholder:"Interwał (np: 1000 -> 1 sekunda)"},null,-1),O=[E],T={key:8},_=(0,s._)("i",{class:"arrow-left"},null,-1),D=[_],C=(0,s._)("i",{class:"arrow-right"},null,-1),S=[C];function P(i,t,e,n,c,l){return(0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",h,[(0,s.Wm)(o.D,null,{default:(0,s.w5)((()=>[(0,s._)("div",m,[i.isclicked1?((0,s.wg)(),(0,s.iD)("span",b,[(0,s._)("button",{onClick:t[0]||(t[0]=(...t)=>i.showOptions1&&i.showOptions1(...t)),class:"btnnumber",id:"btn1"},"Wybierz zakres")])):(0,s.kq)("",!0),i.isclicked2?((0,s.wg)(),(0,s.iD)("span",y,[(0,s._)("button",{onClick:t[1]||(t[1]=(...t)=>i.showOptions2&&i.showOptions2(...t)),class:"btnnumber",id:"btn2"},"Auto-wyświetlanie")])):(0,s.kq)("",!0),i.isclicked3?((0,s.wg)(),(0,s.iD)("span",g,[(0,s._)("button",{onClick:t[2]||(t[2]=(...i)=>l.rangeFunction2&&l.rangeFunction2(...i)),class:"btnnumber",id:"btn3"},"Pula do powtórki")])):(0,s.kq)("",!0),i.isclicked4?((0,s.wg)(),(0,s.iD)("span",k,[(0,s._)("button",{onClick:t[3]||(t[3]=(...t)=>i.showOptions4&&i.showOptions4(...t)),class:"btnnumber",id:"btn4"},"Własna Lista")])):(0,s.kq)("",!0),i.isclicked5?((0,s.wg)(),(0,s.iD)("span",f,v)):(0,s.kq)("",!0),i.isclicked5?((0,s.wg)(),(0,s.iD)("span",x,N)):(0,s.kq)("",!0),i.isclicked5?((0,s.wg)(),(0,s.iD)("span",M,[(0,s._)("button",{onClick:t[4]||(t[4]=t=>{i.showOptions5(),l.rangeFunction(),i.setRangeFunction()}),class:"btnnumber",type:"submit",id:"submitButton"},"Potwierdź")])):(0,s.kq)("",!0),i.isclicked6?((0,s.wg)(),(0,s.iD)("span",I,O)):(0,s.kq)("",!0),i.isclicked6?((0,s.wg)(),(0,s.iD)("span",T,[(0,s._)("button",{onClick:t[5]||(t[5]=t=>{i.autoPlay(),i.showOptions6()}),class:"btnnumber",type:"submit",id:"submitButton2"},"Potwierdź")])):(0,s.kq)("",!0)]),(0,s._)("button",{"max-height":"50","max-width":"50",class:"button-hide",onClick:t[6]||(t[6]=(...i)=>l.closeNav&&l.closeNav(...i))},D),(0,s._)("button",{"max-height":"50","max-width":"50",class:"button-open",onClick:t[7]||(t[7]=(...i)=>l.openNav&&l.openNav(...i))},S)])),_:1})])])}var L={el:"#vuebuttons",data(){return{a:0,b:0}},mixins:[e(7982)],created(){window.addEventListener("keydown",(i=>{"ArrowRight"==i.key&&this.rangeFunction()})),window.addEventListener("keydown",(i=>{"ArrowUp"==i.key&&this.rangeFunction2()}))},methods:{rangeFunction:function(){var i=this.getRandomInt(this.a,this.b);this.x=i,window.addEventListener("keydown",(i=>{"r"==i.key&&this.numbers.add(this.x)})),window.addEventListener("keydown",(i=>{"p"==i.key&&clearInterval(this.myInterval)})),this.b<=99&&this.b>=10?this.x<100&&this.x>=10?document.getElementById("displayNumber").innerHTML=this.x:this.x<10&&this.x>=0&&(this.num="0"+this.x,document.getElementById("displayNumber").innerHTML=this.num):this.b<=9?document.getElementById("displayNumber").innerHTML=this.x:this.x<100&&this.x>=10?(this.num="0"+this.x,document.getElementById("displayNumber").innerHTML=this.num):this.x<10&&this.x>=0?(this.num="00"+this.x,document.getElementById("displayNumber").innerHTML=this.num):document.getElementById("displayNumber").innerHTML=this.x},rangeFunction2:function(){if(0!=this.numbers.size){var i=this.getRandomItem(this.numbers);i<100&&i>=10?(this.num="0"+i,document.getElementById("displayNumber").innerHTML=this.num):i<10&&i>=0?(this.num="00"+i,document.getElementById("displayNumber").innerHTML=this.num):document.getElementById("displayNumber").innerHTML=i}},closeNav:function(){const i=document.querySelector(".sidebar-numbers");i.style.width="0px",i.style.height="535px",this.isclicked1=!1,this.isclicked2=!1,this.isclicked3=!1,this.isclicked4=!1,this.isclicked5=!1,this.isclicked6=!1,setTimeout((()=>{console.log(this.buttons())}),600);const t=document.querySelectorAll(".sidebar-number-nav");for(let e=0;e<t.length;e++)t[e].style.display="none"},openNav:function(){const i=document.querySelector(".sidebar-numbers");i.style.width="300px",i.style.height="535px",this.isclicked1=!0,this.isclicked2=!0,this.isclicked3=!0,this.isclicked4=!0;const t=document.querySelector(".button-open");t.style.display="none";const e=document.querySelector(".button-hide");e.style.display="block";const s=document.querySelectorAll(".sidebar-number-nav");for(let n=0;n<s.length;n++)s[n].style.display="block"}}},Z=e(89);const J=(0,Z.Z)(L,[["render",P]]);var H=J;const q={id:"vuebuttons"},F={class:"btn-numbers-group",style:{width:"100%"}},W={id:"Options"},A=(0,s._)("input",{type:"text-numbers",id:"lrange",name:"zakresl",placeholder:"Zakres lewy (np: 0)"},null,-1),z=(0,s._)("input",{type:"text-numbers",id:"rrange",name:"zakresr",placeholder:"Zakres Prawy (np: 999)"},null,-1),R={id:"Options2"},j=(0,s._)("input",{type:"text2-numbers",id:"interwał",name:"interwał",placeholder:"Interwał (np: 1000 -> 1 sekunda)"},null,-1);function V(i,t,e,c,o,l){return(0,s.wg)(),(0,s.iD)("div",q,[(0,s.Wm)(n.K,{style:{"padding-top":"0px","padding-bottom":"1px"}},{default:(0,s.w5)((()=>[(0,s._)("div",F,[(0,s._)("button",{onClick:t[0]||(t[0]=i=>l.showOptions()),style:{width:"33%"}},"Wybierz zakres"),(0,s._)("button",{onClick:t[1]||(t[1]=i=>l.showOptions2()),style:{width:"33%"}},"Auto-wyświetlanie"),(0,s._)("button",{onClick:t[2]||(t[2]=i=>l.rangeFunction2()),style:{width:"33%"}},"Pula do powtórki")])])),_:1}),(0,s.Wm)(n.K,{style:{"padding-top":"0px"}},{default:(0,s.w5)((()=>[(0,s._)("div",W,[A,z,(0,s._)("button",{onClick:t[3]||(t[3]=t=>{i.setRangeFunction(),l.rangeFunction()}),class:"submit-button-numbers",type:"submit",id:"submitButton",style:{"background-color":"#366799"}},"Potwierdź")]),(0,s._)("div",R,[j,(0,s._)("button",{onClick:t[4]||(t[4]=t=>i.autoPlay()),class:"submit-button-numbers",type:"submit-numbers",id:"submitButton",style:{"background-color":"#366799"}},"Potwierdź")])])),_:1})])}var K={el:"#vuebuttons",data(){return{a:0,b:0}},mixins:[e(7982),e(1738)],created(){window.addEventListener("keydown",(i=>{"ArrowRight"==i.key&&this.rangeFunction()})),window.addEventListener("keydown",(i=>{"ArrowUp"==i.key&&this.rangeFunction2()}))},methods:{rangeFunction:function(){var i=this.getRandomInt(this.a,this.b);this.x=i,window.addEventListener("keydown",(i=>{"r"==i.key&&this.numbers.add(this.x)})),window.addEventListener("keydown",(i=>{"p"==i.key&&clearInterval(this.myInterval)})),this.b<=99&&this.b>=10?this.x<100&&this.x>=10?document.getElementById("displayNumber").innerHTML=this.x:this.x<10&&this.x>=0&&(this.num="0"+this.x,document.getElementById("displayNumber").innerHTML=this.num):this.b<=9?document.getElementById("displayNumber").innerHTML=this.x:this.x<100&&this.x>=10?(this.num="0"+this.x,document.getElementById("displayNumber").innerHTML=this.num):this.x<10&&this.x>=0?(this.num="00"+this.x,document.getElementById("displayNumber").innerHTML=this.num):document.getElementById("displayNumber").innerHTML=this.x},rangeFunction2:function(){if(0!=this.numbers.size){var i=this.getRandomItem(this.numbers);i<100&&i>=10?(this.num="0"+i,document.getElementById("displayNumber").innerHTML=this.num):i<10&&i>=0?(this.num="00"+i,document.getElementById("displayNumber").innerHTML=this.num):document.getElementById("displayNumber").innerHTML=i}},showOptions:function(){var i=document.getElementById("Options");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"},showOptions2:function(){var i=document.getElementById("Options2");"visible"===i.style.visibility?i.style.visibility="hidden":i.style.visibility="visible"}}};const U=(0,Z.Z)(K,[["render",V]]);var $=U,G=(0,s.aZ)({name:"NumbersVue",data(){},components:{MyNavbarNumbers:H,MyNavbarNumbersMobile:$},methods:{handleView(){this.mobileView=window.innerWidth<=800}},created(){this.handleView(),window.addEventListener("resize",this.handleView),null===localStorage.getItem("token")&&this.$router.push("/login")}});const Q=(0,Z.Z)(G,[["render",a]]);var X=Q},5057:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return n.a}});var s=e(4715),n=e.n(s),c={};for(var o in s)"default"!==o&&(c[o]=function(i){return s[i]}.bind(0,o));e.d(t,c)},1791:function(i,t,e){"use strict";e.r(t),e.d(t,{default:function(){return n.a}});var s=e(2904),n=e.n(s),c={};for(var o in s)"default"!==o&&(c[o]=function(i){return s[i]}.bind(0,o));e.d(t,c)},2791:function(i,t,e){"use strict";i.exports=e.p+"img/1.af7cbe3f.png"},6067:function(i,t,e){"use strict";i.exports=e.p+"img/10.8ec03dcd.png"},397:function(i,t,e){"use strict";i.exports=e.p+"img/11.74f033a6.png"},6769:function(i,t,e){"use strict";i.exports=e.p+"img/12.a958a52b.png"},9572:function(i,t,e){"use strict";i.exports=e.p+"img/13.a3210841.png"},5876:function(i,t,e){"use strict";i.exports=e.p+"img/14.4bc030d9.png"},3154:function(i,t,e){"use strict";i.exports=e.p+"img/15.1024bcc8.png"},7360:function(i,t,e){"use strict";i.exports=e.p+"img/16.dc6661bd.png"},5464:function(i,t,e){"use strict";i.exports=e.p+"img/17.9d1177e0.png"},7493:function(i,t,e){"use strict";i.exports=e.p+"img/18.8c6ae3ee.png"},5448:function(i,t,e){"use strict";i.exports=e.p+"img/19.86554920.png"},8514:function(i,t,e){"use strict";i.exports=e.p+"img/2.3a014f3e.png"},8681:function(i,t,e){"use strict";i.exports=e.p+"img/20.26f7c7d8.png"},158:function(i,t,e){"use strict";i.exports=e.p+"img/21.d240be07.png"},3681:function(i,t,e){"use strict";i.exports=e.p+"img/22.9880725c.png"},5990:function(i,t,e){"use strict";i.exports=e.p+"img/23.d812e4a7.png"},5918:function(i,t,e){"use strict";i.exports=e.p+"img/24.031208ac.png"},9938:function(i,t,e){"use strict";i.exports=e.p+"img/25.84cd0560.png"},3801:function(i,t,e){"use strict";i.exports=e.p+"img/26.4088d4d1.png"},1037:function(i,t,e){"use strict";i.exports=e.p+"img/27.4f7f8060.png"},4814:function(i,t,e){"use strict";i.exports=e.p+"img/28.fb2f1d29.png"},606:function(i,t,e){"use strict";i.exports=e.p+"img/29.545a0e9a.png"},247:function(i,t,e){"use strict";i.exports=e.p+"img/3.70a374b4.png"},5602:function(i,t,e){"use strict";i.exports=e.p+"img/30.5dff9cd8.png"},6595:function(i,t,e){"use strict";i.exports=e.p+"img/31.b528faaa.png"},2219:function(i,t,e){"use strict";i.exports=e.p+"img/32.acdf5dbf.png"},1025:function(i,t,e){"use strict";i.exports=e.p+"img/33.290cf99e.png"},9023:function(i,t,e){"use strict";i.exports=e.p+"img/34.419134b2.png"},2332:function(i,t,e){"use strict";i.exports=e.p+"img/35.9e34b094.png"},3704:function(i,t,e){"use strict";i.exports=e.p+"img/36.2a7d62af.png"},3831:function(i,t,e){"use strict";i.exports=e.p+"img/37.d5255433.png"},5199:function(i,t,e){"use strict";i.exports=e.p+"img/38.ed38ffe2.png"},1958:function(i,t,e){"use strict";i.exports=e.p+"img/39.faefbf45.png"},4223:function(i,t,e){"use strict";i.exports=e.p+"img/4.bb5c604b.png"},2045:function(i,t,e){"use strict";i.exports=e.p+"img/40.c069f67b.png"},2616:function(i,t,e){"use strict";i.exports=e.p+"img/41.b8c0f541.png"},1893:function(i,t,e){"use strict";i.exports=e.p+"img/42.eae7448f.png"},1276:function(i,t,e){"use strict";i.exports=e.p+"img/43.3991fbf9.png"},9584:function(i,t,e){"use strict";i.exports=e.p+"img/44.3c6a7c17.png"},6538:function(i,t,e){"use strict";i.exports=e.p+"img/45.01b48f27.png"},899:function(i,t,e){"use strict";i.exports=e.p+"img/46.477c0fcd.png"},2107:function(i,t,e){"use strict";i.exports=e.p+"img/47.9a66e895.png"},3709:function(i,t,e){"use strict";i.exports=e.p+"img/48.ed767f41.png"},1371:function(i,t,e){"use strict";i.exports=e.p+"img/49.6e255e2d.png"},7109:function(i,t,e){"use strict";i.exports=e.p+"img/5.4f492166.png"},5970:function(i,t,e){"use strict";i.exports=e.p+"img/50.c880a3df.png"},5049:function(i,t,e){"use strict";i.exports=e.p+"img/51.d9050468.png"},2812:function(i,t,e){"use strict";i.exports=e.p+"img/52.57ca9e20.png"},1839:function(i,t,e){"use strict";i.exports=e.p+"img/6.d11cbb4e.png"},1105:function(i,t,e){"use strict";i.exports=e.p+"img/7.203c1227.png"},9056:function(i,t,e){"use strict";i.exports=e.p+"img/8.2234b4b1.png"},3344:function(i,t,e){"use strict";i.exports=e.p+"img/9.54cd7c82.png"}}]);
//# sourceMappingURL=882.57f61258.js.map