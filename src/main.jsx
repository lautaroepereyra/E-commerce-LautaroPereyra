import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC9E4haczdUzR4nJL0R5q2auVir0aw2Bjk",
  authDomain: "ecommercereactlautaropereyra.firebaseapp.com",
  projectId: "ecommercereactlautaropereyra",
  storageBucket: "ecommercereactlautaropereyra.appspot.com",
  messagingSenderId: "202555394113",
  appId: "1:202555394113:web:30631053866d9602ec9ec0"
};

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
