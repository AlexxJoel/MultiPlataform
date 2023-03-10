// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKtV_NfrfZPgEEnNG3vgP9Ad46xfPhy3A",
    authDomain: "finanzas-e7859.firebaseapp.com",
    projectId: "finanzas-e7859",
    storageBucket: "finanzas-e7859.appspot.com",
    messagingSenderId: "46441594516",
    appId: "1:46441594516:web:2efd70b075642e87093e81",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  initializeAuth(app, {persistance : getReactNativePersistence(AsyncStorage)} )