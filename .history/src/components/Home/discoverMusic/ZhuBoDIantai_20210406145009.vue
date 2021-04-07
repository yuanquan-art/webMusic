<template>
  <div>
    <div class="diantaiParent">
       <!-- 轮播图 -->
        <!-- <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="(item,index) in diantaBannerList" :key="index">
            <img :src="item.pic + '?param=540y190'" />
          </el-carousel-item>
        </el-carousel> -->
       
       <!-- 轮播图 -->
        <el-carousel class="diantaiLunbo" :interval="4000" >
          <el-carousel-item v-for="(item,index) in diantaBannerList" :key="index">
            <img :src="item.pic +'?param=1080y400'" />
          `zzzsazsasz`
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
      diantaBannerList: [ ],
       //bannner
      bannerlist: [],
    }
  },
  created(){
    this.getDiantaiLunbotuList();

  },
  methods: {
    //获取电台轮播图列表
    async getDiantaiLunbotuList(){
        const {data:res} = await this.$axios.get('/dj/banner');
        this.diantaBannerList = res.data;
        console.log(this.diantaBannerList)
    }
  }
}
</script>

<style lang="less" scoped>
.diantaiLunbo{
   width: 1080px;
   left: 150px;
}
</style>
