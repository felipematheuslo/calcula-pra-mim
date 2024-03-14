import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/conversordejuros',
      component: () => import('../views/ConversorJuros.vue')
    },
    {
      path: '/mercado',
      component: () => import('../views/ExpectativaMercado.vue')
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router