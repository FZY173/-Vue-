<template>
    <div>
        <!--//通过三运算符去识别是新增还是编辑-->
        <h1>{{id ? '编辑' : '新增'}}电瓶车预约</h1>
        <el-form :model="model"  ref="form" label-width="90px" @submit.native.prevent="save" >
            <el-form-item label="姓名" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" >
                <el-input v-model="model.phone"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" >
                <el-input v-model="model.id"></el-input>
            </el-form-item>
            <el-form-item label="预约时间" >
                <el-col :span="7">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="日期" v-model="model.date" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="7">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="开始时间" v-model="model.time1" style="width: 100%; margin-left: 30px"></el-time-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">--------------</el-col>
                <el-col :span="7">
                    <el-form-item prop="date3">
                        <el-time-picker placeholder="结束时间" v-model="model.time2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item label="请上传驾驶证正反面">
            <el-col :span="9">
<!--                :action表示上传的接口地址，表示图片地址的赋值到model.icon,使用默认加一个/upload拼成一个完整的地址，动态绑定，他用的并不是http实例，而是底层自带的Ajax请求，所以必须给一个完整的地址-->
            <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="afterUpload">
            <img v-if="model.icon" :src="model.icon" class="avatar">
<!--                有图片就上传图片，没有就显示图标-->
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-col>
            <el-col :span="7">
            <el-upload
            class="avatar-uploader"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="afterUploadtwo">
                <img v-if="model.icon2" :src="model.icon2" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-col>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="model.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
                <el-button  @click="$router.push(`/order/dpcyy`)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<style>
    /*照片上传格式*/
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 378px;
        height: 120px;
        line-height: 178px;
        text-align: center;
        margin-top: 60px;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

<script>
    export default {
        //作为一个组件接受数据，尽可能与路由解耦
        props: {
            id: {}
        },
        data() {
            return {
                model: {}
            }
        },
        methods: {
            //res表示服务端的响应
            afterUpload(res){
                // vueset语法，给原先没有的添加一个属性，vue的显示赋值
                this.$set(this.model, 'icon',res.url)
                // this.model.icon = res.url
            },

            afterUploadtwo(res){
                // vueset语法，给原先没有的添加一个属性，vue的显示赋值
                this.$set(this.model, 'icon2',res.url)
                // this.model.icon = res.url
            },

            async save() {
                //异步换成类似同步,新建和修改
                let res
                if(this.id){
                    res = await this.$http.put(`/rest/xjyy/${this.id}`,this.model)
                }else{
                    res = await this.$http.post('rest/xjyy', this.model)
                }
                this.$router.push('/order/dpcyy')
                this.$message({
                    type: 'success',
                    message: '保存成功'
                })
            },

            async fetch() {
                const res = await this.$http.get(`rest/xjyy/${this.id}`)
                this.model = res.data

            }
        },

        //进行判断，有id才执行
        created(){
            this.id && this.fetch()
        }

    }
</script>

