import LineChart from './components/LineChart.vue'

const MyWidget = {
  install(app) {
    app.component('LineChart', LineChart)
  }
}

export default MyWidget
export { LineChart }
