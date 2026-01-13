import React, { useState } from "react";
import { TouchableOpacity, Text, TextInputProps } from "react-native";
import { FormInput } from "./FormInput";
import EyeIconClose from "@/assets/icons/eye-password-close.svg";
import EyeIconOpen from "@/assets/icons/eye-password-show.svg";

interface PasswordInputProps extends Omit<TextInputProps, "secureTextEntry"> {
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  error,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <FormInput
      {...props}
      error={error}
      secureTextEntry={!isVisible}
      rightIcon={
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Text style={{ fontSize: 20 }}>
            {isVisible ? <EyeIconClose /> : <EyeIconOpen />}
          </Text>
        </TouchableOpacity>
      }
    />
  );
};
