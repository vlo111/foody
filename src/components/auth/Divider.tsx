import React from "react";
import { View, Text } from "react-native";
import { dividerStyles } from "@/styles/auth/components.styles";
import { useLocale } from "@/contexts/LocaleContext";

interface DividerProps {
  text?: string;
}

export const Divider: React.FC<DividerProps> = ({ text }) => {
  const { t } = useLocale();
  const displayText = text || t("auth.or");

  return (
    <View style={dividerStyles.container}>
      <View style={dividerStyles.line} />
      <Text style={dividerStyles.text}>{displayText}</Text>
      <View style={dividerStyles.line} />
    </View>
  );
};
