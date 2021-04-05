<template>
  <div>
     <div class="gedanParent">
       <a href="#">
         <img src="../../../assets/images/jingpingedan.jpg" alt="">
       </a>
     </div> 
  </div>  
</template>

<script>
export default {
 data(){

 },
 create(){
    this.getJingpinMusicList();
 },
 methods:{
     // 获取精品歌单
     async getJingpinMusicList(){
         const { data: res } = await this.$axios.get("/playlist/hot");
         console.log(res)
         console.log('1')
     }
 }    
}
</script>

<style lang="less" scoped>
.gedanParent{
  img{
    display: block;
    margin: 0 auto;
  }
}
</style>
