<script>

export default {
  el: '#vuebuttons',
  data() {
    return {
      notyet : false,
      isLoading : true,
      isclicked1 : true,
      isclicked2 : true,
      isclicked3 : true,
      isclicked4 : true,
      isclicked5 : false,
      isclicked6 : false,
      isclicked7 : false, 
      myInterval : null,
      rangeArray : [0, 0],
      num : 0,
      x : 0,
      numbers : new Set(),
      a : 1,
      b : 1,
      przerwa : false,
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        this.rangeFunction()
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp') {
        this.rangeFunction2()
      }
    });
  },
  methods: {
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    setRangeFunction: function(){
        this.a = document.getElementById("lrange").value;
        console.log(this.a);
        this.b = document.getElementById("rrange").value;
        console.log(this.b);
        if(this.b == 1){
            var pole1 = document.getElementById("displayBinary");
            pole1.style.paddingTop = "30px";
            pole1.style.height = "100px";
            pole1.style.width = "260px";
        }
        else if(this.b == 2){
            var pole2 = document.getElementById("displayBinary");
            pole2.style.height = "120px";
            pole2.style.paddingTop = "20px";
            pole2.style.width = "230px";
        }
        else{
            var pole3 = document.getElementById("displayBinary");
            pole3.style.height = "150px";
            pole3.style.paddingTop = "20px";
            pole3.style.width = "200px";
        }
    },

    odstepKreska : function(){
        this.przerwa = !this.przerwa;
    },

    rangeFunction: function(){
        var c = this.generateBinary(this.a * this.b);
        this.x = c;
        //document.getElementById("displayBinary").innerHTML = this.x;

        window.addEventListener('keydown', (e) => {
          if (e.key == 'r') {
            this.numbers.add(this.x);
          }
        });

        window.addEventListener('keydown', (e) => {
          if (e.key == 'p') {
            clearInterval(this.myInterval);
          }
        });

        var result = this.x;
        var col = 0;

        if(this.b > 1){
            if(this.b == 2){
                col = this.a;
                while(col < this.a * this.b){
                    result = result.slice(0, col) + '<br>' + result.slice(col);
                    col += 2;
                }
                document.getElementById("displayBinary").innerHTML = result;
            }
            else{
                col = 3;
                result = result.slice(0, col) + '<br>' + result.slice(col, col*2) + '<br>' + result.slice(col*2);             
                document.getElementById("displayBinary").innerHTML = result;
            }
        }
        else{
            if(this.przerwa == true){
                var od = this.a/2;
                result = result.slice(0, od) + " " + result.slice(od); 
            }
            document.getElementById("displayBinary").innerHTML = result;    
        }
    },

    getRandomItem: function(set) {
      let items = Array.from(set);
      return items[Math.floor(Math.random() * items.length)];
    },
    
    generateBinary: function(length) {
        const characters ='10';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    },

    rangeFunction2: function() {	
      if(this.numbers.size != 0){
        var r = this.getRandomItem(this.numbers);
        if(r < 100 && r >= 10){
          this.num = "0" + r;
          document.getElementById("displayBinary").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayBinary").innerHTML = this.num;
        }
        else{
          document.getElementById("displayBinary").innerHTML = r;
        }
      }
    },

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunction, v);
    },

    buttons(){
      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "block"
      
      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "none"
    },

    closeNav: function(){
      const sidebar =  document.querySelector(".sidebar-binary")
      sidebar.style.width = "0px"
      sidebar.style.height = "550px"

      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;
      this.isclicked7 = false;

      const arrowleft = document.querySelector(".arrow-left")
      arrowleft.style.rotate = "180deg"

      const arrowright = document.querySelector(".arrow-right")
      arrowright.style.rotate = "0deg"

      const arrow = document.querySelector(".arrow-left")
      arrow.style.left = "55%"

      setTimeout(() => {console.log(this.buttons())}, 1000)

      const sidebarnav = document.querySelectorAll(".sidebar-binary-nav")
      for (let i = 0; i < sidebarnav.length; i++) {
        sidebarnav[i].style.display = "none";
      }
    },

    openNav: function(){
      const sidebar = document.querySelector(".sidebar-binary")
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

      const sidebarnav = document.querySelectorAll(".sidebar-binary-nav")
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
    showOptions4: function(){
        this.isclicked3 = !this.isclicked3
        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked7 = !this.isclicked7
    },
    showOptions5: function(){
        this.isclicked2 = !this.isclicked2
        this.isclicked4 = !this.isclicked4
        this.isclicked5 = !this.isclicked5
        this.isclicked3 = !this.isclicked3
    },
    showOptions6: function(){
        this.isclicked1 = !this.isclicked1
        this.isclicked4 = !this.isclicked4
        this.isclicked6 = !this.isclicked6
        this.isclicked3 = !this.isclicked3
    },
    showOptions7: function(){
        this.isclicked3 = !this.isclicked3
        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked7 = !this.isclicked7
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
      <div class="sidebar-binary">
        <v-col>
          <div class="btn-group" style="width:100%">  
            <span v-if="isclicked1"><button @click="showOptions1" class="btnbinary" id="btn1">Wybierz zakres</button></span>
            <span v-if="isclicked2"><button @click="showOptions2" class="btnbinary" id="btn2">Auto-wyświetlanie</button></span>
            <span v-if="isclicked4"><button @click="showOptions4" class="btnbinary" id="btn4">Wygląd</button></span>
            <span v-if="isclicked3"><button class="btnbinary" type="submit" id="submitButton2"></button></span>
            <span v-if="isclicked5"><input type="text" id="lrange" class="btnbinary2" name="zakresl" placeholder="Liczba kolumn (np: 8)"></span>
            <span v-if="isclicked5"><input type="text" id="rrange" class="btnbinary2" name="zakresr" placeholder="Liczba wierszy (np: 2)"></span>
            <span v-if="isclicked5"><button @click="showOptions5(); setRangeFunction(); rangeFunction();" class="btnbinary" type="submit" id="submitButton">Potwierdź</button></span>
            <span v-if="isclicked6"><input type="text2" id="interwał" class="btnbinary2" name="interwał" placeholder="Interwał (np: 1000 -> 1 sekunda)"></span>
            <span v-if="isclicked6"><button @click="autoPlay();showOptions6();" class="btnbinary" type="submit" id="submitButton2">Potwierdź</button></span>
            <span v-if="isclicked7"><button @click="showOptions7(); odstepKreska();" class="btnbinary" type="submit" id="submitButton2">Przerwa</button></span>
            
          </div>
          <button max-height="50" max-width="50" class="button-hide" @click="closeNav"><i class="arrow-left"></i></button>
          <button max-height="50" max-width="50" class="button-open" @click="openNav"><i class="arrow-right"></i></button>
        </v-col>
      </div>
    </div>
</template>

<style>
.sidebar-binary{
  margin-top: 100px;
  height: 550px;
  max-width: 300px;
  width: 300px;
  background-color: #ff8400;
  justify-content: center;
  text-align: center;
  position: fixed;
  transition-duration: 0.8s;
  border-radius: 10px;
}
.sidebar-binary-nav{
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
  background-color: rgb(58, 58, 58);
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
.btnbinary, .btnbinary2{
  width: 100%;
  border-radius: 10px;
  height: 90px;
  margin-top: 30px;
  background-color: #c2c2c2;
  text-align: center;
  display: block;
}

.btnbinary:hover{
  background-color: #ff6600;
}

</style>