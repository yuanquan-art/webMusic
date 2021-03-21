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
.nav{
  width: 100px;
  height: 100px;
  background-color: rgb(35, 235, 208);
}
</style>