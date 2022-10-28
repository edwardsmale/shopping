import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react';
import './Ingredients.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Aisle, EagerAisle, EagerIngredient, Ingredient } from '../../models';
import { Predicates, SortDirection } from 'aws-amplify';

const Ingredients: FC = () => {

  const [aisles, setAisles] = useState([] as EagerAisle[]);
  const [newIngredientName, setNewIngredientName] = useState("");
  const [newIngredientAisleName, setNewIngredientAisleName] = useState("");
  const [ingredients, setIngredients] = useState([] as EagerIngredient[]);
  const [ingredientsCount, setIngredientsCount] = useState(0);

  // Load aisles
  useEffect(() => {
    DataStore.query(Aisle, Predicates.ALL, {
      sort: a => a.order(SortDirection.ASCENDING)
    })
    .then((aisles_result) => { 
      setAisles(aisles_result); 
      DataStore.query(Ingredient).then((ingredients_result) => {

        let arr = [] as EagerIngredient[];
        for (let i = 0; i < aisles_result.length; i++) {
          for (let j = 0; j < ingredients_result.length; j++) {
            if (ingredients_result[j] && ingredients_result[j].aisleID === aisles_result[i].id) {
              arr.push(ingredients_result[j]);
            }
          }
        }
  
        setIngredients(arr);
        setIngredientsCount(arr.length);
      });
    });    
  }, [ingredientsCount]);

  const handleNewIngredientNameChange = (event: ChangeEvent<HTMLInputElement>) => {
      setNewIngredientName(event.target.value);
  };

  const handleNewIngredientAisleNameChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setNewIngredientAisleName(event.target.value);
  };

  const createNewIngredient = ()=> {

    DataStore.query(Aisle, a => a.name("eq", newIngredientAisleName)).then((result) => {
      if (result.length === 1) {
        const aisle = result.at(0);

        if (aisle) {
          DataStore.save(new Ingredient({ "name": newIngredientName, "aisleID": aisle.id}));
          setIngredientsCount(ingredientsCount + 1);
          setNewIngredientName("");
        }
      }
    });
  };

  return (
    <div className="Ingredients Component">
      <div className="Component__title">Ingredients</div>
      <table className="Ingredients__list"><tbody>{ingredients.map(ingredient => 
        <tr key={ingredient.id}>
          <td>{ingredient.name}</td>
        </tr>
      )}</tbody></table>
      <div className="Ingredients__create IngredientsCreate">
        <input className="IngredientsCreate__Name" type="text" value={newIngredientName} onChange={(event) => handleNewIngredientNameChange(event)} placeholder="Ingredient Name" />
        <select className="IngredientsCreate__Aisle" value={newIngredientAisleName} onChange={(event) => handleNewIngredientAisleNameChange(event)}><option key="AisleNamePlaceholder">Aisle</option>{aisles.map(a => (<option key={a.id}>{a.name}</option>))}</select>
        <button className="IngredientsCreate__Button" onClick={createNewIngredient}>Create</button>
      </div>
    </div>
  );
};

export default Ingredients;
