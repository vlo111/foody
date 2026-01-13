import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";
import { authLayoutStyles } from "@/styles/auth/layout.styles";
import { useLocale } from "@/contexts/LocaleContext";
import { LanguageSelector } from "@components/LanguageSelector";

export default function AuthLayout() {
  const router = useRouter();
  const segments = useSegments();
  const { t } = useLocale();
  const currentTab = segments[segments.length - 1] || "login";

  const TABS = [
    { name: "login", label: t("auth.login"), route: "/(auth)/login" },
    { name: "register", label: t("auth.signUp"), route: "/(auth)/register" },
  ] as const;

  const styles = StyleSheet.create({
    image: {
      width: 60,
      height: 60,
    },
  });

  return (
    <View style={authLayoutStyles.root}>
      <View style={authLayoutStyles.header}>
        <View style={authLayoutStyles.logoContainer}>
          <View
            style={[
              authLayoutStyles.logo,
              {
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <Image
              style={styles.image}
              source={require("assets/icons/foodyiconimage.png")}
            />
          </View>
        </View>
        <View style={authLayoutStyles.tabContainer}>
          {TABS.map((tab) => (
            <TouchableOpacity
              key={tab.name}
              style={authLayoutStyles.tab}
              onPress={() => router.push(tab.route)}
            >
              <Text
                style={[
                  authLayoutStyles.tabText,
                  currentTab === tab.name && authLayoutStyles.tabTextActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
          <View
            style={[
              authLayoutStyles.tabIndicator,
              currentTab === "register" && authLayoutStyles.tabIndicatorRight,
            ]}
          />
        </View>
      </View>
      <View>
        <LanguageSelector />
      </View>
      <View style={authLayoutStyles.content}>
        <Slot />
      </View>
    </View>
  );
}
