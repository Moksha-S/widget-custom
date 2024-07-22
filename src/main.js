import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import { defineCustomElement } from 'vue'

const AppElement = defineCustomElement(App)

customElements.define('my-app', AppElement)
app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
