<template>
  <BaseDialog v-bind="$attrs" v-on="$listeners">
    <div class="dialog-title text-align-left">Chọn địa điểm</div>
    <div class="dialog-body text-align-left">
        <p class="font-size-title">HỒ CHÍ MINH</p>
    </div>
    <div class="dialog-footer">
      <button class="btn btn-success" type="button" @click="$emit('update:active', false)">Ok</button>
    </div>
  </BaseDialog>
</template>

<script>
import BaseDialog from "./BaseDialog.vue";

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
.text-align-left{
    text-align: left;
}
</style>