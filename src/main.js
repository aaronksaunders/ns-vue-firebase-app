import Vue from "nativescript-vue";
import App from "./App";
import store from "./store";
import router from "./router";

import HelloWorld from "./components/HelloWorld";
import LoginPage from "./components/LoginPage";

import "./styles.scss";

Vue.config.silent = false;
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

const firebase = require("nativescript-plugin-firebase");

Vue.prototype.$store = store;

new Vue({
  mounted() {
  },
  router,
  store,
  components: {},
  //render: h => h(App)
}).$start();

console.log(store)
store.dispatch("auth/checkAuth").then(
  user => {
    if (user) {
      router.replace("/");
      console.log("rendering home");
    } else {
      router.replace("/login");
      console.log("rendering login");
    }
  },
  error => {
    router.replace("/login");
    console.log("rendering login");
  }
);