import { StyleSheet } from "react-native";
import {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadows,
} from "./theme";

export const sharedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  scrollContainer: {
    flexGrow: 1,
    paddingVertical: spacing.lg,
  },

  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.md,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.md,
  },

  heading1: {
    fontSize: fontSize["4xl"],
    fontWeight: fontWeight.bold,
    color: colors.text,
  },

  heading2: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: colors.text,
  },

  heading3: {
    fontSize: fontSize["2xl"],
    fontWeight: fontWeight.semibold,
    color: colors.text,
  },

  bodyText: {
    fontSize: fontSize.base,
    color: colors.text,
    lineHeight: fontSize.base * 1.5,
  },

  caption: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },

  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonOutlineText: {
    color: colors.primary,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  listItemText: {
    flex: 1,
    fontSize: fontSize.base,
    color: colors.text,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },

  error: {
    padding: spacing.md,
    backgroundColor: colors.error + "20",
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },

  errorText: {
    color: colors.error,
    fontSize: fontSize.sm,
  },

  success: {
    padding: spacing.md,
    backgroundColor: colors.success + "20",
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },

  successText: {
    color: colors.success,
    fontSize: fontSize.sm,
  },
});