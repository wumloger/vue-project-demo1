import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import mylist from '../views/mylist.vue'
import main from '../views/main.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home/main'
    },
    {
      path: '/home',
      component: home,
      redirect: '/home/main',
      children: [{
        path: '/home/mylist',
        component: mylist
      },
      {
        path: '/home/main',
        component: main
      }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    }

  ]
})

export default router
