import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("./views/home/index.vue")
    },
    {
      path: "/css",
      name: "css",
      component: () => import("./views/Css.vue")
    },
    {
      path: "/car/CarDetail",
      name: "CarDetail",
      component: () => import("./views/car/CarDetail.vue")
    }
  ]
});
