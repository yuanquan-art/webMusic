<template>
    <div>
        搜索歌单
        
    </div>
</template>

,<script>
export default {
    data(){
        return {
           
        }
    },
    created(){
     //获取Home组件传的state_value参数
     this.getStateValue();
    },
    methods: {
      getStateValue(){
          console.log(this.$route.query.)
      }
    }
}
</script>


<style lang="less" scoped>

</style>