import Vue from "vue";
import App from "./App.vue";
import router from "vue-router";
import axios from "axios";
import store from "@/store";

axios.defaults.baseURL = "http://127.0.0.1:8001/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
