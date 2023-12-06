import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
      },
    ],
  },
  {
    path: '/public',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: 'expose', // donc là nous sommes bien sur :3000/public/expose
        name: 'expose',
        component: () => import('@/views/DefineExpose.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '', // donc là nous sommes bien sur :3000/admin/
        name: 'adminHome',
        component: () => import('@/views/AdminHome.vue'),
      },
      {
        path: 'create-example', // et là nous sommes bien sur :3000/admin/create-example
        name: 'adminPage1',
        component: () => import('@/views/AdminContent.vue'),
      },
      {
        path: 'answer', // et là nous sommes bien sur :3000/admin/create-example
        name: 'answer',
        component: () => import('@/views/DynAnswer.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
