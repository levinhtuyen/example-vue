<template>
<div>
    <carousel :centerMode="false" :perPage="1" :navigationEnabled="false" paginationColor="#7e7e7e" paginationPosition="bottom" :perPageCustom="[[480, 1], [768, 1], [1024, 1]]">
        <slide v-for="(data0, index) in data" :key="index">
            <div class="col-12">
                <div class="item style-slider">
                    <!-- <img :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data0" alt="image" /> </div> -->
                    <img src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg" alt="">
                     <div class="whatever">
                         <p class="style-count-image">1/23</p>
                     </div>
                </div>
            </div>

        </slide>
    </carousel>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import axios from 'axios';
Vue.use(VueCarousel);
export default {
    name: 'SliderDetail',
    data() {
        return {
            data: {

            },
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
            } = await axios.get('http://192.168.0.36:8080/hotelapi/home/view/findHomePageInfo?userType=1');

            let listBanner = data.bannerFormList;
            //console.log('this.data : ', this.data);

            this.data = listBanner.map(v => v.imagePath);
            // console.log('this.data.bannerslide', this.data);
        },
    },
}
</script>

<style scoped>
.whatever {
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(1, #ffffff),
        color-stop(0, rgba(0,0,0,0))
    );
    background-image: -o-linear-gradient(bottom, #ffffff 0%, rgba(0,0,0,0) 100%);
    background-image: -moz-linear-gradient(bottom, #ffffff 0%, rgba(0,0,0,0) 100%);
    background-image: -webkit-linear-gradient(bottom, #ffffff 0%, rgba(0,0,0,0) 100%);
    background-image: -ms-linear-gradient(bottom, #ffffff 0%, rgba(0,0,0,0) 100%);
    background-image: linear-gradient(to top, #ffffff 0%, rgba(0,0,0,0) 100%);
    height:150px;
    position:relative;
    width:100%;
    top:-150px;
}
.style-count-image{
    width: 5%;
    background: #333333;
    float: right;
    color: #ffffff;
    opacity: 0.9;
    margin: 20px;
    border-radius: 10px;
    text-align: center;
}
</style>
