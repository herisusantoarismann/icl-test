import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/Login.vue';
import RegisterPage from '../pages/Register.vue';
import DashboardPage from '../pages/Dashboard.vue';
import store from '../vuex/store';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/', component: DashboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/' && !store.state.token) {
    next('/login');
  } else next();
});

export default router;
