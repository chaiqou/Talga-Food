import React from "react";
import Input from "../UI/Input";

const MealItemForm = () => {
  return (
    <form className="text-right">
      <Input
        input={{
          id: Math.random(),
          label: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="text-white w-full rounded-md bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Add
      </button>
    </form>
  );
};

export default MealItemForm;
