<template>
    <div>
        搜索歌单
        {{ SearchResult }}
    </div>
</template>

,<script>
export default {
    name:'Search',
    data(){
        return {
           // 从Home组件获取的stateValue
           SearchResult: {}
        }
    },
    mounted(){
     //获取Home组件传的state_value参数
     this.getStateValue();
    },
    methods: {
      getStateValue(){
          // 取数据
          const SearchResult = localStorage.getItem("SearchResult");
          localStorage.removeItem('SearchResult');
          this.SearchResult = SearchResult;
      }
    }
}
</script>


<style lang="less" scoped>

</style>