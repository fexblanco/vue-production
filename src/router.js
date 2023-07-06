import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("./views/HomePage.vue"), name: "home" },
  { path: "/quienes-somos", component: () => import("./views/QuienesSomos.vue"), name: "quienes-somos" },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes,
});

export default router;
