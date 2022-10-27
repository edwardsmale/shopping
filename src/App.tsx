import React from 'react';
import './App.scss';

import MealPlanner from './components/MealPlanner/MealPlanner';
import ShoppingList from './components/ShoppingList/ShoppingList';
import OtherItems from './components/OtherItems/OtherItems';
import Ingredients from './components/Ingredients/Ingredients';

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
            <Ingredients></Ingredients>
          </div>
      </div>
    </div>
  );
}

export default App;
