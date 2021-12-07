import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home")
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products")
  },
  {
    path: "/forum",
    name: "Forum",
    component: () => import("../views/Forum")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
