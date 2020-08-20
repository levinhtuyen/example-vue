<template>
<div>

    <div class="col-12 float-left padding-0-5-10">
        <div class="col-6 style-color-xanh font-size-12">ƯU ĐÃI ĐẶT BIỆT</div>
        <div class="col-6 style-text-align-right font-size-12"><a href="#">Xem tất cả</a></div>
    </div>
    <div class="col-12">
        <carousel :centerMode="false"
								:perPage="1"
								:navigationEnabled="false"
								paginationColor="#7e7e7e"
								paginationPosition="bottom" 
                                :perPageCustom="[[480, 1], [768, 2], [1024, 2]]"> 
            <slide v-for="(data1, index) in data" :key="index">
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                             <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt="">
                             <!-- <router-link  tag="a"  :to="{ name: 'DetailHotel', params: { Sn: data1.sn }}"><img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""></router-link> -->
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">{{ data1.name }}</p>
                        <p class="padding-p"> <a @click="chooseSpecitalHotel(data1)" class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> {{ data1.averageMark }} ({{ data1.totalFavorite }}) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> {{ data1.districtName }} </span></a></p>
                        <div class="float-right style-border-cam">
                            <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">{{ data1.lowestPriceOvernight }}</span><span class="style-gia-giam font-size-title">{{ data1.lowestOneDay }}</span></p>
                        </div>
                    </div>

                </div>
            </slide>

        </carousel>
    </div>

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
    name: 'Specital',
data() {
        return {
            data: {

            },
        }
    },

    async created() {
        axios.defaults.headers = {
            'deviceid': 'device_for_web',
        }
        let {
            data
        } = await axios.get('http://192.168.0.36:8080/hotelapi/home/view/findHomePageInfo');

        let data1 = data.detailCollectionList;
       // console.log('data1', data1);
        // Lấy Obj Hotel giá sốc
        let HotHotel = (data1[1]);
        //console.log('dsHotHotel', HotHotel);
        // Lấy list Hotel gia sốc
        let dsHotHotel = HotHotel.hotelFormList
        this.data = dsHotHotel
       // console.log('ds Hot Hotel this.data : ', this.data);
    },
    methods: {
        chooseSpecitalHotel(data1){
            this.$emit('dsHotel',data1)
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
