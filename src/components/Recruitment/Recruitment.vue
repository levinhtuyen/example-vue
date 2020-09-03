<template>
<div>
    <Header />
    <div class="container">

        <section class="map">
            <div class="container">
                <div class="row mar">
                    <div class="col-md-12">
                        <h3 class="title tilte2"><span>TUYỂN DỤNG</span></h3>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-box">
                            <div class="row">
                                <div class="col-md-5">
                                    <img class="blog-img style-image" src="https://nhanlucnganhluat.vn/uploads/tin-tuc/2018/12/15/anh-facebook-360-200/getarticleimage-1489388419102-1496204714640-1514342986808_ovdn_thumb.jpg">
                                </div>
                                <div class="col-md-7">
                                    <div style="">
                                        <p>MÔ TẢ CÔNG VIỆC</p>
                                        <p><i style="color:#ff0000;" class="fa fa-calendar" aria-hidden="true"></i> &nbsp; 5/6/2019</p>
                                        <p>1. Lập kế hoạch tuyển dụng, đào tạo, thay thế và phát triển nguồn nhân lực định kỳ năm, quý, tháng. Chịu trách nhiệm toàn bộ mảng nhân sự, tiền lương cho nhà máy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-box">
                            <div class="row">
                                <div class="col-md-5">
                                    <img class="blog-img style-image" src="https://nhanlucnganhluat.vn/uploads/tin-tuc/2018/12/15/anh-facebook-360-200/getarticleimage-1489388419102-1496204714640-1514342986808_ovdn_thumb.jpg">
                                </div>
                                <div class="col-md-7">
                                    <div style="">
                                        <p>MÔ TẢ CÔNG VIỆC</p>
                                        <p><i style="color:#ff0000;" class="fa fa-calendar" aria-hidden="true"></i> &nbsp; 5/6/2019</p>
                                        <p>1. Lập kế hoạch tuyển dụng, đào tạo, thay thế và phát triển nguồn nhân lực định kỳ năm, quý, tháng. Chịu trách nhiệm toàn bộ mảng nhân sự, tiền lương cho nhà máy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-box">
                            <div class="row">
                                <div class="col-md-5">
                                    <img class="blog-img style-image" src="https://nhanlucnganhluat.vn/uploads/tin-tuc/2018/12/15/anh-facebook-360-200/getarticleimage-1489388419102-1496204714640-1514342986808_ovdn_thumb.jpg">
                                </div>
                                <div class="col-md-7">
                                    <div style="">
                                        <p>MÔ TẢ CÔNG VIỆC</p>
                                        <p><i style="color:#ff0000;" class="fa fa-calendar" aria-hidden="true"></i> &nbsp; 5/6/2019</p>
                                        <p>1. Lập kế hoạch tuyển dụng, đào tạo, thay thế và phát triển nguồn nhân lực định kỳ năm, quý, tháng. Chịu trách nhiệm toàn bộ mảng nhân sự, tiền lương cho nhà máy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-box">
                            <div class="row">
                                <div class="col-md-5">
                                    <img class="blog-img style-image" src="https://nhanlucnganhluat.vn/uploads/tin-tuc/2018/12/15/anh-facebook-360-200/getarticleimage-1489388419102-1496204714640-1514342986808_ovdn_thumb.jpg">
                                </div>
                                <div class="col-md-7">
                                    <div style="">
                                        <p>MÔ TẢ CÔNG VIỆC</p>
                                        <p><i style="color:#ff0000;" class="fa fa-calendar" aria-hidden="true"></i> &nbsp; 5/6/2019</p>
                                        <p>1. Lập kế hoạch tuyển dụng, đào tạo, thay thế và phát triển nguồn nhân lực định kỳ năm, quý, tháng. Chịu trách nhiệm toàn bộ mảng nhân sự, tiền lương cho nhà máy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="contact_email style-canh-giua">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <input type="text" class="form-control" placeholder="Email">
                    </div>
                    <div class="col-md-3">
                        <button style="width: 100%; background-color:#ff0000; color:#fff;" type="submit" class="btn ">NHẬN THÔNG TIN >></button>
                    </div>
                    <div class="col-md-4 style-canh-giua">
                        <p style="color:#000; ">ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN TƯ VẤN</p>
                    </div>
                </div>
            </div>
        </section>

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
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/recruitment',
    name: "Recruitment",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            userSelectedFromChild: {}
        }
    },
    methods: {

        childrenSelectUser(dataHotel) {
            console.log(dataHotel)
            this.userSelectedFromChild = dataHotel
        }
    }

};
</script>

<style scoped>
.style-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.style-canh-giua {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
