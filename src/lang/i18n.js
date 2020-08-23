import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
const messages = {
  en: {
    Home: {
      hotdeal: "FLASHSALE",
      special: "SPECIAL OFFER",
      go2joy: "GO2JOY TOP PICK",
      hotelnew: "NEW HOTEL",
      promotion: "HOT PROMOTION",
      tophotel: "TOP RATE HOTEL"
    }
  },
  vi: {
    Home: {
      hotdeal: "GIẢM SỐC",
      special: "ƯU ĐÃI ĐẶT BIỆT",
      go2joy: "GO2JOY ĐỀ XUẤT",
      hotelnew: "KHÁCH SẠN MỚi",
      promotion: "CHƯƠNG TRÌNH KHUYẾN MÃI",
      tophotel: "TOP KHÁCH SẠN ĐƯỢC BÌNH CHỌN"
    }
  }
};
const i18n = new VueI18n({
  locale: "vi", // set locale
  fallbackLocale: "vi", // set fallback locale
  messages // set locale messages
});
export default i18n;