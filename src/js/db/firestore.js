import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB75gWgtoYVRtj2v-VfaISrlh59odt-zvM",
    authDomain: "brains-in-motion-forms.firebaseapp.com",
    projectId: "brains-in-motion-forms",
    storageBucket: "brains-in-motion-forms.appspot.com",
    messagingSenderId: "954043925662",
    appId: "1:954043925662:web:191c523ef2e4be418fe78f",
    measurementId: "G-45Y5RLHP0K",
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//export const storage = getStorage(app);
//firebase.analytics();