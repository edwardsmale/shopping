import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import './Meals.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Meal, EagerMeal, MealIngredient, EagerMealIngredient, EagerIngredient, Ingredient } from '../../models';
import { Predicates, SortDirection } from 'aws-amplify';

interface MealsProps {}

const Meals: FC<MealsProps> = () => {

  const [meals, setMeals] = useState([] as EagerMeal[]);
  const [newMealName, setNewMealName] = useState("");
  const [mealsCount, setMealsCount] = useState(0);
  const [selectedMeal, setSelectedMeal] = useState(null as (EagerMeal | null));
  const [selectedMealIngredients, setSelectedMealIngredients] = useState([] as EagerMealIngredient[]);
  const [ingredients, setIngredients] = useState([] as EagerIngredient[]);
  const [newMealIngredientName, setNewMealIngredientName] = useState("");

  // Load meals
  useEffect(() => {
    DataStore.query(Meal)
      .then((meals_result) => { 
        setMeals(meals_result); 
        setMealsCount(meals_result.length);
      });
  }, [mealsCount]);

  // Load ingredients
  useEffect(() => {
    DataStore.query(Ingredient)
      .then((ingredients_result) => { 
        setIngredients(ingredients_result); 
      });
  }, []);

  const handleNewMealNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMealName(event.target.value);
  };

  const handleNewMealIngredientNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNewMealIngredientName(event.target.value);
  };

  const handleMealClick = (mealId: string) => {

    DataStore.query(Meal, mealId).then((meal) => {
      if (meal) {
        setSelectedMeal(meal);

        DataStore.query(MealIngredient).then((mealIngredients_result) => {
          setSelectedMealIngredients(mealIngredients_result);
        });
      }
    });
  };

  const createNewMeal = ()=> {
      
    DataStore.save(new Meal({ "name": newMealName }));
    setMealsCount(mealsCount + 1);
    setNewMealName("");
  };

  const createNewMealIngredient = ()=> {
      
    DataStore.save(new Meal({ "name": newMealName }));
    setMealsCount(mealsCount + 1);
    setNewMealName("");
  };

  return (
    <div className="Meals Component">
      <div className="Component__title">Meals</div>
      <table className="Meals__list" cellSpacing={0} cellPadding={0}>
        <tbody>{meals.map(meal => 
          <tr key={meal.id} onClick={(event) => handleMealClick(meal.id)}>
            <td>{meal.name}</td>
          </tr>
      )}</tbody>
      </table> 
      <div className="SelectedMeal">
        {selectedMeal ? (
          <>
          <div className="SelectedMeal__Name">{selectedMeal?.name}</div>
          <table>
            <tbody>
              {selectedMealIngredients.map(mi => 
                <tr>
                  <td>{mi.Ingredient?.name}</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="MealIngredients__create MealIngredientsCreate MealIngredientsCreate">
            <select className="MealIngredientsCreate__Select" onChange={(event) => handleNewMealIngredientNameChange(event)}>
              {ingredients.map(i => (
                <option key={i.id}>{i.name}</option>
              ))}
            </select>
            <button className="MealIngredientsCreate__Button" onClick={createNewMealIngredient}>Add</button>
          </div>
          </>
        ) : <></>}
      </div>
      <div className="Meals__create MealsCreate IngredientsCreate">
        <input className="MealsCreate__Name" type="text" value={newMealName} onChange={(event) => handleNewMealNameChange(event)} placeholder="Meal Name" />
        <button className="MealsCreate__Button" onClick={createNewMeal}>Create</button>
      </div>
    </div>
  );
};

export default Meals;
