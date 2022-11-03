<script>

export default {
  el: '#vuebuttons',
  data() {
    return {
      isLoading : true,
      isclicked1 : true,
      isclicked2 : true,
      isclicked3 : true,
      isclicked4 : true,
      isclicked5 : false, 
      isclicked6 : false,
      isclicked7 : false,
      isclicked8 : false,
      myInterval : null,
      opcjaEweliny : false,
      waskie : 1,
      rangeArray : [0, 0],
      currentSrc1: 0, currentSrc2: 0, currentSrc3: 0, currentSrc4: 0,
      imagesArray : [require("../assets/deck/1.png"), require("../assets/deck/2.png"), require("../assets/deck/3.png"), require("../assets/deck/4.png"), require("../assets/deck/5.png"), require("../assets/deck/6.png"), require("../assets/deck/7.png"), require("../assets/deck/8.png"), require("../assets/deck/9.png"), require("../assets/deck/10.png"), require("../assets/deck/11.png"), require("../assets/deck/12.png"), require("../assets/deck/13.png"), require("../assets/deck/14.png"), require("../assets/deck/15.png"), require("../assets/deck/16.png"), require("../assets/deck/17.png"), require("../assets/deck/18.png"), require("../assets/deck/19.png"), require("../assets/deck/20.png"), require("../assets/deck/21.png"), require("../assets/deck/22.png"), require("../assets/deck/23.png"), require("../assets/deck/24.png"), require("../assets/deck/25.png"), require("../assets/deck/26.png"), require("../assets/deck/27.png"), require("../assets/deck/28.png"), require("../assets/deck/29.png"), require("../assets/deck/30.png"), require("../assets/deck/31.png"), require("../assets/deck/32.png"), require("../assets/deck/33.png"), require("../assets/deck/34.png"), require("../assets/deck/35.png"), require("../assets/deck/36.png"), require("../assets/deck/37.png"), require("../assets/deck/38.png"), require("../assets/deck/39.png"), require("../assets/deck/40.png"), require("../assets/deck/41.png"), require("../assets/deck/42.png"), require("../assets/deck/43.png"), require("../assets/deck/44.png"), require("../assets/deck/45.png"), require("../assets/deck/46.png"), require("../assets/deck/47.png"), require("../assets/deck/48.png"), require("../assets/deck/49.png"), require("../assets/deck/50.png"), require("../assets/deck/51.png"), require("../assets/deck/52.png")],
      shuffledArray: null,
      num : 0,
      x : 0,
      numbers : new Set(),
      a : 0,
      napis : "WĄSKO"
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        this.rangeFunctionk()
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp') {
        this.rangeFunction2k()
      }
    });
  },
  methods: {

    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    setRangeFunctionk: function(){
        this.a = document.getElementById("cards").value;
        console.log(this.a);
        if(this.a == 2){
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "none";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "none";
        }
        else if(this.a == 3){
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "none";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "block";
        }
        else{
          let obrazek1 = document.getElementById("obrazek1");
          obrazek1.style.display = "block";
          let obrazek2 = document.getElementById("obrazek2");
          obrazek2.style.display = "block";
          let obrazek3 = document.getElementById("obrazek3");
          obrazek3.style.display = "block";
          let obrazek4 = document.getElementById("obrazek4");
          obrazek4.style.display = "block";
        }
    },

    rangeFunctionk: function(){

        window.addEventListener('keydown', (e) => {
          if (e.key == 'p') {
            clearInterval(this.myInterval);
          }
        });
        var karta1, karta2, karta3, karta4;
        if(this.a == 2 && this.opcjaEweliny == false){
		
            karta2 = Math.floor(Math.random() * 52);
            karta3 = karta2;
		
            while(karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta3){
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
            }
        }
        else if(this.a == 2 && this.opcjaEweliny == true){
		
            karta2 = Math.floor(Math.random() * 52);
            karta3 = karta2;
		
            while(karta3 == karta2){
                karta3 = this.getRandomInt(40, 51);
            }
        
            if(karta2 != karta3){
                var s = this.getRandomInt(0, 3);
                if(s == 1){
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
                }
                else{
                this.currentSrc2 = karta3;
                this.currentSrc3 = karta2;
                }
            }
        }
        else if(this.a == 3){
		
            karta1 = Math.floor(Math.random() * 52);
            karta2 = karta1;
            karta3 = karta1;
		
            while(karta2 == karta1){
                karta2 = Math.floor(Math.random() * 52);
            }
		
		
            while(karta3 == karta1 || karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2){
                this.currentSrc2 = karta1;
                this.currentSrc3 = karta2;
                this.currentSrc4 = karta3;
            }
        }
        else{
		
            karta1 = Math.floor(Math.random() * 52);
            karta2 = karta1;
            karta3 = karta1;
            karta4 = karta1;
		
            while(karta2 == karta1){
                karta2 = Math.floor(Math.random() * 52);
            }	
            while(karta3 == karta1 || karta3 == karta2){
                karta3 = Math.floor(Math.random() * 52);
            }
            while(karta4 == karta1 || karta4 == karta2 || karta4 == karta3){
                karta4 = Math.floor(Math.random() * 52);
            }
            if(karta2 != karta1 && karta3 != karta1 && karta3 != karta2 && karta4 != karta1 && karta4 != karta2 && karta4 != karta3){
                this.currentSrc1 = karta1;
                this.currentSrc2 = karta2;
                this.currentSrc3 = karta3;
                this.currentSrc4 = karta4;

            }
        }
    },
    changeSpaceBetween: function() {
      if(this.waskie == 0){
        document.getElementById('displayCard1').style.paddingLeft = "182px";
        document.getElementById('displayCard2').style.paddingLeft = "206px";
        document.getElementById('displayCard3').style.paddingLeft = "230px";
        document.getElementById('displayCard4').style.paddingLeft = "254px";
        this.waskie = 1;
        this.napis = "WĄSKO"
      }
      else{
        document.getElementById('displayCard1').style.paddingLeft = "161px";
        document.getElementById('displayCard2').style.paddingLeft = "199px";
        document.getElementById('displayCard3').style.paddingLeft = "237px";
        document.getElementById('displayCard4').style.paddingLeft = "275px";
        this.waskie = 0;
        this.napis = "SZEROKO"
      }
    },

    getRandomItem: function(set) {
      let items = Array.from(set);
      return items[Math.floor(Math.random() * items.length)];
    },

    rangeFunctionl2l: function() {	
      if(this.numbers.size != 0){
        var r = this.getRandomItem(this.numbers);
        if(r < 100 && r >= 10){
          this.num = "0" + r;
          document.getElementById("displayNumberl").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayNumberl").innerHTML = this.num;
        }
        else{
          document.getElementById("displayNumberl").innerHTML = r;
        }
      }
    },

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunctionk, v);
    },

    buttons(){
      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "block"
      
      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "none"
    },

    closeNav: function(){

      const sidebar =  document.querySelector(".sidebar-cards")
      sidebar.style.width = "0px"
      sidebar.style.height = "550px"

      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;
      this.isclicked7 = false;
      this.isclicked8 = false;

      const arrowleft = document.querySelector(".arrow-left")
      arrowleft.style.rotate = "180deg"

      const arrowright = document.querySelector(".arrow-right")
      arrowright.style.rotate = "0deg"

      const arrow = document.querySelector(".arrow-left")
      arrow.style.left = "55%"

      setTimeout(() => {console.log(this.buttons())}, 1000)

      const sidebarnav = document.querySelectorAll(".sidebar-cards-nav")
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "none";
      }
    },

    changeImage: function(){
        var img = document.getElementById('image');
        img.src = '../assets/deck/3.png';
    },

    openNav: function(){
      const sidebar = document.querySelector(".sidebar-cards")
      sidebar.style.width = "300px"
      sidebar.style.height = "550px"

      this.isclicked1 = true;
      this.isclicked2 = true;
      this.isclicked3 = true;
      this.isclicked4 = true;

      const arrowright = document.querySelector(".arrow-right")
      arrowright.style.rotate = "180deg"

      const arrow = document.querySelector(".arrow-left")
      arrow.style.left = "92%"
      arrow.style.rotate = "0deg"

      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "none"

      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "block"     

      const sidebarnav = document.querySelectorAll(".sidebar-cards-nav")
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "block";
      }
    },

    showOptions1: function(){
        this.isclicked2 = !this.isclicked2
        this.isclicked3 = !this.isclicked3
        this.isclicked4 = !this.isclicked4
        this.isclicked5 = !this.isclicked5
    },
    showOptions2: function(){
        this.isclicked1 = !this.isclicked1
        this.isclicked3 = !this.isclicked3
        this.isclicked4 = !this.isclicked4
        this.isclicked6 = !this.isclicked6
    },
    showOptions3: function(){

        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked4 = !this.isclicked4
        this.isclicked7 = !this.isclicked7
    },
    showOptions4: function(){
        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked3 = !this.isclicked3
        this.isclicked8 = !this.isclicked8
    },
    showOptions5: function(){
        this.isclicked2 = !this.isclicked2
        this.isclicked3 = !this.isclicked3
        this.isclicked4 = !this.isclicked4
        this.isclicked5 = !this.isclicked5
    },
    showOptions6: function(){
        this.isclicked1 = !this.isclicked1
        this.isclicked3 = !this.isclicked3
        this.isclicked4 = !this.isclicked4
        this.isclicked6 = !this.isclicked6
    },
    showOptions9: function(){
        this.opcjaEweliny = !this.opcjaEweliny
        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked3 = !this.isclicked3
        this.isclicked8 = false
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
      <div class="sidebar-cards">
        <v-col>
          <div class="btn-group" style="width:100%">  
            <span v-if="isclicked1"><button @click="showOptions1" class="btncards" id="btn1">Wybierz ilość kart</button></span>
            <span v-if="isclicked2"><button @click="showOptions2" class="btncards" id="btn2">Auto-wyświetlanie</button></span>
            <span v-if="isclicked3"><button @click="showOptions3" class="btncards" id="btn3">Sposób wyświetlania</button></span>
            <span v-if="isclicked4"><button @click="showOptions4" class="btncards" id="btn4">Dodatkowe opcje</button></span>
            <span v-if="isclicked5"><input type="text" id="cards" name="cards" class="btncards2" placeholder="Ilość wyświetlanych kart (2, 3 lub 4)"></span>
            <span v-if="isclicked5"><button @click="showOptions5(); rangeFunctionk(); setRangeFunctionk();" class="btncards" type="submit" id="submitButton">Potwierdź</button></span>
            <span v-if="isclicked6"><input type="text2" id="interwał" class="btncards2" name="interwał" placeholder="Interwał (np: 1000 -> 1 sekunda)"></span>
            <span v-if="isclicked6"><button @click="autoPlay();showOptions6();" class="btncards" type="submit" id="submitButton2">Potwierdź</button></span>
            <span v-if="isclicked7"><button @click="changeSpaceBetween()" class="btncards" type="confirm" id="submitButton2">{{napis}}</button></span>
            <span v-if="isclicked8"><button @click="showOptions9()" class="btncards" type="confirm" id="submitButton3">Opcja Eweliny</button></span>
          </div>
          <button max-height="50" max-width="50" class="button-hide" @click="closeNav"><i class="arrow-left"></i></button>
          <button max-height="50" max-width="50" class="button-open" @click="openNav"><i class="arrow-right"></i></button>
        </v-col>
      </div>
    </div>
    <v-row class="text-center pa-0 ma-0">
      <v-col cols="12" class="pa-0 ma-0">
            <div class="site">
              <div id="displaycard">
                <div id="displayCard1"><v-img
                    :src='imagesArray[currentSrc1]'
                    aspect-ratio="1"
                    class="card1"
                    id="obrazek1"
                  /></div>
                  <div id="displayCard2"><v-img
                      :src='imagesArray[currentSrc2]'
                      aspect-ratio="1"
                      class="card2"
                      id="obrazek2"
                    /></div>
                    <div id="displayCard3"><v-img
                      :src='imagesArray[currentSrc3]'
                      aspect-ratio="1"
                      class="card3"
                      id="obrazek3"
                    /></div>
                    <div id="displayCard4"><v-img
                        :src='imagesArray[currentSrc4]'
                        aspect-ratio="1"
                        class="card4"
                        id="obrazek4"
                      /></div>
              </div>
            </div>
      </v-col>
    </v-row>
</template>

<style>
#displaycard {
  width: 610px;
  height: 205px;
  border-radius: 10px;
  line-height: 100px;
  display: flex;
}
.site{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sidebar-cards{
  margin-top: 100px;
  height: 550px;
  max-width: 300px;
  width: 300px;
  background-color: #DE1400;
  justify-content: center;
  text-align: center;
  position: fixed;
  transition-duration: 0.8s;
  border-radius: 10px;
}
.sidebar-cards-nav{
  margin-top: 5px;  
  height: 100px;
  max-width: 280px;
  color: white;
  line-height: 100px;
  display: block;
}
#btn1, #btn2, #btn3, #btn4{
    display: block;
}
.btncards:hover{
  background-color: #BE1100;
}
.button-open{
  max-width: 280px;
  color: white;
  line-height: 20px;
  display: none;
}
.button-hide{
  max-width: 280px;
  color: white;
  line-height: 20px;
  display: block;
}
.sidebar-nav:hover{
  background-color: #BE1100;
}
.arrow-left {
  position: absolute;
  margin: 0 auto;
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent; 
  border-right: 25px solid white;
  margin-left: auto;
  left: 92%;
  top: 32vh;
  transition-duration: 0.6s;
}
.arrow-right {
  position: absolute;
  margin: 0 auto;
  width: 0; 
  height: 0; 
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent; 
  border-right: 25px solid white;
  margin-left: auto;
  left: 92%;
  top: 32vh;
  transition-duration: 0.6s;
  transform: rotate(180deg);
}
.btncards, .btncards2{
  width: 100%;
  border-radius: 10px;
  height: 90px;
  margin-top: 30px;
  background-color: #c2c2c2;
  text-align: center;
  display: block;
}
#obrazek1{
  width: 205px;
  border-radius: 45px;
  display: none;
}
#obrazek2{
  width: 205px;
  border-radius: 45px;
  display: none;
}
#obrazek3{
  width: 205px;
  border-radius: 45px;
  display: none;
}
#obrazek4{
  width: 205px;
  border-radius: 45px;
  display: none;
}
#displayCard1 {
  padding-left: 182px;
	z-index: 1;
  position: absolute;
}
#displayCard2 {
  padding-left: 206px;
	z-index: 2;
  position: absolute;
}
#displayCard3 {
  padding-left: 230px;
	z-index: 3;
  position: absolute;
}
#displayCard4 {
  padding-left: 254px;
	z-index: 4;
  position: absolute;
}
</style>