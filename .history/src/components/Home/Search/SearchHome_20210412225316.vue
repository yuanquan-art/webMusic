<template>
    <div>
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane :label="item.type" :name="item.id" v-for="(item,index) in searchTypeList" :key="index">{{ item.id}}</el-tab-pane>
  </el-tabs>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
           // 默认激活tabs
           activeName: 1,
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
     async getStateValue(val,type){
          const { data: res } = await this.$axios.post("http://localhost:3000/cloudsearch?keywords="+(val ? val : this.stateValue));
          
      },
     // 获取搜索歌曲类型
     async getSearchType(){
        const {data:res} = await this.$axios.get('/api/search/type')
        this.searchTypeList = res;
     },
     handleClick(){
         this.getStateValue("",this.activeName);
     }
    }
}
</script>


<style lang="less" scoped>

</style>