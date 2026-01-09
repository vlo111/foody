import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { buttonStyles } from "@/styles/auth/components.styles";
import GoogleIcon from "@/assets/icons/google-icon.svg";
import { colors } from "@/styles/theme";

type SocialProvider = "google" | "facebook";

interface SocialButtonProps {
  provider: SocialProvider;
  onPress: () => void;
}

const PROVIDER_CONFIG: Record<
  SocialProvider,
  { icon: React.ReactNode; text: string; isFacebook: boolean }
> = {
  google: {
    icon: <GoogleIcon />,
    text: "Log in with Google",
    isFacebook: false,
  },
  facebook: {
    icon: "f",
    text: "Log in with Facebook",
    isFacebook: true,
  },
};

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onPress,
}) => {
  const { icon, text, isFacebook } = PROVIDER_CONFIG[provider];

  return (
    <TouchableOpacity
      style={isFacebook ? buttonStyles.facebook : buttonStyles.social}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {isFacebook ? (
        <View style={buttonStyles.socialIconContainer}>
          <Text style={{ fontSize: 20, color: colors.white, fontWeight: "bold" }}>
            {icon}
          </Text>
        </View>
      ) : (
        <Text style={{ fontSize: 24 }}>{icon}</Text>
      )}
      <Text
        style={isFacebook ? buttonStyles.facebookText : buttonStyles.socialText}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
