<template>
<div id="app" ref="scrollTarget" class="test-scroll">
    <!-- <img src="./assets/logo.png"> -->
    <!-- style=" overflow: auto" -->
    <!-- <Home /> -->
    <router-view />
    <el-backtop>
        <span><i class="fas fa-angle-up fa-2x style-back-to-top"></i></span>
    </el-backtop>
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

    color: #2c3e50;
    

}
.container{
    background-color: #ffffff;
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

.title-color {
    color: #ff6400;
}

.style-back-to-top {
    color: #fff;
}

.el-backtop {
    background-color: #ff6400;
}

.el-backtop:hover {
    transform: scale(1.1);
    background-color: #ff6400;
}

.VueCarousel-pagination {
    position: absolute;
    display: none !important;
}

.el-input__inner {
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
