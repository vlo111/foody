import { StyleSheet } from "react-native";
import { colors, spacing, fontSize, fontWeight } from "../theme";

export const authScreenStyles = StyleSheet.create({
  registerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.xl,
  },

  registerTitle: {
    fontSize: fontSize["3xl"],
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },

  socialIconsRow: {
    flexDirection: "row",
    gap: spacing.md,
  },

  section: {
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },

  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.lg,
  },

  footerButtonContainer: {
    flex: 1,
    marginRight: spacing.md,
  },

  footerTextContainer: {
    flex: 1,
    alignItems: "center",
  },

  footerText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    textAlign: "center",
  },

  footerLink: {
    color: colors.primary,
    fontWeight: fontWeight.bold,
  },

  spacerXS: {
    height: spacing.xs,
  },

  spacerSM: {
    height: spacing.sm,
  },

  spacerMD: {
    height: spacing.md,
  },

  spacerLG: {
    height: spacing.lg,
  },

  spacerXL: {
    height: spacing.xl,
  },
});