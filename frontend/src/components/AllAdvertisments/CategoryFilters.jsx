import { useEffect, useState } from "react";
import { DUMMY_CATEGORIES } from "../../data/data";
import classes from "./AllAdvertismentsPage.module.css";

const CategoryFilters = ({ onGetFilters }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const checkItemHandler = (e) => {
    if (e.target.checked) {
      setCheckedItems((prevItems) => [...prevItems, e.target.name]);
    } else {
      setCheckedItems((prevItems) => {
        prevItems = prevItems.filter((item) => item !== e.target.name);
        return [...prevItems];
      });
    }
  };

  useEffect(() => {
    onGetFilters(checkedItems);
  }, [checkedItems]);

  return (
    <div className={classes["categories-container"]}>
      <h2>Категорії</h2>
      <ul>
        {DUMMY_CATEGORIES.map((category, i) => (
          <li key={category.name}>
            <input
              id={"category-filter-" + i}
              name={category.name}
              type="checkbox"
              onChange={checkItemHandler}
            />
            <label htmlFor={"category-filter-" + i}>{category.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilters;
