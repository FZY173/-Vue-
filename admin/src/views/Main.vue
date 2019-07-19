<template>
    <el-container style="height: 100vh; border: 1px solid #eee">

        <!--页面顶部-->
        <el-header style="text-align: right; font-size: 12px" class="header">
            <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
                <!--<el-radio-button :label="false">展开</el-radio-button>-->
                <!--<el-radio-button :label="true">收起</el-radio-button>-->
            <!--</el-radio-group>-->

            <el-row>
                <el-col :span="6" class="logo-container" style="text-align: left">
                    <img src="" class="logo" alt="">
                    <span class="title" style="font-size: 20px">昆明长水后台管理系统</span>
                </el-col>
                <el-col :span="6" class="user">

                <!--<div class="userinfo">-->
                    <!--<img src="" class="avatar" alt="">-->
                    <!--<div class="welcome">-->
                        <!--<p class="name welcome">欢迎</p>-->
                        <!--<p class="name avatarname">{{user.name}}</p>-->
<!--                </div>-->
<!--                </div>-->
                </el-col>
                <el-button
                        type="text"
                        size="medium"
                        @click="$router.push(`/grzx`)">admin</el-button>
            </el-row>

        </el-header>

        <el-container>
        <!--页面左侧菜单栏-->
        <!--<el-aside width="200px" style="background-color: #545c64" >-->
<!--同时设置子菜单每次只展开一个-->
            <el-menu router
                    class="el-menu-vertical"
                    default-active="$route.path"
                     unique-opened
                    @close="handleClose"
                    @open="handleOpen"
                    :collapse="isCollapse"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">

                <!--border-top="1px solid black-->

                <el-menu-item index="/shy" >
                    <i class="el-icon-menu"></i>  <span slot="title">首页</span>
                </el-menu-item>

                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-bell"></i>
                        <span slot="title">预约</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/order/clsh">材料审核</el-menu-item>
                        <el-menu-item index="/order/bjfw">便捷服务</el-menu-item>
                        <el-menu-item index="/order/axfw">爱心服务</el-menu-item>
                        <el-menu-item index="/order/dpcyy">电瓶车预约</el-menu-item>
                        <el-menu-item index="/order/jjsj">接机送机</el-menu-item>
                        <el-menu-item index="/order/zzgl">中转管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-s-order"></i>
                        <span slot="title">历史纪录</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/history/today">今日</el-menu-item>
                        <el-menu-item index="/history/early">更早</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-menu-item index="/tjfx">
                    <i class="el-icon-s-data"></i>  <span slot="title">统计分析</span>
                </el-menu-item>

                <el-menu-item index="xtrz">
                    <i class="el-icon-tickets"></i>  <span slot="title">系统日志</span>
                </el-menu-item>

                <el-submenu index="aqsz">
                    <template slot="title"><i class="el-icon-setting"></i>
                        <span slot="title">安全设置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/wd">个人中心</el-menu-item>
                        <el-menu-item index="/aqsz/admingl">账号管理</el-menu-item>
                        <el-menu-item index="/aqsz/exit">安全退出</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        <!--</el-aside>-->

            <el-container>

            <!--页面主体-->
            <el-main>
                <router-view></router-view>

            </el-main>

            <!--页面底部-->
            <el-footer style="text-align: center">长水机场管理平台  昆ICP证45496号  昆明5552355632号</el-footer>
        </el-container>
        </el-container>
    </el-container>
</template>

<style>
    .header{
        background-color: #545c64;
        height:60px;
        color: white;
        line-height: 60px;
    }


    .el-menu-vertical:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

</style>

<script>
    export default {
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>
