import React from "react";
import { View, Text } from "react-native";
import { dividerStyles } from "@/styles/auth/components.styles";

interface DividerProps {
  text?: string;
}

export const Divider: React.FC<DividerProps> = ({ text = "Or" }) => {
  return (
    <View style={dividerStyles.container}>
      <View style={dividerStyles.line} />
      <Text style={dividerStyles.text}>{text}</Text>
      <View style={dividerStyles.line} />
    </View>
  );
};
