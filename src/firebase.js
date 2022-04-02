import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPhTjxhMoeKyNX6TkaFXT3mjM5ZgWaUSQ",
    authDomain: "blog-app-1e256.firebaseapp.com",
    projectId: "blog-app-1e256",
    storageBucket: "blog-app-1e256.appspot.com",
    messagingSenderId: "301013507012",
    appId: "1:301013507012:web:2e5205263d5a62abdfa291",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
