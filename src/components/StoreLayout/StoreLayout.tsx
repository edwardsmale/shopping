import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react';
import './StoreLayout.scss';
import { DataStore } from '@aws-amplify/datastore';
import { Aisle, EagerAisle } from '../../models';
import { Predicates, SortDirection } from 'aws-amplify';

interface StoreLayoutProps {}


const StoreLayout: FC<StoreLayoutProps> = () => {
  
  const [aisles, setAisles] = useState([] as EagerAisle[]);

  const getAisles = async () => {

    return await DataStore.query(Aisle, Predicates.ALL, {
      sort: a => a.order(SortDirection.ASCENDING)
    });
  };

  useEffect(() => {
    getAisles().then((result) => {
      setAisles(result);
    });
    
  }, [aisles]);

  const initiallyCreateAisles = () => {

    DataStore.delete(Aisle, Predicates.ALL);

    DataStore.save(new Aisle({ "name": "Veg lhs", "order": 1000}));
    DataStore.save(new Aisle({ "name": "Veg mid", "order": 1200}));
    DataStore.save(new Aisle({ "name": "Veg rhs", "order": 1400}));
    DataStore.save(new Aisle({ "name": "15) Yogurts", "order": 2000}));
    DataStore.save(new Aisle({ "name": "1) Nutmeg", "order": 3000}));
    DataStore.save(new Aisle({ "name": "2) Baby", "order": 4000}));

    DataStore.save(new Aisle({ "name": "16) Butter / Milk", "order": 5000}));
    DataStore.save(new Aisle({ "name": "17) Ham / Cheese", "order": 6000}));
    DataStore.save(new Aisle({ "name": "18) Medicines", "order": 7000}));
    DataStore.save(new Aisle({ "name": "19) Bread", "order": 8000}));

    DataStore.save(new Aisle({ "name": "6) Stationery", "order": 9000}));
    DataStore.save(new Aisle({ "name": "8) Wine", "order": 10000}));
    DataStore.save(new Aisle({ "name": "20) Jam", "order": 11000}));
    DataStore.save(new Aisle({ "name": "Chicken", "order": 11400}));
    DataStore.save(new Aisle({ "name": "9) Beer", "order": 12000}));
    DataStore.save(new Aisle({ "name": "10) Squash", "order": 13000}));
    DataStore.save(new Aisle({ "name": "22) Tea / Coffee", "order": 14000}));

    DataStore.save(new Aisle({ "name": "23) Beans", "order": 15000}));
    DataStore.save(new Aisle({ "name": "11) Lemonade", "order": 16000}));
    DataStore.save(new Aisle({ "name": "12) Sweets", "order": 17000}));
    DataStore.save(new Aisle({ "name": "24) Pickle", "order": 18000}));
    DataStore.save(new Aisle({ "name": "Pork / Lamb", "order": 19000}));
    DataStore.save(new Aisle({ "name": "25) Cook-in Sauces", "order": 20000}));

    DataStore.save(new Aisle({ "name": "13) Crisps", "order": 21000}));
    DataStore.save(new Aisle({ "name": "26) Beef", "order": 22000}));
    DataStore.save(new Aisle({ "name": "26) Frozen", "order": 23000}));
    DataStore.save(new Aisle({ "name": "14) Frozen", "order": 24000}));
    DataStore.save(new Aisle({ "name": "Household", "order": 25000}));
    DataStore.save(new Aisle({ "name": "Batteries", "order": 26000}));
  };

  return <div className="StoreLayout Component">
      <div className="Component__title">Aisles</div>
      <div className="StoreLayout__list">
        <table><tbody>{aisles.slice(0, 15).map(aisle => 
          <tr key={aisle.id}>
            <td>{aisle.name}</td>
          </tr>
        )}</tbody></table>
        <table><tbody>{aisles.slice(15).map(aisle => 
          <tr key={aisle.id}>
            <td>{aisle.name}</td>
          </tr>
        )}</tbody></table>
      </div>
    </div>
};

export default StoreLayout;
