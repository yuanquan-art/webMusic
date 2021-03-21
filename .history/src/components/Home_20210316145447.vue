<template>
  <div class="home">
    <div class="nav"></div>
    <!-- <HelloWorld msg="wwwWelcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="less" scoped>
html,
body {
    margin: 0px !important;
    padding: 0px !important;
}
.home{
   .nav{
         width: 100%;
         height: 100px;
         background-color: rgb(35, 235, 208);
      }
}
    
</style>