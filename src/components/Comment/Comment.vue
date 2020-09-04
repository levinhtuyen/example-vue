<template>
<div>
    <Header />
    <div class="container padding-top">
        <b-row>
            <div class="col-12 padding-top">
                <div class="col-4">
                    <p>&ensp;</p>
                </div>
                <div class="col-4 style-canh-giua">
                    <div>
                        <p><i style="position:relative" class="fas fa-star style-start"><span class="style-number">4.6</span></i></p>
                        <p style="text-align:center"> 2 Bình luận</p>
                    </div>
                </div>
                <div class="col-4">
                    <p>&ensp;</p>
                </div>
            </div>

            <div class="col-12 padding-top">
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="float-left style-bo-tron style-canh-giua-chu mar-padd-0"><span class="font-size-char">S</span></p>
                    <p class="style-font-size-start">&ensp;&ensp;Sạch sẽ</p>
                </div>
                <div class="col-6 style-canh-giua-chu">
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">1</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">1</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">3</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">141</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">233</span></p>

                </div>
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="style-font-size-start font-size-char">5.0</p>
                </div>
            </div>
            <div class="col-12 padding-top">
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="float-left style-bo-tron-t style-canh-giua-chu mar-padd-0"><span class="font-size-char-t">T</span></p>
                    <p class="style-font-size-start">&ensp;&ensp;Tiện ích</p>
                </div>
                <div class="col-6 style-canh-giua-chu">
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">1</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">3</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">4</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">150</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">220</span></p>

                </div>
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="style-font-size-start font-size-char-t">5.0</p>
                </div>
            </div>
            <div class="col-12 padding-top">
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="float-left style-bo-tron-d style-canh-giua-chu mar-padd-0"><span class="font-size-char-d">D</span></p>
                    <p class="style-font-size-start ">&ensp;&ensp;Dịch vụ</p>
                </div>
                <div class="col-6 style-canh-giua-chu">
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">2</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">1</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">3</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">149</span></p>
                    <p class="style-canh-giua-so margin-left-right"> <span><i class="fas fa-star style-start-small"></i> </span><span class="style-canh-giua-chu">224</span></p>
                </div>
                <div class="col-3 style-canh-giua-chu style-padding-top">
                    <p class="style-font-size-start font-size-char-d">5.0</p>
                </div>
            </div>
            <div class="col-12  style-border-bottom" v-for="(dataComment, index) in list" :key="index">
                <div class="col-12 ">
                    <h4>{{ dataComment.userNickName }}</h4>
                </div>
                <div class="col-12 padding-top">
                    <p class="style-kind-of-room float-left">{{ dataComment.roomTypeName }} </p>
                    <div class="float-left style-padding-left">
                        <p class="float-left style-bo-tron style-canh-giua-chu">
                            <span class="font-size-char">S</span>
                        </p>
                        <span class="style-margin-text">Xuất sắc</span>
                    </div>
                    <div class="float-left">
                        <p class="float-left style-bo-tron-t style-canh-giua-chu mar-padd-0"><span class="font-size-char-t">T</span></p>
                        <span class="style-margin-text">Xuất sắc</span>
                    </div>
                    <div class="float-left ">
                        <p class="float-left style-bo-tron-d style-canh-giua-chu mar-padd-0"><span class="font-size-char-d">D</span></p>
                       <span class="style-margin-text">Xuất sắc</span>
                    </div>
                </div>
                <div class="col-12 padding-top">
                    <div>
                        <p class="style-content-comment">{{ dataComment.comment }}</p>
                    </div>
                    <div>
                        <div class="col-6"> <p class="style-like"><i class="far fa-thumbs-up"></i>
                            <span>{{ dataComment.numOfLike }}</span>
                        </p></div>
                        <div class="col-6"><p class="style-align-right">{{ dataComment.createTime }}</p></div>
                       
                        
                    </div>
                </div>
                <div class="col-12 padding-top"></div>
            </div>
        </b-row>

    </div>
    <Footer />
</div>
</template>

<script>
import Vue from 'vue'
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./../Home/Header.vue"
import Footer from "./../Home/Footer.vue"
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/events',
    name: "Events",
    components: {
        Header,
        Footer
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
            } = await axios.get('http://118.69.235.218:8080/hotelapi/hotel/view/viewHotelDetailNew?hotelSn=184');
            console.log('data', data)
            let listComment = data.data.userReviewFormList;

            // let HotHotel = data1[1];
            console.log('listComment  : ', listComment)
            this.list = listComment
            // let dataGet = HotHotel.hotelFormList
            // console.log('this.data list room: ', this.data)
            this.total = listComment.length || 0;
            // console.log('this.total', this.total)
            // const curPos = listComment.limit * (listComment.page - 1);
            // this.list = listComment.slice(curPos, curPos + listComment.limit);
            // console.log('data  pagination', this.list);
            // this.oldList = this.list.map(v => v.id);
            // this.newList = this.oldList.slice();
            // this.listLoading = false;
        },
        handleFilter() {
            this.data.page = 1;
            this.getList();
        },
    }

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
.col-20,
.col-11,
.col-12 {
    float: left
}

.style-start {
    font-size: 150px;
    color: #ff6400
}

.style-number {
    position: absolute;
    left: 32%;
    color: rgb(255, 255, 255);
    font-size: 35px;

    top: 41%;
}
.style-content-comment{
    font-size: 18px;
}
.style-canh-giua {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.style-border-bottom{
    border-bottom: 1px solid;
    padding-top: 15px;
}
.style-canh-giua-so {
    display: flex;
    flex-direction: column;
    width: 40px;
    float: left;
}

.style-canh-giua-chu {
    display: flex;
    justify-content: center;
    align-items: center;
}

.style-bo-tron {
    border: 2px solid #ff6400;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    color: #ff6400;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;

}

.style-bo-tron-t {
    border: 2px solid #14d878;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    color: #14d878;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
}

.style-bo-tron-d {
    border: 2px solid #147ad8;
    border-radius: 30px;
    width: 30px;
    height: 30px;
    color: #147ad8;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
}

.font-size-char {
    color: #ff6400;
    font-size: 18px;
}

.font-size-char-t {
    font-size: 18px;
    color: #14d878;
}

.font-size-char-d {
    font-size: 18px;
    color: #147ad8;
}

.float-left {
    float: left;
}

.mar-padd-0 {
    margin: 0;
    padding: 0;
}

.padding-top {
    padding-top: 40px;
}

.style-start-small {

    color: #ff6400;
    font-size: 40px;
}

.margin-left-right {
    margin: 0 10px 0 10px;
}

.style-font-size-start {
    font-size: 20px;
}
.style-padding-left{
    padding-left: 15px;
}
.style-padding-top {
    padding-top: 20px;
}

.style-kind-of-room {
    font-size: 18px;
    text-transform: uppercase;
}
.style-margin-text{
    margin: 15px;
}
.style-align-right{
    text-align: right;
}
</style>
