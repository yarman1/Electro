import { CiSearch } from "react-icons/ci";
import classes from "./MainPageInput.module.css";

const MainPageInput = () => {
  return (
    <label className={`input-icon ${classes.label}`}>
      <CiSearch size={28} htmlFor="input" color="#1d2023" />
      <input
        type="text"
        placeholder="Введіть назву товару"
        name="input"
        className={classes.input}
      />
    </label>
  );
};

export default MainPageInput;
