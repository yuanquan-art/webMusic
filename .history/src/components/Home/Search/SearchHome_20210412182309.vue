<template>
    <div>
        搜索歌单
        {{ stateValue }}
    </div>
</template>

,<script>
export default {
    data(){
        return {
           // 从Home组件获取的stateValue
           stateValue: ''
        }
    },
    created(){
     //获取Home组件传的state_value参数
     this.getStateValue();
    },
    watch:{
        stateValue(val, oldVal){//普通的watch监听
         console.log("stateValue: "+val, oldVal);
        },
    },
    methods: {
     async getStateValue(){
          const { data: res } = await this.$axios.post("http://localhost:3000/cloudsearch?keywords="+this.$route.query.stateValue);
          console.log(res)
          this.stateValue =  this.$route.query.stateValue;
          console.log(this.$route.query.stateValue)
      }
    }
}
</script>


<style lang="less" scoped>

</style>