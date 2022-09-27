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
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={Burger1}
          price={300}
          title="Chill Burger"
          handlerBuyButton={handlerAddToCart}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={Burger1}
          price={400}
          title="Beef Burger"
          handlerBuyButton={handlerAddToCart}
          delay={1}
        />
      </div>
    </section>
  );
};

export default Menu;
