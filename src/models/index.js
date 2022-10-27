// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MealIngredient, Ingredient, Meal, Aisle } = initSchema(schema);

export {
  MealIngredient,
  Ingredient,
  Meal,
  Aisle
};