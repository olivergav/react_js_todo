import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCFTY8iylqBYsqb0W3IeVrZ0e_3NVa12zI",
    authDomain: "todos-f0796.firebaseapp.com",
    projectId: "todos-f0796",
    storageBucket: "todos-f0796.appspot.com",
    messagingSenderId: "469699862579",
    appId: "1:469699862579:web:15190a097f99e690e50346"
};

const app = initializeApp(firebaseConfig);

export default app;