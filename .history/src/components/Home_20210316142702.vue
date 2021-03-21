<template>
  <div class="home">
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

</style>