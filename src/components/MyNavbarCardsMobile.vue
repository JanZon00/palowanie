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
        document.getElementById('displayCard1').style.paddingLeft = "67px";
        document.getElementById('displayCard2').style.paddingLeft = "91px";
        document.getElementById('displayCard3').style.paddingLeft = "115px";
        document.getElementById('displayCard4').style.paddingLeft = "139px";
        this.waskie = 1;
        this.napis = "WĄSKO"
      }
      else{
        document.getElementById('displayCard1').style.paddingLeft = "46px";
        document.getElementById('displayCard2').style.paddingLeft = "84px";
        document.getElementById('displayCard3').style.paddingLeft = "122px";
        document.getElementById('displayCard4').style.paddingLeft = "160px";
        this.waskie = 0;
        this.napis = "SZEROKO"
      }
    },

    getRandomItem: function(set) {
      let items = Array.from(set);
      return items[Math.floor(Math.random() * items.length)];
    },
    
    changeImage: function(){
        var img = document.getElementById('image');
        img.src = '../assets/deck/3.png';
    },

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunctionk, v);
    },

    showOptions: function(){
      var x = document.getElementById("Options-cards");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions2: function() {
      var x = document.getElementById("Options2-cards");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions3: function() {
      var x = document.getElementById("Options3-cards");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions4: function() {
      var x = document.getElementById("Options4-cards");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    Eweliny: function(){
        this.opcjaEweliny = !this.opcjaEweliny
    }
  }
}
</script>

<template>
    <div id ="vuebuttons">
 
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-cards-group" style="width:100%">  
              <button @click="showOptions()" style="width:25%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:25%">Auto-wyświetlanie</button>
              <button @click="showOptions3()" style="width:25%">Sposób wyświetlania</button>
              <button @click="showOptions4()" style="width:25%">Dodatkowe opcje</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options-cards">	
                <input type="text-cards" id="cards" name="cards" placeholder="Ilość wyświetlanych kart (2, 3 lub 4)">
                <button @click="setRangeFunctionk(); rangeFunctionk();" class="submit-button-cards" type="submit" id="submitButton" style="background-color:#DE1400">Potwierdź</button> 
            </div>
		
            <div id="Options2-cards">
                <input type="text2-cards" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-cards" type="submit-cards" id="submitButton" style="background-color:#DE1400">Potwierdź</button>
            </div>

            <div id="Options3-cards">
                <button @click="changeSpaceBetween()" class="submit-button-cards" type="confirm" id="submitButton">{{napis}}</button>
            </div>

            <div id="Options4-cards">
               <button @click="Eweliny()" class="submit-button-cards" type="confirm" id="submitButton3">Opcja Eweliny</button>
            </div>
        </v-container>
            <v-row class="row justify-content-center no-gutters">
           
             
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
          
            </v-row>
    </div>
</template>

<style>
.center {
  height: 400px;
  position: relative;
}
#displayCard1, #displayCard2, #displayCard3, #displayCard4{
    margin: 0;
    padding-right: 0px;
    position: absolute;
    left: 26%;
}
@media screen and (max-width: 800px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left:21%; }
}
@media screen and (max-width: 700px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 18%; }
}
@media screen and (max-width: 600px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 13%; }
}
@media screen and (max-width: 500px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 9%; }
}
@media screen and (max-width: 450px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 3%; }
}
@media screen and (max-width: 400px){
    #displayCard1, #displayCard2, #displayCard3, #displayCard4{ left: 0%; }
}
#displayCard1 {
  padding-left: 67px;  
  z-index: 1;
}
#displayCard2 {
  padding-left: 91px;
  z-index: 2;
}
#displayCard3 {
  padding-left: 115px;
  z-index: 3;
}
#displayCard4 {
  padding-left: 139px;
  z-index: 4;
}
.page-section {
  position: relative;
  display: block;
  max-width: 1519px;
  margin-left: auto;
  margin-right: auto;
  min-height: 90vh;
}
.center-position{
	padding-top: 250px;
	text-align: center;
	justify-content: center;
	margin: auto;
}

h1{
  color: white;
  font-size: 30px;
  font-weight: 600;
}
@media screen and (max-width: 800px){
    input::placeholder{ font-size:3vw; }
}
.btn-cards-group button {
  background-color: #DE1400;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
}
@media screen and (max-width: 800px){
    .btn-cards-group{ font-size:1.8vw; }
}

.btn-cards-group:after {
  content: "";
  clear: both;
  display: table;
}


.btn-numbers-group button:hover {
  background-color: #BE1100;
}
#Options-cards, #Options2-cards, #Options3-cards, #Options4-cards{
  float: left;
  width: 25%;
  height: 150px;
  text-align: center;
}
#Options-cards {
  visibility:  hidden;
}
#Options2-cards {
  visibility:  hidden;
}
#Options3-cards {
  visibility:  hidden;
}
#Options4-cards {
  visibility:  hidden;
}
.obrazek1{
	position: absolute;
	max-height: 205px;
	width: auto;
	margin-left: 120px;
	z-index: 5;
    border-radius: 8px;
}
.obrazek2{
	position: absolute;
	max-height: 205px;
	width: auto;
	margin-left: 40px;
	z-index: 4;
    border-radius: 8px;
}
.obrazek3{
	position: absolute;
	max-height: 205px;
	width: auto;
	margin-right: 40px;
	z-index: 3;
    border-radius: 8px;
}
.obrazek4{
	position: absolute;
	max-height: 255px;
	width: auto;
	margin-right: 60px;
	z-index: 2;
    border-radius: 8px;
}

input[type=text-cards], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #DE1400;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text2-cards], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #DE1400;
  border-radius: 4px;
  box-sizing: border-box;
}
.submit-button-cards{
  width: 100%;
  background-color: #DE1400;
  color: white;
  padding: 14px 20px;
  margin: 0px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
@media screen and (max-width: 800px){
    .submit-button-cards{ font-size:2.2vw; }
}

input[type=submit-cards]:hover {
  background-color: #BE1100;
}
</style>