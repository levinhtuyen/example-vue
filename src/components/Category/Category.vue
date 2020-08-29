<template>
<div style=" background: #f9f9fa" id="category">
    <Header />
    <div class="container">
        <b-row>
        <ListRoom />
        </b-row>
    </div>
</div>
</template>

<script>
import Header from "./../Home/Header.vue";
import ListRoom from "./ListRoom.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    path: '/category',
    name: "Category",
    components: {
        Header,
        ListRoom
    },
    data() {
        return {

        }
    },

};
</script>

<style scoped>

.container{
    background-color: #ffffff;
}
body {
    background-color: #f9f9fa
}
</style>
