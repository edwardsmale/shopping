import React, { FC, useEffect, useState } from 'react';
import './Ingredients.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Aisle, Ingredient } from '../../models';

const Ingredients: FC = () => {

  const [ingredients, setIngredients] = useState([] as string[]);

  const getIngredients = async () => {

    const models = await DataStore.query(Ingredient);

    return models.map(m => m.name || "");
  };

  useEffect(() => {
    getIngredients().then((result) => {
      setIngredients(result);
    });
    
  }, []);

  // useEffect(() => {
  //   DataStore.query(Aisle).then((aisles) => {
  //     DataStore.save(new Ingredient({ "name": "Asparagus", "aisleID": aisles.at(0)?.id || ""}));
  //   })
  // }, []);

  return (
    <div className="Ingredients Component">
      <div className="Component__title">Ingredients</div>
      <table className="Ingredients__list">{ingredients.map(ingredient => 
        <tr key={ingredient}>
          <td>{ingredient}</td>
        </tr>
      )}</table>
    </div>
  );
};

export default Ingredients;
