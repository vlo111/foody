import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { buttonStyles } from "@/styles/auth/components.styles";
import { colors } from "@/styles/theme";

type ButtonVariant = "primary" | "secondary" | "facebook";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const VARIANT_STYLES: Record<
  ButtonVariant,
  { button: ViewStyle; text: TextStyle }
> = {
  primary: { button: buttonStyles.primary, text: buttonStyles.primaryText },
  secondary: {
    button: buttonStyles.secondary,
    text: buttonStyles.secondaryText,
  },
  facebook: { button: buttonStyles.facebook, text: buttonStyles.facebookText },
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  icon,
  style,
  textStyle,
}) => {
  const { button, text } = VARIANT_STYLES[variant];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[button, isDisabled && buttonStyles.primaryDisabled, style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "secondary" ? colors.primary : colors.white}
        />
      ) : (
        <>
          {icon}
          <Text style={[text, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};
