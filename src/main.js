import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire } from 'vuefire';
import { firebaseApp } from './firebaseConfig';
import VueGtag from 'vue-gtag-next';

const app = createApp(App);

app.use(VueFire, { firebaseApp });
app.use(
  VueGtag,
  {
    property: {
      id: import.meta.env.VITE_MEASUREMENT_ID,
    },
    enabled: import.meta.env.MODE === 'production',
  },
  router
);
app.use(router);

app.mount('#app')
