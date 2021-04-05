<template>
  <div>
    <div class="diantaiParent">
       <!-- 轮播图 -->
        <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in bannerlist" :key="item.encodeId">
            <img :src="item.imageUrl + '?param=540y190'" />
          </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 电台轮播图列表
      diantaBannerList: [],
      bannerlist: []
    }
  },
  created(){
    this.getDiantaiLunbotuList();
  },
  methods: {
    // 获取电台轮播图列表
    async getDiantaiLunbotuList(){
        const {data:res} = await this.$axios.get('/dj/banner');
        console.log(res)
        this.diantaBannerList = res.data;
    },
      //获取轮播图
    async getBanner() {
      const { data: res } = await this.$axios.get("/banner?type=0");
      this.bannerlist = res.banners;
    },
  }
}
</script>

<style lang="less" scoped>
.diantaiParent {

}
</style>
