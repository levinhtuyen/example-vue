<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <Home /> -->
    <router-view/>
  </div>
</template>

<script>
import Home from "./components/Home/Home.vue"
import Category from '@/components/Category/Category.vue'
export default {
  name: 'App',
   components: {
        Home,
        
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}
h1,
h2,
h3,
h4,
h5,
h6 p,
span,
a {
    font-family: 'Quicksand', sans-serif;
}

.col-1,
.col-2,
.col-3,
.col-4.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
    float: left !important;
}

.VueCarousel-pagination {
    position: absolute;
    display: none !important;
}

.el-input__inner{
    height: 30px !important;
}
.float-left {
    float: left;
}

.float-right {
    float: right;
}

.row {
    margin-bottom: 15px;
    margin-top: 15px;
}
</style>
