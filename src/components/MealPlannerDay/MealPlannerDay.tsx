import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import './MealPlannerDay.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Meal, EagerMeal, MealIngredient, EagerMealIngredient } from '../../models';

interface MealPlannerDayProps {
  day: string
}

const MealPlannerDay: FC<MealPlannerDayProps> = (props: MealPlannerDayProps) => {

  const [meals, setMeals] = useState([] as EagerMeal[]);

  // Load meals
  useEffect(() => {
    DataStore.query(Meal)
      .then((meals_result) => { 
        setMeals(meals_result); 
      });
  }, []);  

  return (
    <div className="MealPlannerDay">
      <label className="MealPlannerDay__day-name">{props.day}</label>
      <select className="MealPlannerDay__options">
        {meals.map((meal) => (
          <option key={meal.id}>{meal.name}</option>
        ))}
      </select>
      <select className="MealPlannerDay__options">
      {meals.map((meal) => (
          <option key={meal.id}>{meal.name}</option>
        ))}
      </select>
      <select className="MealPlannerDay__options">
      {meals.map((meal) => (
          <option key={meal.id}>{meal.name}</option>
        ))}
      </select>
    </div>
  );
};

export default MealPlannerDay;
