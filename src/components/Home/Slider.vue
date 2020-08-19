<template>
<div>
    <carousel :centerMode="false" :perPage="1" :navigationEnabled="false" paginationColor="#7e7e7e" paginationPosition="bottom" :perPageCustom="[[480, 1], [768, 1], [1024, 1]]">
        <slide v-for="(data0, index) in data" :key="index">
            <div class="col-12">
                <div class="item style-slider">
                    <!-- <img :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data0" alt="image" /> </div> -->
                    <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/banner/11e3ab4a2bdeef74c177cc38472423fe.png" alt=""></div> 
            </div>
            <!-- <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
            </div>
            <div class="col-12">
                <div class="item style-slider">
                    <img src="https://go2joy.vn/images/banner_dang_ky_tai_khoan_min.png" alt="image" /> </div>
            </div> -->
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

</style>
