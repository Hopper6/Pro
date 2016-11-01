/**
 * Created by hopper on 2016/10/28.
 */
/**
 * 基本操作：如何放置数据
 * */
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    // tooltip : {
    //     trigger: 'axis'
    // },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
        tooltip: {
            show: true
        }
    },
    toolbox: {
        show : true,
        feature : {
            // mark : {show: true},
            // dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    // calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;

/**
 * 样式
 * */
// var pie = echarts.init(document.getElementById('pie'));
// pie.setOption({
//     backgroundColor: '#2c343c',
//     textStyle: {
//         color: 'rgba(255,255,255,0.3)'
//     },
//     legend: {
//         textStyle: {
//             color: 'gray'
//         },
//         data: ['搜索引擎','直接访问','邮件营销','联盟广告'],
//         x: 'left',
//         orient: 'vertical'
//     },
//     series: [{
//         name: '访问来源',
//         type: 'pie',
//         data: [
//             {name: '搜索引擎', value: 400},
//             {name: '直接访问', value: 336},
//             {name: '邮件营销', value: 310},
//             {name: '联盟广告', value: 274},
//             {
//                 name: '视频广告',
//                 value: 236,
//                 // selected: true,
//                 itemStyle: {
//                     normal: {
//                         color: 'red',
//                         borderColor: 'black',
//                         borderWidth: 1,
//                         borderType: 'dotted',
//                         shadowColor: 'rgba(128, 0, 0, 0.5)',
//                         shadowBlur: 10
//                     },
//                     emphasis: {
//                         color: 'rgba(128, 128, 128, 0.5)'
//                     }
//                 }
//             }
//         ],
//         label: {
//             normal: {
//                 position: 'outside',
//                 // show: false
//             }
//         },
//         labelLine: {
//             normal: {
//                 lineStyle: {
//                     color: 'white'
//                 }
//             }
//         },
//         roseType: 'angle'
//     }]
// });
// window.onresize = myChart.resize;