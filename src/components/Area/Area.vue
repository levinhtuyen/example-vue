<template>
<div>
    <Header />
    <div class="container">

        <!-- <el-collapse v-model="activeNames" @change="handleChange" v-for="(dataTinh, index) in data" :key="index">
            <el-collapse-item v-bind:title="dataTinh.name" v-bind:name="dataTinh.sn">
                <div>
                    <el-collapse v-model="activeNames" @change="handleChange" v-for="(dataHuyen, index) in dataTinh" :key="index">
                        <el-collapse-item v-bind:title="dataHuyen.name" v-bind:name="dataHuyen.sn">

                        </el-collapse-item>
                    </el-collapse>
                </div>

            </el-collapse-item>
        </el-collapse> -->
        <div class="col-4">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto; padding:0">
                <li v-for="(dataTinh, index) in data" :key="index" class="infinite-list-item"><button class="btn btn-light" style="width:100%">{{ dataTinh.name }}</button></li>
            </ul>

        </div>
      
    </div>
</div>
</template>

<script>
import Vue from 'vue'
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./../Home/Header.vue"
import axios from 'axios';
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/area',
    name: "Area",
    components: {
        Header

    },
    data() {
        return {
            data: [],
            snTinh: '',
            data1: [],
            data2: [],
            activeNames: ['1'],
            count: 0,

        }
    },

    async created() {
        axios.defaults.headers = {
            'deviceid': 'device_for_web',
        }
        let dataTinh = await axios.get('http://192.168.0.36:8080/hotelapi/area/view/findAllProvinceCity');
        let data = dataTinh.data;

        console.log('data Tinh', data)
        for (let i in data) {
            let dsHuyen = await this.getDanhSachTinh(data[i]);
            console.log('dsHuyen', dsHuyen);
            data[i].dsHuyen = dsHuyen;
            for (let j in dsHuyen) {
                dsHuyen[j].dsHotel = [];
            }
        }
        this.data = data;

    },
    methods: {
        load() {
            this.count += 2
        },
        async getDanhSachTinh(data) {
            axios.defaults.headers = {
                'deviceid': 'device_for_web',
            }
            let dsHuyen = [];
            const result = await axios.get('http://192.168.0.36:8080/hotelapi/area/view/findAllDistrictInProvince?provinceSn=' + data.sn)
            this.dsHuyen = result
            return result.data;
        },
        // async onSelectHuyen(dataHuyen) {
        //     if (dataHuyen.dsHotel.length == 0) {
        //         dataHuyen.dsHotel = await this.getDanhSachHotel(dataHuyen);
        //     }
        // },
        async getDanhSachHotel(data) {
            axios.defaults.headers = {
                'deviceid': 'device_for_web',
            }
            let dsTotel = [];
            const result = await axios.get('http://192.168.0.36:8080/hotelapi/hotel/view/findLimitHotelListInFilter2?provinceSn=1&districtSn=2&longitude=106.6813272&latitude=10.7642163&sort=0&loveHotel=false&travelHotel=false&directDiscount=false&hasPromotion=false&newHotel=false&hotHotel=false&stamp=false&exifImage=false&minPrice=0&maxPrice=3000000&offset=0&limit=50?districtSn=' + data.districtSn + '&provinceSn=' + data.provinceSn)
            console.log('getDanhSachHotel', result.data);
            this.dsHotel = result
            return result.data;
        },
        handleChange(val) {
            console.log(val);
        }

    },

};
</script>

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

.infinite-list li {
    list-style: none;
    font-size: 18px;
    text-transform: uppercase;

}
.padd-0{
    padding : 0;
}
</style>
