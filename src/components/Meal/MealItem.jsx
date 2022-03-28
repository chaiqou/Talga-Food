import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

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
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
