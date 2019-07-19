<template>
    <div>
        <h2 style="float: left;margin-top: 0">今天记录</h2>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="日期">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="名字">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="描述">
                        <span>{{ props.row.desc }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="日期"
                prop="id">
        </el-table-column>
        <el-table-column
                label="名字"
                prop="name">
        </el-table-column>
        <el-table-column
                label="描述"
                prop="desc">
        </el-table-column>
    </el-table>
    </div>
</template>

<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: '2019-6-27',
                    name: '方志远',
                    desc: '这是一个描述',

                }, {
                    id: '2019-6-27',
                    name: '徐旭',
                    desc: '这是一个描述',
                }, {
                    id: '2019-6-27',
                    name: '李雨峻',
                    desc: '这是一个描述',
                }, {
                    id: '2019-6-27',
                    name: '吴顺',
                    desc: '这是一个描述',
                }]
            }
        }
    }
</script>