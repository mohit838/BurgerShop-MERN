import React from "react";
import { motion } from "framer-motion";
import founderImg from "./../../assets/mohit2.jpg";

const Founder = () => {
  const motionOp = {
    initial: { x: "-100%", opacity: "0" },
    whileInView: { x: "0", opacity: "1" },
  };

  return (
    <section className="founder">
      <motion.div {...motionOp}>
        <img src={founderImg} alt="FounderImage" width={200} />
        <h3>Mohammad Mohitul Islam</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          repellendus fuga reprehenderit cumque, asperiores, neque quod suscipit
          quas fugit sit, voluptate illo expedita? Adipisci saepe quisquam
          ipsum, earum pariatur atque!
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
