import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";
import { authLayoutStyles } from "@/styles/auth/layout.styles";
import { Image, StyleSheet } from 'react-native';

const TABS = [
  { name: "login", label: "Login", route: "/(auth)/login" },
  { name: "register", label: "Sign Up", route: "/(auth)/register" },
] as const;

export default function AuthLayout() {
  const router = useRouter();
  const segments = useSegments();
  const currentTab = segments[segments.length - 1] || "login";

  const styles = StyleSheet.create({
    image: {
      width: 70,
      height: 70,
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
              source={require('assets/icons/foodyiconimage.png')}
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
              currentTab === "register" && authLayoutStyles.tabIndicatorRight
            ]}
          />
        </View>
      </View>

      <View style={authLayoutStyles.content}>
        <Slot />
      </View>
    </View>
  );
}
