<template>
<div>
    <Header />
    <div class="container">
        <b-row>
            <div class="col-12">
                <el-input v-model="search" size="medium" placeholder="Tìm bằng tên, địa chỉ ..." />
            </div>
            <div class="col-12">
                <p class="mar-top-bottom"><i class="fal fa-sms color-cam"></i> Từ khóa Hot</p>
                <el-link class="style-padd-left-right"  type="primary">#bontam</el-link>
                <el-link class="style-padd-left-right" type="primary">#ghetinhyeu</el-link>
                <el-link class="style-padd-left-right" type="primary">#KSHot</el-link>
                <el-link class="style-padd-left-right" type="primary">#Romatic</el-link>
                <el-link class="style-padd-left-right" type="primary">#KSTinhYeu</el-link>
                <el-link class="style-padd-left-right" type="primary">#KMHot</el-link>
                <el-link class="style-padd-left-right" type="primary">#coupon</el-link>
            </div>
            <div class="col-12">
                <p class="mar-top-bottom">Đang có Flash sale</p>
                <el-table lazy :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
                    <el-table-column width="100px">
                        <i class="fas fa-hotel"></i>
                    </el-table-column>
                    <el-table-column label="Tên khách sạn" prop="name">
                    </el-table-column>
                    <el-table-column label="Địa chỉ" prop="address">
                    </el-table-column>
                    <el-table-column label="Giá 1 giờ" prop="lowestPrice">
                    </el-table-column>
                    <el-table-column label="Giá qua đêm" prop="lowestPriceOvernight">
                    </el-table-column>
                </el-table>
            </div>

        </b-row>

    </div>

</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Header from "../Home/Header.vue"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/search',
    name: "Search",
    components: {
        Header
    },
    data() {
        return {
            tableData: [],
            search: '',
        }
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            axios.defaults.headers = {
                'deviceid': 'device_for_web'
            }
            let {
                data
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findLimitHotelInCollection?provinceSn=1&hotelCollectionSn=11&longitude=106.6813099&latitude=10.7642086&limit=50&offset=0');

            this.tableData = data;
            console.log('data 1 : ', data)

        },
        handleFilter() {
            this.data.page = 1;
            this.getList();
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },

};
</script>

<style scoped>
.style-padd-left-right{
    padding: 0 15px 0 15px
}
.color-cam{
    color:#ff6400;

}
.mar-top-bottom{
    margin: 15px 0 15px 0;
}
@media only screen and (max-width: 768px) and (min-width: 600px) {}

@media only screen and (max-width: 480px) {}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {}
</style>
