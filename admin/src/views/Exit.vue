<template>
<!--    <el-button type="text" @click="$router.push(`/chart1`)">点击打开 Message Box</el-button>-->
</template>

<script>
    export default {

        created(){
            this.exit()
        },
        methods: {
            exit() {
                this.$confirm('是否退出', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$router.push('/login')
                    this.$message({
                        type: 'success',
                        message: '成功退出!'
                    });
                }).catch(() => {

                });
            }
        }
    }
</script>
