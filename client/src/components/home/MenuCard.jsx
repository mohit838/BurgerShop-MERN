import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum }) => {
  return (
    <>
      <motion.div className="menuCard">
        <div>Item {itemNum}</div>
        <main>
          <img src="" alt="" />
        </main>
      </motion.div>
    </>
  );
};

export default MenuCard;
