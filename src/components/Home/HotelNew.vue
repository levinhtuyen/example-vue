<template>
<div class="container">
    <b-row>
        <div class="col-12 float-left padding-0-5-10">
            <div class="col-6 style-color-xanh font-size-12">{{ $t('Home.hotelnew') }}</div>
            <div class="col-6 style-text-align-right font-size-12">
                <span style="cursor: pointer;color: #007bff;" @click="chooseSpecitalHotel(dataHotel)">{{ $t('Home.seeall') }}</span></div>
        </div>
         <div class="col-12">
            <carousel :centerMode="false" :loop="true" :perPage="1" :navigationEnabled="false" paginationColor="#7e7e7e" paginationPosition="bottom" :perPageCustom="[[480, 1], [768, 2], [1024, 2]]">
                <slide v-for="(dataHotel, index) in data" :key="index">
                    <div class="col-11 style-box-shadow  no-padd margin-20">
                        <div class="col-4  no-padd" style="float:left">
                            <div class="hotel-item">
                                <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                                <!-- <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""> -->
                                <span @click="chooseSpecitalHotel(dataHotel)"><img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""></span>
                            </div>
                        </div>
                        <div class="col-8 style-padd">
                            <p class="font-size-title">{{ dataHotel.name }}</p>
                            <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> {{ dataHotel.averageMark }} ({{ dataHotel.totalFavorite }}) </span></a></p>
                            <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                            <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> {{ dataHotel.districtName }} </span></a></p>
                            <!-- <div class="float-right style-padd-top-bottom-10">
                                <p class=" font-size-title "><a class="style-back-xanh " style="color:#ffffff">Tặng giờ</a></p>
                            </div> -->
                            <div class="float-right style-border-cam">
                                <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                            </div>
                            <br>
                            <div class="float-right style-padd-top-bottom-10">
                                <p><span class="style-qua-dem font-size-title-qd"> Qua đêm </span><span class="font-size-title-qd"> VND</span><span class="style-gia font-size-title-price">{{ dataHotel.lowestPriceOvernight }}</span><span class="style-gia-giam font-size-title-km">{{ dataHotel.lowestOneDay }}</span></p>
                            </div>
                        </div>

                    </div>
                </slide>

            </carousel>
        </div>
    </b-row>
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
    name: 'HotelNew',
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
        let HotHotel = (data1[4]);
        let dsHotHotel = HotHotel.hotelFormList
        this.data = dsHotHotel

    },
    methods: {
        chooseSpecitalHotel(dataHotel) {
            this.$emit('dsHotel', dataHotel)
  
            this.$store.dispatch({
                type: 'updateDataRoom',
                data: this.data
            });
            this.$router.push({
                name: 'Category',
                params: {
                    Sn: 4
                }
            })
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
