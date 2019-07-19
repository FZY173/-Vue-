<template>
<div>
    <h1>个人资料</h1>
    <div style="margin-right: 30px;margin-left: 30px">
        <el-form :model="model"  ref="form" label-width="90px" @submit.native.prevent="save"  :disabled="forbidden">
          <el-form-item label="头像" >
              <el-upload
                      class="avatar-uploader"
                      :action="$http.defaults.baseURL + '/upload'"
                      :show-file-list="false"
                      :on-success="afterUpload">
                  <img v-if="model.icon" :src="model.icon" class="avatar">
                  <!--                有图片就上传图片，没有就显示图标-->
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
            <el-form-item label="邮箱" >
                <el-input v-model="model.email"></el-input>
            </el-form-item>
            <el-form-item label="呢称" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" >
                <el-input v-model="model.phone"></el-input>
            </el-form-item>
            <el-form-item label="简介" >
                <el-input type="textarea" v-model="model.desc" style="height: 70px" maxlength="300"
                          show-word-limit></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">更新</el-button>
                <el-button  @click="$router.push(`/order/dpcyy`)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
    export default {
        data() {

            return {
                model: {}
            }
        },
        methods: {
            afterUpload(res) {
                // vueset语法，给原先没有的添加一个属性，vue的显示赋值
                this.$set(this.model, 'icon', res.url)
                // this.model.icon = res.url
            },

            afterUploadtwo(res) {
                // vueset语法，给原先没有的添加一个属性，vue的显示赋值
                this.$set(this.model, 'icon2', res.url)
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
                this.$router.push('/wd')
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

<style scoped>

</style>