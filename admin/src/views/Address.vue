<!--<template>-->
<!--    <div>-->
<!--        &lt;!&ndash;//通过三运算符去识别是新增还是编辑&ndash;&gt;-->
<!--        <h1>新增地址</h1>-->
<!--        <el-form :model="model"  ref="form" label-width="90px" @submit.native.prevent="save" >-->
<!--            <el-form-item label="姓名" >-->
<!--                <el-input v-model="model.userName"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="地址" >-->
<!--                <el-input v-model="model.streetName"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="邮政编码" >-->
<!--                <el-input v-model="model.postCode"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="电话号码" >-->
<!--                <el-input v-model="model.tel"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item>-->
<!--                <el-button type="primary" native-type="submit">保存</el-button>-->
<!--                <el-button  @click="$router.push(`/order/dpcyy`)">取消</el-button>-->
<!--            </el-form-item>-->
<!--        </el-form>-->
<!--    </div>-->
<!--</template>-->


<!--<style>-->


<!--</style>-->

<!--<script>-->

<!--    export default {-->
<!--        //作为一个组件接受数据，尽可能与路由解耦-->
<!--        props: {-->
<!--            id: {}-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                model: {}-->
<!--            }-->
<!--        },-->
<!--        methods: {-->

<!--            async save() {-->
<!--                //异步换成类似同步,新建和修改-->
<!--                let res-->
<!--                if(this.id){-->
<!--                    res = await this.$http.put(`/rest/xjyy/${this.id}`,this.model)-->
<!--                }else{-->
<!--                    res = await this.$http.post('rest/xjyy', this.model)-->
<!--                }-->
<!--                this.$router.push('/order/dpcyy')-->
<!--                this.$message({-->
<!--                    type: 'success',-->
<!--                    message: '保存成功'-->
<!--                })-->
<!--            },-->

<!--            async fetch() {-->
<!--                const res = await this.$http.get(`rest/xjyy/${this.id}`)-->
<!--                this.model = res.data-->

<!--            }-->
<!--        },-->

<!--        //进行判断，有id才执行-->
<!--        created(){-->
<!--            this.id && this.fetch()-->
<!--        }-->

<!--    }-->
<!--</script>-->

