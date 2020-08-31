<template>
<div>
    <b-row>
        <div class="col-5 style-can-giua padd-top-botton-10">

            <p class="style-address  style-can-giua">{{ $t('Home.chooseaddress') }}</p>
        </div>
        <div class="col-7 style-right padd-top-botton-10">
            <button type="button"  class="btn style-mar-pad-0 " @click="show = !show" ><i style="color:#ff6400" class="fas fa-map-marker-alt"></i>
                Thành phố Hồ Chí Minh <i style="color:#000" class="fas fa-angle-down"></i>
            </button>

            <AlertDialog :active.sync="show" title="Hello world" content="Hello world" />
        </div>
        <!-- <div class="col-3">
            <div class="hotel-item ">
                <div class="style-giua-img">
                    <img src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg">
                </div>
                <p class="style-p padd-top-botton-10">Gần bạn</p>
            </div>
        </div> -->
        <div class="col-4">
            <div class="hotel-item1">
                <div class="style-giua-img">
                  <router-link tag="a" :to="{ name: 'Category'}"> <img class="img-lazy style-res" src="https://go2joy.vn/images/hotel/NOVIA-HOTEL.jpg">
                  </router-link>
                </div>
                <p class="style-p padd-top-botton-10">{{ $t('Home.riverside') }}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="hotel-item1">
                <div class="style-giua-img">
                    <router-link tag="a" :to="{ name: 'Category'}">
                    <img class="img-lazy style-res" src="https://go2joy.vn/images/hotel/A-IN-HOTEL-GLAMOUR-HOTEL.jpg">
                    </router-link>
                </div>
                <p class="style-p padd-top-botton-10">{{ $t('Home.travelHotel') }}</p>
            </div>
        </div>
        <div class="col-4">
            <div class="hotel-item1">
                <div class="style-giua-img">
                    <router-link tag="a" :to="{ name: 'Category'}">
                    <img class="img-lazy style-res" src="https://go2joy.vn/images/hotel/EVA-ADAM-HOTEL.jpg">
                    </router-link>
                </div>
                <p class="style-p padd-top-botton-10">{{ $t('Home.love') }}</p>
            </div>
        </div>

    </b-row>
</div>
</template>

<script>
import axios from 'axios'
import AlertDialog from "./AlertDialog.vue";
export default {
    name: 'Address',
    components: {
        AlertDialog
    },
    data() {
        return {
            show: false,
            data1: [],
            data2: [],
            data3: []

        };

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
            // let listBanner = data.circleCollectionList;
            // this.data1 = listBanner[0]
            // this.data2 = listBanner[1]
            // this.data2 = listBanner[2]
            // console.log('list banner top hotel', this.data);
        },
    },
}
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
}

.style-giua-img {
    display: flex;
    justify-content: center;
}

.style-res {
    height: auto;
    width: 100%;
}

.padd-top-botton-10 {
    padding-bottom: 20px;
    padding-top: 20px;
}

.style-img {
    width: 200px;
    height: auto;
}

.style-right {
    float: right;
    text-align: right;
}

.style-address {
    font-weight: 600;
    text-align: left;
}

.style-mar-pad-0 {
    margin: 0;
    padding: 0;
}

.style-can-giua {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.float-left {
    float: left;
}

.btn:focus,
.btn.focus {
    box-shadow: none;
}

.hotel-item .img img {
    height: 205px;
}

.hotel-item img {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    height: 205px;
    width: 205px;
}

.hotel-item1 img {
    display: block;
    overflow: hidden;
    border-radius: 50%;
    height: 205px;
    width: 205px;
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.hotel-item p {
    text-align: center;
}

.hotel-item1 p {
    text-align: center;
}

.style-p {
    font-size: 14px;
    width: 100%;
}

@media (max-width:480px) {
    .hotel-item img {
        width: 50px;
        height: 50px;
    }

    .hotel-item1 img {
        width: 50px;
        height: 50px;
    }

    .style-p {
        font-size: 10px;
        width: 100%;
        text-align: center;
    }

    .hotel-item1 {
        width: 100%;
        height: 90px;
    }

    .style-address {
        font-size: 12px;
    }

    .btn {
        font-size: 12px;
    }
}

@media (max-width:768px)and (min-width:767px) {
    .hotel-item img {
        width: 150px;
        height: 150px;
    }

    .hotel-item1 img {
        width: 150px;
        height: 150px;
    }
}
</style>
