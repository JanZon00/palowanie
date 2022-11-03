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
    showOptions: function(){
      var x = document.getElementById("Options-letters");
      if (x.style.visibility === "visible") {
        x.style.visibility = "hidden";
      } else {
        x.style.visibility = "visible";
      }
    },
    showOptions2: function() {
      var x = document.getElementById("Options2-letters");
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
          <div class="btn-letters-group" style="width:100%">  
              <button @click="showOptions()" style="width:33%">Wybierz zakres</button>
              <button @click="showOptions2()" style="width:33%">Auto-wyświetlanie</button>
              <button @click="rangeFunctionl2l()" style="width:33%">Pula do powtórki</button>
          </div>
        </v-container>
        <v-container style="padding-top: 0px;">  
            <div id="Options-letters">	
                <input type="text-letters" id="lrange" name="zakresl" placeholder="Zakres lewy (np: AB)">
                <input type="text-letters" id="rrange" name="zakresr" placeholder="Zakres Prawy (np: WU)">
                <button @click="setRangeFunctionl(); rangeFunctionl();" class="submit-button-letters" type="submit" id="submitButton" style="background-color:#126b06">Potwierdź</button> 
            </div>
		
            <div id="Options2-letters">
                <input type="text2-letters" id="interwał" name="interwał"  placeholder="Interwał (np: 1000 -> 1 sekunda)">
                <button @click="autoPlay()" class="submit-button-letters" type="submit-letters" id="submitButton" style="background-color:#126b06">Potwierdź</button>
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
.btn-letters-group button {
  background-color: #168707;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
}
@media screen and (max-width: 800px){
    .btn-letters-group{ font-size:1.8vw; }
}

.btn-letters-group:after {
  content: "";
  clear: both;
  display: table;
}


.btn-letters-group button:hover {
  background-color: #126b06;
}
#Options-letters {
  float: left;
  width: 33%;
  height: 150px;
  text-align: center;
  visibility:  hidden;
}
#Options2-letters {
  float: left;
  width: 33%;
  height: 150px;
  text-align: center;
  visibility:  hidden;
}

input[type=text-letters], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #126b06;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text2-letters], select {
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #126b06;
  border-radius: 4px;
  box-sizing: border-box;
}
.submit-button-letters{
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
    .submit-button-letters{ font-size:2.2vw; }
}

input[type=submit-letters]:hover {
  background-color: #364e79;
}
</style>