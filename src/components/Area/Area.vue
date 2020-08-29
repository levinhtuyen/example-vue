<template>
<div style=" background: #f9f9fa">
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
        <!-- <div class="col-4">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto; padding:0">
                <li v-for="(dataTinh, index) in data" :key="index" class="infinite-list-item"><button class="btn btn-light" style="width:100%">{{ dataTinh.name }}</button></li>
            </ul>

        </div> -->
        <el-tabs :tab-position="tabPosition1">
            <el-tab-pane v-for="(dataTinh, tinh) in data" :key="tinh" style="max-height:700px;overflow:hidden" :label="dataTinh.name">
                <el-tabs :tab-position="tabPosition2" >
                    <el-tab-pane v-for="(dataHuyen, huyen) in dataTinh.dsHuyen" :key="huyen" :label="dataHuyen.name" @click="onSelectHuyen(dataHuyen)">
                        <el-tabs :tab-position="tabPosition3">
                            <!-- <el-tab-pane v-for="(dataHotel, hotel) in dataHuyen.dsHotel" :key="hotel" :label="dataHotel.name">
                            </el-tab-pane> -->
                        </el-tabs>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
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
            tabPosition1: 'left',
            tabPosition2: 'left',
            tabPosition3: 'left',
            dsHotel: []
        }
    },

    async created() {
        axios.defaults.headers = {
            'deviceid': 'device_for_web',
        }
        let dataTinh = await axios.get('http://118.69.235.218:8080/hotelapi/area/view/findAllProvinceCity');
        let data = dataTinh.data;

        console.log('data Tinh', data)
        for (let i in data) {
            let dsHuyen = await this.getDanhSachTinh(data[i]);
            data[i].dsHuyen = dsHuyen;
            // for (let j in dsHuyen) {
            //     let dsHotel = await this.getDanhSachHotel(dsHuyen[j]);
            //     dsHuyen[j].dsHotel = dsHotel;
            //     console.log('ds Hotel theo huyện', dsHuyen[j].dsHotel)
            // }
           
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
            const result = await axios.get('http://118.69.235.218:8080/hotelapi/area/view/findAllDistrictInProvince?provinceSn=' + data.sn)
            this.dsHuyen = result
            return result.data;
        },
        // async onSelectHuyen(dataHuyen) {
        //     if (dataHuyen.dsHotel.length == 0) {
        //         dataHuyen.dsHotel = await this.getDanhSachHotel(dataHuyen);
        //     }
        // },
        async onSelectHuyen(dsHuyen) {
				if (dsHuyen.dsHotel.length == 0) {
					dsHuyen.dsHotel = await this.getDanhSachHotel(dsHuyen);
				}
            },
            
        async getDanhSachHotel(dsHuyen) {
            axios.defaults.headers = {
                'deviceid': 'device_for_web'
            }
            // let provinceSn = dsHuyen.provinceSn
            let dsHotel = [];
            const result = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findLimitHotelInCollection?hotelCollectionSn=8&longitude=106.6813099&latitude=10.7642086&limit=15&offset=0&provinceSn=' + dsHuyen.provinceSn + '&districtSn='+ dsHuyen.districtSn )
            this.dsHotel = result.data
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

.is-left {
    width: 400px;
}

.el-tabs__header {
    width: 400px
}

.padd-0 {
    padding: 0;
}
</style>
