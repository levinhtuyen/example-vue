<template>
<div class="container">
    <b-row>
        <div class="col-12 " style="margin-bottom:6px">
            <div class=" scroll-container" v-for="(dataHotel, index) in list" :key="index">
                <div class="col-6 float-left" >
                    <div class="col-12 style-box-shadow  margin-15-tb">

                        <div class="col-12 demo-image__error">
                            <div class="hotel-item">
                                <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: dataHotel.sn }}">
                                    <el-image  :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+dataHotel.imagePath" lazy="true" placeholder="Images loading...">
                                        <div slot="error" class="image-slot">
                                        <img class="hotel-item" src="./../../assets/loading_big.png" alt="">
                                        </div>
                                    </el-image>
                                    <!-- <img class="img-lazy" v-lazy="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+dataHotel.imagePath"> -->
                                </router-link>
                            </div>
                        </div>
                        <div class="col-12 style-padd padding-0-5-10">
                            <div class="col-12">
                                <p class="style-bold font-size-title-name limit-title">{{ dataHotel.name }}</p>
                            </div>

                            <div class="col-12">
                                <p class="padding-p"> <a class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> {{ dataHotel.averageMark }} ({{ dataHotel.totalFavorite }}) </span></a></p>
                                <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                                <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> {{ dataHotel.districtName }}</span></a></p>
                            </div>
                            <div class="col-12">

                                <div class="float-right ">
                                    <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">{{ dataHotel.lowestPriceOvernight }}</span><span class="style-gia-giam font-size-title">{{ dataHotel.lowestOneDay }}</span></p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="float-right style-padd-10">
                                    <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="col-12 canh-giua">
            <el-pagination v-show="total>0" :page.sync="data.page" :limit.sync="data.limit"
      @current-change="getList" @pagination="getList" :page-size="data.limit" :pager-count="11" layout="prev, pager, next" :total="total">
            </el-pagination>
        </div>
    </b-row>
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
            } = await axios.get('http://192.168.0.36:8080/hotelapi/home/view/findHomePageInfo');
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
.canh-giua {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hotel-item img {
    width: 100%
}

.col-6 {
    width: 100%;

    padding-right: 5px;
    padding-left: 5px;
}

.style-btn-dat-ngay {
    background: #eeeeee;
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
.margin-15-tb {
    margin: 30px 0 30px 0;
}

@media only screen and (max-width: 480px) and (min-width: 320px) {

    .style-btn-dat-ngay {
        background: #eeeeee;
        width: 80px;
        font-size: 10px;
        border-radius: 5px;
        border: none;
        text-decoration: underline;
        color: #ff6401;
    }

    .font-size-title-name {
        font-size: 12px;
    }

    .font-size-title {
        font-size: 9px;
    }

    .margin-15-tb {
        margin: 15px 0 15px 0;
    }
    .hotel-item {
        width: 100%;
        height: 110px;
    }
    .hotel-item img{
        height: 110px;
    }
}
</style>
