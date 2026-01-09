import { useEffect } from "react";
import { useRouter, useSegments } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import { ROUTES } from "@/constants/routes";

interface UseProtectedRouteOptions {
  enabled?: boolean;
}

/**
 * Redirects users based on their auth state
 */
export function useProtectedRoute(options: UseProtectedRouteOptions = {}) {
  const { enabled = true } = options;
  const router = useRouter();
  const segments = useSegments();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!enabled) {
      console.log("navigation paused - waiting for storage");
      return;
    }

    const inAuthGroup = segments[0] === "(auth)";

    if (isAuthenticated && inAuthGroup) {
      router.replace(ROUTES.HOME);
    } else if (!isAuthenticated && !inAuthGroup) {
      router.replace(ROUTES.AUTH.LOGIN);
    }
  }, [isAuthenticated, segments, enabled, router]);
}
