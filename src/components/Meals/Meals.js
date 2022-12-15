import React, { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvaillableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
