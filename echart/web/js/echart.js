/**
 * Created by hopper on 2016/10/31.
 */

/**
 * 现场检查统计
 * */
var eStat = echarts.init(document.getElementById('stat'));
eStat.setOption({
    // backgroundColor: 'rgba(20,168,200,0)',
    textStyle: {
        color: '#00DEFF',
        fontFamily: '微软雅黑'
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        feature : {
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    legend: {
        data: ['检查人次', 'WHS检查数', '安全文明检查数'],
        textStyle: {
            color: '#00DEFF',
            fontFamily: '微软雅黑'
        }
    },
    calculable : true,
    xAxis: {
        type: 'category',
        data: ['花都供电局', '海珠供电局', '番禺供电局', '从化供电局', '白云供电局', '增城供电局']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '检查人次',
            type: 'bar',
            data: [10, 20, 30, 40, 50, 60]
        },
        {
            name: 'WHS检查数',
            type: 'bar',
            data: [60, 50, 40, 30, 20, 10]
        },
        {
            name: '安全文明检查数',
            type: 'bar',
            data: [50, 50, 50, 50, 50, 50]
        }
    ]
});
/**
 * 施工到位率统计
 * */
var sign = echarts.init(document.getElementById('sign'));
sign.setOption({
    // backgroundColor: 'rgba(20,168,200,0.3)',
    textStyle: {
        color: '#00DEFF',
        fontFamily: '微软雅黑'
    },
    calculable : true,
    legend: {
        data: ['施工签到率', '施工签到率1'],
        textStyle: {
            color: '#00deff',
            fontFamily: '微软雅黑'
        }
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        feature : {
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis: {
        type: 'category',
        data: ['10月1日', '10月2日', '10月3日', '10月4日', '10月5日', '10月6日'],
        boundaryGap: false
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '施工签到率',
            type: 'line',
            areaStyle: {normal: {}},
            data: [10, 30, 50, 70, 100, 160]
        },
        {
            name: '施工签到率1',
            type: 'line',
            areaStyle: {normal: {}},
            data: [150, 120, 100, 90, 50, 10]
        }
    ]
});
/**
 *区局进度计划完成率
 * */
var eProgress = echarts.init(document.getElementById('progress'));
eProgress.setOption({
    // title: {
    //     text: '区局进度计划完成率',
    //     subText: '数据虚构',
    //     x: 'center',
    //     textStyle: {
    //         color: '#00DEFF',
    //         fontFamily: '微软雅黑'
    //     }
    // },
    // backgroundColor: 'rgba(20,168,200,0.3)',
    textStyle: {
        color: '#00DEFF',
        fontFamily: '微软雅黑'
    },
    legend: {
        data: ['花都供电局', '海珠供电局', '番禺供电局', '从化供电局', '白云供电局', '增城供电局'],
        textStyle: {
            color: '#00DEFF',
            fontFamily: '微软雅黑'
        },
        top: -2,
        itemWidth: 14,
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        feature : {
            saveAsImage : {show: true}
        },
        top: 20
    },
    series: [{
        name: '计划完成率',
        type: 'pie',
        center: ['46%', '61%'],
        data: [
            {name: '花都供电局', value: 20},
            {name: '海珠供电局', value: 35},
            {name: '番禺供电局', value: 100},
            {name: '从化供电局', value: 10},
            {name: '白云供电局', value: 20},
            {name: '增城供电局', value: 10}
        ]
    }]
});
/**
 *现场发现问题数
 * */
var eBug = echarts.init(document.getElementById('bugNum'));
eBug.setOption({
    // backgroundColor: 'rgba(20,168,200,0.3)',
    textStyle: {
        color: '#00DEFF',
        fontFamily: '微软雅黑'
    },
    calculable : true,
    series: [{
        name: '计划完成率',
        type: 'pie',
        roseType: 'angle',
        data: [
            {name: '花都供电局', value: 20},
            {name: '海珠供电局', value: 28},
            {name: '番禺供电局', value: 30},
            {name: '从化供电局', value: 33},
            {name: '白云供电局', value: 29},
            {name: '增城供电局', value: 22}
        ]
    }]
});