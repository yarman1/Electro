import classes from "./AdvertismentsListPage.module.css";
import Navigation from "../navigation/Navigation";
import Button from "../UI/Button";
import GoodsList from "./Goods/GoodsList";
import TechnicalInformation from "../technicalInformation/TechnicalInformation";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DUMMY_CATEGORIES } from "../../data/data";
import { useEffect, useState } from "react";

const AdvertismentsList = ({ category }) => {
  const [filters, setFilters] = useState([]);
  const goodsArray = useSelector((state) => state.products);
  const [goodsList, setGoodsList] = useState(
    <GoodsList goodsArray={goodsArray.products} />
  );
  const params = useParams();
  const navigate = useNavigate();

  const techInfo = DUMMY_CATEGORIES.filter(
    (currentCategory) => currentCategory.name === params.category
  )[0].technicalInfo;

  const getFilters = (filters) => {
    setFilters(filters);
  };

  useEffect(() => {
    setGoodsList(
      <GoodsList goodsArray={goodsArray.products} filters={filters} />
    );
  }, [filters]);

  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes["left-bar"]}>
          <div className={classes.location}>
            <h2 className={classes["heading-secondary"]}>Kyiv</h2>
            <Button className={classes.btn}>Change filter</Button>
          </div>
          <TechnicalInformation filters={techInfo} getFilters={getFilters} />
        </div>
        <div className={classes["right-bar"]}>
          <div className={classes["category-container"]}>
            <div>{params.category.replaceAll("0", " ")}</div>
            <Button onClick={() => navigate("/")}>Change category</Button>
          </div>
          {goodsList}
        </div>
      </div>
    </>
  );
};

export default AdvertismentsList;
