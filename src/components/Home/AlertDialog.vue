<template>
<BaseDialog v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title title-color text-align-left">Tìm kiếm</div>
    <div class="dialog-body text-align-left">

        <!---->
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Nhập từ khóa">
                <el-autocomplete class="form-control" v-model="state1" :fetch-suggestions="querySearchAsync" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete>

            </el-form-item>
            <el-form-item label="Chọn địa điểm">
                <el-cascader :options="options" placeholder="Chọn" :props="props" collapse-tags></el-cascader>
            </el-form-item>
            <el-form-item label="Danh mục">
                <el-select v-model="form.region" placeholder="Chọn danh mục">
                    <el-option label="Danh mục 1" value="danhmuc1"></el-option>
                    <el-option label="Danh mục 2" value="danhmuc2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Từ khóa HOT">
                <el-button size="small" round>Ks cặp đôi</el-button>
                <el-button size="small" round>Ks du lịch</el-button>
                <el-button size="small" round>Ghế tình yêu</el-button>
                <el-button size="small" round>Romatic</el-button>
                <el-button size="small" round>KSTinhYeu</el-button>
            </el-form-item>

            <el-form-item label="Mức giá (VNĐ)">

                <el-slider :max="3000000" label="VNĐ" :min="0" v-model="value1" :step="100000">
                </el-slider>
            </el-form-item>
        </el-form>
    </div>

    <div class="dialog-footer">
        <button class="btn btn-color" type="button" @click="$emit('update:active', false)">
            <router-link tag="a" :to="{ name: 'Category', params: { Sn: 1 }}">Áp dụng</router-link>
        </button>
    </div>
</BaseDialog>
</template>

<script>
import axios from "axios"
import BaseDialog from "./BaseDialog.vue";
const cityOptions = ['Giảm giá đặc biệt', 'Khuyến mãi', 'Khách sạn mới', 'Khách sạn nổi bật', 'Ảnh 360'];
export default {
    name: "AlertDialog",
    components: {
        BaseDialog
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
            options: [{
                value: 1,
                label: 'Miền Bắc',
                children: [{
                    value: 2,
                    label: 'Hà Nội',
                    children: [{
                            value: 3,
                            label: 'Ba đình'
                        },
                        {
                            value: 4,
                            label: 'Đống đa'
                        },
                        {
                            value: 5,
                            label: 'Hoàn kiếm'
                        }
                    ]
                }, {
                    value: 6,
                    label: 'Hải Phòng',
                    children: [{
                            value: 7,
                            label: 'Đồ Sơn'
                        },
                        {
                            value: 8,
                            label: 'Kiến An'
                        },
                        {
                            value: 9,
                            label: 'Thủy Nguyên'
                        }
                    ]
                }, {
                    value: 10,
                    label: 'Hải Dương',
                    children: [{
                            value: 11,
                            label: 'Tứ Kỳ'
                        },
                        {
                            value: 12,
                            label: 'Thành phố Hải Dương'
                        },
                        {
                            value: 13,
                            label: 'Thanh Miện'
                        }
                    ]
                }]
            }, {
                value: 14,
                label: 'Miền Trung',
                children: [{
                    value: 15,
                    label: 'Huế',
                    children: [{
                            value: 16,
                            label: 'Quảng Điền'
                        },
                        {
                            value: 17,
                            label: 'Quảng Điền'
                        },
                        {
                            value: 18,
                            label: 'Hương Thủy'
                        }
                    ]
                }, {
                    value: 19,
                    label: 'Đà Nẵng',
                    children: [{
                            value: 20,
                            label: 'Sơn Trà'
                        },
                        {
                            value: 21,
                            label: 'Cẩm Lệ'
                        },
                        {
                            value: 22,
                            label: 'Hải Châu'
                        }
                    ]
                }]
            }, {
                value: 23,
                label: 'Miền Nam',
                children: [{
                    value: 24,
                    label: 'TP Hồ Chí Minh',
                    children: [{
                            value: 25,
                            label: 'Quận 1'
                        },
                        {
                            value: 26,
                            label: 'Quận 2'
                        },
                        {
                            value: 27,
                            label: 'Quận 5'
                        }
                    ]
                }, {
                    value: 28,
                    label: 'Đồng Nai',
                    children: [{
                            value: 29,
                            label: 'TP Biên Hòa'
                        },
                        {
                            value: 30,
                            label: 'Trảng Bom'
                        },
                        {
                            value: 31,
                            label: 'Nhơn Trạch'
                        }
                    ]
                }]
            }],

            checkboxGroup2: ['Giảm giá đặc biệt'],
            cities: cityOptions,
            value2: 0,
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
                    "value": "Giá giảm dần ",
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
        formatTooltip(val) {
            return val / 10;
        }

    },
    mounted() {
        this.links = this.loadAll();
    }

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
</style>
