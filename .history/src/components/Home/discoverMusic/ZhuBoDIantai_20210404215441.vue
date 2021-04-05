<template>
  <div>
    <div class="diantaiParent">
      <!-- <el-carousel :interval="4000" type="card" height="220px">
          <el-carousel-item v-for="item in bannerlist" :key="item.encodeId">
            <img :src="item.imageUrl + '?param=540y190'" />
          </el-carousel-item>
      </el-carousel> -->

      
      <div>
        <a href="#">
          <img src="../../../assets/images/jingpingedan.jpg" alt="" />
        </a>
        <!-- 热门歌单分类 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){},
  created(){},
  methods: {}
}
</script>

<style lang="less" scoped>
.diantaiParent {
  display: flex;
  justify-content: center;
  
}
</style>
