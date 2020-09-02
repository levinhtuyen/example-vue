<template>
<div class="container" loading.fullscreen="true">
    <!-- <Header /> -->
    <SliderDetail />
    <InforHotel />
    <FlashSaleRoom />
    <ListRoom />
</div>
</template>

<script>
// import Header from "./../Home/Header.vue"
import SliderDetail from "./SliderDetail.vue"
import InforHotel from "./InforHotel.vue"
import FlashSaleRoom from "./FlashSaleRoom.vue"
import ListRoom from "./ListRoom.vue"
import {
    Loading
} from 'element-ui';
export default {
    name: 'DetailHotel',
    components: {
        // Header,
        SliderDetail,
        InforHotel,
        FlashSaleRoom,
        ListRoom,
    },
    data() {
        return {
            data: {

            },
            fullscreenLoading: false,
            loading: true

        }
    },
    mounted() {
  let loading = this.$loading({ fullscreen: true })
  setTimeout(() => { loading.close() }, 1000)
},
    methods: {

        fullscreen() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 2000);
        },
    }

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

.container {
    background: #ffffff;
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

.style-back-cam {
    background-color: #eac34c;
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-back-cam:hover {
    background-color: #ff6400;
    color: #ffffff;
    cursor: pointer;
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
        background: #ffffff;
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
        background: #ffffff;
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
</style>
