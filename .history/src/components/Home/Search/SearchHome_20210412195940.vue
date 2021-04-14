<template>
    <div>
        搜索歌单
        {{ stateValue }}
    </div>
</template>

,<script>
export default {
    name:'Search',
    data(){
        return {
           // 从Home组件获取的stateValue
           stateValue: ''
        }
    },
    mounted(){
     //获取Home组件传的state_value参数
     this.getStateValue();
    },
    methods: {
      getStateValue(){
          
      }
    }
}
</script>


<style lang="less" scoped>

</style>