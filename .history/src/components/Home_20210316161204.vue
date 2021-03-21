<template>
  <div class="home">
    <div class="nav"></div>
    <!-- <HelloWorld msg="wwwWelcome to Your Vue.js App"/> -->

    <a-button type="primary">Primary</a-button>
  </div>
   

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import SmileOutlined from '@ant-design/buttons/';
  export default {
    components: {
      SmileOutlined,
    },
  };

// export default {
//   // name: 'Home',
//   // components: {
//   //   HelloWorld
//   // }
// }
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