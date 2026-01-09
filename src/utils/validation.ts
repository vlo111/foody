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
    return { isValid: false, error: "Email is required" };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { isValid: false, error: "Invalid email format" };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: "Password is required" };
  }

  if (password.length < 6) {
    return { isValid: false, error: "Password must be at least 6 characters" };
  }

  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name.trim()) {
    return { isValid: false, error: "Name is required" };
  }

  if (name.trim().length < 2) {
    return { isValid: false, error: "Name must be at least 2 characters" };
  }

  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  if (!phone.trim()) {
    return { isValid: false, error: "Phone number is required" };
  }

  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length < 10) {
    return { isValid: false, error: "Phone number must be at least 10 digits" };
  }

  return { isValid: true };
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): ValidationResult => {
  if (!confirmPassword) {
    return { isValid: false, error: "Please confirm your password" };
  }

  if (password !== confirmPassword) {
    return { isValid: false, error: "Passwords do not match" };
  }

  return { isValid: true };
};

export const validateLoginForm = (
  data: LoginFormData
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
  data: RegisterFormData
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
    data.confirmPassword
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