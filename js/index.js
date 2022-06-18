//============================模拟更新数据==================
function sjs(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min
}
// let data=[60,52,200,300,334,390,330,220,100,136,300,400];
// setInterval(柱状图1,6000)
function 柱状图1(){
    let data1=[];
    for (let i = 0; i < 8; i++) {
        let s=sjs(0,data.length-1);
        data1.push(data[s]);
        console.log(data[s])
    }
    console.log("=====================================")
    console.log(data1);
    //1.初始化echarts,获取标签
    let Chart=echarts.init(document.querySelector(".左 .图1 .图表"))

    //2.指定配置项和数据
    option = {
        color: ["#2f89cf"], //改变柱体颜色
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255) ",
                    fontSize: "12"
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#00c1de",
                        width: 2
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255) ", //字体颜色
                    fontSize: 12 //字体大小
                },
                // y轴的线条改为了 2像素
                axisLine: {
                    lineStyle: {
                        color: "#00c1de",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],


        series: [
            {
                name: '条',
                type: 'bar',
                barWidth: '35%',
                // data: [30, 52, 200, 334, 390, 330, 220],
                data:[data1[0],data1[1],data1[2],data1[3],data1[4],data1[5],data1[6]],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 5,
                    color: "#F8B44890",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                }
            }
        ]
    };

    //3.添加实例对象
    Chart.setOption(option)
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function () {
        Chart.resize() //resize : 调整大小
    })

}
//============================模拟更新数据==================

// 柱状图模块1
(function () {
    //用于数据切换
    let Data = [
                [50, 82, 200, 334, 390, 330, 220],
                [60, 92, 160, 300, 350, 290, 290],
            ]

    //1.初始化echarts,获取标签
    let Chart1=echarts.init(document.querySelector(".左 .图1 .图表"))

    //2.指定配置项和数据
    option1 = {
        color: ["#2f89cf"], //改变柱体颜色
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 修改图表的大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255) ",
                    fontSize: "12"
                },
                // 不显示x坐标轴的样式
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#00c1de",
                        width: 2
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // 修改刻度标签 相关样式
                axisLabel: {
                    color: "rgba(255,255,255) ", //字体颜色
                    fontSize: 12 //字体大小
                },
                // y轴的线条改为了 2像素
                axisLine: {
                    lineStyle: {
                        color: "#00c1de",
                        width: 2
                    }
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],


        series: [
            {
                name: '条',
                type: 'bar',
                barWidth: '35%',
                data:Data[1],
                itemStyle: {
                    color: "#F8B44890",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    normal: {
                            // 设置柱体颜色(可以渐变)                                       设置柱体颜色方布
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: "#00FFE3",
                                },
                                {
                                    offset: 1,
                                    color: "#d58512",
                                },
                            ]),
                        },
                    // 修改柱子圆角
                    barBorderRadius: 5,
                }
            }
        ]
    };

    //3.添加实例对象
    Chart1.setOption(option1)
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function () {
        Chart1.resize() //resize : 调整大小
    })
    // 5.点击切换效果
    $(".左 .图1 h2").on("click", "span", function() {
        option1.series[0].data = Data[$(this).index()];
        // 需要重新渲染
        Chart1.setOption(option1);
    });
})();
//左图2
(function () {
    let yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [400, 640, 1901, 3240, 2900, 3300, 3100, 2130, 1800, 2000, 1800, 790],
                [240, 400, 1010, 1340, 900, 2300, 2100, 2300, 1200, 2300, 2100, 1200],
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [300, 540, 1701, 2240, 2000, 3000, 3100, 2130, 1800, 2500, 1500, 1790],
                [1240, 500, 1010, 1540, 1000, 2000, 1100, 2900, 1200, 2000, 2500, 1000],
            ]
        }
    ];
    //1.初始化echarts,获取标签
    let Chart=echarts.init(document.querySelector(".左 .图2 .图表"))
    // 2.指定配置
    let option = {
        // 通过这个color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            textStyle: {
                color: "#fff"
            },
            // 这个10% 必须加引号
            right: "10%"
        },
        grid: {
            top: "10%",
            left: "0",
            right: "0",
            bottom: "0",
            show: true, // 显示边框
            borderColor: "#fff", // 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#fff" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#fff" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "#d5851280" // 分割线颜色
                }
            }
        },
        series: [
            {
                name: "新增就业",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                data: yearData[1].data[0],
                //设置线下面的颜色区域
                areaStyle: {
                    color: "rgba(5,140,255)",
                },
            },
            {
                name: "离职",
                type: "line",
                smooth: true,
                data: yearData[1].data[1],
                areaStyle: {
                    color: "#d5851210",
                },
            },

        ]
    };
    //3.添加实例对象
    Chart.setOption(option)
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function () {
        Chart.resize() //resize : 调整大小
    });

    // 5.点击切换效果
    $(".左 .图2 h2").on("click", "span", function() {
        // alert(1);
        // console.log($(this).index());
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        Chart.setOption(option);
    });
})();
//左图3
(function () {
    //1.初始化echarts,获取标签
    let Chart=echarts.init(document.querySelector(".左 .图3 .图表"))
    //2.
    option = {
        backgroundColor: "#0f375f",
        legend: {
            orient: 'horizontal',
            bottom:0,
            data: [ '18~35岁', '36~45岁', '46~50岁','50岁~'],    //有数据
            textStyle: {
                color: "#fff",
                fontSize: 10
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '年龄分布',
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            data: [{
                value: 1,
                name: '50岁~',
                itemStyle: {
                    color: "#fff",
                    borderColor: "#fff",
                    show:false
                }
            },
                {
                    value: 2,
                    name: '46~50岁',
                    itemStyle: {
                        color: "#d58512",
                        borderColor: "#fff"
                    }
                },
                {
                    value: 3,
                    name: '36~45岁',
                    itemStyle: {
                        color: "#3D61FF",
                        borderColor: "#fff"
                    }
                },
                {
                    value: 4,
                    name: '18~35岁',
                    itemStyle: {
                        color: "#22E5F1",
                        borderColor: "#fff"
                    }
                },

            ],
            label: {
                show: false,
                normal: {
                    formatter: '{d}%',
                    show: true,
                    position: ''
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        }]
    };
    //3.添加实例对象
    Chart.setOption(option)
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize",function () {
        Chart.resize() //resize : 调整大小
    });
})();
//右图1
(function () {
    let youceyzhou=[[702, 350, 610, 793, 664],[602, 330, 590, 763, 800]];
    let baifenbi=[[70, 34, 60, 78, 69],[60, 40, 66, 70, 40]]
    var myColor = ["#1089E7", "#d58512", "#56D0E3", "#F8B44870", "#8B78F6"];
    // 1. 实例化对象
    let chart=echarts.init(document.querySelector(".右 .图1 .图表"))
// 2. 指定配置和数据
    var option = {
        grid: {
            top: "10%",
            left: "18%",
            bottom: "10%"
            // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                // data: [702, 350, 610, 793, 664],
                data: youceyzhou[0], //右侧y轴
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                // data: [70, 34, 60, 78, 69],
                data:baifenbi[0], //百分比
                yAxisIndex: 0,
                // 修改第一组柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function(params) {
                        // params 传进来的是柱子对象
                        // console.log(params);
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    color:"#fff",
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据  data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };

    // 3. 把配置给实例对象
    chart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        chart.resize();
    });
    // 5.点击切换效果
    $(".右 .图1 h2").on("click", "span", function() {
        option.series[0].data = baifenbi[$(this).index()];
        //右侧y轴变化
        option.yAxis[1].data = youceyzhou[$(this).index()];
        // 需要重新渲染
        chart.setOption(option);
    });
})();
//右图2
(function () {
    let baifenbi=[[3.2, 3.5, 3.9, 3.3, 2.5, 2.5, 2.7, 4.5],
        [3.0, 3.2, 3.4, 3.5, 3.0, 2.9, 2.3, 4.0]];
    let zhuzigaodu=[[4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
        [3.9, 4.3, 4.5, 4.3, 3.1, 4.0, 3.2, 4.8]]
    //1.
    let chart2=echarts.init(document.querySelector(".右 .图2 .图表"))
    //2.
    option2 = {
        title: {
            textStyle: {
                align: "center",
                color: "#fff",
                fontSize: 20,
            },
            top: "3%",
            left: "10%",
        },
        backgroundColor: "#0f375f",
        grid: {
            top: "15%",
            bottom: "10%", //也可设置left和right设置距离来控制图表的大小
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
                label: {
                    show: true,
                },
            },
        },
        legend: {
            data: ["去年", "明年"],
            top: "2%",
            textStyle: {
                color: "#ffffff",
            },
        },
        xAxis: {
            data: [
                "金融",
                "电讯业",
                "房地产",
                "服务",
                "服装业",
                "公益组织",
                "广告",
                "政府机关",
            ],
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: "black",
                },
            },
            axisTick: {
                show: true, //隐藏X轴刻度
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ebf8ac", //X轴文字颜色
                },
            },
        },
        yAxis: [
            {
                type: "value",
                name: "十万", //y轴说明标记
                nameTextStyle: {
                    color: "#ebf8ac",
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: true,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#FFFFFF",
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac",
                    },
                },
            },
            {
                type: "value",
                name: "同比去年",
                nameTextStyle: {
                    color: "#ebf8ac",
                },
                position: "right",
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    formatter: "{value} %", //右侧Y轴文字显示
                    textStyle: {
                        color: "#ebf8ac",
                    },
                },
            },
            {
                type: "value",
                gridIndex: 0,
                min: 50,
                max: 100,
                splitNumber: 8,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ["rgba(250,250,250,0.1)", "rgba(250,250,250,0.05)"],
                    },
                },
            },
        ],
        series: [
            {
                name: "去年",
                type: "line",
                yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                smooth: true, //平滑曲线显示
                showAllSymbol: true, //显示所有图形。
                symbol: "circle", //标记的图形为实心圆
                symbolSize: 10, //标记的大小
                itemStyle: {
                    //折线拐点标志的样式
                    color: "#fff",
                },
                lineStyle: {
                    color: "#fff",
                },
                areaStyle: {
                    color: "rgba(5,140,255, 0.2)",
                },
                // data: [3.2, 3.5, 3.9, 3.3, 2.5, 2.5, 2.7, 4.5],
                data:baifenbi[0], //百分比
            },
            {
                name: "明年",
                type: "bar",
                barWidth: 15,
                itemStyle: {
                    normal: {
                        // 设置柱体颜色(可以渐变)                                       设置柱体颜色方布
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "#00FFE3",
                            },
                            {
                                offset: 1,
                                color: "#8e44ad",
                            },
                        ]),
                    },
                },
                // data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
                data: zhuzigaodu[0], //柱子高度
            },
        ],
    };

    // 3. 把配置给实例对象
    chart2.setOption(option2);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        chart2.resize();
    });
    // 5.点击切换效果
    $(".右 .图2 h2").on("click", "span", function() {
        option2.series[0].data = baifenbi[$(this).index()];
        //右侧y轴变化
        option2.series[1].data = zhuzigaodu[$(this).index()];
        // 需要重新渲染
        chart2.setOption(option2);
    });
})();
//右图3
function youtu3(data) {
    //1.
    let chart=echarts.init(document.querySelector(".右 .图3 .图表"))
    //2.
    // let data1 = [
    //     {
    //         name: '广东',
    //         value: 175,
    //     },
    //     {
    //         name: '北京',
    //         value: 148,
    //     },
    //     {
    //         name: '上海',
    //         value: 95,
    //     },
    //     {
    //         name: '福建',
    //         value: 86,
    //     },
    //     {
    //         name: '江苏',
    //         value: 75,
    //     },
    //     {
    //         name: '浙江',
    //         value: 74,
    //     },
    //     {
    //         name: '四川',
    //         value: 95,
    //     },
    // ];
    // let data2 = [
    //     {
    //         name: '广东',
    //         value: 155,
    //     },
    //     {
    //         name: '北京',
    //         value: 128,
    //     },
    //     {
    //         name: '上海',
    //         value: 120,
    //     },
    //     {
    //         name: '福建',
    //         value: 76,
    //     },
    //     {
    //         name: '江苏',
    //         value: 95,
    //     },
    //     {
    //         name: '浙江',
    //         value: 54,
    //     },
    //     {
    //         name: '四川',
    //         value: 105,
    //     },
    // ];
    let xAxisData = [];
    let seriesData = [];
    let seriesData1 = [];
    let ciolData = [];
    let sum = 0;
    let bottomData = [];
    let topData = [];
    let ciolColor1 = [
        'rgba(8, 177, 255, 1)',
        'rgba(0, 255, 136,   1)',
        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88,   1)',
        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88,   1)',
        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88,   1)',
    ];
    let ciolColor0 = [
        'rgba(107, 255, 243,  1)',
        'rgba(97,253,196,  1)',

        'rgba(107, 255, 243,  1)',
        'rgba(253, 221, 97,  1)',

        'rgba(107, 255, 243,  1)',
        'rgba(253, 221, 97,  1)',
        'rgba(107, 255, 243,  1)',
        'rgba(253, 221, 97,  1)',
    ];
    let bottomColor0 = [
        'rgba(8, 177, 255, 0.8)',
        'rgba(0, 255, 136, 0.8)',

        'rgba(8, 177, 255, 0.8)',
        'rgba(251, 171, 88, 0.8)',

        'rgba(8, 177, 255, 0.8)',
        'rgba(251, 171, 88, 0.8)',
        'rgba(8, 177, 255, 0.8)',
        'rgba(251, 171, 88, 0.8)',
    ];
    let bottomColor1 = [
        'rgba(107, 255, 243, 0.8)',
        'rgba(100,253,212,0.8)',

        'rgba(107, 255, 243, 0.8)',
        'rgba(253, 227, 100,0.8)',

        'rgba(107, 255, 243, 0.8)',
        'rgba(253, 227, 100,0.8)',
        'rgba(107, 255, 243, 0.8)',
        'rgba(253, 227, 100,0.8)',
    ];
    let header0 = [
        'rgba(8, 177, 255, 1)',
        'rgba(0, 255, 136, 1)',

        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88, 1)',

        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88, 1)',
        'rgba(8, 177, 255, 1)',
        'rgba(251, 171, 88, 1)',
    ];
    let header1 = [
        'rgba(107, 255, 243, 1)',
        'rgba(100,253,212,1)',

        'rgba(107, 255, 243, 1)',
        'rgba(253, 227, 100,1)',

        'rgba(107, 255, 243, 1)',
        'rgba(253, 227, 100,1)',
        'rgba(107, 255, 243, 1)',
        'rgba(253, 227, 100,1)',
    ];
    let bottom = [
        'rgba(31, 194, 252, 0.4)',
        'rgba(0, 255, 136, 0.4)',
        'rgba(31, 194, 252, 0.4)',
        'rgba(253, 179, 88, 0.4)',
        'rgba(31, 194, 252, 0.4)',
        'rgba(253, 179, 88, 0.4)',
        'rgba(31, 194, 252, 0.4)',
        'rgba(253, 179, 88, 0.4)',
        'rgba(31, 194, 252, 0.4)',
        'rgba(253, 179, 88, 0.4)',
    ];

    data.forEach((item) => {
        xAxisData.push(item.name);
        seriesData.push(item.value);
        seriesData1.push({ name: '', value: item.value });
        ciolData.push({ name: '', value: '0' });
        sum += item.value/2; //设置条柱的高度
    });
    data.forEach((item) => {
        bottomData.push({ name: '', value: sum - item.value });
        topData.push({ name: '', value: sum  });
    });
    option = {
        backgroundColor: 'rgba(107, 255, 243, 0.1)',
        grid: {
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '25%',
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                let text =
                    '<p  style="font-size:10px;font-weight: 400;color:rgba(255, 255, 255, 1);margin-bottom: 20px;"><span style="display:inline-block;width:10px;height: 10px;background: ' +
                    v2L2Chart.color[params.dataIndex] +
                    ';border-radius: 10%;margin-right: 10px;"></span>' +
                    v2L2Chart.xData[params.dataIndex] +
                    '：' +
                    v2L2Chart.data[params.dataIndex] +
                    '万</p>';
                return text;
            },
            // formatter: (params) => {
            //     return v2L2Chart.xData[params.dataIndex] + ':' + v2L2Chart.data[params.dataIndex] + '万';

            // },
            backgroundColor: 'rgba(38, 68, 110, 0.8)',
            padding: 10,
            borderColor: 'rgba(38, 68, 110, 1)',
            textStyle: {
                color: '#fff',
                fontSize:10,
            },
        },

        xAxis: {
            offset: 20,
            data: xAxisData,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
            },
        },
        yAxis: {
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
        },
        series: [
            //'最低下的圆片',
            {
                name: '最低下的圆片',
                stack: 'a',
                // type: 'pictorialBar',
                // symbolSize: [66, 12],
                // symbolOffset: [0, 6],
                type: 'effectScatter',
                symbolSize: [20, 12],
                symbolOffset: [0, 0],
                z: 22,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: ciolColor0[params.dataIndex],
                                },
                                {
                                    offset: 0,
                                    color: ciolColor1[params.dataIndex],
                                },
                            ]);
                        },
                    },
                },
                data: ciolData,
            },
            //下半截柱状图
            {
                name: '下半截柱状图',
                stack: 'a',
                type: 'bar',
                barWidth: 20,
                z: 2,
                barGap: '10%',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: bottomColor1[params.dataIndex],
                                },
                                {
                                    offset: 0,
                                    color: bottomColor0[params.dataIndex],
                                },
                            ]);
                        },
                    },
                },
                data: seriesData1,
            },
            //替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20'
            {
                name: '替代柱状图 默认不显示颜色，是最下方柱图的value值 - 20',
                // stack: '',
                type: 'bar',
                barWidth: 20,
                barGap: '100%',
                // stack: '广告',
                itemStyle: {
                    color: 'transparent',
                },
                data: seriesData,
            },
            //头部1
            {
                name: '头部1',
                stack: 'a',
                type: 'pictorialBar',
                symbolSize: [20, 12],
                symbolOffset: [0, -6],
                z: 22,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: header1[params.dataIndex],
                                },
                                {
                                    offset: 0,
                                    color: header0[params.dataIndex],
                                },
                            ]);
                        },
                    },
                },
                symbolPosition: 'end',
                label: {
                    formatter: '{c} 万',
                    color: '#fff',
                    offset: [0, -10], //数字上下移动距离
                    show: true,
                    position: 'top',
                    fontSize: 13,
                    fontWeight: 400,
                    fontFamily: 'zcool-gdh',
                },
                data: seriesData1,
            },
            //头部2
            {
                name: '头部2',
                stack: 'a',
                type: 'pictorialBar',
                symbolSize: [20, 12],
                symbolOffset: [0, -6],
                symbolPosition: 'end',
                z: 22,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 1,
                                    color: header1[params.dataIndex],
                                },
                                {
                                    offset: 0,
                                    color: header0[params.dataIndex],
                                },
                            ]);
                        },
                    },
                },
                data:topData,
            },
            //底色
            {
                name: '底色',
                stack: 'a',
                type: 'bar',
                barWidth: 20,
                z: 2,
                barGap: '-100%',
                // stack: '',
                symbolPosition: 'end',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return bottom[params.dataIndex];
                        },
                    },
                },
                data: bottomData,
            },
        ],
    };

    // 3. 把配置给实例对象
    chart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        chart.resize();
    });
};
let data1 = [
    {
        name: '广东',
        value: 175,
    },
    {
        name: '北京',
        value: 148,
    },
    {
        name: '上海',
        value: 95,
    },
    {
        name: '福建',
        value: 86,
    },
    {
        name: '江苏',
        value: 75,
    },
    {
        name: '浙江',
        value: 74,
    },
    {
        name: '四川',
        value: 95,
    },
];
let data2 = [
    {
        name: '广东',
        value: 155,
    },
    {
        name: '北京',
        value: 128,
    },
    {
        name: '上海',
        value: 120,
    },
    {
        name: '福建',
        value: 76,
    },
    {
        name: '江苏',
        value: 95,
    },
    {
        name: '浙江',
        value: 54,
    },
    {
        name: '四川',
        value: 105,
    },
];
youtu3(data1)
// 5.点击切换效果
$(".右 .图3 h2").on("click", "span", function() {
    if($(this).index()==0){
        youtu3(data1)
    }else {
        youtu3(data2)
    }
});
//中间地图
(function () {
    let myChart = echarts.init(document.querySelector(".中 .中间地图模块 .地图"));
    //2.
    var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
    };

    var XAData = [
        [{ name: "海口" }, { name: "拉萨", value: 100 }],
        [{ name: "西安" }, { name: "上海", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "海口" }, { name: "西宁", value: 100 }],
        [{ name: "西安" }, { name: "呼和浩特", value: 100 }],
        [{ name: "西安" }, { name: "广州", value: 100 }],
        [{ name: "呼和浩特" }, { name: "广州", value: 100 }],
    ];

    var XNData = [
        [{ name: "西宁" }, { name: "北京", value: 100 }],
        [{ name: "广州" }, { name: "上海", value: 100 }],
        [{ name: "广州" }, { name: "广州", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "广州" }, { name: "北京", value: 100 }],
        [{ name: "上海" }, { name: "海口", value: 100 }],
        [{ name: "广州" }, { name: "呼和浩特", value: 100 }],
        [{ name: "乌鲁木齐" }, { name: "玉溪", value: 100 }],
        [{ name: "上海" }, { name: "北京", value: 100 }],
        [{ name: "北京" }, { name: "海口", value: 100 }],
        [{ name: "北京" }, { name: "上海", value: 100 }],
        [{ name: "北京" }, { name: "广州", value: 100 }],
    ];

    var YCData = [
        [{ name: "拉萨" }, { name: "潍坊", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }],
        [{ name: "广州" }, { name: "上海", value: 100 }],
        [{ name: "海口" }, { name: "西安", value: 100 }],
        [{ name: "银川" }, { name: "广州", value: 100 }],
        [{ name: "东莞" }, { name: "上海", value: 100 }],
        [{ name: "东莞" }, { name: "哈尔滨", value: 100 }],
        [{ name: "玉溪" }, { name: "广州", value: 100 }],
        [{ name: "东莞" }, { name: "哈尔滨", value: 100 }],
        [{ name: "东莞" }, { name: "乌鲁木齐", value: 100 }],
        [{ name: "乌鲁木齐" }, { name: "哈尔滨", value: 100 }],
        [{ name: "乌鲁木齐" }, { name: "广州", value: 100 }],
    ];

    var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ["#a6e1ec", "#ffa022", "#1fa4e0","#1DC779"]; //航线的颜色
    var series = [];
    [
        ["上海", XAData],
        ["北京", XNData],
        ["广州", YCData],
        ["海口", YCData],
    ].forEach(function(item, i) {
        series.push(
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    brushType: "stroke"
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{b}"
                    }
                },
                symbolSize: function(val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                data: item[1].map(function(dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        );
    });
    var option = {
        tooltip: {
            trigger: "item",
            formatter: function(params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return "线路：" + params.data.name + "" + params.data.value[2];
                } else if (params.seriesType == "lines") {
                    return (
                        params.data.fromName +
                        ">" +
                        params.data.toName +
                        "<br />" +
                        params.data.value
                    );
                } else {
                    return params.name;
                }
            }
        },
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: ["上海 Top3", "北京 Top3", "广州 Top3", "海口 Top3"],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
        geo: {
            map: "china",
            label: {
                emphasis: {
                    show: true,
                    color: "#fff"
                }
            },
            // 把中国地图放大了1.2倍
            zoom: 1.4,
            roam: true,
            itemStyle: {
                normal: {
                    // 地图省份的背景颜色
                    areaColor: "rgba(20, 41, 87)",
                    borderColor: "#195BB9",
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: "#2B91B7"
                }
            }
        },
        series: series
    };
    //3.
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();