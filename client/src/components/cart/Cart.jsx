import React from "react";
import { Link } from "react-router-dom";
import Burger1 from "./../../assets/logo2.png";

const CartItems = ({ value, title, img, increment, decrement }) => (
  <div className="cartItemCard">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cartSection">
      <main>
        <CartItems
          title={"Veg Burger"}
          img={Burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItems
          title={"Beef Burger"}
          img={Burger1}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItems
          title={"Cheese Burger"}
          img={Burger1}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>$ {2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>$ {2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>$ {200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>$ {2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
