import React, { FC } from 'react';
import MealPlannerDay from '../MealPlannerDay/MealPlannerDay';
import './MealPlanner.scss';

interface MealPlannerProps {}

const MealPlanner: FC<MealPlannerProps> = () => (
  <div className="MealPlanner Component">
    <div className="Component__title">Meal Planner</div>

    <MealPlannerDay day="Monday"></MealPlannerDay>
    <MealPlannerDay day="Tuesday"></MealPlannerDay>
    <MealPlannerDay day="Wednesday"></MealPlannerDay>
    <MealPlannerDay day="Thursday"></MealPlannerDay>
    <MealPlannerDay day="Friday"></MealPlannerDay>
    <MealPlannerDay day="Saturday"></MealPlannerDay>
    <MealPlannerDay day="Sunday"></MealPlannerDay>
  </div>
);

export default MealPlanner;
