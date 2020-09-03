<template>
<div>
    <Header />
    <div class="container">
        <section>
            <div class="container">
                <div class="col-12">
                    <img class="style-image" src="https://lh3.googleusercontent.com/proxy/zIkOZ1M-VwSKIMErE0KpKr4m6FtkEznAq8oMDrE0hiJFB1l27v-LQtdv1Q1gl8LjqFTrss0f3IN4k3nE7EtSkHRbSzzbRfu9YBo9Vl3lN3c-4rvjIQ" alt="">
                </div>
            </div>
        </section>
        <section>

            <div class="col-12">
                <div class="col-4">
                     <h3 class="title tilte3"><span>Câu hỏi thường gặp</span></h3>
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="Câu hỏi 1" name="1">
                            <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                            <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Câu hỏi 2" name="2">
                            <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                            <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Câu hỏi 3" name="3">
                            <div>Simplify the process: keep operating process simple and intuitive;</div>
                            <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                            <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                        </el-collapse-item>
                        <el-collapse-item title="Câu hỏi 4" name="4">
                            <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                            <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="col-8" style="padding-left:50px;">
                    <div class="tdql">
                        <h3 class="title tilte3"><span>NGUYÊN TẮC TUYỂN DỤNG</span></h3>
                        <p style="font-family: montserrat1">1. Chính sách Nhân sự:
                        </p>
                        <p>Nguyên tắc tuyển dụng của Công ty Cổ phần Go2Joy, là lựa chọn những ứng viên tốt nhất vào vị trí phù hợp dựa trên phẩm chất, khả năng, thái độ, năng lực, kinh nghiệm của ứng viên, không phân biệt tín ngưỡng, tôn giáo hay giới tính. Chính sách việc làm của Công ty Cổ phần Go2Joy, là tạo môi trường làm việc chuyên nghiệp và bình đẳng để mỗi cá nhân đều có cơ hội cống hiến sức lực và tài năng của mình.<br>
                            Đào tạo và phát triển nguồn nhân lực là công tác được ưu tiên hàng đầu của Công ty Cổ phần Go2Joy, nhằm xây dựng và phát triển đội ngũ nhân viên vững chuyên môn, chuyên nghiệp trong phong cách làm việc và nhiệt tình cống hiến.<br>
                            Chế độ tiền lương và khen thưởng cho nhân viên của Go2Joy gắn liền với kết quả hoạt động kinh doanh và chất lượng dịch vụ của mỗi nhân viên khi thực hiện công việc được giao. Một năm, nhân viên được hưởng tối thiểu 13 tháng lương, được nhận các phụ cấp theo chế độ phụ cấp phù hợp; ngoài ra nhân viên còn được hưởng thêm lương theo năng suất và mức độ hoàn thành công việc; thưởng cho các đơn vị, cá nhân tiêu biểu trong năm, thưởng sáng kiến; thưởng trong các dịp lễ tết của Quốc gia và kỷ niệm thành lập Công ty… Nhân viên chính thức của Go2Joy được hưởng đầy đủ các quyền lợi phù hợp với quy định của Công ty và Pháp luật hiện hành.
                            Hàng năm, Talco sẽ tổ chức các buổi nghỉ mát và du xuân nhằm giao lưu, khích lệ tinh thần của nhân viên. Mọi hoạt động vui chơi diễn ra với tinh thần đoàn kết, vui vẻ, nghỉ ngơi, thư giãn giúp gắn kết, tạo điều kiện để mọi người có cơ hội hiểu biết nhiều hơn về đồng nghiệp trong Công ty và người thân của các cá nhân trong gia đình, cũng như tái tạo sức lao động để tiếp tục làm việc cống hiến.
                        </p>
                        <p style="font-family: montserrat1">2. Quy trình tuyển dụng:
                        </p>
                        <p>Vòng 1 – Sơ loại hồ sơ: Bộ phận tuyển dụng sẽ tổng hợp tất cả các hồ sơ của các ứng viên có nhu cầu ứng tuyển vào làm việc tại Công ty Cổ phần Go2Joy.<br>
                            Các ứng viên có hồ sơ hợp lệ theo quy định và có năng lực, kinh nghiệm phù hợp với vị trí ứng tuyển sẽ được xem là đạt và được chọn để vào vòng thi tiếp theo.<br>
                            Vòng 2: Làm bài trả lời câu hỏi phỏng vấn, kiến thức chuyên môn nếu cần (kiểm tra sự hiểu biết, kiến thức và tính logic của ứng viên);<br>
                            Vòng 3: Phỏng vấn<br>
                            - Phỏng vấn sơ bộ với cán bộ Nhân sự, cán bộ phụ trách bộ phận để kiểm tra chuyên môn để đánh giá tác phong của ứng viên, thẩm định thêm thông tin trong hồ sơ, làm sáng tỏ mong muốn nguyện vọng của ứng viên;<br>
                        </p>
                        <!-- <p style="font-family: montserrat1">3. Nhu cầu tuyển dụng:</p> -->
                    </div>

                </div>
            </div>

        </section>
        <section class="map">
            <div class="container">
                <div class="row mar">
                    <div class="col-md-12">
                        <h3 class="title tilte2"><span>TIN TUYỂN DỤNG</span></h3>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-box">
                            <div class="row">
                                <div class="col-md-5">
                                    <a href="#"> <img class="blog-img style-image" src="https://nhanlucnganhluat.vn/uploads/tin-tuc/2018/12/15/anh-facebook-360-200/getarticleimage-1489388419102-1496204714640-1514342986808_ovdn_thumb.jpg"></a>
                                </div>
                                <div class="col-md-7">
                                    <div style="">
                                        <p><a href="#">TUYỂN TESTER </a></p>
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
                                        <p><a href="#">TUYỂN DEVELOPER MOBILE </a></p>
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
                                        <p><a href="#">TUYỂN MAKETTING </a></p>
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
                                        <p><a href="#">TUYỂN KẾ TOÁN </a></p>
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
                        <button style="width: 100%; background-color:#ff6400; color:#fff;" type="submit" class="btn ">NHẬN THÔNG TIN >></button>
                    </div>
                    <div class="col-md-4 style-canh-giua">
                        <p style="color:#000; ">ĐĂNG KÝ ĐỂ NHẬN THÔNG TIN TUYỂN DỤNG MỚI NHẤT TỪ GO2JOY</p>
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
            activeNames: ['1']
        }
    },
    methods: {

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
.col-1, .col-2 ,.col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-20, .col-11, .col-1{
    float:left
}
h1,
h2,
h3,
h4,
h5,
h6 p,
span,
a {
    font-family: 'Quicksand', sans-serif;
}
</style>
