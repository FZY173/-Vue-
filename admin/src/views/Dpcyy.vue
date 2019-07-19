<template>
    <div>
        <h2 style="float: left;margin-top: 0">电瓶车预约</h2>
        <el-button
                type="primary"
                icon="el-icon-plus"
                size="mini"
                style="float:right;margin-top: 0"
                @click="$router.push(`/xjyy`)"></el-button>
        <el-table
                :data="items.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
            <el-table-column
                    label="编号"
                    prop="number">
            </el-table-column>
            <el-table-column
                    label="预约时间"
                    prop="date">
            </el-table-column>
            <el-table-column
                    label="姓名"
                    prop="name">
            </el-table-column>
            <el-table-column>
                <template slot="header" slot-scope="scope">
                    材料
                </template>

                <!--定义跳转地址-->
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            icon="el-icon-tickets"
                            size="mini"
                            @click="$router.push(`/xjyy/edit/${scope.row._id}`)"></el-button>

                </template>
            </el-table-column>


             <el-table-column
                    align="right">
                <template slot="header" slot-scope="scope" >


                </template>


                <!--定义跳转地址-->
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="$router.push(`/xjyy/edit/${scope.row._id}`)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row>
            <el-col :sapn="24">
                <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="paginations.page_index"
                        :page-sizes="paginations.page_sizes"
                        :page-size="paginations.page_size"
                        :layout="paginations.layout"
                        :total="paginations.total">
                </el-pagination>
              </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    //import ElTableHeader from "element-ui/packages/table/src/table-header";
    export default {
     //   components: {ElTableHeader},
        data() {
            return {
                paginations:{
                    page_index:1,
                    total:0,
                    page_size:5,
                    page_sizes:[5,10,15,20],
                    layout:'total,sizes,prev,pager,next,jumper'
                },
                items: [],
                allitems:[],
                search: ''
            };
        },

        methods: {

            async fetch(){
                const  res = await this.$http.get('rest/xjyy')
                this.allitems = res.data
                this.setPaginations();
            },

            setPaginations(){
              //分页属性
              this.paginations.total = this.allitems.length;
              this.paginations.page_index = 1;
              this.paginations.page_size = 5;
              //fye
                this.items = this.allitems.filter((item,index) => {
                    return index < this.paginations.page_size;
                })
            },

            handleSizeChange(page_size){
                this.paginations.page_index =1;
                this.paginations.page_size = page_size;
                this.items = this.allitems.filter((item,index) => {
                    return index < page_size;
                });
            },

            handleCurrentChange(page){
            //获取当前页
                let index = this.paginations.page_size *(page-1);
                //数据的总数
                let nums  = this.paginations.page_size * page;
                //容器
                let tables = [];
                for(let i =index; i < nums; i++){
                    if (this.allitems[i]){
                        tables.push(this.allitems[i]);
                    }
                    this.items = tables;
                }
            },

            async remove(row){
                this.$confirm(`是否确定要删除该记录"${row.name}"?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                    .then(async () => {
                        // 请求要删除
                        const res =await this.$http.delete(`rest/xjyy/${row._id}`)
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

<style>
    .pagination{
        text-align: right;
    }
    </style>