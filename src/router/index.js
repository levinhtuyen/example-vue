import Vue from "vue";
import Router from "vue-router";
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import Home from "@/components/Home/Home.vue";
import DetailHotel from "@/components/DetailHotel/DetailHotel.vue";
import Category from "@/components/Category/Category.vue";
import About from "@/components/About/About.vue";
import Blog from "@/components/Blog/Blog.vue";
import ListPromotion from "@/components/Promotion/ListPromotion.vue";
import PromotionDetail from "@/components/Promotion/PromotionDetail.vue";
import Area from "@/components/Area/Area.vue";
import Search from "@/components/Search/Search.vue";
import Vision from "@/components/Vision/Vision.vue";
import Events from "@/components/Events/Events.vue";
import Recruitment from "@/components/Recruitment/Recruitment.vue";
Vue.use(ElementUI)
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
    },
    {
      path: "/listpromotion",
      name: "ListPromotion",
      component: ListPromotion
    }
    ,
    {
      path: "/promotiondetail",
      name: "PromotionDetail",
      component: PromotionDetail
    }
    ,
    {
      path: "/area",
      name: "Area",
      component: Area
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/vision",
      name: "Vision",
      component: Vision
    },
    {
      path: "/vision",
      name: "Vision",
      component: Vision
    },
    {
      path: "/events",
      name: "Events",
      component: Events
    },
    {
      path: "/recruitment",
      name: "Recruitment",
      component: Recruitment
    },
    
  ],
  scrollBehavior() {
        return {x: 0, y: 0}
    }
});
