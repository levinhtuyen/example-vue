import Vue from "vue";
import Router from "vue-router";
import Vuex from 'vuex'
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home/Home.vue";
import DetailHotel from "@/components/DetailHotel/DetailHotel.vue";
import Category from "@/components/Category/Category.vue";
import About from "@/components/About/About.vue";
import Blog from "@/components/Blog/Blog.vue";
Vue.use(Router);
Vue.use(Vuex)
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
    },
    {
      path: "/category/:Sn",
      name: "Category",
      component: Category
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    }
  ]
});
