import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACDc_4ft2FvKZHwKhK5Ptpg0gw3Xb-CDs",
  authDomain: "nwitter-reloaded-bde7f.firebaseapp.com",
  projectId: "nwitter-reloaded-bde7f",
  storageBucket: "nwitter-reloaded-bde7f.appspot.com",
  messagingSenderId: "590109113674",
  appId: "1:590109113674:web:94724439ca3f52b18dd5b3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
setPersistence(auth, inMemoryPersistence);

export const storage = getStorage(app);

export const db = getFirestore(app);
