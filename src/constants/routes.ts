/**
 * Route Constants
 * Single source of truth for all navigation paths
 */

export const ROUTES = {
  // Auth Routes
  AUTH: {
    LOGIN: '/(auth)/login',
    REGISTER: '/(auth)/register',
  },

  // Main Routes
  HOME: '/home',
  
  // Future routes
  PROFILE: '/profile',
  SETTINGS: '/settings',
  ORDERS: '/orders',
} as const;

// Type for route values
export type Route = typeof ROUTES[keyof typeof ROUTES] | typeof ROUTES.AUTH[keyof typeof ROUTES.AUTH];
