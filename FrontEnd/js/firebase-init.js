// Firebase configuration - loaded from environment variables
const firebaseConfig = {
    apiKey: window.ENV?.VITE_FIREBASE_API_KEY_1 || '',
    authDomain: window.ENV?.VITE_FIREBASE_AUTH_DOMAIN_1 || '',
    projectId: window.ENV?.VITE_FIREBASE_PROJECT_ID_1 || '',
    storageBucket: window.ENV?.VITE_FIREBASE_STORAGE_BUCKET_1 || '',
    messagingSenderId: window.ENV?.VITE_FIREBASE_MESSAGING_SENDER_ID_1 || '',
    appId: window.ENV?.VITE_FIREBASE_APP_ID_1 || '',
    measurementId: window.ENV?.VITE_FIREBASE_MEASUREMENT_ID_1 || ''
};

// Initialize Firebase and get auth/db references
let auth;
let db;
try {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
    auth = firebase.auth();
    db = firebase.firestore();
} catch (error) {
    console.error('Error initializing Firebase:', error);
} 