import { useState } from "react";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { useAuth } from "@hooks/auth/useAuth";
import { validateLoginForm, LoginFormData } from "@/utils/validation";
import { ROUTES } from "@/constants/routes";
import i18n from "@/i18n/config";

const INITIAL_FORM_STATE: LoginFormData = {
  email: "",
  password: "",
};

const INITIAL_ERROR_STATE: Record<keyof LoginFormData, string> = {
  email: "",
  password: "",
};

const INITIAL_TOUCHED_STATE: Record<keyof LoginFormData, boolean> = {
  email: false,
  password: false,
};

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
  const [touched, setTouched] = useState(INITIAL_TOUCHED_STATE);

  const { login, isLoading } = useAuth();
  const router = useRouter();

  const updateField = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const markFieldTouched = (field: keyof LoginFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async () => {
    setTouched({ email: true, password: true });

    const validation = validateLoginForm(formData);
    setErrors(validation.errors);

    if (!validation.isValid) return;

    const result = await login({
      email: formData.email.trim(),
      password: formData.password,
    });

    if (result.success) {
      router.replace(ROUTES.HOME);
    } else {
      Alert.alert(
        i18n.t("alerts.loginFailed"),
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
