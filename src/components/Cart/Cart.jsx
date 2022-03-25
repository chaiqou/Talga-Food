import React from "react";

const Cart = () => {
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {[{ id: "n1", name: "Khinkali", amount: 2, price: 2.5 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-xl my-4 mx-0 ">
        <span>Total Amount</span>
        <span>5.00</span>
      </div>
      <div className="text-right">
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default Cart;
