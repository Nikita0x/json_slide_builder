import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import JsonEditorVue from 'json-editor-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(JsonEditorVue)
app.use(router)

app.mount('#app')
