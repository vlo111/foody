import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthStore } from '@/store/authStore';
import { validateEnv } from '@/config/env';

export default function RootLayout() {
    const router = useRouter();
    const segments = useSegments();
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const [isNavigationReady, setIsNavigationReady] = useState(false);

    useEffect(() => {
        // Validate environment variables on app start
        validateEnv();

        // Mark navigation as ready after initial render
        setIsNavigationReady(true);
    }, []);

    useEffect(() => {
        // Don't navigate until navigation is ready
        if (!isNavigationReady) return;

        // Get the first segment to determine which group we're in
        const inAuthGroup = segments[0] === '(auth)';

        if (!isAuthenticated && !inAuthGroup) {
            // User is not authenticated and trying to access protected routes
            // Redirect to log in
            router.replace('/(auth)/login');
        } else if (isAuthenticated && inAuthGroup) {
            // User is authenticated but still on auth screens
            // Redirect to main app
            router.replace('/(tabs)');
        }
    }, [isAuthenticated, segments, isNavigationReady]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <StatusBar style="auto" />
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: 'white' },
                    }}
                >
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}