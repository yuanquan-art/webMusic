<template>
    <div>
        <div class="dujiaSendParent">
            11111111
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    created(){
     console.log(this.$route.query.id)
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.dujiaSendParent{
    width: 800px;
    margin: 0 auto;
}
</style>