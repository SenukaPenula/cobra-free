// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    projectId: "cobra-download-hub",
    appId: "1:562918637024:web:d777bb113f48bc2cc47f85",
    storageBucket: "cobra-download-hub.firebasestorage.app",
    apiKey: "AIzaSyAkblJHOEMf8A7gaijw5VYcfRdTdavOfLU",
    authDomain: "cobra-download-hub.firebaseapp.com",
    messagingSenderId: "562918637024",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
