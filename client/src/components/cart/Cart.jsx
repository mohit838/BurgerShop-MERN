import React from "react";
import Burger1 from "./../../assets/logo2.png";

const CartItems = ({ value, title, image, increment, decrement }) => {
  return (
    <>
      <div className="cardItem">
        <div>
          <h4>{title}</h4>
          <img src={image} alt="BurgerCart" />
        </div>

        {/* Button */}
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};

  return (
    <section className="cartSection">
      <main>
        <CartItems
          value={0}
          title={"Beef Burger"}
          image={Burger1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItems
          value={2}
          title={"Cheese Burger"}
          image={Burger1}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItems
          value={3}
          title={"Special Veg Burger"}
          image={Burger1}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
      </main>
    </section>
  );
};

export default Cart;
