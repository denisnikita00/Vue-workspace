import Vue from "vue";
import VeeValidate from "vee-validate";

import { store } from "./_store";
import { router } from "./router";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.use(VeeValidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
