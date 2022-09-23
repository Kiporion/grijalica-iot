import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC0awSOV8HVk0McT6VfyonTWQ8AWp40KFw",
  authDomain: "iot-project-47cf1.firebaseapp.com",
  projectId: "iot-project-47cf1",
  storageBucket: "iot-project-47cf1.appspot.com",
  messagingSenderId: "350631558589",
  appId: "1:350631558589:web:686aa1fe0a81cde05c66d4",
  databaseURL: "https://iot-project-47cf1-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);