import { createWebHistory, createRouter } from "vue-router";
import Rain          from '../pages/Rain.vue'
import Stars         from '../pages/Stars.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Stars
  },
  {
    path: '/rain',
    name: 'rain',
    component: Rain
  },
  {
    path: '/stars',
    name: 'stars',
    component: Stars
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
