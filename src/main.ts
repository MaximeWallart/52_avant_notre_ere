import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import fr from '../locales/fr.json'
import en from '../locales/en.json'

import 'virtual:windi.css'

const i18n = createI18n({
    locale: 'fr',
    messages: {
        fr,
        en
    }
})

const app = createApp(App)

app.use(router)

app.use(i18n)

app.mount('#app')
