<template>
<div class="container">
    <div>
        <p class="style-bold font-size-title">LYN MINI HOTEL</p>
        <div class="col-7">
            <p class="padding-p">
                <a class="style-back-do font-size-title"><i class="fas fa-star"></i> <span> 4.4 </span></a>
                <a> <span class="font-size-title margin-left-right-10">1121 Bình luận > </span></a>
            </p>
        </div>
        <div class="col-5 float-left">
            <p class="float-right">
                <a><button class="btn style-btn-comment">new comment</button></a>
            </p>
        </div>

        <p class="padding-p">
            <a class="style-back-xanh font-size-title"><i class="fas fa-clock"></i> <span> 0/5 </span></a>
            <a> <span class="font-size-title margin-left-right-10">Xem chi tiết tem > </span></a>
        </p>
        <p class="padding-p">
            <a class="style-back-nau font-size-title"><i class="fas fa-map-marked"></i> <span> 3,2 km </span></a>
            <a><span class="font-size-title margin-left-right-10">Số 7 Đường 6B, Khu dân cư Trung Sơn, Bình Chánh, Hồ Chí Minh 760000, Việt Nam > </span></a>
        </p>

    </div>
</div>
</template>

<script>
export default {
    name: 'InforHotel',

}
</script>

<style scoped>
@media only screen and (max-width: 480px) and (min-width: 320px) {
    .margin-left-right-10 {
        margin: 0 10px 0 10px;
    }

    .style-btn-comment {
        background: #f0b67c;
        width: 100px;
        font-size: 10px;
    }
}
</style>
