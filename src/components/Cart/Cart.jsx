import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const reusableButtonStyle = `text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 
text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`;

const Cart = ({ hideCartHandler }) => {
  const cartCtx = useContext(CartContext);
  const totalItems = `$${cartCtx.totalItem.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            price={item.price}
            name={item.name}
            amount={item.amount}
            key={Math.random()}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-xl my-4 mx-0 ">
        <span>Total Amount</span>
        <span>{totalItems}</span>
      </div>
      <div className="text-right">
        <button onClick={hideCartHandler} className={`${reusableButtonStyle}`}>
          Close
        </button>
        {hasItems && (
          <button className={`${reusableButtonStyle}`}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
