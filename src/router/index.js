import Vue from "nativescript-vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import LoginPage from "../components/LoginPage";

Vue.use(Router);

export default new Router({
  pageRouting: true,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HelloWorld
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    }
    // {
    //   path: '/:id',
    //   name: 'ItemDetail',
    //   component: ItemDetail
    // }
  ]
});
