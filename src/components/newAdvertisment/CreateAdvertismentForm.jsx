import classes from "./CreateAdvertismentPage.module.css";
import { DUMMY_CATEGORIES } from "../../data/data";
import { useEffect, useRef, useState } from "react";
import DragAndDropImage from "../../DragAndDropImage/DragAndDropImage";

const CreateAdvertismentForm = ({
  onChangeCategory,
  setFormIsFull,
  returnData,
}) => {
  const [images, setImages] = useState([]);
  const [formIsFilled, setFormIsFilled] = useState(false);
  const currentCategory = useRef();
  const name = useRef();
  const price = useRef();
  const city = useRef();
  const trade = useRef();
  const description = useRef();

  const changeCategoryHandler = (e) => {
    onChangeCategory(
      DUMMY_CATEGORIES.filter((category) => category.name === e.target.value)[0]
    );
  };

  const changeFormHandler = () => {
    setFormIsFilled(false);
    console.log();
    if (
      currentCategory.current.value.trim().length > 0 &&
      currentCategory.current.value.length !== "Category" &&
      name.current.value.trim().length > 0 &&
      price.current.value.trim().length > 0 &&
      city.current.value.trim().length > 0 &&
      description.current.value.trim().length > 0 &&
      images.length > 0
    ) {
      setFormIsFilled(true);
      returnData({
        category: currentCategory.current.value,
        name: name.current.value,
        price: price.current.value,
        city: city.current.value,
        trade: trade.current.value,
        description: description.current.value,
        image: images[0].url,
      });
    }
  };

  useEffect(() => {
    setFormIsFull(formIsFilled);
  }, [formIsFilled]);

  return (
    <form onChange={changeFormHandler}>
      <div className={classes.wrapper}>
        <div className={classes.form}>
          <input
            type="text"
            placeholder="NAME"
            className={classes["name-input"]}
            ref={name}
          />
          <select
            name="category"
            id="selectCategory"
            placeholder="Category"
            defaultValue={"Category"}
            className={classes["category-select"]}
            ref={currentCategory}
            onChange={changeCategoryHandler}
          >
            <option name="category-option" disabled={true}>
              Category
            </option>
            {DUMMY_CATEGORIES.map((category) => (
              <option key={category.name} name={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <div className={classes["price-box"]}>
            <input
              type="number"
              placeholder="price"
              className={classes["price-input"]}
              min={0}
              ref={price}
            />

            <input
              type="text"
              placeholder="City"
              className={classes["price-input"]}
              ref={city}
            />
            <div>
              <input type="checkbox" id="trade" ref={trade} />
              <label htmlFor="trade">Trade</label>
            </div>
          </div>
        </div>

        <div>
          <DragAndDropImage setImagesToForm={setImages} />
        </div>
      </div>
      <div className={classes.description}>
        <label or="description">Description:</label>

        <textarea
          id="description"
          name="description"
          rows="4"
          cols="50"
          ref={description}
        ></textarea>
      </div>
    </form>
  );
};

export default CreateAdvertismentForm;
