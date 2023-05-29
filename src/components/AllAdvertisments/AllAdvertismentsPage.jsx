import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import GoodsItem from "../advertismentsList/Goods/GoodsItem";
import classes from "./AllAdvertismentsPage.module.css";
import Navigation from "../navigation/Navigation";
import { useEffect, useState } from "react";
import CategoryFilters from "./CategoryFilters";

const AllAdvertismentsPage = () => {
  const [listIsEmpty, setListIsEmpty] = useState(false);
  const [products, setProducts] = useState([]);
  const state = useSelector((state) => state.products.products);
  let location = useLocation();
  let allProducts, initialProducts;

  allProducts = [];
  for (const key in state) {
    allProducts.push(...state[key]);
  }
  const inputValue = location.state.inputValue;
  initialProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const setProductsHandler = () => {
    allProducts = [];
    for (const key in state) {
      allProducts.push(...state[key]);
    }
    const inputValue = location.state.inputValue;
    setProducts(
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setProductsHandler();
  }, []);

  const getFiltersHandler = (filters) => {
    if (filters.length === 0) {
      setProductsHandler();
      return;
    } else {
      setProducts((prevProducts) => {
        prevProducts = initialProducts.filter((product) => {
          return filters.includes(product.category);
        });
        return [...prevProducts];
      });
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      setListIsEmpty(true);
    } else {
      setListIsEmpty(false);
    }
  }, [products]);

  return (
    <section>
      <Navigation />
      <div>
        <CategoryFilters onGetFilters={getFiltersHandler} />
        {listIsEmpty && (
          <div className={classes["empty-list"]}>Таких оголошень немає!</div>
        )}
        {!listIsEmpty && (
          <div className={classes.list}>
            {products.map((item) => {
              return (
                <NavLink
                  to={`/allAdvertisments/${item.id}`}
                  style={{ textDecoration: "none", color: "#000" }}
                  key={item.id}
                  state={{ products: products }}
                >
                  <GoodsItem
                    name={item.name}
                    image={item.image}
                    technicalInfo={item.technicalInfo}
                    adress={item.adress}
                    price={item.price}
                    phoneNumber={item.seller.phoneNumber}
                    id={item.id}
                  />
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllAdvertismentsPage;
