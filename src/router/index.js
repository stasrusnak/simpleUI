import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: () => import('@/views/Button.vue')
    },
    {
      path: '/icons',
      name: 'Icons',
      component: () => import('@/views/Icons.vue')
    },
    {
      path: '/textarea',
      name: 'Textarea',
      component: () => import('@/views/TextArea.vue')
    },
    {
      path: '/scrollSpy',
      name: 'ScrollSpy',
      component: () => import('@/views/ScrollSpy.vue')
    }

  ]
})

export default router
