<template>
    <div>
        <h2 style="float: left;margin-top: 0">系统日志</h2>
        <el-button
                type="primary"
                icon="el-icon-plus"
                size="mini"
                style="float:right;margin-top: 0"
                @click="$router.push(`/Xtrzxj`)"></el-button>
        <el-table
                :data="items_1.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="标题"
                    prop="topic">
            </el-table-column>
            <el-table-column
                    label="姓名"
                    prop="name">
            </el-table-column >
<!--            <el-table-column-->
<!--                    label="详情"-->
<!--                    prop="details">-->
<!--            </el-table-column>-->

<!--            <el-table-column>-->
<!--                &lt;!&ndash;定义跳转地址&ndash;&gt;-->
<!--                <template slot-scope="scope">-->
<!--                    <el-button-->
<!--                            type="primary"-->
<!--                            icon="el-icon-tickets"-->
<!--                            size="mini"-->
<!--                            @click="$router.push(`/Xtrzxj/edit/${scope.row._id}`)"></el-button>-->

<!--                </template>-->
<!--            </el-table-column>-->

<el-table-column fixed="right" width="180">
                <!--定义跳转地址-->
                <template slot-scope="scope" >
                    <el-button
                            size="mini"
                            @click="$router.push(`/Xtrzxj/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items_1: [],
                search: ''
            };
        },

        methods: {

            async fetch(){
                const  res = await this.$http.get('rest/Xtrzxj')
                this.items_1 = res.data
            },
            async remove(row){
                this.$confirm(`是否确定要删除该记录"${row.name}"?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                    .then(async () => {
                        // 请求要删除
                        const res =await this.$http.delete(`rest/Xtrzxj/${row._id}`)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });

                        //删除成功创新获取数据
                        this.fetch()
                    })

            }

        },

        created(){
            this.fetch()
        },
    }
</script>