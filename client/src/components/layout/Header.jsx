import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = ({ isUserAuth = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: "0" }}>
        <IoFastFoodSharp />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <IoBagOutline />
        </Link>

        <Link to={isUserAuth ? "/me" : "/login"}>
          {isUserAuth ? <IoPersonOutline /> : <FiLogIn />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
