<template>
    <div>

    <div class="animated fadeIn">
        <el-row>
          <el-col>
                <h2>统计分析</h2>
                <h5>
                    数据分析
                </h5>
          </el-col>

            <div class="state-info">
                <section class="panel">
                    <div class="panel-body">
                        <div class="summary">
                            <span>今日预约量</span>
                            <h3 class="green-txt">600</h3>
                        </div>

                        <div id="expense" class="chart-bar">
                            <img src="../assets/greenincome.png">
                        </div>
                    </div>
                </section>

                <section class="panel" >
                    <div class="panel-body" >
                        <div class="summary">
                            <span>今日完成量</span>
                            <h3 class="red-txt">456</h3>
                        </div>
                        <div id="income" class="chart-bar">
                            <img src="../assets/redincome.png">
                        </div>
                    </div>
                </section>
            </div>
        </el-row>

        <el-row  style="margin-top:45px">
            <el-col span="12">
                <el-row>
                <div class="state-overview">
                    <el-col span="9">
                        <div class="panel purple">
                            <div class="symbol">
                                <Icon type="clipboard" size="50" color="white"></Icon>
                            </div>
                            <div class="state-value" >
                                <div class="value">230</div>
                                <div class="title">今日预约量</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col span="9" style="margin-left: 10px">
                        <div class="panel red">
                            <div class="symbol">
                                <Icon type="pricetags" size="50" color="white"></Icon>
                            </div>
                            <div class="state-value">
                                <div class="value">34</div>
                                <div class="title">新增预约量</div>
                            </div>
                        </div>
                    </el-col>
                </div></el-row>


                <el-row style="margin-top: 10px">
                <div class="state-overview">
                    <el-col span="9">
                        <div class="panel blue">
                            <div class="symbol">
                                <Icon type="cash" size="50" color="white"></Icon>
                            </div>
                            <div class="state-value">
                                <div class="value">300</div>
                                <div class="title">历史预约量</div>
                            </div>
                        </div>
                    </el-col>
                    <el-col span="9" style="margin-left: 10px">
                        <div class="panel green">
                            <div class="symbol">
                                <Icon type="eye" size="50" color="white"></Icon>
                            </div>
                            <div class="state-value">
                                <div class="value">390</div>
                                <div class="title">总预约量</div>
                            </div>
                        </div>
                    </el-col>
                </div></el-row>
            </el-col>

            <el-col span="12">
                <Chart1></Chart1>
            </el-col>
        </el-row>

        <el-row style="margin-top: 70px">
            <el-col span="20" >
                <Chart2></Chart2>
            </el-col>

            <el-col span="12">

<!--                <Chart3></Chart3>-->
            </el-col>
        </el-row>
    </div>
    </div>
</template>

<script>
    import Chart1 from "../views/Chart1";
    import Chart2 from "../views/Chart2";
    import Chart3 from "../views/Chart3";

    export default {
        components: {
           Chart1,
            Chart2,
            Chart3,
        },
    }
</script>

<style type="text/css" scoped>
    .animated{
        padding-left: 20px;
        padding-top:20px;
        height: 800px;
    }
    .state-overview {
        color: #fff;
    }
    .state-overview .ivu-col {
        margin-bottom: 20px;
    }
    .state-overview .state-value .value {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .state-overview .state-value .title {
        font-size: 14px;
    }
    .state-value {
        width: 60%;
        display: inline-block;
    }
    .symbol {
        width: 35%;
        display: inline-block;
    }
    .state-overview .panel {
        border-radius: 4px;
        padding: 25px 20px;
    }
    .panel.purple {
        background: #6a8abe;
        box-shadow: 0 5px 0 #5f7cab;
    }
    .panel.red {
        background-color: #fc8675;
        box-shadow: 0 5px 0 #e27869;
    }
    .panel.blue {
        background: #5ab6df;
        box-shadow: 0 5px 0 #51a3c8;
    }
    .panel.green {
        background: #4acacb;
        box-shadow: 0 5px 0 #42b5b6;
    }

    .staff_progress p {
        margin: 0;
    }

    .animated {
        background-color: #eff0f4;
    }
    li {
        margin-bottom: 11px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .demo-carousel img {
        height: 100%;
        width: 100%;
    }
    h3,
    h4,
    h5 {
        margin: 12px;
    }
    h3 {
        margin-bottom: 20px;
        font-size: 30px;

    }
    h5{
        padding-left: 40px;
        font-size: 23px;
        color:#5ab6df;
    }
    p {
        margin: 12px;
    }

    .state-info {
        position: absolute;
        right: 15px;
        top: 20px;
        margin-bottom: 30px;
    }
    .state-info .panel {
        margin-bottom: 20px;
        float: right;
        margin-left: 15px;
    }
    .panel {
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    }
    .panel-body {
        padding: 15px;
    }
    .state-info .panel .summary {
        float: left;
        margin-right: 20px;
    }
    .state-info .panel .summary span {
        color: #49586e;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .state-info .panel .summary h3.red-txt {
        color: #fc8675;
    }
    .state-info .panel .summary h3.green-txt {
        color: #65cea7;
    }
    .state-info .panel .summary h3 {
        font-size: 200%;
        font-weight: 700;
        line-height: 20px;
        margin: 0;
    }
    .page-heading h3 {
        color: #49586e;
        font-size: 25px;
        font-size: 11%;
        font-weight: 400;
        margin: 10px 0;
    }
    .chart-bar {
        float: right;
        margin-top: 5px;
    }
    .chart-bar img {
        display: inline-block;
        width: 68px;
        height: 45px;
        vertical-align: top;
    }
    @media screen and (max-width: 767px) {
        .state-info {
            position: static;
            width: 100%;
            margin-top: 15px;
        }
        .state-info .panel {
            width: 100%;
        }
    }
    .panel.blue-box {
        background: none repeat scroll 0 0 #5ab5de;
        box-shadow: 0 5px 0 #51a3c7;
        color: #fff;
    }
    .twt-info h3 {
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 900;
        margin: 10px 0 30px 0;
        text-align: center;
    }
    .twt-info p {
        font-size: 18px;
        line-height: 25px;
        font-style: italic;
        margin: 0 0 20px 0;
        text-align: center;
    }
    .twt-info p a {
        color: #98fdf4;
    }
    .media:first-child {
        margin-top: 0;
    }
    .media.usr-info > .pull-left {
        margin-right: 20px;
        margin-top: 10px;
    }
    .media > .pull-left {
        margin-right: 10px;
    }


    .usr-info .thumb {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
    }
    .usr-info img {
        vertical-align: middle;
    }
    .usr-info h4 {
        color: #658585;
        margin-bottom: 0;
    }

    .usr-info .media-body span {
        color: #ea755c;
        font-size: 12px;
        margin-bottom: 20px;
        display: inline-block;
    }
    .usr-info .media-body p {
        color: #b6bcbc;
    }
    ul.user-states {
        list-style-type: none;
        padding: 20px 0;
    }
    ul.user-states li {
        text-align: center;
        float: left;
        width: 33%;
        font-size: 18px;
        margin: 0;
    }
</style>