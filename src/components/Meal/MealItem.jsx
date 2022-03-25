import React from "react";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price }) => {
  return (
    <li className="flex justify-between m-4 pb-4 border-b-2">
      <div>
        <h3 className="m-0 mb-1">{name}</h3>
        <div className="italic">{description}</div>
        <div className="mt-1 font-bold text-[#ad5502] text-xl">
          {price.toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
