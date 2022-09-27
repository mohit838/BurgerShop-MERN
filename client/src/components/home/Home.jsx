import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const motionOp = {
    initial: { x: "-100%", opacity: "0" },
    whileInView: { x: "0", opacity: "1" },
  };

  return (
    <section className="home">
      <div>
        <motion.h1 {...motionOp}>Burger Shop</motion.h1>
        <motion.p {...motionOp} transition={{ delay: "0.2" }}>
          Give Yourself A Tasty Treat
        </motion.p>
      </div>
      <motion.a
        href="#menu"
        initial={{ y: "-100%", opacity: "0" }}
        whileInView={{ y: "0", opacity: "1" }}
        transition={{ delay: "0.4" }}
      >
        Explore Your Treat
      </motion.a>
    </section>
  );
};

export default Home;
