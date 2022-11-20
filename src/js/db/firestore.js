import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB75gWgtoYVRtj2v-VfaISrlh59odt-zvM",
    authDomain: "brains-in-motion-forms.firebaseapp.com",
    projectId: "brains-in-motion-forms",
    storageBucket: "brains-in-motion-forms.appspot.com",
    messagingSenderId: "954043925662",
    appId: "1:954043925662:web:191c523ef2e4be418fe78f",
    measurementId: "G-45Y5RLHP0K"
  };

  // Initialize Firebase
export const app = initializeApp(config);
//firebase.analytics();