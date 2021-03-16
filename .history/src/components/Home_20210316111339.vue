<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="wwwWelcome to Your Vue.js App"/>
    <div id="ceshi"></div>
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
#id{
  width: 100px;
  height: 100px;
  background-color: rgb(11, 192, 5);
}
</style>