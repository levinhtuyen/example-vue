<template>
<div>
   
    <div class="col-12 float-left">
            <div class="item col-12 float-left" style="padding: 20px 0 20px 0;">
               <a href=""><img class="img-lazy" src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg"></a>
            </div>
            <div class="item col-12 float-left" style="padding: 20px 0 20px 0;">
                <a href=""><img class="img-lazy" src="https://go2joy.vn/images/hotel/HA-NOI-HOTEL.jpg"></a>
            </div>
            <div class="info">
            </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'TopHotel',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
p, span,a:hover {
    text-decoration: unset;
}
.style-box-shadow{
    background: #fafafa ;
    border-radius: 20px ;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) ;
}
.style-back-cam {
    background-color: #f2c1a2;
    color: #ff6400;
    padding: 5px;
    border-radius: 10px;
}
.style-padd-20{
        padding: 20px 0 20px 0;
}
.style-back-xanh {
    background-color: #c2f2a9;
    color: #1e5302;
    padding: 5px;
    border-radius: 10px;
}
.owl-item{
    background: #fafafa !important;
    border-radius: 20px !important;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3) !important;
}
.style-back-nau {
    background-color: #ced3cb;
    color: #000;
    padding: 5px;
    border-radius: 10px;
}
.style-back-do {
  
    background: red;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}
.info{
        background: #333333;
        visibility: visible;
    opacity: 0.8;
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
        transform: translateX(0);
}
.style-color-xanh{
    color: #1d2dea;
    padding: 15px;
}
.style-margin-0{
    margin: 0;
}
.style-mar-padd-0{
    margin: 0;
    padding:0;
}
.style-margin-1{
    margin: 1px;
}
.style-border-red{
    border: 1px solid red;
    border-radius: 10px;
}
.style-back-do a{
      background-color: red;
}

.style-bold{
    font-weight: 600;
}
.item img {
       display: block;
    overflow: hidden;
    border-radius: 20px;
    width: 100%;
    height: 255px;

}
@media only screen and (max-width: 480px){
  .item img {
    width: 100%;
    height: 145px;

}
}

.style-color-blue {
    color: #1d2dea;
}

.hotel-item p {
    text-align: left;
}

.hotel-item .img img {
    height: 255px;
}

.hotel-item .img {
    display: block;
    overflow: hidden;

    height: auto;
}
</style>
