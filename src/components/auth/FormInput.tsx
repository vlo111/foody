import React from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";
import { inputStyles } from "@/styles/auth/components.styles";
import { colors } from "@/styles/theme";

interface FormInputProps extends TextInputProps {
  error?: string;
  rightIcon?: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({
  error,
  rightIcon,
  style,
  ...props
}) => {
  return (
    <View style={inputStyles.container}>
      <View style={inputStyles.passwordContainer}>
        <TextInput
          style={[inputStyles.input, error && inputStyles.inputError, style]}
          placeholderTextColor={colors.textTertiary}
          {...props}
        />
        {rightIcon && <View style={inputStyles.eyeIcon}>{rightIcon}</View>}
      </View>
      {error && <Text style={inputStyles.errorText}>{error}</Text>}
    </View>
  );
};
