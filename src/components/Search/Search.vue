<template>
<div style=" background: #f9f9fa">
    <Header />
    <div class="container">
        <b-row>
            <div class="col-12">
                <el-input v-model="search" size="medium" placeholder="Tìm bằng tên, địa chỉ ..." />
            </div>
            <div class="col-12" >
                <p class="mar-top-bottom"><i class="fal fa-sms color-cam"></i> Từ khóa Hot</p>
                <el-link class="style-padd-left-right" type="primary">#bontam</el-link>
                <el-link class="style-padd-left-right" type="primary">#ghetinhyeu</el-link>
                <el-link class="style-padd-left-right" type="primary">#KSHot</el-link>
                <el-link class="style-padd-left-right" type="primary">#Romatic</el-link>
                <el-link class="style-padd-left-right" type="primary">#KSTinhYeu</el-link>
                <el-link class="style-padd-left-right" type="primary">#KMHot</el-link>
                <el-link class="style-padd-left-right" type="primary">#coupon</el-link>
            </div>
            <div class="col-12">
                <p class="mar-top-bottom">Đang có Flash sale</p>
                <el-table  @row-click="rowClicked"  lazy :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.address.toLowerCase().includes(search.toLowerCase()) || data.lowestPrice || data.lowestPriceOvernight)" style="width: 100%">
                    <el-table-column width="100px" align="center" >
                        <i class="fas fa-hotel color-trang"></i>
                    </el-table-column>
                    <el-table-column width="200px"  label="Tên khách sạn" prop="name">
                    </el-table-column>
                    <el-table-column label="Địa chỉ" prop="address">
                    </el-table-column>
                    <el-table-column  width="150px"  align="center" label="Giá 1 giờ" prop="lowestPrice">
                    </el-table-column>
                    <el-table-column width="150px"  align="center" label="Giá qua đêm" prop="lowestPriceOvernight">
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
import { Link } from 'element-ui';
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
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findLimitHotelInCollection?hotelCollectionSn=11&longitude=106.6813099&latitude=10.7642086&limit=50&offset=0');

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
        },
        rowClicked(row) {
            this.$router.push('/DetailHotel/2474')
      }
    },

};
</script>

<style scoped>
.style-padd-left-right {
    padding: 0 15px 0 15px;
}

.color-cam {
    color: #ff6400;

}
.color-trang{
    color:  #ff6400;
}

.sel-table__row .style-icon .cell {
    border-radius: 100%;
    background: #ff6400;
    width: 35px;
    height: 35px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-table--enable-row-transition .el-table__body td{
        text-align: center;
}
.mar-top-bottom {
    margin: 15px 0 15px 0;
}

@media only screen and (max-width: 768px) and (min-width: 600px) {}

@media only screen and (max-width: 480px) {}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {}
</style>
