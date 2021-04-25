<template>
    <div>
       <p> 我的音乐云盘</p>
       <p>
           <span>云盘容量</span>
            <el-slider v-model="value1"></el-slider>
       </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
          value1:0
        }
    },
    created(){
        this.getCloudPan();
    },
    methods: {
        //获取云盘
        async getCloudPan(){
            const {data:res} =await this.$axios.get('http://localhost:3000/user/cloud');
            console.log(res)
            console.log(11111)
        }
    }
}
</script>

<style lang="less" scoped>

</style>