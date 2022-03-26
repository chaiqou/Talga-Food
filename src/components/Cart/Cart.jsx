import React from "react";
import Modal from "../UI/Modal";

const reusableButtonStyle = `text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 
text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`;

const Cart = ({ hideCartHandler }) => {
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {[{ id: "n1", name: "Khinkali", amount: 2, price: 2.5 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-xl my-4 mx-0 ">
        <span>Total Amount</span>
        <span>5.00</span>
      </div>
      <div className="text-right">
        <button onClick={hideCartHandler} className={`${reusableButtonStyle}`}>
          Close
        </button>
        <button className={`${reusableButtonStyle}`}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
