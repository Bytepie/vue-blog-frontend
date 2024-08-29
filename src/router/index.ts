import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "../views/auth/AuthPage.vue";
import Home from "@/views/home/HomePage.vue";
import AdminLayout from "@/components/layouts/AdminLayout.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: Home,
    },
    {
      path: "/login",
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
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "/admin",
          name: "dashboard",
          component: () => import("../views/admin/DashboardPage.vue"),
        },
        {
          path: "/create-post",
          name: "create-post",
          component: () => import("../views/admin/CreatePostPage.vue"),
        },
        {
          path: "/post-lists",
          name: "posts-list",
          component: () => import("../views/admin/PostListPage.vue"),
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
