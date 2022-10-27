import { collection, Firestore, query, orderBy, getDocs, getDoc } from 'firebase/firestore';
import React, { FC, useEffect, useState } from 'react';
import Ingredient from '../Ingredient/Ingredient';
import './Ingredients.scss';

interface IngredientsProps {
  db: Firestore
}

class AisleData {
  id: string;
  name: string;
  order: string;

  constructor(id: string, name: string, order: string) {
    this.id = id;
    this.name = name;
    this.order = order;
  }
}

class IngredientData {
  id: string;
  name: string;
  aisle: AisleData;

  constructor(id: string, name: string, aisle: AisleData) {
    this.id = id;
    this.name = name;
    this.aisle = aisle;
  }
}

const insertSorted = function find_index(arr: AisleData[], n: number, K: AisleData)
{
    for (let i = 0; i < n; i++) {
      
        if (arr[i].order >= K.order) {

          arr.splice(i, 0, K);
          return;
        }            
    }

    arr.push(K);
}

const Ingredients: FC<IngredientsProps> = (props: IngredientsProps) => {

  const [ingredients, setIngredients] = useState([] as IngredientData[]);

  const getIngredients = async (db: any) => {

    let itemArray: IngredientData[] = [];
  
    const ingredientsRef = collection(db, "ingredient");

    const q = query(ingredientsRef);
 
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      
      getDoc(doc.data().aisle).then(async (a: any) => {

        const aisleData = new AisleData(a.id, a.data().name, a.data().order);

        itemArray.push(new IngredientData(doc.id, doc.data().name, aisleData));
        
        setIngredients([...itemArray]);
      });
    });
  };

  useEffect(() => {
    getIngredients(props.db);
  }, []);

  return (
    <div className="Ingredients Component">
      <div className="Component__title">Ingredients</div>
      <table className="Ingredients__list">{ingredients.map(ingredient => 
        <tr key={ingredient.id}>
          <td>{ingredient.aisle.name}</td>
          <td>{ingredient.name}</td>
        </tr>
      )}</table>
    </div>
  );
};

export default Ingredients;
