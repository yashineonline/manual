import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import { router } from './router'
import './style.css'

registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    void registration?.update()
    window.addEventListener('focus', () => { void registration?.update() })
  }
})

createApp(App).use(router).mount('#app')
