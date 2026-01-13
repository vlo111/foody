import React from "react";
import { Stack } from "expo-router";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useAuthPersistence } from "@hooks/auth/useAuthPersistence";
import { useProtectedRoute } from "@/hooks/auth/useProtectedRoute";
import { LocaleProvider } from "@/contexts/LocaleContext";

export default function RootLayout() {
  const isStorageReady = useAuthPersistence();

  useProtectedRoute({ enabled: isStorageReady });

  if (!isStorageReady) {
    return <LoadingScreen />;
  }

  return (
    <LocaleProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="home" />
      </Stack>
    </LocaleProvider>
  );
}
