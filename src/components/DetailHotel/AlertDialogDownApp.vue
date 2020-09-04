<template>
<BaseDialogDownApp v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title title-color text-align-left">Tải App để được trải nghiệm tốt hơn</div>
    <div class="dialog-body text-align-left">
        <div class="col-12">
            <div class="col-6">
                <button type="button" class="btn "><img class="style-down" src="http://go2joy.vn/images/GooglePlay-white.png" alt=""></button>
            </div>
            <div class="col-6"><button type="button" class="btn"><img class="style-down" src="http://go2joy.vn/images/appstore-white.png" alt=""></button></div>
        </div>

    </div>

    <div class="dialog-footer">
        <button class="btn btn-color" type="button" @click="$emit('update:active', false)">
            Kết thúc
        </button>
    </div>
</BaseDialogDownApp>
</template>

<script>
import axios from "axios"
import BaseDialogDownApp from "./BaseDialogDownApp.vue";

export default {
    name: "AlertDialogDownApp",
    components: {
        BaseDialogDownApp
    },
    props: {
        title: String,
        content: String,
        confirmText: {
            type: String,
            default: "Ok"
        }
    },
    data() {
        return {
            value1: 0,
            props: {
                multiple: true
            },
            state1: '',

            cities: cityOptions,
            value2: 0,

        };
    },

    methods: {

    },

};
</script>

<style scoped>
.form-control {
    width: 100%;
    height: 30px;
    padding: 0;
}

.dialog-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 18px;
}

.router-link-active {
    color: #ffffff
}

.router-link-active:hover {
    -webkit-transform: scale(1.1);
    text-decoration: none;
}

.dialog-footer {
    text-align: right;
    margin-top: 20px;
}

.dialog-footer button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
}

.text-align-left {
    text-align: left;
}

.btn-color {
    background-color: #ff6400;
    color: #ffffff;
}
.style-down{
    width: 100%;
    height: auto;
}
</style>
