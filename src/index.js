import { defineCustomElement } from 'vue'
import App from './App.vue'

// Vue generates a new HTML element class from the component definition.
const CustomWidget = defineCustomElement(App)

// Register the custom element so that it can be used as <dark-mode-switch>.
customElements.define('custom-chart-widget', CustomWidget)
