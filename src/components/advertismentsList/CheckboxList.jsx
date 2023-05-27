import React, { useState } from "react";
import classes from "./CheckboxList.module.css";

const CheckboxList = ({ array }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    }
  };

  return (
    <ul className={classes.list}>
      {array.map((item, i) => {
        return (
          <li key={item}>
            <label className={classes.label}>
              <input
                type="checkbox"
                value={`item${i + 1}`}
                checked={checkedItems.includes(`item${i + 1}`)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckboxList;
