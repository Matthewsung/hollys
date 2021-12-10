<template>
  <canvas 
    :id="chartId"
    class="bar-chart"
    style="width:100%; height: 320px"
  >
  </canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'BarChart',
  props: {
    chartId: String,
    chartData: Array,
  },
  data() {
    return {
      myChart: null,
      options: null,
      ctx : null
    }
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      this.ctx = document.getElementById(this.chartId).getContext('2d')
      this.myChart = new Chart(this.ctx, this.makeChartOptions())
    },
    makeChartOptions() {
      let menuData = [...this.chartData]
      const label = Object.values(menuData[0])
      label.shift()
      
      let tmp = Object.values(menuData[1])
      let hotLabel = tmp[0];
      tmp.shift()
      let hot = [] ;
      tmp.filter(data => {
        hot.push( parseFloat(data))
      })

      tmp = Object.values(menuData[2])
      let coldLabel = tmp[0];
      tmp.shift()
      let cold = [] ;
      tmp.filter(data => {
        cold.push( parseFloat(data))
      })

      return {
        type:'bar',
        data: {
          labels: label,
          datasets:[ 
            {
              label: hotLabel,
              data:hot,
              backgroundColor: 'red'
            },
            {
              label: coldLabel,
              data:cold,
              backgroundColor: 'blue'
            },
          ]
        },
        options:{
          tooltips: {
            xAlign: 'center',
            titleFontSize: 13,
            bodyFontSize: 13,
          },
          responsive: false,
          aspectRatio: 1,
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  lineWidth: 0,
                },
              }
            ],
            yAxes: [
              {
                ticks: {
                  stepSize: 50,
                },
              }
            ],
          },
        },
      }
    },
  },
  watch: {
    $route(to, from) {
      if(to.query.type !== from.query.type) {
        this.myChart.destroy()
        this.myChart = new Chart(this.ctx, this.makeChartOptions())
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .bar-chart {
    width: 100%;
  }
</style>