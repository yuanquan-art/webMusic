<template>
    <div>
        私人FM
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
        this.getPersonalFM();
    },
    methods: {
        // 获取私人FM
        async getPersonalFM(){
         const {data:res} = await this.$axios.get('http://localhost:3000/personal_fm');
         console.log(res)      
      }
    }
}
</script>

<style lang="less" scoped>

</style>