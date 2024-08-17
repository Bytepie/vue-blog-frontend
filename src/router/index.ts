import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "../views/auth/AuthPage.vue";
import Home from "@/views/home/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Home,
    },
    {
      path: "/authpage",
      name: "AuthPage",
      component: AuthPage,
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("../views/auth/LoginPage.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("../views/auth/RegisterPage.vue"),
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
