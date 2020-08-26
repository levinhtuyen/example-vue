<template>
<div id="navbar" class="container">
    <!--Navbar-->
    <nav class="navbar navbar-expand-md bg-light navbar-light">
        <!-- Brand -->
        <router-link tag="a" :to="{ name: 'Home'}">
            <img src="https://go2joy.vn/images/logo.jpg" alt="Logo" class="logo">
        </router-link>
         <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <span class="font-size-title">{{ $t('Home.language') }}</span>
            <a @click="changeLocale('vi')">
                <img src="./../../assets/vi.png" alt="Logo" style="width:25px; margin:5px">
            </a>
            <a @click="changeLocale('en')">
                <img src="./../../assets/en.png" alt="Logo" style="margin:5px" class="images-countr">
            </a>
            <el-button type="text" @click="dialogFormVisible = true">{{ $t('Home.form') }}</el-button>
             <router-link tag="a" class="font-size-title" :to="{ name: 'About'}">{{ $t('Home.about') }}</router-link>
              <router-link tag="a" class="font-size-title" :to="{ name: 'Blog'}">{{ $t('Home.blog') }}</router-link>
            <!-- <button class="style-button" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)"> <flag :iso="entry.flag" v-bind:squared=false /></button> -->

            <!-- <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete> -->
            <button type="button" @click="show = !show" class="btn" data-toggle="modal" data-target="#myModal">
                <img src="./../../assets/search.png" class="search" alt="">
            </button>

            <AlertDialog :active.sync="show" title="Hello world" content="Hello world" />
        </div>
    </nav>
    <!-- Collapsible content -->
    <el-dialog title="Tạo bài viết" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form ref="form" :model="form" label-width="120px">
                <el-upload action="#" list-type="picture-card" :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                        <span class="el-upload-list__item-actions">
                            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                <i class="el-icon-download"></i>
                            </span>
                            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                                <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <el-form-item label="Tên bài viết">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="Chọn danh mục">
                    <el-select v-model="form.region" placeholder="--- Chọn ---">
                        <el-option label="Danh mục 1" value="danhmuc1"></el-option>
                        <el-option label="Danh mục 2" value="danhmuc2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Chọn ngày">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="Từ ngày" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="Đến ngày" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="Ẩn tin">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Chọn tag">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="Hotel" name="type"></el-checkbox>
                        <el-checkbox label="Coupon" name="type"></el-checkbox>
                        <el-checkbox label="Review" name="type"></el-checkbox>
                        <el-checkbox label="Blog" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <!-- <el-form-item label="Resources">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="Sponsor"></el-radio>
                            <el-radio label="Venue"></el-radio>
                        </el-radio-group>
                    </el-form-item> -->
                <el-form-item label="Activity form">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Tạo</el-button>
                    <el-button>Hủy</el-button>
                </el-form-item>
            </el-form>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <!-- <el-button @click="dialogFormVisible = false">Cancel</el-button> -->
            <el-button type="primary" @click="dialogFormVisible = false">Kết thúc</el-button>
        </span>
    </el-dialog>
    <!--/.Navbar-->
</div>
</template>

<script>
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
            }]

        };
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
        }
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

.style-button {
    padding: 0;
    border: none;
    font-size: 18px;

}

.style-img {
    width: 200px;
    height: auto;
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

@media only screen and (max-width: 480px) {
    .logo {
        width: 30px;
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
</style>
