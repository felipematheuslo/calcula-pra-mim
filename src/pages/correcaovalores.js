import { createApp } from 'vue'
import App from '../views/CorrecaoValores.vue'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

// Firebase
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
const firebaseConfig = {
  apiKey: "AIzaSyC25RrawS1aR1Zj9F-smpMr09B0-t62hR0",
  authDomain: "calcula-pra-mim-webapp.firebaseapp.com",
  projectId: "calcula-pra-mim-webapp",
  storageBucket: "calcula-pra-mim-webapp.appspot.com",
  messagingSenderId: "326336197070",
  appId: "1:326336197070:web:528cd37718f7ba034afb9f",
  measurementId: "G-4B24RHWK6R"
};
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

createApp(App).use(analytics).use(vuetify).mount('#app')