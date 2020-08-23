<template>
<div class="container">
    <b-row>
    <p class="style-bold font-size-12">HÔM NAY BẠN CẦN GÌ ?</p>

    <div class="col-12 float-left padding-0-5-10">
        <div class="col-6 style-color-xanh font-size-12">{{ $t('Home.hotdeal') }}</div>
        <div class="col-6 style-text-align-right font-size-12">
             <span style="cursor: pointer;" @click="chooseSpecitalHotel(dataHotel)">Xem tất cả</span>
            </div>
    </div>
    <div class="col-12" style="margin-bottom:6px">
        <carousel 
        :centerMode="false"
        :perPage="1"
        
        :navigationEnabled="false" 
        :autoplay="true" :interval="4000"
        :perPageCustom="[[480, 1], [768, 2], [1024, 2]]">
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">SAMI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/sa-mi-hotel.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">HUỲNH ANH HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/HUYNH-ANH-HOTEL.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">REDDOORZ NEAR TAN SON NHAT AIRPORT 3</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/REDDOORZ-NEAR-TAN-SON-NHAT-AIRPORT-3.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">HÀ NỘI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">SAMI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">SAMI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/sa-mi-hotel.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">HUỲNH ANH HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/HUYNH-ANH-HOTEL.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">REDDOORZ NEAR TSN AIRPORT 3</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/REDDOORZ-NEAR-TAN-SON-NHAT-AIRPORT-3.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">HÀ NỘI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
                        </div>
                    </div>

                </div>
            </slide>
            <slide >
                <div class="col-11 style-box-shadow">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-8 style-padd">
                        <p class="style-bold font-size-title">SAMI HOTEL</p>
                        <p class="padding-p"> <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.2 (31) </span></a></p>
                        <p class="padding-p"><a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a></p>
                        <p class="padding-p"><a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> Quận 7 </span></a></p>
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">250.000</span><span class="style-gia-giam font-size-title">155.000</span></p>
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
import { eventBus } from './../../main.js'
Vue.use(VueCarousel);
import axios from 'axios';
export default {
    name: 'HotDeal',

    data() {
        return {
            data: {

            },
           
        }
    },
    // props: ['this.data'],
    async created() {
        axios.defaults.headers = {
            'deviceid': 'device_for_web',
        }
        let {
            data
        } = await axios.get('http://192.168.0.36:8080/hotelapi/home/view/findHomePageInfo');

        let data1 = data.detailCollectionList;
        let HotHotel = (data1[0]);
        let dsHotHotel = HotHotel.hotelFormList
        this.data = dsHotHotel
    },
     methods: {
        chooseSpecitalHotel(dataHotel) {
            this.$emit('dsHotel', dataHotel)
            console.log('1234')
            this.$store.dispatch({
                type: 'updateDataRoom',
                data: this.data
            });
            this.$router.push({
                name: 'Category',
                params: {
                    Sn: 0
                }
            })
        }
    }

}
</script>

<style scoped>

</style>
