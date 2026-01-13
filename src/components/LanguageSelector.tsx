import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { useLocale } from "@/contexts/LocaleContext";
import { SupportedLocale } from "@/i18n/config";
import { colors } from "@/styles/theme";

export const LanguageSelector: React.FC = () => {
  const { locale, setLocale, availableLocales } = useLocale();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLocaleChange = async (newLocale: SupportedLocale) => {
    if (newLocale !== locale) {
      await setLocale(newLocale);
      setModalVisible(false);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorText}>
          Lang: {availableLocales[locale].name}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>

            {(Object.keys(availableLocales) as SupportedLocale[]).map((key) => (
              <TouchableOpacity
                key={key}
                style={[
                  styles.languageOption,
                  locale === key && styles.languageOptionActive,
                ]}
                onPress={() => handleLocaleChange(key)}
              >
                <Text
                  style={[
                    styles.languageText,
                    locale === key && styles.languageTextActive,
                  ]}
                >
                  {availableLocales[key].name}
                </Text>
                {locale === key && <Text style={styles.checkMark}>✓</Text>}
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectorText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "500",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: colors.background,
  },
  languageOptionActive: {
    backgroundColor: colors.primary + "10",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  languageText: {
    fontSize: 16,
    color: colors.primary,
  },
  languageTextActive: {
    color: colors.primary,
    fontWeight: "600",
  },
  checkMark: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 12,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: colors.background,
  },
  cancelText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: "500",
  },
});
