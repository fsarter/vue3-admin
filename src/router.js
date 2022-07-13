import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import('./views/settings/Account.vue'),
      },
      {
        path: 'notification',
        name: 'Notification',
        component: () => import('./views/settings/Notification.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
