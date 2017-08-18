<template>
<div id="skill-echarts">

</div>
</template>  
<script>
import echarts from 'echarts'
export default {
  data(){
    return {

    }
  },
  created(){
    this.$nextTick(() => { 
      this.cheate();
    });
  },
  mounted(){
    
  },
  methods: {
    cheate(){
      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('skill-echarts'));

        // 指定图表的配置项和数据
        var option = {
            radar: 
                {
                    indicator: [
                        { text: 'HTML' ,max:100},
                        { text: 'CSS/SCSS' ,max:100},
                        { text: 'JavaScript' ,max:100},
                        { text: 'Vue' ,max:100},
                        { text: 'iView/ElementUI' ,max:100},
                        { text: 'Webpack' ,max:100},
                        { text: 'Git' ,max:100}
                    ],
                    // center: ['25%', '50%'],
                    radius: 120,
                    startAngle: 100,
                    splitNumber: 10,
                    shape: 'circle',
                    name: {
                        formatter:'【 {value} 】',
                        textStyle: {
                            color:'#72ACD1'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: ['rgba(114, 172, 209, 0.2)',
                            'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                            'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 10
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                },
          
            series: 
                {
                    name: '雷达图',
                    type: 'radar',
                    itemStyle: {
                        emphasis: {
                            // color: 各异,
                            lineStyle: {
                                width: 10
                            }
                        }
                    },
                    data: [
                        {
                            value: [90, 90, 85, 75, 75, 70, 70],
                            name: '图二',
                            areaStyle: {
                                normal: {
                                    color: 'rgba(255, 255, 255, 0.5)'
                                }
                            }
                        }
                    ]
                }
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  },

}  
</script>
<style lang="scss">
#skill-echarts{
  width: 500px;
  height: 400px;
}
</style>