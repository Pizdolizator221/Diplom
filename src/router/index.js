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
      path: '/thread/:_id',
      name: 'Thread',
      component: () => import('../views/Threads/Thread.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
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
})

export default router
