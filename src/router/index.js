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
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import('@/views/Checkbox.vue')
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => import('@/views/Switch.vue')
    },
    {
      path: '/colors',
      name: 'Color palette',
      component: () => import('@/views/Colors.vue')
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import('@/views/Progress.vue')
    },
    {
      path: '/radiobutton',
      name: 'Radiobutton',
      component: () => import('@/views/RadioButton.vue')
    },{
      path: '/inputs',
      name: 'Text fields',
      component: () => import('@/views/Inputs.vue')
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: () => import('@/views/Tabs.vue')
    },
    {
      path: '/scrollSpy',
      name: 'ScrollSpy',
      component: () => import('@/views/ScrollSpy.vue')
    }

  ]
})

export default router
