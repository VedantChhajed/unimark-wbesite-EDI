/**
 * Environment Configuration Injector
 * 
 * This script should be loaded BEFORE any Firebase initialization scripts.
 * It sets up the window.ENV object with Firebase configuration values.
 * 
 * IMPORTANT: This file should be customized for each deployment:
 * 
 * For development:
 *   1. Copy this file to create your own configuration
 *   2. Replace the placeholder values below with your Firebase project credentials
 *   3. DO NOT commit your credentials to version control
 * 
 * For production:
 *   Use your deployment platform's environment variable injection or 
 *   build-time configuration replacement.
 */

// Initialize window.ENV if it doesn't exist
if (typeof window !== 'undefined' && !window.ENV) {
    window.ENV = {
        // Firebase Config 1 - Main project (unimark-ummaa)
        // Replace these values with your actual Firebase project credentials
        VITE_FIREBASE_API_KEY_1: 'YOUR_API_KEY_HERE',
        VITE_FIREBASE_AUTH_DOMAIN_1: 'YOUR_AUTH_DOMAIN_HERE',
        VITE_FIREBASE_PROJECT_ID_1: 'YOUR_PROJECT_ID_HERE',
        VITE_FIREBASE_STORAGE_BUCKET_1: 'YOUR_STORAGE_BUCKET_HERE',
        VITE_FIREBASE_MESSAGING_SENDER_ID_1: 'YOUR_MESSAGING_SENDER_ID_HERE',
        VITE_FIREBASE_APP_ID_1: 'YOUR_APP_ID_HERE',
        VITE_FIREBASE_MEASUREMENT_ID_1: 'YOUR_MEASUREMENT_ID_HERE',

        // Firebase Config 2 - Signup/Profile project (unimark-b93b7)
        VITE_FIREBASE_API_KEY_2: 'YOUR_API_KEY_HERE',
        VITE_FIREBASE_AUTH_DOMAIN_2: 'YOUR_AUTH_DOMAIN_HERE',
        VITE_FIREBASE_PROJECT_ID_2: 'YOUR_PROJECT_ID_HERE',
        VITE_FIREBASE_STORAGE_BUCKET_2: 'YOUR_STORAGE_BUCKET_HERE',
        VITE_FIREBASE_MESSAGING_SENDER_ID_2: 'YOUR_MESSAGING_SENDER_ID_HERE',
        VITE_FIREBASE_APP_ID_2: 'YOUR_APP_ID_HERE',

        // Firebase Config 3 - TimelyRemind project (timelyremind-1d361)
        VITE_FIREBASE_API_KEY_3: 'YOUR_API_KEY_HERE',
        VITE_FIREBASE_AUTH_DOMAIN_3: 'YOUR_AUTH_DOMAIN_HERE',
        VITE_FIREBASE_PROJECT_ID_3: 'YOUR_PROJECT_ID_HERE',
        VITE_FIREBASE_STORAGE_BUCKET_3: 'YOUR_STORAGE_BUCKET_HERE',
        VITE_FIREBASE_MESSAGING_SENDER_ID_3: 'YOUR_MESSAGING_SENDER_ID_HERE',
        VITE_FIREBASE_APP_ID_3: 'YOUR_APP_ID_HERE',

        // Google Maps API Key
        VITE_GOOGLE_MAPS_API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY_HERE'
    };
}
