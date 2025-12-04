/**
 * Firebase Environment Configuration Loader
 * 
 * This file provides Firebase configurations from environment variables.
 * For production, these should be injected during build time.
 * For development, they can be set in window.ENV or loaded from a config file.
 */

// Helper function to get environment variable with fallback
function getEnvVar(key, fallback = '') {
    // Try window.ENV first (for build-time injection)
    if (typeof window !== 'undefined' && window.ENV && window.ENV[key]) {
        return window.ENV[key];
    }
    // Fallback to import.meta.env for Vite-based builds
    if (typeof import !== 'undefined' && import.meta && import.meta.env && import.meta.env[key]) {
        return import.meta.env[key];
    }
    // Return fallback if not found
    return fallback;
}

/**
 * Firebase Config 1 - Main project (unimark-ummaa)
 * Used by: firebase-init.js, firebase-auth.js, main.js, virtual-id-card.js
 */
export const firebaseConfig1 = {
    apiKey: getEnvVar('VITE_FIREBASE_API_KEY_1'),
    authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN_1'),
    projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID_1'),
    storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET_1'),
    messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID_1'),
    appId: getEnvVar('VITE_FIREBASE_APP_ID_1'),
    measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID_1')
};

/**
 * Firebase Config 2 - Signup/Profile project (unimark-b93b7)
 * Used by: enhanced-signup.js, profile-setup.js
 */
export const firebaseConfig2 = {
    apiKey: getEnvVar('VITE_FIREBASE_API_KEY_2'),
    authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN_2'),
    projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID_2'),
    storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET_2'),
    messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID_2'),
    appId: getEnvVar('VITE_FIREBASE_APP_ID_2')
};

/**
 * Firebase Config 3 - TimelyRemind project (timelyremind-1d361)
 * Used by: firebase-config.js
 */
export const firebaseConfig3 = {
    apiKey: getEnvVar('VITE_FIREBASE_API_KEY_3'),
    authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN_3'),
    projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID_3'),
    storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET_3'),
    messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID_3'),
    appId: getEnvVar('VITE_FIREBASE_APP_ID_3')
};

// Default export is the main config (Config 1)
export default firebaseConfig1;
