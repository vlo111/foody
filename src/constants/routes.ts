export const ROUTES = {
  // Auth Routes
  AUTH: {
    LOGIN: '/(auth)/login',
    REGISTER: '/(auth)/register',
  },
  // Main Routes
  HOME: '/home',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES] | typeof ROUTES.AUTH[keyof typeof ROUTES.AUTH];
