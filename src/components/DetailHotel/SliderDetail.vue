<template>
<div class="container">
    <carousel :navigationEnabled="false" :perPageCustom="[[480, 1], [768, 1], [1024, 1]]">
        <slide v-for="(data0, index) in data" :key="index">
            <div class="col-12">
                <div class="item style-slider">
                    <!-- <img :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data0" alt="image" /> </div> -->
                    <img src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg" alt="">

                </div>
            </div>

        </slide>
    </carousel>
    <div class="whatever">
        <p class="style-count-image">1/23</p>
    </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';

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
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findHomePageInfo?userType=1');

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
    background-image: -webkit-gradient(linear,
            left top,
            left bottom,
            color-stop(1, #ffffff),
            color-stop(0, rgba(0, 0, 0, 0)));
    background-image: -o-linear-gradient(bottom, #ffffff 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -moz-linear-gradient(bottom, #ffffff 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -webkit-linear-gradient(bottom, #ffffff 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -ms-linear-gradient(bottom, #ffffff 0%, rgba(0, 0, 0, 0) 100%);
    background-image: linear-gradient(to top, #ffffff 0%, rgba(0, 0, 0, 0) 100%);
    height: 150px;
    position: relative;
    width: 100%;
    top: -150px;
}

.style-count-image {
    width: 5%;
    background: #333333;
    float: right;
    color: #ffffff;
    opacity: 0.9;
    margin: 20px;
    font-size: 18px;
    border-radius: 10px;
    text-align: center;
}

.style-slider {
    max-height: 748px;
    border-radius: 0px;
}

@media only screen and (max-width: 350px) and (min-width: 300px) {
    .style-slider {
        max-height: 230px;
    }

    .style-count-image {
        width: 50px;
        margin: 5px;
        border-radius: 0px;
        font-size: 12px;
    }

    .whatever {
        height: 50px;
        top: -50px;
    }
}

@media only screen and (max-width: 400px) and (min-width: 351px) {
    .style-slider {
        max-height: 270px;
    }

    .style-count-image {
        width: 50px;
        margin: 5px;
        border-radius: 0px;
        font-size: 12px;
    }

    .whatever {
        height: 50px;
        top: -50px;
    }
}

@media only screen and (max-width: 480px) and (min-width: 401px) {
    .style-slider {
        max-height: 310px;
    }

    .style-count-image {
        width: 50px;
        margin: 5px;
        border-radius: 0px;
        font-size: 12px;
    }

    .whatever {
        height: 50px;
        top: -50px;
    }
}

@media only screen and (max-width: 2560) and (min-width: 1920px) {
    .style-slider {
        max-height: 310px;
    }

    .style-count-image {
        width: 50px;
        margin: 5px;
        border-radius: 0px;
        font-size: 12px;
    }

    .whatever {
        height: 50px;
        top: -50px;
    }
}
</style>
