import React from 'react';
import './App.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { } from 'firebase/storage';
import MealPlanner from './components/MealPlanner/MealPlanner';
import ShoppingList from './components/ShoppingList/ShoppingList';
import OtherItems from './components/OtherItems/OtherItems';
import Ingredients from './components/Ingredients/Ingredients';
import StoreLayout from './components/StoreLayout/StoreLayout';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAUOoEjGedt0HpP8LNwGgupEVE7d3_jJ4",
  authDomain: "eas-shopping.firebaseapp.com",
  projectId: "eas-shopping",
  storageBucket: "eas-shopping.appspot.com",
  messagingSenderId: "880504421415",
  appId: "1:880504421415:web:8ad06f0303f551a8082202"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">shopping</header>
      <div className="OuterColumns">
          <div className="Rows">
            <MealPlanner></MealPlanner>
            <OtherItems></OtherItems>
          </div>
          <div className="Rows">
            <ShoppingList></ShoppingList>
          </div>
          <div className="Rows">
            <Ingredients db={db}></Ingredients>
          </div>
      </div>
    </div>
  );
}

export default App;
