<template>

    <div id="charts" style="width:500px;height:260px">
        <div id="main" style="width:500px;height:260px"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: 'Bank',
        data () {
            return {
            }
        },
        components: {
        },
        computed: {
        },
        methods: {
        },
        mounted() {
            /*ECharts图表*/
            const myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({


                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            data:[
                                {value:235, name:'电瓶车预约'},
                                {value:274, name:'爱心服务'},
                                {value:310, name:'便捷服务'},
                                {value:335, name:'中转管理'},
                                {value:400, name:'材料审核'},
                                {value:430, name:'接机送机'},
                            ],
                            roseType: 'angle',
                            label: {
                                normal: {
                                    textStyle: {

                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {

                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',


                                }
                            }
                        }
                    ]

            })
        }
    }
    </script>