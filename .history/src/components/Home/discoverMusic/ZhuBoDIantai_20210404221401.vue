<template>
  <div>
    <div class="diantaiParent">
      <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in diantaBannerList" :key="item.targetId">
            <img :src="item.pic" />
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
      diantaBannerList: []
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
    }
  }
}
</script>

<style lang="less" scoped>
.diantaiParent {
 
  
}
</style>
