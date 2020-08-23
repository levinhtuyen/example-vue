<template>
<div class="container">
    <b-row>
        <div class="col-12 float-left padding-0-5-10">
            <div class="col-6 style-color-xanh font-size-12">{{ $t('Home.hotelnew') }}</div>
            <div class="col-6 style-text-align-right font-size-12">
                <span style="cursor: pointer;" @click="chooseSpecitalHotel(dataHotel)">Xem tất cả</span></div>
        </div>
        <div class="col-12">
            <carousel :centerMode="false" :perPage="1" :navigationEnabled="false" paginationColor="#7e7e7e" paginationPosition="bottom" :autoplay="true" :interval="5500" :perPageCustom="[[480, 1], [768, 2], [1024, 2]]">
                <slide>
                    <div class="col-11 style-box-shadow">
                        <div class="col-4" style="float:left">
                            <div class="hotel-item">
                                <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                                <!-- <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""> -->
                                <router-link @click="chooseSpecitalHotel(dataHotel)" tag="a" :to="{ name: 'DetailHotel', params: { Sn: 4 }}"><img src="https://go2joy.vn/images/hotel/maivila-pmh-hotel.jpg" alt=""></router-link>
                            </div>
                        </div>
                        <div class="col-8 style-padd">
                            <p class="style-bold font-size-title">Mai Villa Phú Mỹ Hưng</p>
                            <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> 4.6 (65) </span></a></p>
                            <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                            <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 9 </span></a></p>
                            <div class="float-right style-border-cam">
                                <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 4 phòng</span></p>
                            </div>
                            <br>
                            <div class="float-right style-padd-10">
                                <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">250.000</span></p>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide>
                    <div class="col-11 style-box-shadow">
                        <div class="col-4" style="float:left">
                            <div class="hotel-item">
                                <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                                <!-- <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""> -->
                                <router-link @click="chooseSpecitalHotel(dataHotel)" tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/maivila-svh-hotel.jpg" alt=""></router-link>
                            </div>
                        </div>
                        <div class="col-8 style-padd">
                            <p class="style-bold font-size-title">Mai Villa Airport</p>
                            <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> 4.6 (65) </span></a></p>
                            <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                            <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 2 </span></a></p>
                            <div class="float-right style-border-cam">
                                <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 4 phòng</span></p>
                            </div>
                            <br>
                            <div class="float-right style-padd-10">
                                <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">250.000</span></p>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide>
                    <div class="col-11 style-box-shadow">
                        <div class="col-4" style="float:left">
                            <div class="hotel-item">
                                <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                                <!-- <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""> -->
                                <router-link @click="chooseSpecitalHotel(dataHotel)" tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/cuong-minh-hotel.jpg" alt=""></router-link>
                            </div>
                        </div>
                        <div class="col-8 style-padd">
                            <p class="style-bold font-size-title">Cường Minh Hotel</p>
                            <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> 4.6 (65) </span></a></p>
                            <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                            <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                            <div class="float-right style-border-cam">
                                <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 4 phòng</span></p>
                            </div>
                            <br>
                            <div class="float-right style-padd-10">
                                <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">250.000</span></p>
                            </div>
                        </div>

                    </div>
                </slide>
                <slide>
                    <div class="col-11 style-box-shadow">
                        <div class="col-4" style="float:left">
                            <div class="hotel-item">
                                <!-- <img class="img-lazy" :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath"> -->
                                <!-- <img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""> -->
                                <router-link @click="chooseSpecitalHotel(dataHotel)" tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/thien-thao-hotel.jpg" alt=""></router-link>
                            </div>
                        </div>
                        <div class="col-8 style-padd">
                            <p class="style-bold font-size-title">Thiên Thảo Hotel</p>
                            <p class="padding-p"> <a @click="chooseSpecitalHotel(dataHotel)" class="style-back-cam font-size-title"><i class="fas fa-star"></i> <span> 4.6 (65) </span></a></p>
                            <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                            <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 6 </span></a></p>
                            <div class="float-right style-border-cam">
                                <p class="style-margin-1 font-size-title"><a class="style-back-cam"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 4 phòng</span></p>
                            </div>
                            <br>
                            <div class="float-right style-padd-10">
                                <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">250.000</span></p>
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
