import { createWebHistory, createRouter } from "vue-router";
import Home          from '../pages/Home.vue'
import Rain          from '../pages/Rain.vue'
import Stars         from '../pages/Stars.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
