<template>
<div class="container">
    <carousel :centerMode="false" :autoplay="true" :interval="3000" :perPage="1"  :navigationEnabled="false" paginationColor="#7e7e7e" paginationPosition="bottom" :perPageCustom="[[480, 1], [768, 1], [1024, 1]]">
        <slide class="padd-l-r-10">

            <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
            </div>
        </slide>
        <slide class="padd-l-r-10">
            <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_dang_ky_tai_khoan_min.png" alt="image" /> </div>
            </div>
        </slide>
         <slide>

            <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
            </div>
        </slide>
        <slide class="padd-l-r-10">
            <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_dang_ky_tai_khoan_min.png" alt="image" /> </div>
            </div>
        </slide>
    </carousel>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
export default {
    name: 'Slider',
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
.padd-l-r-10{
    padding: 0 10px 0 10px;
}
</style>
