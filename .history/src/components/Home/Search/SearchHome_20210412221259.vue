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
     //获取Home组件传的state_value参数
     this.getStateValue();
     this.getSearchType();
    },
    computed:{
        // 从Home组件获取的stateValue
        stateValue(){
            return this.$store._state.data.songsName;
        }
    },
    watch:{
        stateValue:function(val){
            this.getStateValue(val);
        }
    },
    methods: {
     async getStateValue(val){
         console.log("111");
          const { data: res } = await this.$axios.post("http://localhost:3000/cloudsearch?keywords="+(val ? val : this.stateValue));
          
      },
     // 获取搜索歌曲类型
     async getSearchType(){
        const {data:res} = await this.$axios.get('/api/search/hot')
        console.log(res)
     }
    }
}
</script>


<style lang="less" scoped>

</style>