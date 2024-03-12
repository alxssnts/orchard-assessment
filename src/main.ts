import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
import VueEasyLightbox from 'vue-easy-lightbox/external-css'

createApp(App)
    .use(VueEasyLightbox)
    .mount('#app')
