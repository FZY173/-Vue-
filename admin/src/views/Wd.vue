<template>
 <div>
     <h2>我的</h2>
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

             <el-form-item label="呢称" >
                 <el-input v-model="model.name">admin</el-input>
             </el-form-item>

<!--             <el-form-item label="简介" >-->
<!--                 <el-input type="textarea" v-model="model.desc" style="height: 70px" maxlength="300"-->
<!--                           show-word-limit></el-input>-->
<!--             </el-form-item>-->
             <el-form-item>
                 <el-button  @click="$router.push(`/grzx`)">更改</el-button>
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
            //res表示服务端的响应
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
        }
    }
</script>

<style scoped>

</style>