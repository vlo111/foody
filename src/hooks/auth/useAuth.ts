import { useState } from "react";
import { useAuthStore, User } from "@store/authStore";
import { loginAPI, registerAPI, logoutAPI } from "@/services/api/authService";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
  role: "customer" | "driver";
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    user,
    token,
    isAuthenticated,
    login: setLogin,
    logout: setLogout,
  } = useAuthStore();

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginAPI(credentials.email, credentials.password);

      if (!response.success || !response.data) {
        throw new Error(response.error || "Login failed");
      }

      setLogin(response.data.user, response.data.token);

      return {
        success: true,
        user: response.data.user,
        token: response.data.token,
      };
    } catch (err: any) {
      const errorMessage = err.message || "Login failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await registerAPI(
        data.name,
        data.email,
        data.phone,
        data.password,
        data.role,
      );

      if (!response.success || !response.data) {
        throw new Error(response.error || "Registration failed");
      }

      setLogin(response.data.user, response.data.token);

      return {
        success: true,
        user: response.data.user,
        token: response.data.token,
      };
    } catch (err: any) {
      const errorMessage = err.message || "Registration failed";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (token) {
        await logoutAPI(token);
      }
      setLogout();
      return { success: true };
    } catch (err: any) {
      setLogout();
      return { success: true };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    clearError: () => setError(null),
  };
};
