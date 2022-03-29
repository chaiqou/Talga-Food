import classes from "./CartItem.module.css";

const CartItem = ({ price, name, onRemove, onAdd, amount }) => {
  const priceInUsd = `$${price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceInUsd}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemove}>−</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
