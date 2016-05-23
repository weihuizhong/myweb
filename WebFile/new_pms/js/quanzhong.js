$(function () {
    var myChart, myChart1;

    //删除了resize();

    var openIndex = null;
    $('.arrow-btn').on('click', function () {
        if ($('.collpse-right').length > 0) {
            openBar();
            if (openIndex == null) {
                $('.option-item .menu-1').eq(0).show();
            }
        } else {
            closeBar();
        }
    });

    function openBar() {
        $('.qz-right-active').addClass('margin');
        $('.option-item').addClass('no-width').parents('.qz-left-fixed').addClass('width-66');
        setTimeout(function () {
            $('.collpse-left').removeClass('collpse-right');
        }, 200);
        if(window.navigator.userAgent.indexOf('MSIE 8.0') >= 0){
            $('.left-case').toggle()
            $('.right-case').toggle()
        }
    }

    function closeBar() {
        $('.qz-right-active').removeClass('margin');
        $('.option-item').removeClass('no-width').parents('.qz-left-fixed').removeClass('width-66');
        setTimeout(function () {
            $('.collpse-left').addClass('collpse-right');
        }, 200);
       if(window.navigator.userAgent.indexOf('MSIE 8.0') >= 0){
           $('.left-case').toggle()
           $('.right-case').toggle()
       }
    }

    $('.quanzhong').on('click', function () {
        closeBar();
    });

    $('.option-btn li').on('click', function () {
        openBar();
        var index = $(this).index();
        openIndex = index;
        $('.option-item .menu-1').eq(index).show().siblings('.menu-1').hide();
        $(this).addClass('option-sel').siblings('li').removeClass('option-sel');
        $('.menu-1').eq(index).find('li').eq(0).addClass('item-sel').siblings('li').removeClass('item-sel');
    });

    $('.menu-1 li').on('click', function () {
        $(this).addClass('item-sel').siblings('li').removeClass('item-sel');
    });

    $('.pointer-collapse .pointer-title').click(function () {
        $(this)
            .siblings('.pointer-collapse-list')
            .slideToggle();

        if ($(this).parents('.pointer-collapse').hasClass('pointer-collapse-close')) {
            $(this).parents('.pointer-collapse').removeClass('pointer-collapse-close');
        } else {
            $(this).parents('.pointer-collapse').addClass('pointer-collapse-close');
        }
        return false;
    });
    var collapseItem = $('.pointer-collapse-item');
    collapseItem.on('click',function(){
        collapseItem.not(this).removeClass('item-sel');
    });

    function addNodata(el) {
        var no = '<div class="nodata"><p>0元</p></div>';
        el.css({
                position: 'relative'
            })
            .append(no);
    }

    function draw() {
        myChart = echarts.init(document.getElementById('main'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#fff', '#e87751', '#1ebb9c', '#f2c617', '#3398db'],
            title: {
                show: true,
                text: '6565.4',
                left: 'center',
                top: 'center',
                textStyle: {
                    color: '#666',
                    fontSize: 24
                },
                subtext: '总收款(元)',
                subtextStyle: {
                    color: '#666',
                    fontSize: 14
                }
            },
            series: [
                {
                    name: '收款来源',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: [0, '50%'],
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            textStyle: {
                                color: '#666666',
                                fontSize: 26
                            },
                            formatter: '{c}\n{b}'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 1548, name: '总收款(元)'}
                    ]
                },
                {
                    name: '收款来源',
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['60%', '86%'],
                    hoverAnimation: false,
                    label: {
                        normal: {
                            textStyle: {
                                color: '#666',
                                fontSize: 14
                            },
                            formatter: '{c}\n{b}'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 10,
                            length2: 20,
                            lineStyle: {
                                color: '#bfbfbf'
                            }
                        }
                    }
                    ,
                    data: [
                        {value: 153, name: 'Pos机收款'},
                        {value: 210, name: '转账收款'},
                        {value: 234, name: '微信收款'},
                        {value: 302, name: '托盘收款'}
                    ],
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 2
                        }
                    }
                }
            ]
        };
        // myChart.setOption(option)
        // 基于准备好的dom，初始化echarts实例
        myChart1 = echarts.init(document.getElementById('tiao'));
        addNodata($('#main').html(""))
        // 指定图表的配置项和数据
        // 设置表格数据
        var maxData = 400,
            data = [50, 120, 360, 100, 200], lessData = [];

        // 计算空余数据
        for (var i = 0; i < data.length; i++) {
            lessData.push(maxData - data[i])
        }

        var option1 = {
            grid: {
                left: 'center',
                width: '66%',
                height: '66%',
                backgroundColor: '#eee'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    shadowStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                formatter: function (params) {
                    var char = params[0]
                    return char.name + ':' + char.value
                }
            },
            color: ['#7ecafc'],
            xAxis: {
                data: ["自住", "少住", "空置", "出租", "出售"],
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    margin: 8,
                    textStyle: {
                        color: '#666'
                    }
                }
            },
            yAxis: {
                max: maxData,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: 8,
                    textStyle: {
                        color: '#666'
                    }
                }
            },
            series: [{
                name: '住房情况',
                type: 'bar',
                stack: '总量',
                barMaxWidth: 30,
                barMinHeight: 0,
                animationDuration: 600,
                label: {
                    normal: {
                        show: false,
                        position: ['20%', '2%'],
                        formatter: '{c}',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        // color: '#eee'
                    }
                },
                data: data
            },
                {
                    name: '住房情况',
                    type: 'bar',
                    stack: '总量',
                    legendHoverLink: false,
                    barMaxWidth: 30,
                    barMinHeight: 0,
                    animationDelay: 600,
                    animationDuration: 600,
                    // barGap: '40',
                    // barCategoryGap:'40',
                    itemStyle: {
                        normal: {
                            color: '#eee'
                        },
                        emphasis: {
                            color: '#eee'
                        }
                    },
                    data: lessData
                }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
    }

    draw();

})