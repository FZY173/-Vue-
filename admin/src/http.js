import axios from  'axios'
//import { Message,Loading } from 'element-ui';
import Vue from 'vue'

// 任意页面用this.$http访问axios的实例
const http = axios.create({
    baseURL:'http://localhost:3001/admin/api'
});

// 全局捕获错误
// 给http请求加一个拦截器
// 通用的错误处理，不需要在每个页面都设置一个监听
http.interceptors.response.use(res =>{
    return res
},err =>{
    // 错误时都会进入这里

    // if message中有内容时才执行
    if(err.response.data.message){
        Vue.prototype.$message({
            type:'error',
            message:err.response.data.message
        })
    }

    return Promise.reject(err)
})


//加载动画
// let loading;
// function startLoading() {
//    loading =  Loading.service({
//        lock: true,
//        text:'拼命加载中。。。',
//        background:'rgb(0,0,0,0.7)'
//    });
// }
//
// function endLoading() {
//     loading.close();
// }
//
// //请求拦截
// axios.interceptors.request.use(config =>{
//     //加载动画
//     startLoading();
//     return config;
// },error => {
//     return Promise.reject(error)
// });
//
//
//
// //响应拦截
// axios.interceptors.response.use(response =>{
//     //结束加载动画
//     endLoading();
//     return response;
// },error => {
//     //错误提醒
//     endLoading();
//     Message.error(error.response.date);
//     return Promise.reject(error);
// });


export default http