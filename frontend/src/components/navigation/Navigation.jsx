import classes from "./Navigation.module.css";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <Link to="/" className={classes.logo}>
        Electro
      </Link>
      <div className={classes["nav__info"]}>
        <Link to="/createAdvertisment">
          <Button className={classes["nav__button"]}>Add advertisment</Button>
        </Link>

        <Link to="/wallet">
          <CiUser size={44} color="#fff" className={classes["user-icon"]} />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
