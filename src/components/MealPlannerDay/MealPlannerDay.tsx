import React, { FC } from 'react';
import './MealPlannerDay.scss';

interface MealPlannerDayProps {
  day: string
}

const MealPlannerDay: FC<MealPlannerDayProps> = (props: MealPlannerDayProps) => (
  <div className="MealPlannerDay">
    <label className="MealPlannerDay__day-name">{props.day}</label>
    <select className="MealPlannerDay__options">
      <option>Ham Sandwich</option>
      <option>Scrambled Egg</option>
    </select>
    <select className="MealPlannerDay__options">
      <option>Pie and Chips</option>
      <option>Roast</option>
    </select>
  </div>
);

export default MealPlannerDay;
