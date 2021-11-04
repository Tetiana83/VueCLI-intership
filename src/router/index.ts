import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
      { name: 'Activity', path: 'activity', component: () => import('../views/Activity.vue') },
      { name: 'Task', path: 'task', component: () => import('../views/Task.vue') },
      { name: 'Calendar', path: 'calendar', component: () => import('../views/Calendar.vue') },
      { name: 'Kanban', path: 'kanban', component: () => import('../views/Kanban.vue') },
      { name: 'Files', path: 'files', component: () => import('../views/Files.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
