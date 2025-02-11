import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import WaitlistView from '@/views/WaitlistView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/waitlist',
      name: 'waitlist',
      component: WaitlistView,
    },
  ],
});

export default router;
