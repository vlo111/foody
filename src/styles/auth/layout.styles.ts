import { StyleSheet, Platform } from "react-native";
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadows,
} from "../theme";

export const authLayoutStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.backgroundSecondary,
  },

  header: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    borderBottomLeftRadius: borderRadius["3xl"],
    borderBottomRightRadius: borderRadius["3xl"],
    ...shadows.md,
  },

  logoContainer: {
    alignItems: "center",
  },

  logo: {
    marginTop: spacing.xl,
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: spacing.lg - 4,
    paddingVertical: 10,
  },

  tab: {
    width: "50%",
    paddingVertical: spacing.sm,
    paddingHorizontal: '15%',
  },

  tabText: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: colors.textSecondary,
  },

  tabTextActive: {
    color: colors.text,
  },

  tabIndicator: {
    position: "absolute",
    bottom: 0,
    left: spacing.sm * 2 + 4,
    height: 3,
    width: "49%",
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },

  tabIndicatorRight: {
    left: spacing.xxxl * 3,
    right: 0,
  },

  content: {
    flex: 1,
    paddingTop: spacing.md,
  },

  formContainer: {
    paddingHorizontal: spacing.sm * 2 + 4,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.xxl,
  },
});