import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBWeEXiJAcGJ5IP_yhj-eQsp3GqjM1YuR4",
  authDomain: "miniblog-39375.firebaseapp.com",
  projectId: "miniblog-39375",
  storageBucket: "miniblog-39375.appspot.com",
  messagingSenderId: "675509926772",
  appId: "1:675509926772:web:6b6ed3efe471ca4ea60a21"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }