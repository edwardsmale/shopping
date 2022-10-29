import React from 'react';
import './App.scss';

import MealPlanner from './components/MealPlanner/MealPlanner';
import ShoppingList from './components/ShoppingList/ShoppingList';
import OtherItems from './components/OtherItems/OtherItems';
import Ingredients from './components/Ingredients/Ingredients';
import Meals from './components/Meals/Meals';

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
            <Meals></Meals>            
          </div>
          <div className="Rows">
            <Ingredients></Ingredients>
            <ShoppingList></ShoppingList>
          </div>
      </div>
    </div>
  );
}

export default App;
