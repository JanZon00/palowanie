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
      lettersArray : ["AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AW", "BA", "BC", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BK", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BW", "CA", "CB", "CD", "CE", "CF", "CG", "CH", "CI", "CJ", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CS", "CT", "CU", "CW", "DA", "DB", "DC", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DL", "DM", "DN", "DO", "DP", "DQ", "DR", "DS", "DT", "DU", "DW", "EA", "EB", "ED", "EC", "EF", "EG", "EH", "EI", "EJ", "EK", "EL", "EM", "EN", "EO", "EP", "EQ", "ER", "ES", "ET", "EU", "EW", "FA", "FB", "FC", "FD", "FE", "FG", "FH", "FI", "FJ", "FK", "FL", "FM", "FN", "FO", "FP", "FQ", "FR", "FS", "FT", "FU", "FW", "GA", "GB", "GC", "GD", "GE", "GF", "GH", "GI", "GJ", "GK", "GL", "GM", "GN", "GO", "GP", "GQ", "GP", "GR", "GA", "GT", "GU", "GW", "HA", "HB", "HC", "HD", "HE", "HF", "HG", "HI", "HJ", "HK", "HL", "HM", "HN", "HO", "HP", "HQ", "HR", "HS", "HT", "HU", "HW", "IA", "IB", "IC", "ID", "IE", "IF", "IG", "IH", "IJ", "IK", "IL", "IM", "IN", "IO", "IP", "IQ", "IR", "IS", "IT", "IU", "IW", "JA", "JB", "JC", "JD", "JE", "JF", "JG", "JH", "JI", "JK", "JL", "JM", "JM", "JO", "JP", "JQ", "JR", "JS", "JT", "JU", "JW", "KA", "KB", "KC", "KD", "KE", "KF", "KG", "KH", "KI", "KJ", "KL", "KM", "KN", "KO", "KP", "KQ", "KR", "KS", "KT", "KU", "KW", "LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LI", "LK", "LM", "LN", "LO", "LP", "LQ", "LR", "LS", "LT", "LU", "LW", "MA", "MB", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MJ", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MW", "NA", "NB", "NC", "ND", "NE", "NF", "NG", "NH", "NI", "NJ", "NK", "NL", "NM", "NO", "NP", "NQ", "NR", "NS", "NT", "NU", "NW", "OA", "OB", "OC", "OD", "OE", "OF", "OG", "OH", "OI", "OJ", "OK", "OL", "OM", "ON", "OP", "OQ", "OR", "OS", "OT", "OU", "OW", "PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI", "PJ", "PK", "PL", "PM", "PN", "PO", "PQ", "PR", "PS", "PT", "PU", "PW", "QA", "QB", "QC", "QD", "QE", "QF", "QG", "QH", "QI", "QJ", "QK", "QL", "QM", "QN", "QO", "QP", "QR", "QS", "QT", "QU", "QW", "RA", "RB", "RC", "RD", "RE", "RF", "RG", "RH", "RI", "RJ", "RK", "RL", "RM", "RN", "RO", "RP", "RS", "RT", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SP", "SQ", "SR", "ST", "SU", "SW", "TA", "TB", "TC", "TD", "TE", "TF", "TG", "TH", "TI", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TQ", "TR", "TS", "TU", "TW", "UA", "UB", "UC", "UD", "UE", "UF", "UG", "UH", "UI", "UJ", "UK", "UL", "UM", "UN", "UO", "UP", "UQ", "UR", "US", "UT", "UW", "WA", "WB", "WC", "WD", "WE", "WF", "WG", "WH", "WI", "WJ", "WK", "WL", "WM", "WN", "WO", "WP", "WQ", "WR", "WS", "WT", "WU"],

      num : 0,
      x : 0,
      numbers : new Set(),
      a : 'AB',
      b : 'WU',
    }
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowRight') {
        this.rangeFunctionl()
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp') {
        this.rangeFunctionl2l()
      }
    });
  },
  methods: {
    getRandomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    setRangeFunctionl: function(){
        this.a = document.getElementById("lrange").value;
        console.log(this.a);
        this.b = document.getElementById("rrange").value;
        console.log(this.b);
    },

    rangeFunctionl: function() {	

        var indexa = this.lettersArray.indexOf(this.a);
        var indexb = this.lettersArray.indexOf(this.b);
        var c = this.getRandomInt(indexa, indexb);
        this.x = document.getElementById("displayletter");
        this.x.style.cssText  = "font-size:44px;color:white;"
        this.x = this.lettersArray[c];
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
        document.getElementById("displayletter").innerHTML = this.x;
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
          document.getElementById("displayletter").innerHTML = this.num;
        }
        else if(r < 10 && r >= 0){
          this.num = "00" + r;
          document.getElementById("displayletter").innerHTML = this.num;
        }
        else{
          document.getElementById("displayletter").innerHTML = r;
        }
      }
    },

    autoPlay: function() {
      var v = document.getElementById("interwał").value;
      console.log(v);	
      this.myInterval = setInterval(this.rangeFunctionl, v);
    },

    buttons(){
      const buttonopen = document.querySelector(".button-open")
      buttonopen.style.display = "block"
      
      const buttonhide = document.querySelector(".button-hide")
      buttonhide.style.display = "none"
    },

    closeNav: function(){
      const sidebarl =  document.querySelector(".sidebar-letters")
      sidebarl.style.width = "0px"
      sidebarl.style.height = "550px"

      this.isclicked1 = false;
      this.isclicked2 = false;
      this.isclicked3 = false;
      this.isclicked4 = false;
      this.isclicked5 = false;
      this.isclicked6 = false;

      const arrowleft = document.querySelector(".arrow-left")
      arrowleft.style.rotate = "180deg"

      const arrowright = document.querySelector(".arrow-right")
      arrowright.style.rotate = "0deg"

      const arrow = document.querySelector(".arrow-left")
      arrow.style.left = "55%"

      setTimeout(() => {console.log(this.buttons())}, 1000)

      const sidebarlnav = document.querySelectorAll(".sidebar-letters-nav")
      for (let i = 0; i < sidebarlnav.length; i++) {
        sidebarlnav[i].style.display = "none";
      }
    },

    openNav: function(){
      const sidebarl = document.querySelector(".sidebar-letters")
      sidebarl.style.width = "300px"
      sidebarl.style.height = "550px"

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

      const sidebarlnav = document.querySelectorAll(".sidebar-letters-nav")
      for (let i = 0; i < sidebarlnav.length; i++) {
        sidebarlnav[i].style.display = "block";
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
        this.isclicked1 = !this.isclicked1
        this.isclicked2 = !this.isclicked2
        this.isclicked3 = !this.isclicked3
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
  }
}
</script>

<template>
    <div id ="vuebuttons">
      <div class="sidebar-letters">
        <v-col>
          <div class="btn-group" style="width:100%">  
            <span v-if="isclicked1"><button @click="showOptions1" class="btnletters" id="btn1">Wybierz zakres</button></span>
            <span v-if="isclicked2"><button @click="showOptions2" class="btnletters" id="btn2">Auto-wyświetlanie</button></span>
            <span v-if="isclicked3"><button @click="rangeFunctionl2l()" class="btnletters" id="btn3">Pula do powtórki</button></span>
            <span v-if="isclicked4"><button @click="showOptions4" class="btnletters" id="btn4">Własna Lista</button></span>
            <span v-if="isclicked5"><input type="text" id="lrange" class="btnletters2" name="zakresl" placeholder="Zakres lewy (np: AB)"></span>
            <span v-if="isclicked5"><input type="text" id="rrange" class="btnletters2" name="zakresr" placeholder="Zakres prawy (np: WU)"></span>
            <span v-if="isclicked5"><button @click="showOptions5(); rangeFunctionl(); setRangeFunctionl();" class="btnletters" type="submit" id="submitButton">Potwierdź</button></span>
            <span v-if="isclicked6"><input type="text2" id="interwał" class="btnletters2" name="interwał" placeholder="Interwał (np: 1000 -> 1 sekunda)"></span>
            <span v-if="isclicked6"><button @click="autoPlay();showOptions6();" class="btnletters" type="submit" id="submitButton2">Potwierdź</button></span>
          </div>
          <button max-height="50" max-width="50" class="button-hide" @click="closeNav"><i class="arrow-left"></i></button>
          <button max-height="50" max-width="50" class="button-open" @click="openNav"><i class="arrow-right"></i></button>
        </v-col>
      </div>
    </div>
</template>

<style>
.sidebar-letters{
  margin-top: 100px;
  height: 550px;
  max-width: 300px;
  width: 300px;
  background-color: #168707;
  justify-content: center;
  text-align: center;
  position: fixed;
  transition-duration: 0.8s;
  border-radius: 10px;
}
.sidebar-letters-nav{
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
.btnletters:hover{
  background-color: #126b06;
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
.sidebarl-nav:hover{
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
.btnletters, .btnletters2{
  width: 100%;
  border-radius: 10px;
  height: 90px;
  margin-top: 30px;
  background-color: #c2c2c2;
  text-align: center;
  display: block;
}
</style>