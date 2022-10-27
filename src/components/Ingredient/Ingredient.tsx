import React, { FC } from 'react';
import './Ingredient.scss';

interface IngredientProps {
  name: string
}

const Ingredient: FC<IngredientProps> = (props: IngredientProps) => (
  <div className="Ingredient">{props.name}</div>
);

export default Ingredient;
