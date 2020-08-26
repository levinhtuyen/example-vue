<template>
<div id="navbar" class="container">
    <!--Navbar-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link tag="a" :to="{ name: 'Home'}">
            <img src="https://go2joy.vn/images/logo.jpg" alt="Logo" class="logo">
        </router-link>
        <button class="navbar-toggler" type="button" v-on:click="isHidden = !isHidden">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" v-if="!isHidden">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item padding-left-right active">
                    <router-link tag="a" class="font-size-title" :to="{ name: 'About'}">{{ $t('Home.about') }}</router-link>

                </li>
                <li class="nav-item padding-left-right">
                    <router-link tag="a" class="font-size-title" :to="{ name: 'Blog'}">{{ $t('Home.blog') }}</router-link>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <!-- <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> -->
                <el-autocomplete class="form-control style-width" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete>

                <button type="button" @click="show = !show" class="btn" data-toggle="modal" data-target="#myModal">
                    <img src="./../../assets/search.png" class="search" alt="">
                </button>
                <p> <a @click="changeLocale('vi')">
                        <img src="./../../assets/vi.png" alt="Logo" style="width:25px; margin:5px">
                    </a>

                    <a @click="changeLocale('en')">
                        <img src="./../../assets/en.png" alt="Logo" style="margin:5px" class="images-countr">
                    </a></p>

            </form>
        </div>
    </nav>
</div>
</template>

<script>
import Vue from 'vue'
import AlertDialog from "./AlertDialog.vue";
import i18n from './../../lang/i18n';
export default {
    name: 'Header',
    components: {
        AlertDialog
    },
    data() {
        return {
            links: [],
            state: '',
            timeout: null,
            show: false,
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,

            languages: [{
                flag: 'us',
                language: 'en',
                title: 'English'
            }, {
                flag: 'es',
                language: 'vi',
                title: 'Tiếng Việt'
            }],
            isHidden: false

        }
    },
    methods: {
        loadAll() {
            return [{
                    "value": "Khoảng cách",
                    "link": "#"
                },
                {
                    "value": "Giá tăng dần",
                    "link": "#"
                },
                {
                    "value": "Giá giảm dần",
                    "link": "#"
                },
                {
                    "value": "Xếp hạng và Bình chọn",
                    "link": "#"
                },
                {
                    "value": "Hot nhất",
                    "link": "#"
                },
                {
                    "value": "Khuyến mãi",
                    "link": "#"
                },
                {
                    "value": "Khách sạn mới",
                    "link": "#"
                }
            ];
        },
        querySearchAsync(queryString, cb) {
            var links = this.links;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createFilter(queryString) {
            return (link) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        },
        onSubmit() {
            console.log('Kết thúc!');
        },
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        changeLocale(locale) {
            i18n.locale = locale;
        },

    },
    mounted() {
        this.links = this.loadAll();
    }

}
</script>

<style scoped>
.container {
    padding-left: 0;
    padding-right: 0;
}

.images-country {
    width: 20px;
    height: auto;
}

.form-control {
    padding: 0;
    height: unset;
    margin: 5px;
}

.margin-5 {
    margin: 5px;

}

.style-button {
    padding: 0;
    border: none;
    font-size: 18px;

}

.style-width {
    width: 50%;
}

.style-img {
    width: 200px;
    height: auto;
}

.collapse {
    display: block;
}

.logo {
    width: 60px;
}

.search {
    width: 50px;
}

.md-form img {
    margin: 0 20px
}

.navbar-light .navbar-toggler {
    border-color: rgb(255 253 253 / 10%);
}

.navbar-toggler-icon {
    width: 1.0em;
    height: 1.0em;
}

@media only screen and (max-width: 330px) {
    .font-size-title {
        font-size: 8px;
    }

}

@media only screen and (max-width: 480px) {
    .logo {
        width: 30px;
    }

    .style-back-cam {
        background: #ddc620;
        color: #fff;
        padding: 1px 1px 1px 1px;
        border-radius: 5px;
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .logo {
        width: 40px;
    }

    .search {
        width: 40px;
    }
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.search {
    width: 25px;
}

#navbar {
    overflow: hidden;
    background-color: #ffffff;
    transition: 0.4s;
    /* Adds a transition effect when the padding is decreased */
    /* Sticky/fixed navbar */
    width: 100%;
    top: 0;
    /* At the top */
    z-index: 99;
}

/* Style the navbar links */
#navbar a {
    float: left;

    text-align: center;
    padding: 5px;
    text-decoration: none;

    line-height: 25px;
    border-radius: 4px;
}

/* Style the logo */
#navbar #logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
}

.navbar {
    padding: 0;
}

/* Links on mouse-over */
#navbar a:hover {
    background-color: #ddd;
    color: black;
}

/* Style the active/current link */
#navbar a.active {
    background-color: dodgerblue;
    color: white;
}

/* Display some links to the right */
#navbar-right {
    float: right;
}

.padding-left-right {
    padding: 0 15px 0 15px
}
</style>
