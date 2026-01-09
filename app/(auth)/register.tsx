import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { authLayoutStyles } from "@/styles/auth/layout.styles";
import { authScreenStyles } from "@/styles/auth/screen.styles";
import { buttonStyles } from "@/styles/auth/components.styles";
import { FormInput } from "@/components/auth/FormInput";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { Button } from "@/components/auth/Button";
import { useRegisterForm } from "@hooks/forms/useRegisterForm";

const SOCIAL_PROVIDERS = [
  { name: "google", icon: "🔴", style: { fontSize: 20 } },
  {
    name: "facebook",
    icon: "f",
    style: { fontSize: 20, color: "#3b5998", fontWeight: "bold" },
  },
] as const;

export default function RegisterScreen() {
  const router = useRouter();
  const {
    formData,
    errors,
    touched,
    isLoading,
    updateField,
    markFieldTouched,
    handleSubmit,
  } = useRegisterForm();

  const handleSocialSignup = (provider: string) => {
    Alert.alert(`${provider} Sign Up`, "Social signup coming soon");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={authLayoutStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={authLayoutStyles.formContainer}>
          <View style={authScreenStyles.registerHeader}>
            <Text style={authScreenStyles.registerTitle}>Sign Up</Text>

            <View style={authScreenStyles.socialIconsRow}>
              {SOCIAL_PROVIDERS.map(({ name, icon, style }) => (
                <TouchableOpacity
                  key={name}
                  style={buttonStyles.socialIconContainer}
                  onPress={() => handleSocialSignup(name)}
                >
                  <Text style={style}>{icon}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <FormInput
            placeholder="Full Name"
            value={formData.name}
            onChangeText={(value) => updateField("name", value)}
            onBlur={() => markFieldTouched("name")}
            editable={!isLoading}
            error={touched.name ? errors.name : undefined}
          />

          <FormInput
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => updateField("email", value)}
            onBlur={() => markFieldTouched("email")}
            autoCapitalize="none"
            keyboardType="email-address"
            editable={!isLoading}
            error={touched.email ? errors.email : undefined}
          />

          <FormInput
            placeholder="Mobile Number"
            value={formData.phone}
            onChangeText={(value) => updateField("phone", value)}
            onBlur={() => markFieldTouched("phone")}
            keyboardType="phone-pad"
            editable={!isLoading}
            error={touched.phone ? errors.phone : undefined}
          />

          <PasswordInput
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => updateField("password", value)}
            onBlur={() => markFieldTouched("password")}
            editable={!isLoading}
            error={touched.password ? errors.password : undefined}
          />

          <PasswordInput
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => updateField("confirmPassword", value)}
            onBlur={() => markFieldTouched("confirmPassword")}
            editable={!isLoading}
            error={touched.confirmPassword ? errors.confirmPassword : undefined}
          />

          <View style={authScreenStyles.spacerLG} />

          <View style={authScreenStyles.footerRow}>
            <View style={authScreenStyles.footerButtonContainer}>
              <Button
                title="Sign Up"
                onPress={handleSubmit}
                loading={isLoading}
                disabled={isLoading}
              />
            </View>

            <View style={authScreenStyles.footerTextContainer}>
              <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text style={authScreenStyles.footerText}>
                  Already a member?{" "}
                  <Text style={authScreenStyles.footerLink}>Login</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
