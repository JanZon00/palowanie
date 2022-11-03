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
      myInterval : null,
      rangeArray : [0, 0],
      num : 0,
      x : 0,
      numbers : new Set(),
      a : 0,
      b : 0,
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
    },

    rangeFunction: function(){
        var c = this.getRandomInt(this.a, this.b);
        //this.x = document.getElementById("displayNumber");
        this.x = c;

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

        if(this.b <= 99 && this.b >= 10){
          if(this.x < 100 && this.x >= 10){
            document.getElementById("displayNumber").innerHTML = this.x;
          }
          else if(this.x < 10 && this.x >= 0){
            this.num = "0" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
        }
        else if(this.b <= 9){
          document.getElementById("displayNumber").innerHTML = this.x;
        }
        else{
          if(this.x < 100 && this.x >= 10){
            this.num = "0" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
          else if(this.x < 10 && this.x >= 0){
            this.num = "00" + this.x;
            document.getElementById("displayNumber").innerHTML = this.num;
          }
          else{
            document.getElementById("displayNumber").innerHTML = this.x;
          }
        }
    },

    getRandomItem: function(set) {
      let items = Array.from(set);
      return items[Math.floor(Math.random() * items.length)];
    },

    rangeFunction2: function() {	
      if(this.numbers.size != 0){
        var r = this.getRandomItem(this.numbers);
        if(r < 100 && r >= 10){
          this.num = "0" + r;
          document.getElementById("displayNumber").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayNumber").innerHTML = this.num;
        }
        else{
          document.getElementById("displayNumber").innerHTML = r;
        }
      }
    },

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunction, v);
    },
    showOptions: function(){
      var x = document.getElementById("Options-numbers");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions2: function() {
      var x = document.getElementById("Options2-numbers");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
}
  }
}
</script>

<template>
    <div id ="vuebuttons">
 
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-numbers-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="rangeFunction2()" style="width:33%">Pula do powtórki</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options-numbers">	
                <input type="text-numbers" id="lrange" name="zakresl" placeholder="Zakres lewy (np: AB)">
                <input type="text-numbers" id="rrange" name="zakresr" placeholder="Zakres Prawy (np: WU)">
                <button @click="setRangeFunction(); rangeFunction();" class="submit-button-numbers" type="submit" id="submitButton" style="background-color:#366799">Potwierdź</button> 
            </div>
		
            <div id="Options2-numbers">
                <input type="text2-numbers" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-numbers" type="submit-numbers" id="submitButton" style="background-color:#366799">Potwierdź</button>
            </div>
        </v-container>
    </div>
</template>

<style>
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
.btn-numbers-group button {
  background-color: #366799;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
}
@media screen and (max-width: 800px){
    .btn-numbers-group{ font-size:1.8vw; }
}

.btn-numbers-group:after {
  content: "";
  clear: both;
  display: table;
}


.btn-numbers-group button:hover {
  background-color: #1d4c7a;
}
#Options-numbers{
  float: left;
  width: 33%;
  height: 150px;
  text-align: center;
  visibility:  hidden;
}
#Options2-numbers {
  float: left;
  width: 33%;
  height: 150px;
  text-align: center;
  visibility:  hidden;
}

input[type=text-numbers], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #366799;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text2-numbers], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #366799;
  border-radius: 4px;
  box-sizing: border-box;
}
.submit-button-numbers{
  width: 100%;
  background-color: #366799;
  color: white;
  padding: 14px 20px;
  margin: 0px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
@media screen and (max-width: 800px){
    .submit-button-numbers{ font-size:2.2vw; }
}

input[type=submit-numbers]:hover {
  background-color: #364e79;
}
</style>