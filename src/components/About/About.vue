<template>
<div>
    <Header />
    <div class="container">
        <Address />
        <Timeline />
    </div>
</div>
</template>
<script>
import Vue from 'vue'
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./../Home/Header.vue"
import Timeline from "./Timeline"
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/about',
    name: "About",
    components: {
        Header,Timeline

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

<style>

</style>
