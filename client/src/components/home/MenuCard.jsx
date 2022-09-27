import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handlerBuyButton }) => {
  return (
    <>
      <motion.div className="menuCard">
        <div>Item {itemNum}</div>
        <main>
          <img src={burgerSrc} alt="burgerImg" />
          <h5>$ {price}</h5>
          <p>{title}</p>
          <button onClick={() => handlerBuyButton(itemNum)}>Buy Now</button>
        </main>
      </motion.div>
    </>
  );
};

export default MenuCard;
