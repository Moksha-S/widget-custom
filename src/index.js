import { defineCustomElement } from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'

// Vue generates a new HTML element class from the component definition.
export const CustomChartWidget = defineCustomElement(App, {
  components: {
    apexchart: VueApexCharts
  }
})

customElements.define('custom-chart-widget', CustomChartWidget)
