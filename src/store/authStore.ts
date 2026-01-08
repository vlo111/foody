import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
    id: string;
    email: string;
    name: string;
    role: 'customer' | 'driver' | 'admin';
    phone?: string;
    avatar?: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;

    login: (user: User, token: string) => void;
    logout: () => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            isAuthenticated: false,

            login: (user, token) => {
                console.log('Login called:', user.email);
                set({
                    user,
                    token,
                    isAuthenticated: true
                });
            },

            logout: () => {
                console.log('Logout called');
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false
                });
            },

            clearAuth: () => {
                console.log('Clear auth called');
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false
                });
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);