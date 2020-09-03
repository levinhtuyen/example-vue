<template>
<div class="container padding-top">

    <!-- <p class="style-bold font-size-12">HÔM NAY BẠN CẦN GÌ ?</p> -->


    <div class="col-12" style="margin-bottom:6px">
        <carousel 
        :centerMode="false" 
        :perPage="1" 
        :navigationEnabled="false" 
        paginationColor="#7e7e7e" 
        paginationPosition="bottom"
        :autoplay="true" :interval="3000"
        :perPageCustom="[[480, 1], [768, 2], [1024, 2]]">
            <slide >
                <div class="col-11 style-box-shadow style-margin">
                    <div class="col-4" style="float:left">
                        <div class="hotel-item">
                            <router-link tag="a"  :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/hotel/806_1525842113614/2_806_66_1525842113795.jpg" alt=""></router-link>
                        </div>
                    </div>
                    <div class="col-7 style-padd">
                        <div class="col-6"><p class="style-bold font-size-title-name">FlashSale - Standard Room</p></div>
                        <div class="col-6"><button class="style-btn-dat-ngay"><i class="fas fa-calendar-check"></i> Đặt ngay</button></div>
                        <div class="col-12">
                        
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                        </div>
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
                    <div class="col-7 style-padd">
                        <div class="col-6"><p class="style-bold font-size-title-name">FlashSale - LUXURY Room</p></div>
                        <div class="col-6"><button class="style-btn-dat-ngay"><i class="fas fa-calendar-check"></i> Đặt ngay</button></div>
                        <div class="col-12">
                        
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                        </div>
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
                    <div class="col-7 style-padd">
                        <div class="col-6"><p class="style-bold font-size-title-name">FlashSale - VIP Room</p></div>
                        <div class="col-6"><button class="style-btn-dat-ngay"><i class="fas fa-calendar-check"></i> Đặt ngay</button></div>
                        <div class="col-12">
                        
                        <div class="float-right style-border-red">
                            <p class="style-margin-1 font-size-title"><a class="style-back-do"><i class="fas fa-bolt"></i> <span> Giảm sốc </span></a><a></a><span class="style-font-mar font-size-title"> Còn lại 1 phòng</span></p>
                        </div>
                        <br>
                        <div class="float-right style-padd-10">
                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                        </div>
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

Vue.use(VueCarousel);
import axios from 'axios';
export default {
    name: 'FlashSaleRoom',

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
        } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findHomePageInfo');
        let data1 = data.detailCollectionList;
        let HotHotel = (data1[1]);
        this.data = HotHotel.hotelFormList
    },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.style-margin{
    margin-bottom:3px
}
.padding-top{
    padding-top: 40px;
}
 .style-btn-dat-ngay {
        background: #ffffff;
        width: 100px;
        font-size: 10px;
        border-radius: 5px;
        border:none;
        text-decoration: underline ;
        color: #ff6401;
    }
@media only screen and (max-width: 480px) and (min-width: 320px) {

    .style-btn-dat-ngay {
        background: #ffffff;
        width: 80px;
        font-size: 10px;
        border-radius: 5px;
        border:none;
        text-decoration: underline ;
        color: #ff6401;
    }
    .font-size-title-name{
        font-size: 12px;
    }
    .font-size-title {
        font-size: 9px;
    }

}
</style>
