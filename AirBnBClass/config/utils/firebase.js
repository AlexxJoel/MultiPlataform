// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth/react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuPopY-3f-wvpSBWRQT15jCW2SZ53zsPM",
  authDomain: "airnbnb-d745a.firebaseapp.com",
  projectId: "airnbnb-d745a",
  storageBucket: "airnbnb-d745a.appspot.com",
  messagingSenderId: "920124658421",
  appId: "1:920124658421:web:4d309fb5ce211f6f8b2bbc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =  initializeAuth(app, {persistance : getReactNativePersistence(AsyncStorage)} )