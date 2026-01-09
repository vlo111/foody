import React from "react";
import { View, ActivityIndicator, StyleSheet, ViewStyle } from "react-native";
import { colors } from "@/styles/theme";

interface LoadingScreenProps {
  backgroundColor?: string;
  spinnerColor?: string;
  style?: ViewStyle;
}

export function LoadingScreen({
  backgroundColor = colors.backgroundSecondary,
  spinnerColor = colors.primary,
  style,
}: LoadingScreenProps = {}) {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <ActivityIndicator size="large" color={spinnerColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
