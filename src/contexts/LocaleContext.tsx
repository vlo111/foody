import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import i18n, { SupportedLocale, setI18nConfig, LOCALES } from "@/i18n/config";

const LOCALE_STORAGE_KEY = "@app_locale";

interface LocaleContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => Promise<void>;
  t: (key: string, options?: any) => string;
  isRTL: boolean;
  availableLocales: typeof LOCALES;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(
    i18n.locale as SupportedLocale,
  );
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  useEffect(() => {
    loadLocale();
  }, []);

  const loadLocale = async () => {
    try {
      const savedLocale = await AsyncStorage.getItem(LOCALE_STORAGE_KEY);
      if (savedLocale && Object.keys(LOCALES).includes(savedLocale)) {
        await changeLocale(savedLocale as SupportedLocale, false);
      }
    } catch (error) {
      console.error("Failed to load locale:", error);
    }
  };

  const changeLocale = async (newLocale: SupportedLocale, persist = true) => {
    try {
      setI18nConfig(newLocale);
      setLocaleState(newLocale);
      setIsRTL(LOCALES[newLocale].isRTL);

      if (persist) {
        await AsyncStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      }
    } catch (error) {
      console.error("Failed to change locale:", error);
    }
  };

  const t = (key: string, options?: any): string => {
    return i18n.t(key, options);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: changeLocale,
        t,
        isRTL,
        availableLocales: LOCALES,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
