import { useState } from 'react';
import {useAuthStore, User} from '@store/authStore';
import { authService, LoginCredentials, RegisterData } from '@services/authService';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, isAuthenticated, login: setLogin, logout: setLogout } = useAuthStore();

  /**
   * Login user
   */
  const login = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);
    const fakeUser: User = {
      id: '123',
      email: 'demo@example@aa.com',
      name: 'Foody User',
      role: 'customer',
      phone: '+37498554656',
      avatar: '/assets/image/user.png'
    };

    const token = "test_token";

    try {
      // const response = await authService.login(credentials);
      //* TODO: should be - response.user, response.token  *//
      setLogin(fakeUser, token);
      return { success: true, user: fakeUser };
    } catch (err: any) {
      const errorMessage = err.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Register new user
   */
  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.register(data);
      setLogin(response.user, response.token);
      return { success: true, user: response.user };
    } catch (err: any) {
      const errorMessage = err.message || 'Registration failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Logout user
   */
  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.logout();
      setLogout();
      return { success: true };
    } catch (err: any) {
      // Even if API call fails, logout locally
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
