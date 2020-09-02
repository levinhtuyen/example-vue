<template>
<div>
    <footer class="footer-top-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="single-widget"><a href="/"><img style="width:150px;height:auto" src="./../../assets/logo_app_home.png" alt="Image"></a>
                        <p>Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor.</p>
                        <div class="social-area">
                            <ul>
                                <li><a href="#" target="_blank">
                                        <i class="bx bxl-facebook"></i>
                                    </a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-youtube"></i></a></li>
                                <li><a href="#" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-widget contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i class="flaticon-call"></i><span>Hotline:</span><a href="tel:+822456974">Phone: </a></li>
                            <li><i class="flaticon-email"></i><span>Email:</span><a href="mailto:hello@flexa.com">hello@flexa.com</a></li>
                            <li><i class="flaticon-maps-and-flags"></i><span>Address:</span>123, Western Road, Melbourne Australia</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-widget">
                        <h3>Service Links</h3>
                        <ul>
                            <li><a href="/contact#">Insurance</a></li>
                            <li><a href="/contact#">Car Insurance</a></li>
                            <li><a href="/contact#">Home Insurance</a></li>
                            <li><a href="/contact#">Investment</a></li>
                            <li><a href="/contact#">Health Insurance</a></li>
                            <li><a href="/contact#">Business</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="single-widget">
                        <h3>Newsletter</h3>
                        <p class="newsletter-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                        <div class="subscribe-wrap">
                            <form class="newsletter-form"><input type="email" class="form-control" placeholder="Enter Your Email" name="email" required=""><button class="default-btn" type="submit">Subscribe</button></form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom-area footer-bottom-electronics-area style-canh-giua">
        <div>
            <div class="copy-right ">
                <p class="color-trang">Copyright @2020 Designed By <a href="https://go2joy.vn/" target="blank">Go2Joy</a></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    PluginObject
} from 'vue';
import IconifyIcon from '@iconify/vue';
export default {
    name: "Footer"
}
</script>

<style scoped>
.style-canh-giua {
    display: flex;
    justify-content: center;
    align-items: center;
}
.color-trang{
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
    background-color: #31abfc;
    border-radius: 4px;
    text-align: center;
}

.single-widget ul li a {
    color: #000;
    transition: all .5s;
}

.single-widget ul li a i {
    display: inline-block;
    margin-right: 2px;
    font-size: 14px;
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
