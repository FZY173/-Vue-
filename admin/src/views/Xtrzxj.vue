<template>
            <div>
                <h1>{{id ? '编辑' : '新增'}}系统日志</h1>
                <el-form :model="model"  ref="form" label-width="90px" @submit.native.prevent="save" >
                    <el-form-item label="标题" >
                        <el-input v-model="model.topic"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" >
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="详情">
                        <vue-editor v-model="model.details"></vue-editor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" native-type="submit">保存</el-button>
                        <el-button  @click="$router.push(`/xtrz`)">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </template>

        <style>
        </style>

        <script>
            import { VueEditor } from "vue2-editor";

            export default {
                components: {
                    VueEditor
                },
                props: {
                    id: {}
                },
                data () {
                    return {
                        model:{},

                    };
                },
                methods: {
                    async save() {
                        //异步换成类似同步,新建和修改
                        let res
                        if(this.id){
                            res = await this.$http.put(`/rest/xtrzxj/${this.id}`,this.model)
                        }else{
                            res = await this.$http.post('rest/xtrzxj', this.model)
                        }
                        this.$router.push('/xtrz')
                        this.$message({
                            type: 'success',
                            message: '保存成功'
                        })
                    },

                    async fetch() {
                        const res = await this.$http.get(`rest/xtrzxj/${this.id}`)
                        this.model = res.data

                    }
                },

                //进行判断，有id才执行
                created(){
                    this.id && this.fetch()
                }

            }


</script>

