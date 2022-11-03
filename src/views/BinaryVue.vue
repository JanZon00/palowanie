<template>
  <v-container fluid class="pa-0 ma-0" style="background-color:#c2c2c2">
      <v-row class="text-center pa-0 ma-0">
        <router-link to="/" class="pa-0 ma-0"><div class="arrowback"></div></router-link>
        <v-col cols="3" class="pa-0 ma-0">
          <MyNavbarBinary></MyNavbarBinary>  
        </v-col>
        <v-col cols="12" class="pa-0 ma-0">
          <div class="site">
            <div id="displayBinary"></div>
          </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import MyNavbarBinary from '../components/MyNavbarBinary.vue';

export default defineComponent({
  name: 'BinaryVue',

  data() {
  },
  components: {
    MyNavbarBinary,
  },

  methods: {
  }
});

</script>
<style>
.arrowback{
    position: absolute;
    background-size: cover;
    background-position: 50% 50%;
    background-image: url("../views/assets/arrowback.png");
    height: 60px;
    width: 60px;
    top:30px;
    left: 30px;
}
.arrowback:hover{
  transform: scale(1.12);
  transition: 0.4s;
}

#displayBinary {
  width: 260px;
  height: 100px;
  background-color: #ff8400;
  border-radius: 10px;
  line-height: 38px;
  font-size:44px;
  color:white;
}
.site{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>