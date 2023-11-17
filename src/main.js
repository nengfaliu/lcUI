import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lcUI from '../widgetPackages/index'

const app = createApp(App)
app.use(lcUI)
app.mount('#app')
