import { useState } from 'react';
import { useAuthStore, User } from '@/store/authStore';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
  role: 'customer' | 'driver';
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, isAuthenticated, login: setLogin, logout: setLogout } = useAuthStore();

  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Mock successful login (replace with real API call)
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Test User',
        role: 'customer',
      };

      setLogin(mockUser, 'mock-token');
      return { success: true, user: mockUser };
    } catch (err: any) {
      const errorMessage = err.message || 'Login failed';
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
      // Mock successful registration (replace with real API call)
      const mockUser: User = {
        id: '1',
        email: data.email,
        name: data.name,
        role: data.role,
        phone: data.phone,
      };

      setLogin(mockUser, 'mock-token');
      return { success: true, user: mockUser };
    } catch (err: any) {
      const errorMessage = err.message || 'Registration failed';
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
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
  };
};
