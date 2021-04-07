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
        <el-carousel class="diantaiLunbo" :interval="400000" >
          <el-carousel-item v-for="(item,index) in bannerlist" :key="index">
            <img :src="item.imageUrl +'?param=1080y400'" />
          
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
    // this.getDiantaiLunbotuList();
    this.getBanner();

  },
  methods: {
    // 获取电台轮播图列表
    // async getDiantaiLunbotuList(){
    //     const {data:res} = await this.$axios.get('/dj/banner');
    //     this.diantaBannerList = res.data;
    //     console.log(this.diantaBannerList)
    // }
     //获取轮播图
    async getBanner() {
      const { data: res } = await this.$axios.get("/banner?type=0");
      this.bannerlist = res.banners;
      let i = 1;
      this.bannerlist.forEach(()=>{
        this.bannerlist[i-1].id = i++;
      })
      console.log(this.bannerlist);
    },
  }
}
</script>

<style lang="less" scoped>
.el-carousel__container{
   width: 1080px;
   left: 150px;
}
</style>
