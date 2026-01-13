import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@hooks/auth/useAuth";
import { sharedStyles } from "@/styles/shared";
import { ROUTES } from "@/constants/routes";
import { useLocale } from "@/contexts/LocaleContext";

export default function HomeScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { t } = useLocale();

  const handleLogout = () => {
    Alert.alert(t("alerts.logoutTitle"), t("alerts.logoutMessage"), [
      { text: t("alerts.cancel"), style: "cancel" },
      {
        text: t("auth.logout"),
        style: "destructive",
        onPress: async () => {
          await logout();
          router.replace(ROUTES.AUTH.LOGIN);
        },
      },
    ]);
  };

  return (
    <View style={sharedStyles.centerContainer}>
      <Text style={sharedStyles.bodyText}>
        {t("home.welcome", { name: user?.name })}
      </Text>
      <Text style={sharedStyles.successText}>{t("home.loggedIn")}</Text>

      <TouchableOpacity onPress={handleLogout} style={sharedStyles.button}>
        <Text style={sharedStyles.buttonText}>{t("auth.logout")}</Text>
      </TouchableOpacity>
    </View>
  );
}
