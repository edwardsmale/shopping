import React, { FC } from 'react';
import './ShoppingList.scss';

interface ShoppingListProps {}

const ShoppingList: FC<ShoppingListProps> = () => (
  <div className="ShoppingList Component">
    <div className="Component__title">Shopping List</div>
  </div>
);

export default ShoppingList;
