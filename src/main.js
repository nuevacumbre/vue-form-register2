import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Opcional: Configuración global de Vuelidate si lo necesitas
app.config.globalProperties.$v = {}

app.mount('#app')