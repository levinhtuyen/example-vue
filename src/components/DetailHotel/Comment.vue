<template>
<div class="container">   
    <div>
        <h1>comment</h1>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default {
    name: 'Comment',

    data() {
        return {
            data: {

            },

        }
    },
 

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.col-6 {
    width: 100%;

    padding-right: 15px;
    padding-left: 15px;
}

.style-btn-dat-ngay {
    background: #eeeeee;
    width: 100px;
    font-size: 10px;
    border-radius: 5px;
    border: none;
    text-decoration: underline;
    color: #ff6401;
}
.margin-15-tb {
        margin: 30px 0 30px 0;
    }
@media only screen and (max-width: 480px) and (min-width: 320px) {

    .style-btn-dat-ngay {
        background: #eeeeee;
        width: 80px;
        font-size: 10px;
        border-radius: 5px;
        border: none;
        text-decoration: underline;
        color: #ff6401;
    }

    .font-size-title-name {
        font-size: 12px;
    }

    .font-size-title {
        font-size: 9px;
    }

    .margin-15-tb {
        margin: 15px 0 15px 0;
    }

}
</style>
