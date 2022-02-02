import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/index.vue";
import Quizizz from "../pages/quizizz.vue";
import Edpuzzle from "../pages/edpuzzle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/quizizz",
    name: "Quizizz",
    component: Quizizz,
  },
  {
    path: "/edpuzzle",
    name: "Edpuzzle",
    component: Edpuzzle,
  },
  {
    path: "/brainly",
    name: "Brainly",
    component: () => import("../pages/brainly.vue"),
  },
  {
    path: "/testportal",
    name: "Testportal",
    component: () => import("../pages/testportal.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
