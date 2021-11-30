import { createI18n } from "vue-i18n";
import en from "./en";

let messages = {
  en: en,
};
const i18ntest = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: messages,
});
console.log(22222, messages, i18ntest);

// i18ntest.global.mergeLocaleMessage("en", {
//   design_system: {
//     title: "Design System",
//   },
// });

export default i18ntest;
