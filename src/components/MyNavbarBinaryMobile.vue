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
        this.rangeFunctionb()
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp') {
        this.rangeFunction2b()
      }
    });
  },
  methods: {
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    setRangeFunctionb: function(){
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

    rangeFunctionb: function(){
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

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunctionb, v);
    },
    showOptions: function(){
      var x = document.getElementById("Options-binary");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions2: function() {
      var x = document.getElementById("Options2-binary");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions3: function() {
      var x = document.getElementById("Options3-binary");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
  }
}
</script>

<template>
    <div id ="vuebuttons">
 
        <v-container style="padding-top: 0px;padding-bottom: 1px">
          <div class="btn-binary-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="showOptions3()" style="width:33%">Wygląd</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options-binary">	
                <input type="text-binary" id="lrange" name="zakresl" placeholder="Liczba kolumn (np: 8)">
                <input type="text-binary" id="rrange" name="zakresr" placeholder="Liczba wierszy (np: 2)">
                <button @click="setRangeFunctionb(); rangeFunctionb();" class="submit-button-binary" type="submit" id="submitButton" style="background-color:#ff8400">Potwierdź</button> 
            </div>
		
            <div id="Options2-binary">
                <input type="text2-binary" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-binary" type="submit-binary" id="submitButton" style="background-color:#ff8400">Potwierdź</button>
            </div>

            <div id="Options3-binary">
                <button @click="odstepKreska()" class="submit-button-binary" type="submit-binary" id="submitButton2">Przerwa</button>
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
.btn-binary-group button {
  background-color: #ff8400;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
}
@media screen and (max-width: 800px){
    .btn-binary-group{ font-size:1.8vw; }
}

.btn-binary-group:after {
  content: "";
  clear: both;
  display: table;
}


.btn-binary-group button:hover {
  background-color: #ff6600;
}
#Options-binary, #Options2-binary, #Options3-binary{
  float: left;
  width: 33%;
  height: 150px;
  text-align: center;
}
#Options-binary {
  visibility:  hidden;
}
#Options2-binary {
  visibility:  hidden;
}
#Options3-binary {
  visibility:  hidden;
}
input[type=text-binary], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ff8400;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text2-binary], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ff8400;
  border-radius: 4px;
  box-sizing: border-box;
}
.submit-button-binary{
  width: 100%;
  background-color: #ff8400;
  color: white;
  padding: 14px 20px;
  margin: 0px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
@media screen and (max-width: 800px){
    .submit-button-binary{ font-size:2.2vw; }
}

input[type=submit-binary]:hover {
  background-color: #ff6600;
}
</style>