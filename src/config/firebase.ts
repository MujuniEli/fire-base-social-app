// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZySS9z7S9OIY2P6eh0vlCPMjhab2VMwM",
  authDomain: "social-connect-bcd3b.firebaseapp.com",
  projectId: "social-connect-bcd3b",
  storageBucket: "social-connect-bcd3b.appspot.com",
  messagingSenderId: "292029327454",
  appId: "1:292029327454:web:32dc80bd047da8fe382ccf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();