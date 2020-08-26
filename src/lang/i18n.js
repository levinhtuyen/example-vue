import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
const messages = {
  en: {
    Home: {
      chooseaddress: "CHOOSE LOCATION",
      hotdeal: "FLASHSALE",
      special: "SPECIAL OFFER",
      go2joy: "GO2JOY TOP PICK",
      hotelnew: "NEW HOTEL",
      promotion: "HOT PROMOTION",
      tophotel: "TOP RATE HOTEL",
      language: "Choose language",
      form: "FORM",
      about: "ABOUT",
      placeholdersearch: "Please input keyword...",
      blog: "BLOG DISCOVER",
      travelHotel: "Travel Hotels",
      riverside: "A-IN RIVERSIDE HOTEL",
      love: "Love",
      youneed: "WHAT DO YOU NEED?",
      seeall: "See all"
    }
  },
  vi: {
    Home: {
      chooseaddress: "CHỌN ĐỊA ĐIỂM",
      hotdeal: "GIẢM SỐC",
      special: "ƯU ĐÃI ĐẶT BIỆT",
      go2joy: "GO2JOY ĐỀ XUẤT",
      hotelnew: "KHÁCH SẠN MỚi",
      promotion: "CHƯƠNG TRÌNH KHUYẾN MÃI",
      tophotel: "TOP KHÁCH SẠN ĐƯỢC BÌNH CHỌN",
      language: "Chọn ngôn ngữ",
      form: "FORM",
      about: "GIỚI THIỆU",
      placeholdersearch: "Nhập từ khóa...",
      blog: "BLOG KHÁM PHÁ",
      travelHotel: "Du Lịch",
      riverside: "Nơi đã tìm",
      love: "Tình yêu",
      youneed: "HÔM NAY BẠN CẦN GÌ?",
      seeall: "Xem tất cả", 
    }
  }
};
const i18n = new VueI18n({
  locale: "vi", // set locale
  fallbackLocale: "vi", // set fallback locale
  messages // set locale messages
});
export default i18n;
