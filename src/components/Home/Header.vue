<template>
<div id="navbar" class="container">
    <!--Navbar-->

    <nav class="navbar navbar-expand-lg ">
        <router-link tag="a" :to="{ name: 'Home'}">
            <img src="https://go2joy.vn/images/logo.jpg" alt="Logo" class="logo">
        </router-link>
        <button class="navbar-toggler" type="button" v-on:click="isHidden = !isHidden">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" v-if="!isHidden">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item padding-left-right active">
                    <router-link tag="a" class="font-size-title" :to="{ name: 'About'}">{{ $t('Home.about') }}</router-link>

                </li>
                <li class="nav-item padding-left-right">
                    <router-link tag="a" class="font-size-title" :to="{ name: 'Blog'}">{{ $t('Home.blog') }}</router-link>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                <el-autocomplete class="form-control style-width" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete>

                <button type="button" @click="show = !show" class="btn">
                    <img src="./../../assets/search.png" class="search" alt="">
                </button>
                <p> <a @click="changeLocale('vi')">
                        <img src="./../../assets/vi.png" alt="Logo" style="width:25px; margin:5px">
                    </a>

                    <a @click="changeLocale('en')">
                        <img src="./../../assets/en.png" alt="Logo" style="margin:5px" class="images-countr">
                    </a></p>
                <AlertDialog :active.sync="show" title="Hello world" content="Hello world" />
            </form>
        </div>
    </nav>
</div>
</template>

<script>
import Vue from 'vue'
import AlertDialog from "./AlertDialog.vue";
import i18n from './../../lang/i18n';
export default {
    name: 'Header',
    components: {
        AlertDialog
    },
    data() {
        return {
            links: [],
            state: '',
            timeout: null,
            show: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,

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
        loadAll() {
            return [{
                    "value": "Khoảng cách",
                    "link": "#"
                },
                {
                    "value": "Giá tăng dần",
                    "link": "#"
                },
                {
                    "value": "Giá giảm dần",
                    "link": "#"
                },
                {
                    "value": "Xếp hạng và Bình chọn",
                    "link": "#"
                },
                {
                    "value": "Hot nhất",
                    "link": "#"
                },
                {
                    "value": "Khuyến mãi",
                    "link": "#"
                },
                {
                    "value": "Khách sạn mới",
                    "link": "#"
                }
            ];
        },
        querySearchAsync(queryString, cb) {
            var links = this.links;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createFilter(queryString) {
            return (link) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        onSubmit() {
            console.log('Kết thúc!');
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        changeLocale(locale) {
            i18n.locale = locale;
        },

    },
    mounted() {
        this.links = this.loadAll();
    }

}
</script>

<style scoped>
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

.style-text-align-right {
    text-align: right;
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

.style-border-red {
    border: 1px solid red;
    border-radius: 10px;
}

.style-bold {
    font-weight: 600;
}

.style-canh-giua {
    display: flex;
    flex-direction: column;
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
    width: 60px;
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
#navbar a:hover {
    background-color: #ddd;
    color: black;
}

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

@media (max-width:991.98px) {
    .padding {
        padding: 1.5rem
    }
}

@media (max-width:767.98px) {
    .padding {
        padding: 1rem
    }
}

</style>
