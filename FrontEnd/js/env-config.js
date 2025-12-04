/**
 * Environment Configuration Injector
 * 
 * This script should be loaded BEFORE any Firebase initialization scripts.
 * It reads configuration from window.ENV which should be set by your build process
 * or manually for development.
 * 
 * For development: Copy .env.example to .env and fill in your values.
 * For production: Use your build tool to inject these values.
 */

// Initialize window.ENV if it doesn't exist
if (typeof window !== 'undefined' && !window.ENV) {
    window.ENV = {
        // Firebase Config 1 - Main project (unimark-ummaa)
        VITE_FIREBASE_API_KEY_1: 'AIzaSyBlDVySUopFPBIot8dMovVxin8de43zXmI',
        VITE_FIREBASE_AUTH_DOMAIN_1: 'unimark-ummaa.firebaseapp.com',
        VITE_FIREBASE_PROJECT_ID_1: 'unimark-ummaa',
        VITE_FIREBASE_STORAGE_BUCKET_1: 'unimark-ummaa.firebasestorage.app',
        VITE_FIREBASE_MESSAGING_SENDER_ID_1: '710977794450',
        VITE_FIREBASE_APP_ID_1: '1:710977794450:web:46c51e7be2b5c36892d14b',
        VITE_FIREBASE_MEASUREMENT_ID_1: 'G-MQQKNHDP1T',

        // Firebase Config 2 - Signup/Profile project (unimark-b93b7)
        VITE_FIREBASE_API_KEY_2: 'AIzaSyBiQr7aHxdYxk8sCkHxMebkVyBEgXCnknU',
        VITE_FIREBASE_AUTH_DOMAIN_2: 'unimark-b93b7.firebaseapp.com',
        VITE_FIREBASE_PROJECT_ID_2: 'unimark-b93b7',
        VITE_FIREBASE_STORAGE_BUCKET_2: 'unimark-b93b7.appspot.com',
        VITE_FIREBASE_MESSAGING_SENDER_ID_2: '107180777427',
        VITE_FIREBASE_APP_ID_2: '1:107180777427:web:2c5d8e8c4207f26e7ffd27',

        // Firebase Config 3 - TimelyRemind project (timelyremind-1d361)
        VITE_FIREBASE_API_KEY_3: 'AIzaSyBzAJOsQoMYXAr_atquwY-1fMW8-g4xAa0',
        VITE_FIREBASE_AUTH_DOMAIN_3: 'timelyremind-1d361.firebaseapp.com',
        VITE_FIREBASE_PROJECT_ID_3: 'timelyremind-1d361',
        VITE_FIREBASE_STORAGE_BUCKET_3: 'timelyremind-1d361.firebasestorage.app',
        VITE_FIREBASE_MESSAGING_SENDER_ID_3: '257503539917',
        VITE_FIREBASE_APP_ID_3: '1:257503539917:web:cf6066d5d640725f706f84'
    };
}
