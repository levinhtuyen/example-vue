<template>
<BaseDialog v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title title-color text-align-left">Tìm kiếm</div>
    <div class="dialog-body text-align-left">

        <!---->
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Nhập từ khóa">
                <el-autocomplete class="form-control style-width" :fetch-suggestions="querySearchAsync" v-bind:placeholder="$t('Home.placeholdersearch')" @select="handleSelect"></el-autocomplete>

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
        <button class="btn btn-color" type="button" @click="$emit('update:active', false)">Áp dụng</button>
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
            options: [{
                value: 1,
                label: 'Asia',
                children: [{
                    value: 2,
                    label: 'China',
                    children: [{
                            value: 3,
                            label: 'Beijing'
                        },
                        {
                            value: 4,
                            label: 'Shanghai'
                        },
                        {
                            value: 5,
                            label: 'Hangzhou'
                        }
                    ]
                }, {
                    value: 6,
                    label: 'Japan',
                    children: [{
                            value: 7,
                            label: 'Tokyo'
                        },
                        {
                            value: 8,
                            label: 'Osaka'
                        },
                        {
                            value: 9,
                            label: 'Kyoto'
                        }
                    ]
                }, {
                    value: 10,
                    label: 'Korea',
                    children: [{
                            value: 11,
                            label: 'Seoul'
                        },
                        {
                            value: 12,
                            label: 'Busan'
                        },
                        {
                            value: 13,
                            label: 'Taegu'
                        }
                    ]
                }]
            }, {
                value: 14,
                label: 'Europe',
                children: [{
                    value: 15,
                    label: 'France',
                    children: [{
                            value: 16,
                            label: 'Paris'
                        },
                        {
                            value: 17,
                            label: 'Marseille'
                        },
                        {
                            value: 18,
                            label: 'Lyon'
                        }
                    ]
                }, {
                    value: 19,
                    label: 'UK',
                    children: [{
                            value: 20,
                            label: 'London'
                        },
                        {
                            value: 21,
                            label: 'Birmingham'
                        },
                        {
                            value: 22,
                            label: 'Manchester'
                        }
                    ]
                }]
            }, {
                value: 23,
                label: 'North America',
                children: [{
                    value: 24,
                    label: 'US',
                    children: [{
                            value: 25,
                            label: 'New York'
                        },
                        {
                            value: 26,
                            label: 'Los Angeles'
                        },
                        {
                            value: 27,
                            label: 'Washington'
                        }
                    ]
                }, {
                    value: 28,
                    label: 'Canada',
                    children: [{
                            value: 29,
                            label: 'Toronto'
                        },
                        {
                            value: 30,
                            label: 'Montreal'
                        },
                        {
                            value: 31,
                            label: 'Ottawa'
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
.dialog-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 18px;
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
