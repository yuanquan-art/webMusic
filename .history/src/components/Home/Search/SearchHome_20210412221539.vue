<template>
    <div>
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
           // 默认激活tabs
           activeName: 'first'
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
        console.log(res)
     }
    }
}
</script>


<style lang="less" scoped>

</style>