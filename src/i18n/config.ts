import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import { I18nManager } from "react-native";
import en from "./locales/en.json";
import hy from "./locales/hy.json";
import ru from "./locales/ru.json";

export type SupportedLocale = "en" | "hy" | "ru";

export const LOCALES: Record<
  SupportedLocale,
  { name: string; isRTL: boolean }
> = {
  en: { name: "English", isRTL: false },
  hy: { name: "Հայերեն", isRTL: false },
  ru: { name: "Русский", isRTL: false },
};

const i18n = new I18n({
  en,
  hy,
  ru,
});

i18n.defaultLocale = "en";

const deviceLocales = getLocales();
const deviceLanguage = deviceLocales[0]?.languageCode || "en";

i18n.locale = deviceLanguage;
i18n.enableFallback = true;

if (!Object.keys(LOCALES).includes(i18n.locale)) {
  i18n.locale = "en";
}

export const isRTL = (locale: string): boolean => {
  return LOCALES[locale as SupportedLocale]?.isRTL || false;
};

export const setI18nConfig = (locale: SupportedLocale) => {
  i18n.locale = locale;

  const shouldBeRTL = isRTL(locale);
  if (I18nManager.isRTL !== shouldBeRTL) {
    I18nManager.forceRTL(shouldBeRTL);
    I18nManager.allowRTL(shouldBeRTL);
  }
};

export default i18n;
