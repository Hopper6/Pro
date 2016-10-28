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
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

/**
* 样式
* */
var pie = echarts.init(document.getElementById('pie'));
pie.setOption({
   series: [{
       name: '访问来源',
       type: 'pie',
       data: [
           {name: '搜索引擎', value: 400},
           {name: '直接访问', value: 336},
           {name: '邮件营销', value: 310},
           {name: '联盟广告', value: 274},
           {
               name: '视频广告',
               value: 236,
               selected: true,
               itemStyle: {
                   color: 'red'
               }
           }
       ]
   }]
});
