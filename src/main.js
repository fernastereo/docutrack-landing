import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire';
import { firebaseApp } from './firebaseConfig';
import VueGtag from 'vue-gtag';

const app = createApp(App);

app.use(VueFire, { firebaseApp });
app.use(router);
app.use(
  VueGtag,
  {
    appName: 'Docutrack - Landing Page',
    pageTrackerScreenviewEnabled: true,
    config: { id: import.meta.env.VITE_MEASUREMENT_ID },
  },
  router
);

app.mount('#app')
