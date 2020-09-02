<template>
<div style=" background: #f9f9fa">
    
    <div class="container">
   
       
        <nav class="navbar  sticky-top no-padding">
            <img style="width:100%; height:auto" src="https://go2joylocal.s3-ap-southeast-1.amazonaws.com/banner/63fc2a3dca838e97962d3df5efa5d456.png" alt="">
            
        </nav>
        <section class="section-content py-5">
             
            <div class="container">
                <p v-html="dataPromotion.content"></p>
            </div>
        </section>
        <section>
            <el-tabs type="border-card" @tab-click="handleClick">
                <el-tab-pane label="Gần nhất">
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">SAMI HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/sa-mi-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">DRAGON HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/DRAGON-HOTEL.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">REDDOORZ PLUS @ TRUNG SON RESIDENCE</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/REDDOORZ-PLUS-TRUNG-SON-RESIDENCE.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">REDDOORZ PLUS NEAR LE QUANG DINH STREET</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/REDDOORZ-PLUS-NEAR-LE-QUANG-DINH-STREET.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Rẻ nhất">
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">ADAMAS LUXURY</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/adamas-luxury.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">A-IN RIVERSIDE</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/a-in-riverside-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">TÂN BÌNH HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/tanbinh-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">SẠCH HOTEL VẠN KIẾP</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/sach-van-kiep-hotel.png" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="Tất cả">
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">SECC HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/secc-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">GIA HOA HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/gia-hoa-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">QUANG TRUNG 2 HOTEL</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/quang-trung-2-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 ">

                        <div class="col-12 style-padd-no style-box-shadow  margin-15-tb">
                            <div class="col-12">
                                <h5 class=" font-size-title-name margin-top-bottom">ANH NGỌC</h5>
                            </div>
                            <div class=" ">
                                <div class="col-4 style-padd-no" style="float:left">
                                    <div class="hotel-item">
                                        <router-link tag="a" :to="{ name: 'DetailHotel', params: { Sn: 1 }}"><img src="https://go2joy.vn/images/hotel/anh-ngoc-hotel.jpg" alt=""></router-link>
                                    </div>
                                </div>

                                <div class="col-8 style-padd padding-0-5-10">
                                    <div class="col-12 style-padd-no padding-top-60 ">
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title"><a class="style-back-xanh "><span class="color-trang"> Tặng giờ </span></a></p>
                                        </div>
                                        <div class="float-right style-border-cam margin-top-bottom">
                                            <p class="style-margin-1 font-size-title "><a class="style-back-cam"><span> Giảm giá đặc biệt </span></a><a></a><span class="style-font-mar font-size-title margin-left-right-10"> Còn 1 phòng</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> 2 Giờ đầu </span><span class="font-size-title"> VND </span><span class="style-gia-giam font-size-title"> 170.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <p><span class="style-qua-dem font-size-title"> Qua đêm </span><span class="font-size-title"> VND</span><span class="style-gia font-size-title-price">320.000</span><span class="style-gia-giam font-size-title">270.000</span></p>
                                        </div>
                                        <div class="float-right style-padd-10">
                                            <button class="style-btn-dat-ngay">Đặt ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>
        </section>
    </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'PromotionDetail',

    data() {
        return {
            dataPromotion: {},
            activeName: 'first'
        }
    },
    async created() {
        axios.defaults.headers = {
            'deviceid': 'device_for_web',
        }
        let {
            data
        } = await axios.get('http://118.69.235.218:8080/hotelapi/promotion/view/findPromotionForAppNew?sn=1531');
        this.dataPromotion = data.data
        console.log('data Promotion', this.dataPromotion)
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
}
</script>

<style scoped>
a,
p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
    font-family: 'Quicksand', sans-serif;
}

.color-trang {
    color: #ffffff;
}

.style-slider {
    max-height: 500px;
}

.style-padd-no {
    padding-left: 0;
    padding-right: 0;
}

.margin-top-bottom {
    margin: 10px 0 10px 0;
}

.style-slider img {
    height: 500px;
    width: 100%;
    overflow: hidden;
}

.top-container {
    background-color: #f1f1f1;
    padding: 30px;
    text-align: center;
}
.no-padding{
    padding: 0;
}
.style-oclock {
    font-size: 30px;
    color: #ffb347;
    bottom: 0;
    margin: 0 auto;
}

.el-tabs__nav-scroll, .el-tabs__nav-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}

.style-btn-dat-ngay {
    background: #ff6400;
    width: 100px;
    font-size: 14px;
    border-radius: 10px;
    text-decoration: unset;
    color: #ffffff;
    border: none;
}

.header {
    background: #ffffff;

    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.content {
    padding: 16px;
}

.sticky {
    position: sticky;
    top: 0;
    width: 100%;
}

.sticky+.content {
    padding-top: 102px;
}

.navbar {
    width: 100%;
    height: 350px;
    overflow: hidden;
    border-radius: 40px;
}

.navbar img {
    width: 100%;
    height: 400px
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

.col-1,
.col-2,
.col-3,
.col-4.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12 {
    float: left !important;
}

.VueCarousel-pagination {
    position: absolute;
    display: none !important;
}

.float-left {
    float: left;
}

.float-right {
    float: right;
}

.row {
    margin-bottom: 15px;
    margin-top: 15px;
}

p,
span,
a:hover {
    text-decoration: unset;
}

.row {
    margin: 0;
    padding: 0;
    ;
}

p {
    margin-bottom: 0.3rem;
}

.VueCarousel-dot-container {
    display: none !important;
}

.style-qua-dem {
    font-size: 14px;
}

.style-gia {
    padding: 0 5px 0 5px;
    text-decoration: line-through;
}

.style-box-shadow {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
}

.style-gia-giam {
    font-weight: 700;
}

.style-text-align-right {
    text-align: right;
}

.style-font-mar {
    font-size: 14px;
    margin: 10px;
    font-weight: 500;
}

.style-back-cam {
    background-color: #f2c1a2;
    color: #ff6400;
    padding: 5px;
    border-radius: 10px;
}

.style-padd-10 {
    padding: 10px 0 0px 0;
}

.style-back-xanh {
    background-color: #c2f2a9;
    color: #1e5302;
    padding: 5px;
    border-radius: 10px;
}

.owl-item {
    background: #fafafa !important;
    border-radius: 20px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important;
}

.col-lg-6,
.col-md-6,
.col-sm-6,
.col-xs-6 {
    width: 50%;
}

.col-4 {
    width: 33.3%;
}

.col-3 {
    width: 25%;
}

.col-2 {
    width: 20%;
}

.style-back-nau {
    background-color: #ced3cb;
    color: #000;
    padding: 5px;
    border-radius: 10px;
}

.style-back-cam {

    background: #ddc620;
    color: #fff;
    padding: 4px 5px 5px 5px;
    border-radius: 5px;

}

.style-color-xanh {
    color: #1d2dea;
}

.style-margin-0 {
    margin: 0;
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.style-margin-1 {
    margin: 0px;
}

.style-border-cam {
    border: 1px solid #f2c1a2;
    border-radius: 10px;
}

.style-back-doback-do a {
    background-color: red;
}

.style-border-red {
    border: 1px solid red;
    border-radius: 5px;
}

.style-bold {
    font-weight: 600;
}

.hotel-item img {
    width: 305px;
    height: 245px;
}

.hotel-item {
    width: 100%;
    border-radius: 10px;
    height: 245px;
    display: block;
    overflow: hidden;
}

.style-back-cam {
    background-color: #eac34c;
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
}

.style-back-cam:hover {
    background-color: #ff6400;
    color: #ffffff;
    cursor: pointer;
}

.style-padd {
    padding: 15px;
}

.font-size-title {
    font-size: 14px;
}

.font-size-title-price {
    font-size: 14px;
}

.padding-p {
    padding: 5px
}

.padding-0-5-10 {
    padding: 20px 0 20px;
}

.style-back-do {

    background: red;
    color: #fff;
    padding: 2px 3px 2px 3px;
    border-radius: 5px;

}

@media only screen and (max-width: 480px) {
    .hotel-item img {
        width: 205px;
        height: 165px;

    }

    .hotel-item {
        width: 100%;
        height: 165px;

    }

    .padding-p {
        padding: 0px
    }

    .font-size-12 {
        font-size: 12px;
    }

    .padding-0-5-10 {
        padding: 5px 0 10px;
    }

    .style-back-do {

        background: red;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

    }

    .font-size-title-price {
        font-size: 11px;
    }

    .style-padd {
        padding: 5px;
    }

    .style-padd-10 {
        padding: 0;
    }

    .font-size-title {
        font-size: 10px;
    }

    .hotel-item img {
        border-radius: 10px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .hotel-item img {
        width: 255px;
        height: 195px;

    }

    .hotel-item {
        width: 100%;
        height: 195px;

    }

    .font-size-12 {
        font-size: 12px;
    }

    .padding-0-5-10 {
        padding: 5px 0 10px;
    }

    .style-back-do {

        background: #ddc620;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

    }

    .padding-p {
        padding: 0px
    }

    .font-size-title-price {
        font-size: 13px;
    }

    .style-padd {
        padding: 5px;
    }

    .style-padd-10 {
        padding: 0;
    }

    .font-size-title {
        font-size: 12px;
    }

    .hotel-item img {
        width: 255px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }
}

@media only screen and (max-width: 2560px) and (min-width: 1920px) {
    .hotel-item img {
        width: 255px;
        height: 265px;

    }

    .font-size-12 {
        font-size: 14px;
    }

    .padding-0-5-10 {
        padding: 15px 0 30px;
    }

    .style-back-do {

        background: #ddc620;
        color: #fff;
        padding: 2px 3px 2px 3px;
        border-radius: 5px;

    }

    .padding-p {
        padding: 10px
    }

    .font-size-title-price {
        font-size: 18px;
    }

    .style-padd {
        padding: 10px;
    }

    .style-padd-10 {
        padding: 10px;
    }

    .font-size-title {
        font-size: 16px;
    }

    .hotel-item img {
        width: 255px;
        height: 265px;
    }

    .style-box-shadow {
        border-radius: 10px;
        background: #ffffff;
    }
}

.style-color-blue {
    color: #1d2dea;
}

.hotel-item p {
    text-align: left;
}

/* .hotel-item .img img {
    height: 255px;
} */

.hotel-item .img {
    display: block;
    overflow: hidden;

    height: auto;
}

.style-img {
    width: 200px;
    height: auto;
}

.style-slider {
    display: block;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto 0px auto;
}

.style-slider img {
    width: 100%;
}

.stretch-card>.card {
    width: 100%;
    min-width: 100%
}

.owl-carousel .owl-wrapper-outer {
    display: block;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 auto 0px auto;
}

body {
    background-color: #f9f9fa
}

.flex {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto
}

.style-radius {
    display: block;
    overflow: hidden;
    border-radius: 40px;
    margin: 0 auto 0px auto;
}

@media (max-width:991.98px) {
    .padding {
        padding: 1.5rem
    }
}

@media (max-width:767.98px) {
    .padding {
        padding: 1rem
    }
}

.padding {
    padding: 3rem
}
</style>
