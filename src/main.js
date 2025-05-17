import { createApp } from 'vue'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import router from './router'
import '@ionic/core/css/ionic.bundle.css'

const app = createApp(App)

app.use(IonicVue)
app.component('IonApp', IonApp)
app.component('IonRouterOutlet', IonRouterOutlet)
app.use(router)
app.mount('#app')
