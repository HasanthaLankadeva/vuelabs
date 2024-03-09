/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/NewPage",
    component: () => import("@/pages/NewPage.vue"),
  },
  {
    path: "/NewPageNext",
    component: () => import("@/pages/NewPageNext.vue"),
  },
  {
    path: "/MainPage",
    component: () => import("@/pages/MainPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
