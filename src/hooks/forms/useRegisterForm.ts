import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { useAuth } from "@hooks/auth/useAuth";
import { validateRegisterForm, RegisterFormData } from "@/utils/validation";
import { ROUTES } from "@/constants/routes";
import i18n from "@/i18n/config";

const INITIAL_FORM_STATE: RegisterFormData = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_ERROR_STATE: Record<keyof RegisterFormData, string> = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_TOUCHED_STATE: Record<keyof RegisterFormData, boolean> = {
  name: false,
  email: false,
  phone: false,
  password: false,
  confirmPassword: false,
};

export const useRegisterForm = () => {
  const [formData, setFormData] =
    useState<RegisterFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
  const [touched, setTouched] = useState(INITIAL_TOUCHED_STATE);

  const { register, isLoading } = useAuth();
  const router = useRouter();

  const updateField = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const markFieldTouched = (field: keyof RegisterFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async () => {
    setTouched({
      name: true,
      email: true,
      phone: true,
      password: true,
      confirmPassword: true,
    });

    const validation = validateRegisterForm(formData);
    setErrors(validation.errors);

    if (!validation.isValid) return;

    const result = await register({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password,
      role: "customer",
    });

    if (result.success) {
      Alert.alert(i18n.t("alerts.success"), i18n.t("alerts.accountCreated"), [
        {
          text: i18n.t("alerts.ok"),
          onPress: () => router.replace(ROUTES.AUTH.LOGIN),
        },
      ]);
    } else {
      Alert.alert(
        i18n.t("alerts.registrationFailed"),
        result.error || i18n.t("alerts.tryAgain"),
      );
    }
  };

  return {
    formData,
    errors,
    touched,
    isLoading,
    updateField,
    markFieldTouched,
    handleSubmit,
  };
};
