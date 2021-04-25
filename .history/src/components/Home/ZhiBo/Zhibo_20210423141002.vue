<template>
  <div>
    <div>
      <span class="titleL">LOOK直播</span>
      <span class="miniT">在这里，看见音乐</span>
    </div>
    <!-- 直播div -->
    <div class="itemP">
      <a :href="item.url+'?id='+item.id+'&position='+item.position" v-for="(item, index) in ZhiBoArray"
        :key="index">
          <div 
        class="ZhiboItem"
        @click="toZhibo(item.url,item.id,item.position)"
      >
        <img :src="item.urlPic" alt="" />
        <span class="title">{{ item.title }}</span>
        <span class="name">{{ item.name }}</span>
        <i class="iconfont iconbofang3"></i>
         </div>
         
      </a>
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
    // 去直播页面
    toZhibo(url,id,position) {
     this.$router.push({
    path: 'https://look.163.com/live',
    query: {
        id: id,
        position: position
    }
});
    }
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
    .title {
      margin-top: 10px;
    }
    .name {
      position: absolute;
      left: 8px;
      font-size: 12px;
      top: 218px;
      color: #fff;
    }
  }
}
a{
    text-decoration: none;
    color: #000;
}
.iconbofang3{
    position: absolute;
    top: 0;
    left: 0;
}
</style>
