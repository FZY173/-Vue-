<template>
   <div class="login-container" >
       <el-card slot="header" class="login-card">

           <el-form @submit.native.prevent="login">
               <el-form-item>
               <span>请先登录</span>
               </el-form-item>
               <el-form-item >
                   <el-input
                           placeholder="请输入账号"
                           prefix-icon="el-icon-user-solid"
                           v-model="model.username"
                           clearable>
                   </el-input>
               </el-form-item>
               <el-form-item>
               <el-input
                       placeholder="请输入密码"
                       prefix-icon="el-icon-lock"
                       v-model="model.password"
                       type="password"
                       show-password>
               </el-input>
               </el-form-item>
               <el-form-item>
                   <el-button type="primary" native-type="submit" >登录</el-button>
               </el-form-item>
           </el-form>
       </el-card>
       <div style="height: 97px;width: 100%">
       </div>
</div>


</template>

<script>
    export default {
    data() {
        return {
           model:{}
        }
    },
         methods:{
           // 接口请求，用了async
           async  login(){
            const res =  await this.$http.post('login',this.model)
               //关掉之后下次打开浏览器还有
               // sessionStorage关掉打开就没有
               localStorage.token = res.data.token
             this.$router.push('/')
               this.message({
                   type:'success',
                     message:'登录成功'
               })
           }
     }
    }
</script>

<style scoped>
.login-container{
    background:url("../assets/1.jpg") no-repeat fixed ;
    background-size: 100%;
    margin: 0;
    padding-left: 800px;
    padding-top: 190px;
    padding-bottom:40px;
}

    .login-card{
        width: 400px;
        margin-bottom: 70px;
        margin-top: 40px;
    }

    .el-button{
        width: 300px;
        margin-left: 30px;
    }

    .el-card span{
        font-size: 20px;
        margin-left: 20px;

    }

</style>