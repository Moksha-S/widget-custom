import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import router from './router'
import vueCustomElements from 'vue-custom-element'
import { LineChart } from '.'
// import { defineCustomElement } from 'vue'
// import LineChart from './components/LineChart.vue'

// const MyWidgetElement = defineCustomElement(LineChart)

// customElements.define('my-widget', MyWidgetElement)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(vueCustomElements)
app.mount('#app')

app.customElement('my-widget', LineChart)
