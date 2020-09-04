<template>
<div class="container padding-top">
    <div class="footer-top-area">

        <div class="col-3">
            <div class="single-widget"><a href="/"><img style="width:150px;height:auto" src="./../../assets/logo_app_home.png" alt="Image"></a>
                <p>Go2Joy là ứng dụng trên điện thoại di động giúp người dùng đặt phòng theo thời gian một cách nhanh chóng , thuận lợi , riêng tư , không cần mất nhiều thời gian tìm kiếm nữa, với Go2Joy, chỉ cần vài cú chạm trong vài giây, bạn có thể chọn cho mình một địa điểm trải nghiệm dịch vụ ưng ý. Hãy để công nghệ hiện đại phục vụ cho cuộc sống của bạn dễ dàng và thoải mái hơn!</p>
                <div class="social-area">
                    <ul>
                        <li><a class="style-canh-giua" href="#" target="_blank">
                                <i class="bx bxl-facebook"></i>
                            </a></li>
                        <li><a class="style-canh-giua" href="#" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                        <li><a class="style-canh-giua" href="#" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                        <li><a class="style-canh-giua" href="#" target="_blank"><i class="bx bxl-youtube"></i></a></li>
                        <li><a class="style-canh-giua" href="#" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-3">
            <div class="single-widget contact">
                <h3>LIÊN HỆ</h3>
                <ul>
                    <li><i class="flaticon-call"></i><span>Hotline:</span><a href="tel:+822456974">Phone: 0931 836 836 </a></li>
                    <li><i class="flaticon-email"></i><span>Email:</span><a href="mailto:support@go2joy.vn">support@go2joy.vn</a></li>
                    <li><i class="flaticon-maps-and-flags"></i><span>Address:</span>Tòa nhà Artfolio, 5A/2 Trần Phú, Quận 5</li>
                </ul>
            </div>
        </div>
        <div class="col-3">
            <div class="single-widget">
                <h3>TOP HOTEL YÊU THÍCH</h3>
                <ul>
                    <li><a href="#">Hotel Hồ Chí Minh</a></li>
                    <li><a href="#">Hotel Hà Nội</a></li>
                    <li><a href="#">Hotel Đà Lạt</a></li>
                    <li><a href="#">Hotel Hạ Long</a></li>
                    <li><a href="#">Hotel Đà Nẵng</a></li>
                    <li><a href="#">Hotel Phan Thiết</a></li>
                </ul>
            </div>
        </div>
        <div class="col-3">
            <div class="single-widget">
                <h3>TẢI ỨNG DỤNG GO2JOY</h3>
                <!-- <p class="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p> -->
                <!-- <div class="subscribe-wrap">
                            <form class="newsletter-form"><input type="email" class="form-control" placeholder="Enter Your Email" name="email" required=""><button class="default-btn" type="submit">Subscribe</button></form>
                        </div> -->
                <button type="button" class="btn "><img class="style-down" src="http://go2joy.vn/images/GooglePlay-white.png" alt=""></button>
                <button type="button" class="btn"><img class="style-down" src="http://go2joy.vn/images/appstore-white.png" alt=""></button>
            </div>
        </div>

    </div>
    <div class="container footer-bottom-area footer-bottom-electronics-area style-canh-giua">
        <div>
            <div class="copy-right ">
                <p class="color-trang">Copyright @2020 Designed By <a href="https://go2joy.vn/" target="blank">Go2Joy</a></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'boxicons'
export default {
    name: "Footer"
}
</script>

<style scoped>
.style-down {
    Width: 100%;
    height: auto;
}

.style-canh-giua {
    display: flex;
    justify-content: center;
    align-items: center;
}

.color-trang {
    color: #ffffff;
}

.footer-top-area {
    background-color: #b1b2b3;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    background-attachment: fixed;
    z-index: 1;
}

.pb-70 {
    padding-bottom: 70px;
}

.pt-100,
.ptb-100 {
    padding-top: 100px;
}
.padding-top{
    padding-top: 50px;
}
.col-3{
    padding: 0 15px 0 15px
}
.footer-top-area:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    z-index: -1;
    opacity: .9;
}

.single-widget {
    margin-bottom: 30px;
}

.single-widget p {
    margin-bottom: 0;
    color: #000;
}

.single-widget .social-area {
    margin-top: 20px;
}

.single-widget .social-area ul {
    line-height: 1;
}

.single-widget .social-area ul li {
    display: inline-block;
}

.single-widget ul li {
    color: #000000;
    margin-bottom: 8px;
    font-size: 15px;
}

.single-widget .social-area ul li a {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    line-height: 32px;
    background-color: #ff6400;
    border-radius: 4px;
    text-align: center;
}

.single-widget .social-area ul li a:hover i {
    color: #fff;
}

.single-widget .social-area ul li a i {
    color: #eee;
    transition: all .5s;
    margin-right: 0;
}

.single-widget ul li a {
    color: #000;
    transition: all .5s;
}

.single-widget ul li a i {
    display: inline-block;
    margin-right: 2px;
    font-size: 20px;
}

.bx {
    font-family: boxicons !important;
    font-weight: 400;
    font-style: normal;
    -moz-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    line-height: 1;
    display: inline-block;
    text-transform: none;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.single-widget h3 {
    color: #000;
    font-size: 22px;
    margin-bottom: 30px;
    position: relative;
    padding-bottom: 15px;
    border-bottom: 1px solid #48475a;
}

.single-widget h3:before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 80px;
    height: 2px;
    background-color: #ff6400;
}

.single-widget.contact ul li i {
    position: absolute;
    left: 0;
    top: 0;
    color: #000;
    font-size: 15px;
}

.single-widget.contact ul li span {
    display: block;
    font-weight: 600;
}

.single-widget ul li span {
    color: #000;
}

.footer-bottom-area {
    background-color: #ff6400;
    padding: 20px 0;
}

.footer-bottom-area .copy-right {
    text-align: center;
}

.footer-bottom-area .copy-right p {
    text-transform: capitalize;
    margin-bottom: 0;
    color: #ffffff;
}

.footer-bottom-area .copy-right p a {
    color: #ffffff;
    font-weight: 700;
}
</style>
