<template>
  <div>
    <div>
      <span class="titleL">LOOK直播</span>
      <span class="miniT">在这里，看见音乐</span>
    </div>
    <!-- 直播div -->
    <div class="itemP">
      <div v-for="(item, index) in ZhiBoArray" :key="index" class="ZhiboItem">
        <img :src="item.urlPic" alt="" />
        <span class="title">{{ item.title }}</span>
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //直播
      ZhiBoArray: [],
    };
  },
  created() {
    this.getZhiBoInfo();
  },
  methods: {
    // 获取直播信息
    async getZhiBoInfo() {
      const { data: res } = await this.$axios.get("/api/zhibo");
      console.log(res);
      this.ZhiBoArray = res;
    },
  },
};
</script>

<style lang="less" scoped>
.titleL {
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
  margin-left: 20px;
}
.miniT {
  font-size: 12px;
}
.itemP {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  .ZhiboItem {
    margin-right: 20px;
    width: 250px;
    height: 300px;
    margin-bottom: 20px;
    position: relative;
    img {
      width: 240px;
      height: 240px;
      border-radius: 5px;
      z-index: -1;
    }
    .title{
        margin-top: 10px;
    }
    .name{
        position: absolute;
        left: 20px;
        height: 200px;
    }
  }
}
</style>
