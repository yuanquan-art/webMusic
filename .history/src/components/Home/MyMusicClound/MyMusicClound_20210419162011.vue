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
        obj = obj.replace(/[^\d.]/g, "");  //清除“数字”和“.”以外的字符  
        obj = obj.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的  
        obj = obj.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        obj = obj.replace(/^(\-)*(\d+)\.(\d).*$/, '$1$2.$3');//只能输入两个小数  
        if (obj.indexOf(".") < 0 && obj != "") {//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
            obj = parseFloat(obj);
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
