<template>
    <div>
        个人主页
    </div>
</template>

<script>
export default {
    data(){},
    created(){
        console.log(this.$route.query.id)
    }
}
</script>

<style lang="less" scoped>

</style>