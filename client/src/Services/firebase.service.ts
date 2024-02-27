import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import config from "../config";

initializeApp(config.FIREBASE_CONFIG);
export const auth = getAuth();
export const facebook = new FacebookAuthProvider();