import React from "react";
import MenuCard from "./MenuCard";
import Burger1 from "./../../assets/logo2.png";

const Menu = () => {
  const handlerAddToCart = (itemNum) => {};

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={Burger1}
          price={200}
          title="Cheese Burger"
          handlerBuyButton={handlerAddToCart}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={Burger1}
          price={300}
          title="Chill Burger"
          handlerBuyButton={handlerAddToCart}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={Burger1}
          price={400}
          title="Beef Burger"
          handlerBuyButton={handlerAddToCart}
        />
      </div>
    </section>
  );
};

export default Menu;
