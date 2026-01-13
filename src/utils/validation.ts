import i18n from "@/i18n/config";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, error: i18n.t("validation.emailRequired") };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: i18n.t("validation.emailInvalid") };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: i18n.t("validation.passwordRequired") };
  }

  if (password.length < 6) {
    return { isValid: false, error: i18n.t("validation.passwordMinLength") };
  }

  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: i18n.t("validation.nameRequired") };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: i18n.t("validation.nameMinLength") };
  }

  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone.trim()) {
    return { isValid: false, error: i18n.t("validation.phoneRequired") };
  }

  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length < 10) {
    return { isValid: false, error: i18n.t("validation.phoneMinLength") };
  }

  return { isValid: true };
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): ValidationResult => {
  if (!confirmPassword) {
    return {
      isValid: false,
      error: i18n.t("validation.confirmPasswordRequired"),
    };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: i18n.t("validation.passwordMismatch") };
  }

  return { isValid: true };
};

export const validateLoginForm = (
  data: LoginFormData,
): { isValid: boolean; errors: Record<keyof LoginFormData, string> } => {
  const errors: Record<keyof LoginFormData, string> = {
    email: "",
    password: "",
  };

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error || "";
  }

  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.error || "";
  }

  return {
    isValid: !errors.email && !errors.password,
    errors,
  };
};

export const validateRegisterForm = (
  data: RegisterFormData,
): { isValid: boolean; errors: Record<keyof RegisterFormData, string> } => {
  const errors: Record<keyof RegisterFormData, string> = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const nameValidation = validateName(data.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error || "";
  }

  const emailValidation = validateEmail(data.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error || "";
  }

  const phoneValidation = validatePhone(data.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error || "";
  }

  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.isValid) {
    errors.password = passwordValidation.error || "";
  }

  const passwordMatchValidation = validatePasswordMatch(
    data.password,
    data.confirmPassword,
  );
  if (!passwordMatchValidation.isValid) {
    errors.confirmPassword = passwordMatchValidation.error || "";
  }

  return {
    isValid:
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.password &&
      !errors.confirmPassword,
    errors,
  };
};
