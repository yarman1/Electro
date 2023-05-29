import { useState } from "react";
import classes from "./CheckboxList.module.css";

const RadioList = ({ array, setCheckedRadioHandler, uniqueId }) => {
  const changeRadioHandler = (e) => {
    setCheckedRadioHandler(e.target);
  };

  return (
    <ul className={classes.list}>
      {array.map((item, i) => {
        return (
          <li key={item + (Math.random() * 100).toFixed(2)}>
            <label
              className={classes.label}
              htmlFor={`radio-input-${uniqueId}-${i}`}
            >
              <div>
                <input
                  type="radio"
                  id={`radio-input-${uniqueId}-${i}`} // add unique ID to ID attribute of input element
                  name={`radio-input-${uniqueId}`} // add unique ID to name attribute of input element
                  value={item}
                  onChange={changeRadioHandler}
                />
                {item}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default RadioList;
