<template>
<div>
    <Header />
    <BlogHotel />
</div>
</template>

<script>
import Vue from 'vue'
import Header from "./../Home/Header.vue"
import BlogHotel from "./BlogHotel"
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/blog',
    name: "Blog",
    components: {
        Header,BlogHotel

    },
    data() {
        return {

        }
    },
};
</script>

<style>
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
    background: #eeeeee;
    border-radius: 20px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.style-gia-giam {
    font-weight: 700;
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
    color: #1e5302;
    padding: 5px;
    border-radius: 10px;
}

.owl-item {
    background: #fafafa !important;
    border-radius: 20px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important;
}

.col-lg-6,
.col-md-6,
.col-sm-6,
.col-xs-6 {
    width: 50%;
}

.col-4 {
    width: 33.3%;
}

.col-3 {
    width: 25%;
}

.col-2 {
    width: 20%;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
    padding: 0;
    margin: 0;
}
img{
    width: 100%;
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

.style-back-doback-do a {
    background-color: red;
}

.style-border-red {
    border: 1px solid red;
    border-radius: 5px;
}

.style-bold {
    font-weight: 600;
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

.style-back-do {

    background: red;
    color: #fff;
    padding: 2px 3px 2px 3px;
    border-radius: 5px;

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
        font-size: 10px;
    }

    .hotel-item img {
        border-radius: 10px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #eeeeee;
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .hotel-item img {
        width: 255px;
        height: 195px;

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

        background: #ddc620;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

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
        background: #eeeeee;
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

    .style-back-do {

        background: #ddc620;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

    }

    .padding-p {
        padding: 10px
    }

    .font-size-title-price {
        font-size: 18px;
    }

    .style-padd {
        padding: 10px;
    }

    .style-padd-10 {
        padding: 10px;
    }

    .font-size-title {
        font-size: 16px;
    }

    .hotel-item img {
        width: 255px;
        height: 265px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #eeeeee;
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

.padding {
    padding: 3rem
}

.vc_row {
    -webkit-transition: opacity .5s ease;
    -o-transition: opacity .5s ease;
    transition: opacity .5s ease;
    overflow: hidden;
}

.vc_custom_1531852688581 {
    border-top-width: 1px !important;
    padding-top: 100px !important;
    padding-bottom: 70px !important;
    background-color: #f1f0ed !important;
    border-top-color: #ebeae9 !important;
    border-top-style: solid !important;
}

.vc_row {
    margin-left: -15px;
    margin-right: -15px;
}

.vc_column_container {
    padding-left: 0;
}

.vc_row-has-fill>.vc_column_container>.vc_column-inner {
    padding-top: 0 !important;
}

.vc_column_container>.vc_column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}

.main_title {
    position: relative;
    margin-bottom: 50px;
}

.text-center {
    text-align: center;
}

.place-item {
    margin-bottom: 30px;
    position: relative;
}

.place-item figure {
    border-radius: 4px;
    overflow: hidden;
}

.entry figure {
    max-width: 100%;
    position: relative;
}

.zoom-hover,
.zoom-image-hover img {
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
}

.entry img,
.entry video {
    height: auto;
    max-width: 100%;
}

.place-item .place-name {
    position: absolute;
    bottom: 15px;
    left: 20px;
    z-index: 9;
}

.place-item .place-name h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}

.second-place .place-item figure,
.third-place .place-item figure,
.fourth-place .place-item figure {
    max-height: 170px;
    overflow: hidden;
}

.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9 {
    float: left;
}

.row:before {
    display: table;
    content: " ";
}

.entry figure {
    max-width: 100% !important;
    position: relative;
}

.row {
    margin-right: -15px;
    margin-left: -15px;
}

:after,
:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

@media (min-width: 1200px) {

    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9 {
        float: left;
    }
}

@media (min-width: 992px) {
    .col-md-6 {
        width: 50%;
    }
}

.slide-right-hover img:hover {
    -webkit-transform: translate3d(3%, 0, 0) scale(1.06);
    transform: translate3d(3%, 0, 0) scale(1.06);
}

.news-grid-item figure img {
    width: 100%;
}

.slide-right-hover img {
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
    z-index: 9;
}

.entry img,
.entry video {
    height: auto;
    max-width: 100%;
}

.slide-right-hover {
    position: relative;
    overflow: hidden;
}

.news-grid-item {
    margin-bottom: 30px;
}
  #btn-container-tpZh8 {
    font-size: 16px;
    font-weight: bold;
}

#btn-tpZh8 {
    background: rgba(255, 255, 255, 0.01);
    border-style: solid;
    border-color: #deb668;
    border-width: 2px;
    color: #deb668;
    padding: 6px 12px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
}

#btn-tpZh8:hover {
    background: #deb668;
    border-color: #deb668;
    color: #ffffff;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.10);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transform: translateY(-2px);

}

#btn-tpZh8 i {
    right: 14px;
    margin-top: 0;
    vertical-align: middle;
    border-radius: 50%;
    line-height: 20px;
    height: 20px;
    width: 20px;
    background: #deb668;
    margin-left: 8px;
    margin-right: 0;
    color: #ffffff;
    font-size: 8px;
    text-align: center;
}

#btn-tpZh8:hover i {
    background: #ffffff;
    color: #deb668;
}
.room-item .room-image .room-price {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 14px;
    text-align: center;
    padding: 0px 10px;
    background: #ffffff;
    color: #606060;
    border-radius: 2px;
    font-weight: 700;
    z-index: 120;
    border-top: none;
    border-left: none;
}
.small-item .room-item .room-details {
    padding: 7px 10px;
}
.room-item .room-details {
    position: relative;
    padding: 12px 10px;
    background: #fff;
    border: 1px solid #eaeaea;
    border-top: none;
    text-align: center;
}
.room-item .room-details .room-title {
    display: inline-block;
    line-height: 20px;
    font-weight: 600;
    -webkit-transition: .3s;
    transition: .3s;
}
.small-item .room-item .room-services {
    padding: 3px 0;
}
.room-item .room-services .room-service-item {
    display: inline-block;
    padding: 5px 12px;
    border: 1px dashed #dedede;
    margin: 5px;
    border-radius: 2px;
    cursor: pointer;
    vertical-align: middle;
}
.room-item .room-services .room-service-item i {
    font-size: 14px;
    display: inline-block;
    float: left;
}
.room-item .room-services {
    text-align: center;
}
.room-item .room-services {
    position: absolute;
    padding: 10px 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 0 auto;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s;
    transition: .3s;
    z-index: 9;
}
.gradient-overlay:after, .gradient-overlay-hover:after, .gradient-overlay-slider rs-slide:after {
    background: -webkit-gradient(linear, left bottom, right top, from(#0870f9), to(#ed6392));
    background: linear-gradient(to top right, #0870f9 0%, #ed6392 100%);
}
a:hover, a:focus, a:active {
    color: #b69854;
    text-decoration: none;
    outline: none;
    background: none;
}
.room-item .room-details .room-title a {
    font-size: 18px;
    font-weight: 700;
}
.slide-right-hover img:hover {
    -webkit-transform: translate3d(3%, 0, 0) scale(1.06);
    transform: translate3d(3%, 0, 0) scale(1.06);
}
.slide-right-hover img {
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    -webkit-transform: scale(1.06);
    transform: scale(1.06);
    z-index: 9;
}
.room-item .room-services.active {
    opacity: 1;
    visibility: visible;
}
.room-item {
    margin-bottom: 30px;
    position: relative;
}
.entry figure {
    max-width: 100%;
    position: relative;
}
.room-image1 {
    height: 425px;
}
</style>
