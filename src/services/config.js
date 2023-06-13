import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqWXFDECQaSH_ILhwm28kTSPcwSynMBcU",
  authDomain: "cu4troancos-liquor-store.firebaseapp.com",
  projectId: "cu4troancos-liquor-store",
  storageBucket: "cu4troancos-liquor-store.appspot.com",
  messagingSenderId: "981118632614",
  appId: "1:981118632614:web:e94739decbbeebebeaaa67"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)