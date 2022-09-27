import React from "react";
import { motion } from "framer-motion";
import SideImg from "./../../assets/logo.png";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Enter Your Email" />
        <textarea placeholder="Message" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>

      <motion.div
        className="contactBorder"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: "-50%", opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <img src={SideImg} alt="BurgerImg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
