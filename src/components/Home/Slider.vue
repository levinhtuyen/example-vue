<template>
<div class="container no-padd padd-top">
    <div>
        <!-- <el-carousel :autoplay="true" :loop="true" :interval="3000" direction="horizontal">
            <el-carousel-item class="border-radius" v-for="(data1, index) in data" :key="index">
                <div class="item style-slider">
                    <img img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath" alt="image" />
                </div>
            </el-carousel-item>
        </el-carousel> -->
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(data1, index) in data" :key="index">
                    <img img class="img-lazy res-ponsive border-radius" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath" alt="image" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</div>
</template>

<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios';
export default {
    name: 'Slider',

    data() {
        return {
            data: {

            },
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }

        }
    },

    created() {
        this.getList();
    },
    methods: {
        async getList() {
            axios.defaults.headers = {
                'deviceid': 'device_for_web',
            }

            let {
                data
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findHomePageInfo');

            let listBanner = data.bannerFormList;
            //console.log('this.data : ', this.data);

            this.data = listBanner
            console.log('this.data.bannerslide', this.data);
        },
    },
}
</script>

<style scoped>
.style-slider {
    display: block;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto 0px auto;
}

.border-radius {
    border-radius: 40px;
}

.res-ponsive {
    width: 100%;
   

}

.style-slider img {
    width: 100%;
    
}

.padd-l-r-10 {
    padding: 0 10px 0 10px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.padd-top {
    padding-top: 30px
}
</style>
