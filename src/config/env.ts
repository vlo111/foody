/**
 * Environment Configuration
 *
 * EXPO_PUBLIC_API_URL=http://localhost:3000/api
 */
export const env = {
    // API Configuration
    apiUrl: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api',

    appName: 'Delivery App',
    appVersion: '1.0.0',

    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
} as const;

const requiredEnvVars = [
    'EXPO_PUBLIC_API_URL',
] as const;

export const validateEnv = () => {
    const missing: string[] = [];

    requiredEnvVars.forEach((key) => {
        if (!process.env[key]) {
            missing.push(key);
        }
    });

    if (missing.length > 0) {
        console.warn(
            `Missing env:\n${missing.map(k => `   - ${k}`).join('\n')}\ncheck .env file.`
        );
    }

    return missing.length === 0;
};
