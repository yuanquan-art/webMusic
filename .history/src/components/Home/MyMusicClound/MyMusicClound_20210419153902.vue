<template>
    <div>
       <p> 我的音乐云盘</p>

    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        this.getCloudPan();
    },
    methods: {
        //获取云盘
        async getCloudPan(){
            const {data:res} = this.$axios.get('http://localhost:3000/user/cloud');
            console.log(res)
        }
    }
}
</script>

<style lang="less" scoped>

</style>