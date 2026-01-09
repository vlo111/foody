import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  dimensions,
  shadows,
} from "../theme";

export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: fontSize.base,
    color: colors.text,
    height: dimensions.inputHeight,
  },

  inputError: {
    borderColor: colors.error,
  },

  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },

  passwordContainer: {
    position: "relative",
  },

  eyeIcon: {
    position: "absolute",
    right: spacing.md,
    top: spacing.sm + 2,
    padding: spacing.xs,
  },

  errorText: {
    color: colors.error,
    fontSize: fontSize.sm,
    marginTop: spacing.xs,
  },
});

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    height: dimensions.buttonHeight,
    borderRadius: borderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    ...shadows.md,
  },

  primaryText: {
    color: colors.white,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },

  primaryDisabled: {
    opacity: 0.6,
  },

  secondary: {
    backgroundColor: "transparent",
    height: dimensions.buttonHeight,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    color: colors.text,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },

  social: {
    backgroundColor: colors.white,
    height: dimensions.buttonHeight,
    borderRadius: borderRadius.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    ...shadows.sm,
  },

  socialText: {
    color: colors.text,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    marginLeft: spacing.sm,
  },

  facebook: {
    backgroundColor: colors.facebook,
    height: dimensions.buttonHeight,
    borderRadius: borderRadius.full,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },

  facebookText: {
    color: colors.white,
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    marginLeft: spacing.md,
  },

  socialIconContainer: {
    marginLeft: spacing.lg,
  },
});

export const linkStyles = StyleSheet.create({
  container: {
    paddingVertical: spacing.sm,
  },

  text: {
    color: colors.primary,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },

  textSecondary: {
    color: colors.textSecondary,
    fontSize: fontSize.sm,
  },

  textBold: {
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },
});

export const dividerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing.md,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },

  text: {
    color: colors.textSecondary,
    fontSize: fontSize.base,
    marginHorizontal: spacing.md,
  },
});
