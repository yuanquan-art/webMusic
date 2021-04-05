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
 create(){},
 methods:{
     // 获取精品歌单
     async getJingpinMusicList(){
         const {data:res} = await this.$axios.get('');
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
