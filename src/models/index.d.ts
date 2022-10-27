import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type MealIngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type IngredientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MealMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AisleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMealIngredient = {
  readonly id: string;
  readonly qty?: number | null;
  readonly Ingredient?: Ingredient | null;
  readonly Meal?: Meal | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mealIngredientIngredientId?: string | null;
  readonly mealIngredientMealId?: string | null;
}

type LazyMealIngredient = {
  readonly id: string;
  readonly qty?: number | null;
  readonly Ingredient: AsyncItem<Ingredient | undefined>;
  readonly Meal: AsyncItem<Meal | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly mealIngredientIngredientId?: string | null;
  readonly mealIngredientMealId?: string | null;
}

export declare type MealIngredient = LazyLoading extends LazyLoadingDisabled ? EagerMealIngredient : LazyMealIngredient

export declare const MealIngredient: (new (init: ModelInit<MealIngredient, MealIngredientMetaData>) => MealIngredient) & {
  copyOf(source: MealIngredient, mutator: (draft: MutableModel<MealIngredient, MealIngredientMetaData>) => MutableModel<MealIngredient, MealIngredientMetaData> | void): MealIngredient;
}

type EagerIngredient = {
  readonly id: string;
  readonly name?: string | null;
  readonly aisleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIngredient = {
  readonly id: string;
  readonly name?: string | null;
  readonly aisleID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ingredient = LazyLoading extends LazyLoadingDisabled ? EagerIngredient : LazyIngredient

export declare const Ingredient: (new (init: ModelInit<Ingredient, IngredientMetaData>) => Ingredient) & {
  copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient, IngredientMetaData>) => MutableModel<Ingredient, IngredientMetaData> | void): Ingredient;
}

type EagerMeal = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeal = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meal = LazyLoading extends LazyLoadingDisabled ? EagerMeal : LazyMeal

export declare const Meal: (new (init: ModelInit<Meal, MealMetaData>) => Meal) & {
  copyOf(source: Meal, mutator: (draft: MutableModel<Meal, MealMetaData>) => MutableModel<Meal, MealMetaData> | void): Meal;
}

type EagerAisle = {
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly Ingredients?: (Ingredient | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAisle = {
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly Ingredients: AsyncCollection<Ingredient>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Aisle = LazyLoading extends LazyLoadingDisabled ? EagerAisle : LazyAisle

export declare const Aisle: (new (init: ModelInit<Aisle, AisleMetaData>) => Aisle) & {
  copyOf(source: Aisle, mutator: (draft: MutableModel<Aisle, AisleMetaData>) => MutableModel<Aisle, AisleMetaData> | void): Aisle;
}