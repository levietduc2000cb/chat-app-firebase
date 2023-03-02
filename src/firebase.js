import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7Frp2_8CxeqzUXlbELkLw9I8N7k5UaG0",
  authDomain: "chat-app-1-c3e9b.firebaseapp.com",
  projectId: "chat-app-1-c3e9b",
  storageBucket: "chat-app-1-c3e9b.appspot.com",
  messagingSenderId: "800849397123",
  appId: "1:800849397123:web:52e0802a92719fcb9862b6",
  measurementId: "G-YXBMMGZ735",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
