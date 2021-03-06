import Vue from 'vue';
import Router from 'vue-router';
import Home from './src/components/Home.vue';
import Signup from './src/components/Signup.vue'
import Login from './src/components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});