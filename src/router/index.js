import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/users/CreateUser.vue')
    },
    {
      path: '/feed',
      name: 'Feed',
      component: () => import('../views/Threads/Feed.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('../views/users/UsersList.vue'),
      meta: {
        requiresAuth: true,
        adminOnly: true
      }
    },
    {
      path: '/thread/:_id',
      name: 'Thread',
      component: () => import('../views/Threads/Thread.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/library',
      name: 'Library',
      component: () => import('../views/Books/BooksList.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    alert('необходимо войти')
  } else {
    next() 
  }
});

export default router
