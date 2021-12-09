<template>
  <canvas 
    :id="chartId"
    class="bar-chart"
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
    }
  },
  mounted() {
    const ctx = document.getElementById(this.chartId).getContext('2d')
    this.myChart = new Chart(ctx, this.makeChartOptions())
  },
  methods: {
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
          aspectRatio: 2.2,
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
}
</script>

<style lang='scss' scoped>
  .bar-chart {
    width: 100%;
  }
</style>