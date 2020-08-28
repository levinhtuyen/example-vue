<template>
<div>
    <Header />
    <div class="container">
        <b-row>
            <div class="padd-top-20 ">
                <div class="col-lg-6 col-md-6 col-sm-12 max-height-blog float-left margin-15-tb" v-for="(data1, index) in data" :key="index">
                    <div class=" style-box-shadow ">
                        <div class="hotel-item">
                            <router-link tag="a" :to="{ name: 'PromotionDetail'}"><img :src="'https://go2joylocal.s3-ap-southeast-1.amazonaws.com/'+data1.imagePath" alt=""></router-link>
                            <div class="whatever">
                                <p class="style-count-image style-canh-giua"><a href="#"> Áp dụng ngay</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-12 style-can-giua ">
                <div class="block">
                    <span class="demonstration">&nbsp;&nbsp;&nbsp;</span>
                    <el-pagination small layout="prev, pager, next" v-show="total>0" :page.sync="data.page" :limit.sync="data.limit" @current-change="getList" @pagination="getList" :page-size="data.limit" :pager-count="11" :total="total">
                    </el-pagination>
                </div>
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
    path: '/listPromotion',
    name: "ListPromotion",
    components: {
        Header
    },
    data() {
        return {
            data: {
                page: 1,
                limit: 10,
                importance: undefined,
                name: undefined,
                type: undefined,
                category: [''],
                sort: '+id',
                status: undefined,
                imagePath: undefined,
                averageMark: 0,
                districtName: undefined,
                totalFavorite: 0,
                lowestPriceOvernight: 0,
                lowestOneDay: 0,
            },
            list: {

            },
            total: 0,
            listLoading: true,
        }
    },

    created() {
        this.getList();
    },
    methods: {

        async getList() {
            axios.defaults.headers = {
                'deviceid': 'device_for_web',
            }
            let {
                data
            } = await axios.get('http://118.69.235.218:8080/hotelapi/home/view/findHomePageInfo');
            let data1 = data.detailCollectionList;

            let listBanner = data.bannerFormList;
            //console.log('this.data : ', this.data);
            console.log('listbanner 123', listBanner)
            this.data = listBanner
            this.total = listBanner.length || 0;
            const curPos = this.data.limit * (this.data.page - 1);
            this.list = listBanner.slice(curPos, curPos + this.data.limit);
            console.log('data  pagination 123', this.list);
            this.oldList = this.list.map(v => v.id);
            this.newList = this.oldList.slice();
            this.listLoading = false;
        },
        handleFilter() {
            this.data.page = 1;
            this.getList();
        },
    },

};
</script>

<style scoped>
.hotel-item img {
    width: 100%;
    height: auto;
    border-radius: 15px;
}

.margin-15-tb {
    margin: 15px 0 15px 0;
}

.style-canh-giua {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.padd-top-20 {
    padding-top: 50px;
}

.whatever {
    position: relative;
    width: 100%;
    top: -90px;
    background-color: chocolate;
}

.style-count-image {
    float: right;
    color: #ffffff;
    opacity: 0.7;
    border-radius: 10px;
    text-align: center;
    background-color: #ff6400;
    top: 90px;
    margin: 15px;
    padding: 5px;
}

.style-count-image:hover {
    opacity: 1;
    color: #ffffff;
}

.style-count-image a {
    color: #ffffff;
    text-decoration: blink;
}

.style-can-giua {
    display: flex;
    justify-content: center;
}

.hotel-item p {
    text-align: left;
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .hotel-item img {
        width: 100%;
        height: auto;
        border-radius: 15px;
    }

    .hotel-item {
        width: 100%;
        height: 147px;
        margin: 15px 0;
    }

    .padd-top-20 {
        padding-top: 30px;
    }

    .style-count-image {
        float: right;
        color: #ffffff;
        opacity: 0.9;
        border-radius: 5px;
        text-align: center;
        background-color: #ff6400;
        top: 0;
        margin: 0;
        padding: 5px;
    }

    .whatever {
        position: relative;
        width: 100%;
        top: -40px;
        background-color: chocolate;
        padding: 0 15px 0 0;
    }
}

@media only screen and (max-width: 480px) {

    .hotel-item img {
        width: 100%;
        display: block;
        overflow: hidden;
        height: auto;

    }

    /* .max-height-blog{
         max-height: 185px; 
    }*/
    .whatever {
        top: -30px;
    }

    .style-count-image {
        opacity: 1;
        top: 0;
        padding: 0 4px 0 4px;
        border-radius: 5px;
        margin: 0 7px 0 0;
    }

    .font-size-12 {
        font-size: 12px;
    }

    .style-count-image a {
        font-size: 9px;
    }

    .padd-top-20 {
        padding-top: 20px;
    }
}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {
    .hotel-item {
        width: 100%;
        height: 265px;
    }

    .hotel-item img {
        overflow: hidden;
        height: auto;
    }
}
</style>
