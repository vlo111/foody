import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { authLayoutStyles } from "@/styles/auth/layout.styles";
import { linkStyles } from "@/styles/auth/components.styles";
import { authScreenStyles } from "@/styles/auth/screen.styles";
import { FormInput } from "@/components/auth/FormInput";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { Button } from "@/components/auth/Button";
import { SocialButton } from "@/components/auth/SocialButton";
import { Divider } from "@/components/auth/Divider";
import { useLoginForm } from "@/hooks/forms/useLoginForm";
import { useLocale } from "@/contexts/LocaleContext";

const SOCIAL_PROVIDERS = ["facebook", "google"] as const;

export default function LoginScreen() {
  const { t } = useLocale();
  const {
    formData,
    errors,
    touched,
    isLoading,
    updateField,
    markFieldTouched,
    handleSubmit,
  } = useLoginForm();

  const handleForgotPassword = () => {
    Alert.alert(
      t("alerts.forgotPasswordTitle"),
      t("alerts.forgotPasswordMessage"),
    );
  };

  const handleSocialLogin = (provider: string) => {
    Alert.alert(`${provider} ${t("auth.login")}`, t("alerts.socialLoginSoon"));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={authLayoutStyles.formContainer}>
        <FormInput
          placeholder={t("form.email")}
          value={formData.email}
          onChangeText={(value) => updateField("email", value)}
          onBlur={() => markFieldTouched("email")}
          autoCapitalize="none"
          keyboardType="email-address"
          editable={!isLoading}
          error={touched.email ? errors.email : undefined}
        />

        <PasswordInput
          placeholder={t("form.password")}
          value={formData.password}
          onChangeText={(value) => updateField("password", value)}
          onBlur={() => markFieldTouched("password")}
          editable={!isLoading}
          error={touched.password ? errors.password : undefined}
        />

        <TouchableOpacity
          style={linkStyles.container}
          onPress={handleForgotPassword}
        >
          <Text style={linkStyles.text}>{t("auth.forgotPassword")}</Text>
        </TouchableOpacity>

        <View style={authScreenStyles.spacerMD} />

        <Button
          title={t("auth.login")}
          onPress={handleSubmit}
          loading={isLoading}
          disabled={isLoading}
        />

        <Divider />

        {SOCIAL_PROVIDERS.map((provider) => (
          <SocialButton
            key={provider}
            provider={provider}
            onPress={() => handleSocialLogin(provider)}
          />
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}
