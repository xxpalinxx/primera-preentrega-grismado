
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_iPucQqj_y7hs4nuF4XjTOMzO73WG0yo",
  authDomain: "ecommerce-codergrismado.firebaseapp.com",
  projectId: "ecommerce-codergrismado",
  storageBucket: "ecommerce-codergrismado.appspot.com",
  messagingSenderId: "779174060517",
  appId: "1:779174060517:web:407fd8620fb771f028cf0c"
};

// Initialize Firebase const app = 
initializeApp(firebaseConfig);



createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
