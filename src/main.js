import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'

console.log(createApp)

createApp(App).use(router).use(store).mount('#app')
