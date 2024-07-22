import { defineCustomElement } from 'vue'
import App from './App.vue'

// Vue generates a new HTML element class from the component definition.
export const CustomChartWidget = defineCustomElement(App)

customElements.define('custom-chart-widget', CustomChartWidget)
