// reusable cart button
// PX udris paddingshi daweril meore mnishvnelobas , PY udris pirvel mnishvnelobas
const reusableCartButton = `cursor-pointer border-0 rounded-3xl bg-[#4d1601] text-white px-8 py-2
flex justify-around items-center font-bold hover:bg-[#2c0d00] active:bg-[#2c0d00] mt-2`;

const CartItem = ({ price, name, onRemove, onAdd, amount }) => {
  const priceInUsd = `$${price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-b-[#8a2b06] px-0 py-4 mx-0 my-4">
      <div>
        <h2 className="text-[#363636] mb-2">{name}</h2>
        <div className="fiexl justify-between items-center w-40">
          <span className="font-bold text-[#8a2b06]">{priceInUsd}</span>
          <span className="font-bold py-1 px-3 text-[#363636] border-[1px] ml-2 border-[#ccc] rounded-lg">
            x {amount}
          </span>
        </div>
        <div className="flex">
          <button className={`${reusableCartButton}`} onClick={onRemove}>
            −
          </button>
          <button className={`${reusableCartButton}`} onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
