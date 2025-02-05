import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire';
import { firebaseApp } from './firebaseConfig';

const app = createApp(App);

app.use(VueFire, { firebaseApp });
app.use(router)

app.mount('#app')
