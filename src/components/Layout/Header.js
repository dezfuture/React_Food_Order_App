import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header class={classes.header}>
        <h1>Foodoo</h1>
        <HeaderCartButton />
      </header>
      <div class={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
