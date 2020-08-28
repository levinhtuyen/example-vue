<template>
<div>
    <Header />
    <div class="container">

        <div class="padd-top-20" v-for="(data1, index) in data" :key="index">
            <div class="col-lg-6 col-md-6 col-sm-12 max-height-blog float-left">
                <div class=" style-box-shadow ">
                    <div class="hotel-item">
                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"  alt=""></router-link>
                        <div class="whatever">
                            <p class="style-count-image"><a href="#"> Áp dụng ngay</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-12 style-can-giua ">
            <div class="block">
                <span class="demonstration">&nbsp;&nbsp;&nbsp;</span>
                <el-pagination small layout="prev, pager, next" :total="100">
                </el-pagination>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import Vue from 'vue'
import Header from "../Home/Header.vue"
import axios from "axios"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/listPromotion',
    name: "ListPromotion",
    components: {
        Header
    },
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
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findHomePageInfo');
            let listBanner = data.collectionList;
            this.data = listBanner[0]
            console.log('list banner top hotel', this.data);
        },
    },

};
</script>

<style scoped>
.hotel-item img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.margin-15-tb {
    margin: 15px 0 15px 0;
}

.padd-top-20 {
    padding-top: 50px;
}

.whatever {
    position: relative;
    width: 100%;
    top: -90px;
    background-color: chocolate;
}

.style-count-image {
    float: right;
    color: #ffffff;
    opacity: 0.7;
    border-radius: 10px;
    text-align: center;
    background-color: #ff6400;
    top: 90px;
    margin: 15px;
    padding: 5px;
}

.style-count-image:hover {
    opacity: 1;
    color: #ffffff;
}

.style-count-image a {
    color: #ffffff;
    text-decoration: blink;
}

.style-can-giua {
    display: flex;
    justify-content: center;
}

.hotel-item p {
    text-align: left;
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .hotel-item img {
        width: 100%;
        height: auto;
        border-radius: 15px;
    }

    .padd-top-20 {
        padding-top: 30px;
    }
}

@media only screen and (max-width: 480px) {

    .hotel-item img {
        width: 100%;
        display: block;
        overflow: hidden;
        height: auto;

    }

    /* .max-height-blog{
         max-height: 185px; 
    }*/
    .whatever {
        top: -30px;
    }

    .style-count-image {
        opacity: 1;
        top: 0;
        padding: 0 4px 0 4px;
        border-radius: 5px;
        margin: 0 7px 0 0;
    }

    .font-size-12 {
        font-size: 12px;
    }

    .style-count-image a {
        font-size: 9px;
    }

    .padd-top-20 {
        padding-top: 20px;
    }
}
</style>
