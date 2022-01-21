import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    component: () => import("../views/HomePage.vue"),
    name: "home",
    path: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
