<template>
    <div>
        <el-row>

        <h2 style="float: left;margin-top: 0">待办事项</h2>
            <el-row  class="" style="margin-top: 40px;">
                <el-col span="4">
                    <div class="panel red" style="margin-left: 1px">
                        <i class="fj"  @click="$router.push(`/order/bjfw`)">&#xe990;</i></div></el-col>
                <el-col span="4">
                    <div class="circle2" style="n nmargin-left: 1px">
                        <i class="fj"  @click="$router.push(`/order/axfw`)">&#xe62a;</i>
                    </div></el-col>
                <el-col span="4">
                    <div class="circle3" style="margin-left: 1px">
                        <i class="fj"  @click="$router.push(`/order/dpcyy`)">&#xe947;</i>
                    </div></el-col>
                <el-col span="4">
                    <div class="circle4" style="margin-left: 1px">
                        <i class="fj"   @click="$router.push(`/order/jjsj`)">&#xe672;</i>
                    </div></el-col>
                <el-col span="4">
                    <div class="circle5" style="margin-left: 1px">
                        <i class="fj"   @click="$router.push(`/order/zzgl`)">&#xe89b;</i>
                    </div></el-col>
            </el-row>
            <el-row style="padding-left: 125px">
                <el-col span="4" ><span style="font-size: 15px">便携服务</span></el-col>
                <el-col span="4"><span style="font-size: 15px;margin-left: 20px">爱心服务</span></el-col>
                <el-col span="4"><span style="margin-left: 50px; font-size: 15px;">电瓶车</span></el-col>
                <el-col span="4"><span style="font-size: 15px;;margin-left: 60px">接/送机</span></el-col>
                <el-col span="4"><span style="font-size: 15px;margin-left: 90px">中转管理</span></el-col>
            </el-row>
        </el-row>

        <el-row style="margin-top: 100px">
            <h2 style="float: left;margin-top: 0">已办事项</h2>
            <el-row  class="" style="margin-top:50px;">
                <el-col span="4">
                    <div class="panel red" style="margin-left: 1px">
                        <i class="fj"  @click="$router.push(`/history/today`)">&#xe661;</i></div></el-col>
                <el-col span="4">
                    <div class="circle2" style=" margin-left: 1px">
                        <i class="fj"  @click="$router.push(`/history/early`)">&#xe628;</i>
                    </div></el-col>
            </el-row>
            <el-row style="padding-left: 125px">
                <el-col span="4" ><span style="font-size: 15px" >今日已办</span></el-col>
                <el-col span="4"><span style="font-size: 15px;margin-left: 20px">历史记录</span></el-col>

            </el-row>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "ShouYe"
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1253933 */
        src: url('//at.alicdn.com/t/font_1253933_gdalozxir6g.eot');
        src: url('//at.alicdn.com/t/font_1253933_gdalozxir6g.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1253933_gdalozxir6g.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1253933_gdalozxir6g.woff') format('woff'),
        url('//at.alicdn.com/t/font_1253933_gdalozxir6g.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1253933_gdalozxir6g.svg#iconfont') format('svg');
    }


    .fj{
        font-family:"iconfont";
        font-size:106px;
        font-style:normal;
        color: black;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
        padding-left:10px
    }

    /*.circle1 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    !*background: #7575fe;*!*/
    /*    border-style: solid; border-width: 1px;*/
    /*    margin:0 auto;*/
    /*}*/

    /*.panel.red {*/
    /*    background-color: #fc8675;*/
    /*    box-shadow: 0 5px 0 #e27869;*/
    /*    height: 112px;*/
    /*    width: 112px;*/
    /*    border-style: solid; border-width: 1px;*/
    /*}*/
    /*.circle2 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #fd7b7b;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/
    /*.circle3{*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #75fd75;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/
    /*.circle4 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #ad7ead;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/
    /*.circle5 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #75e2fe;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/

    /*.circle6 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #93c893;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/

    /*.circle7 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #ab7575;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/

    /*.circle8 {*/
    /*    height:65px;*/
    /*    width:65px;*/
    /*    background: #81cce5;*/
    /*    border-radius:50px;*/
    /*    margin:0 auto;*/

    /*}*/

</style>