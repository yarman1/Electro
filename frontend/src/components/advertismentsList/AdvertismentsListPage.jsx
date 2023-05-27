import classes from "./AdvertismentsListPage.module.css";
import Navigation from "../navigation/Navigation";
import Button from "../UI/Button";
import TechnicalInformationItem from "../technicalInformation/TechnicalInformationItem";
import GoodsItem from "./Goods/GoodsItem";
import GoodsList from "./Goods/GoodsList";
import TechnicalInformation from "../technicalInformation/TechnicalInformation";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const itemsArray = {
  title: "brand",
  array: ["apple", "samsung", "hp", "msi", "lenovo", "asus", "acer"],
};
const itemsArray2 = {
  title: "Display size",
  array: ["12'", "13'", "14'", "15.6'", "16'", "17'"],
};
const itemsArray3 = {
  title: "Processor",
  array: [
    "Intel Core i9",
    "Intel Core i7",
    "Intel Core i5",
    "Intel Core i3",
    "Intel Pentium",
    "Intel Celeron",
    "Intel Atom",
    "Intel Xeon",
    "Intel Core M",
    "Apple M",
    "AMD Ryzen 7",
    "AMD Ryzen 5",
    "AMD Ryzen 3",
    "AMD Athlon",
    "AMD Ryzen 9",
  ],
};

const AdvertismentsList = ({ category }) => {
  const params = useParams();
  const navigate = useNavigate();
  const goodsArray = useSelector((state) => state.products);
  console.log("GoodsArray", goodsArray);

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes["left-bar"]}>
          <div className={classes.location}>
            <h2 className={classes["heading-secondary"]}>Kyiv</h2>
            <Button className={classes.btn}>Change filter</Button>
          </div>
          <TechnicalInformation
            filters={[itemsArray, itemsArray2, itemsArray3]}
          />
        </div>
        <div className={classes["right-bar"]}>
          <div className={classes["category-container"]}>
            <div>{params.category.replaceAll("0", " ")}</div>
            <Button onClick={() => navigate("/")}>Change category</Button>
          </div>
          <GoodsList goodsArray={goodsArray.products} />
        </div>
      </div>
    </>
  );
};

export default AdvertismentsList;
