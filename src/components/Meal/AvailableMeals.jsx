import React, { useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Khinkali",
    description: "Georgian dumplings",
    price: 2.5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Mtsvadi",
    description: "Georgian barbecue",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className="max-w-[60rem] w-[90%] my-8 mx-auto">
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              price={meal.price}
              description={meal.description}
              name={meal.name}
              className="list-none m-0 p-0"
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
