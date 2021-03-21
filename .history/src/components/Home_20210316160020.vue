<template>
  <div class="home">
    <div class="nav"></div>
    <!-- <HelloWorld msg="wwwWelcome to Your Vue.js App"/> -->
    <template>
  <a-cascader v-model:value="value" :options="options" placeholder="Please select" />
</template>
<script>
import { defineComponent, ref } from 'vue';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    return {
      value: ref([]),
      options,
    };
  },
});
</script>
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
.home{
   .nav{
         width: 100%;
         height: 100px;
         background-color: hsl(182, 82%, 59%);
      }
}
    
</style>