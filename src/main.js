import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";
import iView from "iview";
import "iview/dist/styles/iview.css";
import * as filters from "./filters";

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.use(iView);

import api from "@/api/index";
Vue.config.productionTip = false;
Vue.prototype.api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
