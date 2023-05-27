import classes from "./GoodsItem.module.css";
import { FaHryvnia } from "react-icons/fa";

const GoodsItem = ({
  image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
  name,
  shortInfo,
  price,
  adress,
  phoneNumber,
  id,
}) => {
  return (
    <li className={classes.item}>
      <div className={classes.container}>
        <div className={classes["image-container"]}>
          <img src={image} className={classes.image} />
        </div>
        <div className={classes.info}>
          <h3>{name}</h3>
          <div>{shortInfo}</div>
        </div>
        <div className={classes["price-box"]}>
          <h3>
            {price} <FaHryvnia />
          </h3>
          <div>{adress}</div>
          <div>{phoneNumber}</div>
        </div>
      </div>
    </li>
  );
};

export default GoodsItem;
