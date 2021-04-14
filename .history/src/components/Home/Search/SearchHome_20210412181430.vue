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
    watch:{
        a(val, oldVal){//普通的watch监听
         console.log("a: "+val, oldVal);
        },
    },
    methods: {
     async getStateValue(){
          const { data: res } = await this.$axios.post("http://localhost:3000/cloudsearch?keywords="+this.$route.query.stateValue);
          console.log(res)
          console.log(this.$route.query.stateValue)
      }
    }
}
</script>


<style lang="less" scoped>

</style>