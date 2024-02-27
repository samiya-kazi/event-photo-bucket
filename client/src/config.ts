const config = {
  API_URL: import.meta.env.VITE_API_URL as string,
  FB_APP_ID: import.meta.env.VITE_FB_APP_ID as string,
  FIREBASE_CONFIG: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string ?? "firebase-api-key",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string ?? "firebase-auth-domain",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string ?? "firebase-project-id",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string ?? "firebase-storage-bucket",
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID as string ?? "firebase-messaging-sender-id",
    appId: import.meta.env.VITE_FIREBASE_APP_ID as string ?? "firebase-app-id",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string ?? "firebase-measurement-id"
  }
}

export default config;