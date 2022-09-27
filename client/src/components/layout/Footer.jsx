import React from "react";

import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates.
        </p>
        <br />
        <em>We are care about your feedbacks.</em>
        <strong>All rights reserved @BurgerShop</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="">
          <AiFillFacebook />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
        <a href="">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
