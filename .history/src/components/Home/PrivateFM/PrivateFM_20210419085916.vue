<template>
    <div>
        <div class="privateParent">
            <div class="musicInfo">11111
                 <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        this.getPersonalFM();
    },
    methods: {
        // 获取私人FM
        async getPersonalFM(){
         const {data:res} = await this.$axios.get('http://localhost:3000/personal_fm');
         console.log(res)      
      }
    }
}
</script>

<style lang="less" scoped>
.privateParent{
    width: 800px;
    margin: 0 auto;
    background-color: pink;
    .musicInfo{
        margin-top: 20px;
    }
}
</style>