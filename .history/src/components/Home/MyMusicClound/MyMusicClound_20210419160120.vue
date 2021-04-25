<template>
  <div>
    <p>我的音乐云盘</p>
    <p>
      <span>云盘容量</span>
      <el-slider v-model="value1"></el-slider>
    </p>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
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
    },
  },
};
</script>

<style lang="less" scoped></style>
