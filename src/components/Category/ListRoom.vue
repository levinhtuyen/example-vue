<template>
<div >
  
        <div class="col-12 ">
            <div class=" scroll-container" >
                <div class="col-6 float-left" v-for="(dataHotel, index) in list" :key="index">
                    <div class="col-12 style-box-shadow  margin-15-tb no-padd">

                        <div class="col-11 demo-image__error ">
                            <div class="hotel-item-cate1">
                                <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: dataHotel.sn }}">
                                    <el-image class="hotel-item-cate" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+dataHotel.imagePath" lazy placeholder="Images loading...">
                                        <div slot="error">
                                            <img class="hotel-item-cate" src="./../../assets/loading_big.png" alt="">
                                        </div>
                                    </el-image>
                                    <!-- <img class="img-lazy" v-lazy="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+dataHotel.imagePath"> -->

                                </router-link>

                            </div>
                            <div class="giam-gia-soc">
                                <p> &nbsp;<i class="fas fa-bolt"></i> &nbsp; Gảm sốc | Còn lại 4 phòng</p>
                            </div>
                            <div class="loai-hotel">
                                <p> &nbsp;<i class="fab fa-gripfire"></i> &nbsp;Khách sạn nổi bật</p>
                            </div>
                        </div>
                        <div class="col-12 style-padd padding-tb-20">
                            <div class="col-12">
                                <p class="padding-p style-bold font-size-title-name limit-title">{{ dataHotel.name }}</p>
                            </div>

                            <div class="col-12">
                                <div class="col-5">
                                    <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> {{ dataHotel.averageMark }} ({{ dataHotel.totalFavorite }}) </span></a></p>
                                    <p class="padding-p "><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                                    <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> {{ dataHotel.districtName }} </span></a></p>
                                </div>

                                <div class="col-7 ">
                                    <div class="float-right style-border-cam margin-10">
                                        <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                    </div>
                                    <br>
                                    <div class="float-right style-padd-top-bottom-10 margin-10">
                                        <p><span class="style-qua-dem font-size-title-qd"> Qua đêm </span><span class="font-size-title-qd "> &nbsp; VND &nbsp;</span><span class="style-gia font-size-title-price">{{ dataHotel.lowestPriceOvernight }}</span><span class="style-gia-giam font-size-title-km margin-left-right-10">{{ dataHotel.lowestOneDay }}</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="col-12 canh-giua">
            <el-pagination v-show="total>0" :page.sync="data.page" :limit.sync="data.limit" @current-change="getList" @pagination="getList" :page-size="data.limit" :pager-count="11" layout="prev, pager, next" :total="total">
            </el-pagination>
        </div>
 
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue';
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
import axios from 'axios';
export default {
    name: 'ListRoom',

    data() {
        return {
            data: {
                page: 1,
                limit: 10,
                importance: undefined,
                name: undefined,
                type: undefined,
                category: [''],
                sort: '+id',
                status: undefined,
                imagePath: undefined,
                averageMark: 0,
                districtName: undefined,
                totalFavorite: 0,
                lowestPriceOvernight: 0,
                lowestOneDay: 0,
            },
            list: {

            },
            total: 0,
            listLoading: true,

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
            let data1 = data.detailCollectionList;
            
            let HotHotel = data1[1];
            console.log('data 1 : ', data1)
            let dataGet = HotHotel.hotelFormList
            console.log('this.data list room: ', this.data)
            this.total = dataGet.length || 0;
            const curPos = this.data.limit * (this.data.page - 1);
            this.list = dataGet.slice(curPos, curPos + this.data.limit);
            console.log('data  pagination', this.list);
            this.oldList = this.list.map(v => v.id);
            this.newList = this.oldList.slice();
            this.listLoading = false;
        },
        handleFilter() {
            this.data.page = 1;
            this.getList();
        },
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
    float: left !important;
}

.container {
    background-color: #ffffff;
}

.canh-giua {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hotel-item img {
    width: 100%
}

.style-btn-dat-ngay {
    background: #ffffff;
    width: 100px;
    font-size: 10px;
    border-radius: 5px;
    border: none;
    text-decoration: underline;
    color: #ff6401;
}

.hotel-item img {
    width: 100%;
    height: auto;
}

.no-padd {
    padding-right: 0;
    padding-left: 0;
}

.hotel-item-cate1 {
    width: 100%;
    height: 256px;
    border-radius: 10px;
    display: block;
    overflow: hidden;
}

.hotel-item-cate {
    width: 100%;

    height: auto;

}

.font-size-title-name {
    font-size: 18px;
    text-transform: uppercase;
}

.style-back-cam {
    background-color: #eac34c;
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-back-nau {
    background-color: #f2f4f0;
    color: #000;
    padding: 5px;
    border-radius: 10px;
}

.font-size-title-qd {
    font-size: 12px;
}

.font-size-title-km {
    font-size: 18px;
}

.padding-p {
    padding: 5px
}

.font-size-title-price {
    font-size: 13px;
    text-decoration: line-through;

}

.style-padd {
    padding: 10px;
}

.style-padd-10 {
    padding: 10px;
}

.style-padd-top-bottom-10 {
    padding: 10px 0 10px 0
}

.font-size-title {
    font-size: 12px;
}

.style-box-shadow {
    border-radius: 10px;
    background: #ffffff;
}

.style-back-do {
    background-color: #ffdbc4;
    color: #ff6e11;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.margin-10 {
    margin-top: 10px
}

.hotel-item-cate img {
    width: 100%;
    height: 265px;
}

.giam-gia-soc {
    position: absolute;
    top: 20px;
    background: red;
    opacity: 0.9;
    border-radius: 0 10px 10px 0;
    font-size: 20px;
    color: #ffffff;
    padding: 5px;
    background-color: red;
    background: -moz-linear-gradient(right, #f05634 60%, red 40%);
    background: -o-linear-gradient(right, #f05634 60%, red 40%);
    background: -ms-linear-gradient(right, #f05634 60%, red 40%);
    background: -webkit-gradient(linear, right top, left top, color-stop(0.4, #f05634), color-stop(0.6, red));
}

.loai-hotel {
    position: absolute;
    top: 70px;
    background: #fa679b;
    opacity: 0.9;
    border-radius: 0 10px 10px 0;
    font-size: 20px;
    color: #ffffff;
    padding: 5px;
    background-color: #fa679b;
    background: -moz-linear-gradient(right, #fa679b 60%, #f81364 40%);
    background: -o-linear-gradient(right, #fa679b 60%, #f81364 40%);
    background: -ms-linear-gradient(right, #fa679b 60%, #f81364 40%);
    background: -webkit-gradient(linear, right top, left top, color-stop(0.4, #fa679b), color-stop(0.6, #f81364));
}

.style-back-cam {
    padding: 2px 5px 2px 5px;
}

.margin-15-tb {
    margin: 30px 0px 30px 0px;
}

.padding-tb-20 {
    padding: 20px 0 20px 0;
}

.margin-left-right-10 {
    margin: 0 5px 0 5px;
}

.style-box-shadow {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.style-bold {
    font-weight: 600;
}

.font-size-title-name {
    font-size: 14px;
}

.style-back-xanh {
    background-color: #c2f2a9;
    color: #41b405;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-back-nau {
    background-color: #f2f4f0;
    color: #000;
    padding: 5px;
    border-radius: 10px;
}

.no-padd {
    padding-right: 0;
    padding-left: 0;
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

.style-back-red {
    background-color: red;
    padding: 2px 10px 2px 10px;
    color: #ffffff;
    border-radius: 10px;
}

.style-back-do {
    background-color: red;
    color: #fff;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-border-red {
    border: 1px solid red;
    border-radius: 10px;
}

.style-bold {
    font-weight: 600;
}

.style-canh-giua {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (max-width: 480px) and (min-width: 320px) {

    .style-btn-dat-ngay {
        background: #ffffff;
        width: 80px;
        font-size: 10px;
        border-radius: 5px;
        border: none;
        text-decoration: underline;
        color: #ff6401;
    }

    .font-size-title-name {
        font-size: 9px;
    }

    .font-size-title {
        font-size: 9px;
    }

    .margin-15-tb {
        margin: 15px 0 15px 0;
    }

    .hotel-item img {
        width: 100%;
        height: 265px;
    }

    .hotel-item {
        width: 100%;
        height: 110px;
    }

    .hotel-item img {
        height: 110px;
    }

}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {
    .hotel-item-cate1 {
        width: 100%;
        height: 256px;
        border-radius: 10px;
        display: block;
        overflow: hidden;
    }

    .hotel-item-cate {
        width: 100%;

        height: auto;

    }

    .font-size-title-name {
        font-size: 18px;
        text-transform: uppercase;
    }

    .style-back-cam {
        background-color: #eac34c;
        color: #ffffff;
        padding: 2px 10px 2px 10px;
        border-radius: 10px;
    }

    .style-back-nau {
        background-color: #f2f4f0;
        color: #000;
        padding: 5px;
        border-radius: 10px;
    }

    .font-size-title-qd {
        font-size: 12px;
    }

    .font-size-title-km {
        font-size: 16px;
    }

    .padding-p {
        padding: 5px
    }

    .font-size-title-price {
        font-size: 12px;
        text-decoration: line-through;

    }

    .style-padd {
        padding: 10px;
    }

    .style-padd-10 {
        padding: 10px;
    }

    .style-padd-top-bottom-10 {
        padding: 10px 0 10px 0
    }

    .font-size-title {
        font-size: 12px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }

    .style-back-do {
        background-color: #ffdbc4;
        color: #ff6e11;
        padding: 2px 10px 2px 10px;
        border-radius: 10px;
    }

    .margin-10 {
        margin-top: 10px
    }

    .hotel-item-cate img {
        width: 100%;
        height: 265px;
    }

    .giam-gia-soc {
        position: absolute;
        top: 20px;
        background: red;
        opacity: 0.9;
        border-radius: 0 10px 10px 0;
        font-size: 20px;
        color: #ffffff;
        padding: 5px;
        background-color: red;
        background: -moz-linear-gradient(right, #f05634 60%, red 40%);
        background: -o-linear-gradient(right, #f05634 60%, red 40%);
        background: -ms-linear-gradient(right, #f05634 60%, red 40%);
        background: -webkit-gradient(linear, right top, left top, color-stop(0.4, #f05634), color-stop(0.6, red));
    }

    .loai-hotel {
        position: absolute;
        top: 70px;
        background: #fa679b;
        opacity: 0.9;
        border-radius: 0 10px 10px 0;
        font-size: 20px;
        color: #ffffff;
        padding: 5px;
        background-color: #fa679b;
        background: -moz-linear-gradient(right, #fa679b 60%, #f81364 40%);
        background: -o-linear-gradient(right, #fa679b 60%, #f81364 40%);
        background: -ms-linear-gradient(right, #fa679b 60%, #f81364 40%);
        background: -webkit-gradient(linear, right top, left top, color-stop(0.4, #fa679b), color-stop(0.6, #f81364));
    }
}
</style>
