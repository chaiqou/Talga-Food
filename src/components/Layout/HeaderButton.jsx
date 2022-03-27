import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const HeaderButton = ({ showCartHandler }) => {
  const cartCtx = useContext(CartContext);

  const itemsInCart = cartCtx.items.reduce((currentItem, item) => {
    return currentItem + item.amount;
  }, 0);

  return (
    <button
      onClick={showCartHandler}
      className="cursor-pointer border-0 rounded-3xl bg-[#4d1601] text-white px-[3rem] py-[0.75rem] 
flex justify-around items-center font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00]"
    >
      <span className="w-[1.35rem] h-[1.35rem] mr-3">
        <AiOutlineShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className="bg-yellow-900 px-4 py-1 rounded-3xl ml-4 font-bold">
        {itemsInCart}
      </span>
    </button>
  );
};

export default HeaderButton;
