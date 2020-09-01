<template>
<div>
    <Header />
    <div class="container">
        <h1>Events</h1>
       
    </div>
</div>
</template>
<script>
import Vue from 'vue'
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./../Home/Header.vue"

// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/recruitment',
    name: "Recruitment",
    components: {
        Header
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
