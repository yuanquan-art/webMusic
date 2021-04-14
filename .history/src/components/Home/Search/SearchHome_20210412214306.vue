<template>
    <div>
        搜索歌单
        {{ stateValue }}
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
           // 从Home组件获取的stateValue
        }
    },
    created(){
        console.log(this.stateValue);
     //获取Home组件传的state_value参数
     this.getStateValue();
    },
    computed:{
        // 从Home组件获取的stateValue
        stateValue(){
            return this.$store._state.data.songsName;
        }
    },
    watch:{
        stateValue:function(val){
            console.log(val);
            this.getStateValue(val);
        }
    },
    methods: {
     async getStateValue(val){
          const { data: res } = await this.$axios.post("http://localhost:3000/cloudsearch?keywords="+this.stateValue);
          console.log(res);
      }
    }
}
</script>


<style lang="less" scoped>

</style>