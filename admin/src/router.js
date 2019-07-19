import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import ShouYe from './views/ShouYe.vue'
import Early from './views/Early.vue'
import Today from './views/Today.vue'
import Clsh from './views/Clsh.vue'
import Bjfw from './views/Bjfw.vue'
import Axfw from './views/Axfw.vue'
import Dpcyy from './views/Dpcyy.vue'
import Jjsj from './views/Jjsj.vue'
import Zzgl from './views/Zzgl.vue'
import Tjfx from './views/Tjfx.vue'
import Xtrz from './views/Xtrz.vue'
import Exit from './views/Exit.vue'
import Login from './views/Login.vue'
import Xjyy from './views/Xjyy.vue'
import Admingl from './views/Admingl'
import Puap from './views/Puap.vue'
import Grzx from  './views/Grzx.vue'
import Wd from  './views/Wd.vue'
import Xtrzxj from  './views/Xtrzxj.vue'
import Adminuser from  './views/Adminuser.vue'
import Chart1 from  './views/Chart1.vue'
import Address from  './views/Address.vue'
// import Chart2 from  './views/Chart2.vue'
// import Chart3 from  './views/Chart3.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/', redirect: '/login'
        // },

        {
            path:'/login',
            name:'login',
            component:Login,

            },

        {
            path:'/chart1',
            name:'chart1',
            component:Chart1,

        },
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {path:'/shy', component: ShouYe},
                {path:'/history/early', component: Early},
                {path:'/history/today', component: Today},
                {path:'/order/clsh', component: Clsh},
                {path:'/order/bjfw', component: Bjfw},
                {path:'/order/axfw', component: Axfw},

                //注入页面，可以在Xjyy页面中直接用
                //电瓶车预约
                {path:'/xjyy/edit/:id', component: Xjyy,props:true},
                {path:'/order/dpcyy', component: Dpcyy},
                {path:'/xjyy', component: Xjyy},

                //接送机
                {path:'/puap/edit/:id', component: Puap,props:true},
                {path:'/order/jjsj', component: Jjsj},
                {path:'/puap', component: Puap},

                {path:'/order/zzgl', component: Zzgl},
                {path:'/tjfx', component: Tjfx},

                //系统日志管理
                {path:'/xtrzxj/edit/:id', component: Xtrzxj,props:true},
                {path:'/xtrz', component: Xtrz},
                {path:'/Xtrzxj', component: Xtrzxj},


                //安全设置
                // {path:'/exit', component: Exit},

                //管理员
                {path:'/adminuser/edit/:id', component: Adminuser,props:true},
                {path:'/aqsz/admingl', component: Admingl},
                {path:'/Adminuser', component: Adminuser},

                {path:'/aqsz/exit', component: Exit},

                //个人中心
                {path:'/wd', component: Wd},
                {path:'/grzx', component: Grzx},



            ]
        },

    ]
})
