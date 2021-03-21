<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div id="ceshi"></div>
    <HelloWorld msg="wwwWelcome to Your Vue.js App"/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
 .home{
   background-color: rgb(241, 35, 35);
   .ceshi{
     width: 100px;
     height: 100px;
     background-color: rgb(82, 233, 44);
   }
 }
</style>