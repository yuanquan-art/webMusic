<template>
    <div>
       <div class="title">
           <span class="titleL">LOOK直播</span>
           <span class="miniT">在这里，看见音乐</span>
       </div>
       <!-- 直播div -->
       <div>
           <div>1111</div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        this.getZhiBoInfo();
    },
    methods: {
        // 获取直播信息
        async getZhiBoInfo(){
          const {data:res} = await this.$axios.get('/api/zhibo');
          console.log(res)
        }
    }
}
</script>

<style lang="less" scoped>
.titleL{
    font-size: 20px;
    font-weight: 700;
    margin-right: 20px;
    margin-left: 20px;
}
.miniT{
    font-size: 12px;
}
</style>