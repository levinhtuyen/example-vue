<template>
<div id="app" ref="scrollTarget" class="test-scroll" style=" background: #f9f9fa">
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

    background: #d5d5d5;
}

.container {
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
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: #ff6400 !important;
}

.el-menu--horizontal>.el-submenu:focus .el-submenu__title,
.el-menu--horizontal>.el-submenu:hover .el-submenu__title:hover {
    background: #ff6400 !important;
        color: #ffffff;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    background: #ff6400 !important;
        color: #ffffff;
}
.el-submenu__title:focus,
.el-submenu__title:hover {
    background: #ff6400 !important;
        color: #ffffff;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):active {
    background: #ff6400 !important;
        color: #ffffff;
}
.el-menu--horizontal>.el-menu-item.is-active {
       background: #ff6400 !important;
        color: #ffffff;
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title,
.el-menu--horizontal>.el-submenu:active .el-submenu__title:active {
    background: #ff6400 !important;
        color: #ffffff;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):active, .el-menu--horizontal>.el-submenu .el-submenu__title:active{
    background: #ff6400 !important;
        color: #ffffff;
}
.el-submenu__title:focus,
.el-submenu__title:hover {
    background: #ff6400 !important;
        color: #ffffff;
}

.el-submenu__title:hover {
    background: #ff6400 !important;
    color: #ffffff;
}
.el-submenu__title:active {
    background: #ff6400 !important;
      color: #ffffff;
}

.el-submenu__title:active {
    background: #ff6400 !important;
      color: #ffffff;
}
</style>
