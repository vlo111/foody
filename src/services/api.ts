import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@store/authStore';

// API Configuration
const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';
const API_TIMEOUT = 30000; // 30 seconds

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useAuthStore.getState().token;
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      // Logout user
      useAuthStore.getState().logout();
      
      //* TODO: implement token refresh logic

      // const newToken = await refreshToken();
      // if (newToken) {
      //   originalRequest.headers.Authorization = `Bearer ${newToken}`;
      //   return api(originalRequest);
      // }
    }

    // Handle other errors
    const errorMessage = error.response?.data 
      ? (error.response.data as any).message || 'An error occurred'
      : error.message || 'Network error';

    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data,
    });
  }
);

export default api;

// Helper functions for common HTTP methods
export const apiClient = {
  get: <T>(url: string, config = {}) => 
    api.get<T>(url, config).then(res => res.data),
  
  post: <T>(url: string, data?: any, config = {}) => 
    api.post<T>(url, data, config).then(res => res.data),
  
  put: <T>(url: string, data?: any, config = {}) => 
    api.put<T>(url, data, config).then(res => res.data),
  
  patch: <T>(url: string, data?: any, config = {}) => 
    api.patch<T>(url, data, config).then(res => res.data),
  
  delete: <T>(url: string, config = {}) => 
    api.delete<T>(url, config).then(res => res.data),
};
