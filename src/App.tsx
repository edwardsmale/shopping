import React from 'react';
import './App.scss';

import MealPlanner from './components/MealPlanner/MealPlanner';
import ShoppingList from './components/ShoppingList/ShoppingList';
import OtherItems from './components/OtherItems/OtherItems';
import Ingredients from './components/Ingredients/Ingredients';
import StoreLayout from './components/StoreLayout/StoreLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">shopping</header>
      <div className="OuterColumns">
          <div className="Rows" style={{ width: "40%" }}>
            <MealPlanner></MealPlanner>
            <OtherItems></OtherItems>
          </div>
          <div className="Rows">
            <ShoppingList></ShoppingList>
          </div>
          <div className="Rows">
            <Ingredients></Ingredients>
            <StoreLayout></StoreLayout>
          </div>
      </div>
    </div>
  );
}

export default App;
