// src/lib/firebase.ts
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

// IMPORTANT: The Firebase config is hardcoded here to prevent project mismatch errors.
// These values are for the "roquetas-android" Firebase project.
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "roquetas-android.firebaseapp.com",
  projectId: "roquetas-android",
  storageBucket: "roquetas-android.appspot.com",
  messagingSenderId: "1083944706530",
  appId: "1:1083944706530:web:4267ac8d31210860538a8e",
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Explicitly initialize Firestore with the database ID to prevent connection issues.
// The database ID is typically '(default)'.
const db = initializeFirestore(app, {
    databaseId: '(default)',
});

export { app, db };
