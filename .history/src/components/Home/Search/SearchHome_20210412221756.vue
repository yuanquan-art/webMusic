<template>
    <div>
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first" v-for="(item,index) in searchTypeList" :key="index">用户管理</el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
           // 默认激活tabs
           activeName: 'first',
           // 搜索类型列表
           searchTypeList: []
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
        const {data:res} = await this.$axios.get('/api/search/type')
        this.searchTypeList = res;
     }
    }
}
</script>


<style lang="less" scoped>

</style>