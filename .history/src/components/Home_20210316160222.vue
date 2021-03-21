<template>
  <div class="home">
    <div class="nav"></div>
    <!-- <HelloWorld msg="wwwWelcome to Your Vue.js App"/> -->

    <a-cascader v-model:value="value" :options="options" placeholder="Please select" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { defineComponent, ref } from 'vue';

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="less" scoped>
.home{
   .nav{
         width: 100%;
         height: 100px;
         background-color: hsl(182, 82%, 59%);
      }
}
    
</style>