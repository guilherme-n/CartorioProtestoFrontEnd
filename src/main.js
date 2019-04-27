import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   // const publicPages = ['/login'];
//   // const authRequired = !publicPages.includes(to.path);
//   const token = window.localStorage.getItem('token');
  
//    if (token == "" && to.path != "/login") {
//     console.log(to);
//     next('/login');
//   }

//   next();
// })

/*router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})*/

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})