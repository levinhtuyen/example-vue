<template>
<div class="container">

    <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="item style-slider">
            <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="item style-slider">
            <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="item style-slider">
            <img src="https://go2joy.vn/images/banner_thanh_lam_min.png" alt="image" /> </div>
    </div>

    <div>

    </div>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name: 'PromotionDetail'
}
</script>

<style scoped>
.style-slider {
    max-height: 500px;
}

.style-slider img {
    height: 500px;
    width: 100%;
    overflow: hidden;
}

.detail {
    visibility: hidden;
}
</style>
