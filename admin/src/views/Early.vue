<template>
    <div>
        <div>
            <h2 style="float: left;margin-top: 0">更早记录</h2>
        <el-table
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;"
                row-key="id"
                border
                default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    sortable
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="介绍">
            </el-table-column>
        </el-table>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    name: '方志远',
                    address: '这是一个介绍'
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: '李雨峻',
                    address: '这是一个介绍 '
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '徐旭',
                    address: '这是一个介绍',
                    children: [{
                        id: 31,
                        date: '2016-05-01',
                        name: 'XX',
                        address: '这是一个介绍'
                    }, {
                        id: 32,
                        date: '2016-05-01',
                        name: 'XX',
                        address: '这是一个介绍'
                    }]
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: 'XX',
                    address: '这是一个介绍'
                }],
                tableData1: [{
                    id: 1,
                    date: '2016-05-02',
                    name: 'XX',
                    address: '上这是一个介绍'
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: 'XX',
                    address: '这是一个介绍'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: 'FF',
                    address: '这是一个介绍',
                    hasChildren: true
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: 'AA',
                    address: '这是一个介绍'
                }]
            }
        },
        methods: {
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小',
                            address: ' 这是一个介绍'
                        }, {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '长水机场'
                        }
                    ])
                }, 1000)
            }
        },
    }
</script>