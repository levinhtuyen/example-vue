<template>
<div >
    <div class="block">
        <el-carousel :autoplay="true" :loop="true" :interval="5000" direction="horizontal">
            <el-carousel-item class="border-radius" v-for="(data1, index) in data" :key="index">
                <div class="item style-slider">
                    <img img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath" alt="image" />
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</div>
</template>

<script>



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
            } = await axios.get('http://192.168.0.36:8080/hotelapi/home/view/findHomePageInfo');

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
.border-radius{
    border-radius: 20px;
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

</style>
