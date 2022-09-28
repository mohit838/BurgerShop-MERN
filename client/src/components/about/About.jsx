import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import Mohit from "../../assets/mohit2.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BurgerShop</h4>
          <p>
            We are BurgerShop. The place for most tasty burgers on the enitre
            earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={Mohit} alt="Founder" />
              <h3>Mohammad Mohitul Islam</h3>
            </div>

            <p>I am Mohammad Mohitul Islam, the founder of BurgerShop.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
