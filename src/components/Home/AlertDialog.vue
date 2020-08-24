<template>
<BaseDialog v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title title-color text-align-left">Chọn địa điểm</div>
    <div class="dialog-body text-align-left">

        <div class="block">
            <span class="demonstration">Chọn địa điểm</span>
            <el-cascader :options="options" placeholder="Chọn" :props="{ multiple: true, checkStrictly: true }" clearable></el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">Chọn danh mục</span>
            <el-row>
                <el-button size="medium" round>Ks cặp đôi</el-button>
                <el-button size="medium" round>Ks du lịch</el-button>
            </el-row>
        </div>
        <span class="demonstration">Nổi bật</span>
        <el-row>
            <div style="margin-top: 20px">
                <el-checkbox-group v-model="checkboxGroup2" size="medium">
                    <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                </el-checkbox-group>
            </div>
        </el-row>
        <el-row>
            <span class="demonstration">Mức giá</span> || <span>0 ~ 3.000.000 VNĐ</span>
             <el-slider v-model="value2" :show-tooltip="false"></el-slider>
        </el-row>
    </div>

    <div class="dialog-footer">
        <button class="btn btn-color" type="button" @click="$emit('update:active', false)">Áp dụng</button>
    </div>
</BaseDialog>
</template>

<script>
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
            options: [{
                value: 'mienbac',
                label: 'Miền bắc',
                children: [{
                    value: 'hanoi',
                    label: 'Hà Nội',
                    children: [{
                        value: 'hoankiem',
                        label: 'Hoàn Kiếm'
                    }, {
                        value: 'dongda',
                        label: 'Đống Đa'
                    }, {
                        value: 'efficiency',
                        label: 'Efficiency'
                    }, {
                        value: 'controllability',
                        label: 'Controllability'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'side nav',
                        label: 'Side Navigation'
                    }, {
                        value: 'top nav',
                        label: 'Top Navigation'
                    }]
                }]
            }, {
                value: 'mientrung',
                label: 'Miền Trung',
                children: [{
                    value: 'hue',
                    label: 'Huế',
                    children: [{
                        value: 'layout',
                        label: 'Layout'
                    }, {
                        value: 'color',
                        label: 'Color'
                    }, {
                        value: 'typography',
                        label: 'Typography'
                    }, {
                        value: 'icon',
                        label: 'Icon'
                    }, {
                        value: 'button',
                        label: 'Button'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox'
                    }, {
                        value: 'input',
                        label: 'Input'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber'
                    }, {
                        value: 'select',
                        label: 'Select'
                    }, {
                        value: 'cascader',
                        label: 'Cascader'
                    }, {
                        value: 'switch',
                        label: 'Switch'
                    }, {
                        value: 'slider',
                        label: 'Slider'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker'
                    }, {
                        value: 'upload',
                        label: 'Upload'
                    }, {
                        value: 'rate',
                        label: 'Rate'
                    }, {
                        value: 'form',
                        label: 'Form'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table'
                    }, {
                        value: 'tag',
                        label: 'Tag'
                    }, {
                        value: 'progress',
                        label: 'Progress'
                    }, {
                        value: 'tree',
                        label: 'Tree'
                    }, {
                        value: 'pagination',
                        label: 'Pagination'
                    }, {
                        value: 'badge',
                        label: 'Badge'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert'
                    }, {
                        value: 'loading',
                        label: 'Loading'
                    }, {
                        value: 'message',
                        label: 'Message'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox'
                    }, {
                        value: 'notification',
                        label: 'Notification'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu'
                    }, {
                        value: 'tabs',
                        label: 'Tabs'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown'
                    }, {
                        value: 'steps',
                        label: 'Steps'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip'
                    }, {
                        value: 'popover',
                        label: 'Popover'
                    }, {
                        value: 'card',
                        label: 'Card'
                    }, {
                        value: 'carousel',
                        label: 'Carousel'
                    }, {
                        value: 'collapse',
                        label: 'Collapse'
                    }]
                }]
            }, {
                value: 'miennam',
                label: 'Miền Nam',
                children: [{
                    value: 'quan1',
                    label: 'Quận 1'
                }, {
                    value: 'quan2',
                    label: 'Quận 2'
                }, {
                    value: 'quan5',
                    label: 'Quận 5'
                }]
            }],
            checkboxGroup2: ['Giảm giá đặc biệt'],
            cities: cityOptions,
            value2: 0
        };
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
