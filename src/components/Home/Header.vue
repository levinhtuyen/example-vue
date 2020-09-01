<template>
<div id="navbar" class="container no-padding-top-bottom" style=" background-color:#545c64">
    <!--Navbar-->

    <nav class="navbar navbar-expand-lg ">
        <router-link tag="a" :to="{ name: 'Home'}">
            <img src="./../../assets/logo_app_home.png" alt="Logo" class="logo">
        </router-link>
        <button class="navbar-toggler" type="button" v-on:click="isHidden = !isHidden">
            <span class="navbar-toggler-icon"></span>
        </button>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff">
            <el-submenu index="2">
                <template slot="title" class="style-canh-giua"><span class=" style-font-family"> {{ $t('Home.about') }}</span></template>
                <el-submenu index="2-4">
                    <template slot="title"><span class="style-font-family">{{ $t('Home.tongquan') }}</span></template>
                    <el-menu-item index="2-4-1" class="">
                        <router-link class="color-trang" tag="a" :to="{ name: 'Vision'}">{{ $t('Home.vision') }}</router-link>
                    </el-menu-item>
                    <el-menu-item index="2-4-2" class="">
                        <router-link class="color-trang" tag="a" :to="{ name: 'About'}">{{ $t('Home.milestones') }} </router-link>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="2-2" class="">
                    <router-link tag="a" class="color-trang" :to="{ name: 'tongquan'}">{{ $t('Home.recruitment') }}</router-link>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="3" class="style-canh-giua"><a class="color-trang" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScCtwnRHg0BcfpQ_I2fKWAMY5CDwFytHWhx1oI8YlOA99wu2Q/viewform"> {{ $t('Home.contact') }}</a></el-menu-item>

            <el-menu-item index="4" class="style-canh-giua">
                <router-link class="color-trang" tag="a" :to="{ name: 'tongquan'}">{{ $t('Home.events') }}</router-link>
            </el-menu-item>
            <el-menu-item index="5" class="style-canh-giua"> <button type="button" class="btn "><img class="style-down" src="http://go2joy.vn/images/GooglePlay-white.png" alt=""></button></el-menu-item>
            <el-menu-item index="6" class="style-canh-giua"><button type="button" class="btn"><img class="style-down" src="http://go2joy.vn/images/appstore-white.png" alt=""></button></el-menu-item>
        </el-menu>
        <div class="line"></div>
        <form class="form-inline">
            <div class="md-form my-0">
                <button type="button" class="btn">
                    <router-link tag="a" :to="{ name: 'Search'}"> <img src="./../../assets/search.png" class="search" alt=""></router-link>
                </button>
                <el-dropdown>
                    <span class="el-dropdown-link style-menu-header">
                        {{ $t('Home.chooselanguage') }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item> <a @click="changeLocale('vi')" style="cursor: pointer;">
                                <span>Tiếng Việt</span><img src="./../../assets/vi.png" alt="Logo" style="width:25px; margin:5px">
                            </a></el-dropdown-item>
                        <el-dropdown-item><a @click="changeLocale('en')" style="cursor: pointer;">
                                <span>Tiếng Anh</span><img src="./../../assets/en.png" alt="Logo" style="margin:5px" class="images-countr">
                            </a></el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </form>

    </nav>
</div>
</template>

<script>
import Vue from 'vue'
// import AlertDialog from "./AlertDialog.vue";
import i18n from './../../lang/i18n';
export default {
    name: 'Header',
    components: {
        // AlertDialog
    },
    data() {
        return {
            // links: [],
            // state: '',
            // timeout: null,
            // show: false,
            // dialogFormVisible: false,
            // form: {
            //     name: '',
            //     region: '',
            //     date1: '',
            //     date2: '',
            //     delivery: false,
            //     type: [],
            //     resource: '',
            //     desc: ''
            // },
            // formLabelWidth: '120px',
            // dialogImageUrl: '',
            // dialogVisible: false,
            // disabled: false,
            activeIndex: '1',
            activeIndex2: '1',
            languages: [{
                flag: 'us',
                language: 'en',
                title: 'English'
            }, {
                flag: 'es',
                language: 'vi',
                title: 'Tiếng Việt'
            }],
            isHidden: false

        }
    },
    methods: {

        changeLocale(locale) {
            i18n.locale = locale;
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }

    },

}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
a {
    font-family: 'Quicksand', sans-serif;
}

.style-font-family {
    font-family: 'Quicksand', sans-serif;
}

.el-dropdown-link {
    cursor: pointer;
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

.color-trang {
    color: #ffffff;
}

.VueCarousel-pagination {
    position: absolute;
    display: none !important;
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

.margin-20 {
    margin: 20px 0 20px 0;
}

p,
span,
a:hover {
    text-decoration: unset;
}

.row {
    margin: 0;
    padding: 0;
    ;
}



.style-down {
    width: 100px;
    height: auto;
}
.style-down:hover{
    transform: scale(1.05);
}
p {
    margin-bottom: 0.3rem;
}

.VueCarousel-dot-container {
    display: none !important;
}

.style-qua-dem {
    font-size: 14px;
}

.style-gia {
    padding: 0 5px 0 5px;
    text-decoration: line-through;
}

.style-box-shadow {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.style-gia-giam {
    font-weight: 600;
}

.font-bold {
    font-weight: bold;
}

.style-text-align-right {
    text-align: right;
}

.style-menu-header {
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
}

.style-font-mar {
    font-size: 14px;
    margin: 10px;
    font-weight: 500;
}

.style-back-cam {
    background-color: #f2c1a2;
    color: #ff6400;
    padding: 5px;
    border-radius: 10px;
}

.style-padd-10 {
    padding: 10px 0 0px 0;
}

.style-back-xanh {
    background-color: #c2f2a9;
    color: #41b405;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-title-trang {
    color: #ffffff;
}

.owl-item {
    background: #fafafa !important;
    border-radius: 20px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important;
}

.no-padd {
    padding-right: 0;
    padding-left: 0;
}

.style-back-nau {
    background-color: #ced3cb;
    color: #000;
    padding: 5px;
    border-radius: 10px;
}

.style-back-cam {

    background: #ddc620;
    color: #fff;
    padding: 4px 5px 5px 5px;
    border-radius: 5px;

}

.style-color-xanh {
    color: #1d2dea;
}

.style-margin-0 {
    margin: 0;
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.style-margin-1 {
    margin: 0px;
}

.style-border-cam {
    border: 1px solid #f2c1a2;
    border-radius: 10px;
}

.style-back-red {
    background-color: red;
    padding: 2px 10px 2px 10px;
    color: #ffffff;
    border-radius: 10px;
}

.style-back-do {
    background-color: red;
    color: #fff;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

#navbar a:hover {
    background: none;
    border: none;
    transform: scale(1.05);

}

.style-border-red {
    border: 1px solid red;
    border-radius: 10px;
}

.style-bold {
    font-weight: 600;
}

.style-canh-giua {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hotel-item img {
    width: 305px;
    height: 245px;
}

.hotel-item {
    width: 100%;
    border-radius: 10px;
    height: 245px;
    display: block;
    overflow: hidden;
}

.no-padding-top-bottom {
    padding-top: 0;
    ;
    padding-bottom: 0;
}

.style-padd {
    padding: 15px;
}

.font-size-title {
    font-size: 14px;
}

.font-size-title-price {
    font-size: 14px;
}

.padding-p {
    padding: 5px
}

.padding-0-5-10 {
    padding: 20px 0 20px;
}

.padding {
    padding: 3rem
}

.el-carousel__container {
    height: 450px
}

.el-carousel__indicators {
    display: none;
}

.images-country {
    width: 20px;
    height: auto;
}

.form-control {
    padding: 0;
    height: unset;
    margin: 5px;
}

.margin-5 {
    margin: 5px;

}

.style-button {
    padding: 0;
    border: none;
    font-size: 18px;

}

.style-width {
    width: 50%;
}

.style-img {
    width: 200px;
    height: auto;
}

.collapse {
    display: block;
}

.logo {
    width: 155px;
}

.search {
    width: 50px;
}

.md-form img {
    margin: 0 20px
}

.navbar-light .navbar-toggler {
    border-color: rgb(255 253 253 / 10%);
}

.navbar-toggler-icon {
    width: 1.0em;
    height: 1.0em;
}

@media only screen and (max-width: 330px) {
    .font-size-title {
        font-size: 8px;
    }

}

@media only screen and (max-width: 480px) {
    .logo {
        width: 30px;
    }

    .style-back-cam {
        background: #ddc620;
        color: #fff;
        padding: 1px 1px 1px 1px;
        border-radius: 5px;
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .logo {
        width: 40px;
    }

    .search {
        width: 40px;
    }
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.search {
    width: 25px;
}

#navbar {
    overflow: hidden;
    background-color: #ffffff;
    transition: 0.4s;
    /* Adds a transition effect when the padding is decreased */
    /* Sticky/fixed navbar */
    width: 100%;
    top: 0;
    /* At the top */
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
}

/* Style the navbar links */
#navbar a {
    float: left;

    text-align: center;
    padding: 5px;
    text-decoration: none;

    line-height: 25px;
    border-radius: 4px;
}

/* Style the logo */
#navbar #logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
}

.navbar {
    padding: 0;
}

/* Links on mouse-over */
/* #navbar a:hover {
    background-color: #ddd;
    color: black;
} */

/* Style the active/current link */
#navbar a.active {
    background-color: dodgerblue;
    color: white;
}

/* Display some links to the right */
#navbar-right {
    float: right;
}

.padding-left-right {
    padding: 0 15px 0 15px
}

.logo {
    width: 140px;
}

@media only screen and (max-width: 480px) {
    .hotel-item img {
        width: 205px;
        height: 165px;

    }

    .hotel-item {
        width: 100%;
        height: 165px;

    }

    .padding-p {
        padding: 0px
    }

    .font-size-12 {
        font-size: 12px;
    }

    .padding-0-5-10 {
        padding: 5px 0 10px;
    }

    .style-back-do {

        background: red;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

    }

    .font-size-title-price {
        font-size: 11px;
    }

    .style-padd {
        padding: 5px;
    }

    .style-padd-10 {
        padding: 0;
    }

    .font-size-title {
        font-size: 9px;
    }

    .hotel-item img {
        border-radius: 10px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }

    .el-carousel__container {
        height: 135px
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .hotel-item img {
        width: 255px;
        height: 195px;

    }

    .el-carousel__container {
        height: 324px
    }

    .hotel-item {
        width: 100%;
        height: 195px;

    }

    .font-size-12 {
        font-size: 12px;
    }

    .padding-0-5-10 {
        padding: 5px 0 10px;
    }

    .style-back-do {
        background-color: red;
        color: #fff;
        padding: 2px 10px 2px 10px;
        border-radius: 10px;
    }

    .padding-p {
        padding: 0px
    }

    .font-size-title-price {
        font-size: 13px;
    }

    .style-padd {
        padding: 5px;
    }

    .style-padd-10 {
        padding: 0;
    }

    .font-size-title {
        font-size: 12px;
    }

    .hotel-item img {
        width: 255px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }
}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {
    .hotel-item img {
        width: 255px;
        height: 265px;

    }

    .logo {
        width: 155px;
    }

    .font-size-12 {
        font-size: 14px;
    }

    .padding-0-5-10 {
        padding: 15px 0 30px;
    }

    .style-back-cam {
        background-color: #eac34c;
        color: #ffffff;
        padding: 2px 10px 2px 10px;
        border-radius: 10px;
    }

    .style-back-nau {
        background-color: #f2f4f0;
        color: #000;
        padding: 5px;
        border-radius: 10px;
    }

    .font-size-title-qd {
        font-size: 12px;
    }

    .font-size-title-km {
        font-size: 18px;
    }

    .padding-p {
        padding: 10px
    }

    .font-size-title-price {
        font-size: 13px;
    }

    .style-padd {
        padding: 10px;
    }

    .style-padd-10 {
        padding: 10px;
    }

    .style-padd-top-bottom-10 {
        padding: 10px 0 10px 0
    }

    .font-size-title {
        font-size: 16px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }

    .style-back-do {
        background-color: #ffdbc4;
        color: #ff6e11;
        padding: 2px 10px 2px 10px;
        border-radius: 10px;
    }

    .item img {
        border-radius: 40px;
    }

    .style-down {
        width: 100px;
        height: auto;
    }

}

.style-color-blue {
    color: #1d2dea;
}

.hotel-item p {
    text-align: left;
}

/* .hotel-item .img img {
    height: 255px;
} */

.hotel-item .img {
    display: block;
    overflow: hidden;

    height: auto;
}

.style-img {
    width: 200px;
    height: auto;
}

.style-slider {
    display: block;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto 0px auto;
}

.style-slider img {
    width: 100%;
}

.stretch-card>.card {
    width: 100%;
    min-width: 100%
}

.owl-carousel .owl-wrapper-outer {
    display: block;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto 0px auto;
}

body {
    background-color: #f9f9fa
}

.flex {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.style-radius {
    display: block;
    overflow: hidden;
    border-radius: 40px;
    margin: 0 auto 0px auto;
}
</style>
