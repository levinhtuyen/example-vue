<template>
<BaseDialog v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title title-color text-align-left">Chọn địa điểm</div>
    <div class="dialog-body text-align-left">

        <div class="block">
            <span class="demonstration">Chọn địa điểm</span>
            <el-cascader :options="options" placeholder="Chọn" :props="{ multiple: true, checkStrictly: true }" clearable></el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">Chọn danh mục</span>
            <el-row>
                <el-button size="medium" round>Ks cặp đôi</el-button>
                <el-button size="medium" round>Ks du lịch</el-button>
            </el-row>
        </div>
        <span class="demonstration">Nổi bật</span>
        <el-row>
            <div style="margin-top: 20px">
                <el-checkbox-group v-model="checkboxGroup2" size="medium">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </div>
        </el-row>
        <el-row>
            <span class="demonstration">Mức giá</span> || <span>0 ~ 3.000.000 VNĐ</span>
            <el-slider v-model="value2" :show-tooltip="false"></el-slider>
        </el-row>
    </div>

    <div class="dialog-footer">
        <button class="btn btn-color" type="button" @click="$emit('update:active', false)">Áp dụng</button>
    </div>
</BaseDialog>
</template>

<script>
import axios from "axios"
import BaseDialog from "./BaseDialog.vue";
const cityOptions = ['Giảm giá đặc biệt', 'Khuyến mãi', 'Khách sạn mới', 'Khách sạn nổi bật', 'Ảnh 360'];
export default {
    name: "AlertDialog",
    components: {
        BaseDialog
    },
    props: {
        title: String,
        content: String,
        confirmText: {
            type: String,
            default: "Ok"
        }
    },
    data() {
        return {
            options: [{
                value: 'mienbac',
                label: 'Miền bắc',
                children: [{
                    value: 'hanoi',
                    label: 'Hà Nội',
                    children: [{
                        value: 'hoankiem',
                        label: 'Hoàn Kiếm'
                    }, {
                        value: 'dongda',
                        label: 'Đống Đa'
                    }, {
                        value: 'efficiency',
                        label: 'Efficiency'
                    }, {
                        value: 'controllability',
                        label: 'Controllability'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'side nav',
                        label: 'Side Navigation'
                    }, {
                        value: 'top nav',
                        label: 'Top Navigation'
                    }]
                }]
            }],
            checkboxGroup2: ['Giảm giá đặc biệt'],
            cities: cityOptions,
            value2: 0
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
    },

};
</script>

<style scoped>
.dialog-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 18px;
}

.dialog-footer {
    text-align: right;
    margin-top: 20px;
}

.dialog-footer button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
}

.text-align-left {
    text-align: left;
}

.btn-color {
    background-color: #ff6400;
    color: #ffffff;
}
</style>
