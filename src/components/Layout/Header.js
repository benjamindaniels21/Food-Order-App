import React from "react";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header>
        <h1>Food Ordering</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
