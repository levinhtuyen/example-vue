import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home";
import DetailHotel from "@/components/DetailHotel";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detailhotel/:Sn",
      name: "DetailHotel",
      component: DetailHotel
    }
  ]
});
