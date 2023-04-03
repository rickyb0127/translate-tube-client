import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue';
import './assets/global.css';

import HomeView from './components/HomeView';
import WatchVideo from './components/WatchVideo';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/watch',
    name: 'WatchVideo',
    component: WatchVideo,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')