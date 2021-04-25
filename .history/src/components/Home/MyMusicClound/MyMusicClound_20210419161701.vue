<template>
  <div>
    <p>我的音乐云盘</p>
    <div class="block">
      <span class="demonstration">云盘容量</span>
      <el-slider v-model="value"></el-slider>
      <span>{{(yunpan.size/(1024*1024*10*10))}}G/{{parseInt(yunpan.maxSize/(1024*1024*10*10*10))}}G</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 50,
      // 云盘
      yunpan: {},
      value2: 0
    };
  },
  created() {
    this.getCloudPan();
  },
  methods: {
    //获取云盘
    async getCloudPan() {
      const { data: res } = await this.$axios.get(
        "http://localhost:3000/user/cloud"
      );
      console.log(res);
      this.yunpan = res;
      this.value = parseInt(
        (parseInt(res.size / 1024) / parseInt(res.maxSize / 1024)) * 10000
      );
      console.log(this.clearNoNum(this.yunpan.size/(1024*1024*10*10)))
    },

 clearNoNum(obj) {
        obj.value = obj.value.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符  
        obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
        obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3');//只能输入两个小数  
        if (obj.value.indexOf(".") < 0 && obj.value != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
            obj.value = parseFloat(obj.value);
        }
   },
  }
};
</script>

<style lang="less" scoped>
.el-slider{
    display: inline-block;
    width: 200px;
}
</style>
