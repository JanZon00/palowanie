<template>
  <Home />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Home from '../components/MyHome.vue';

export default defineComponent({
  name: 'MyHome',

  components: {
    Home,
  },
});
</script>
