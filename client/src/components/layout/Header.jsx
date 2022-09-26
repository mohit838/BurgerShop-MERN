import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav>
      <div>
        <IoFastFoodSharp />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Header;
