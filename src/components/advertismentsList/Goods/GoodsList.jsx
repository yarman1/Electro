import GoodsItem from "./GoodsItem";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const GoodsList = ({ goodsArray, filters }) => {
  const [productFilters, setProductFilters] = useState([]);
  const params = useParams();
  let includesFilters;

  useEffect(() => {
    if (filters) {
      if (filters.every((filter) => filter.items.length === 0)) {
        setProductFilters([]);
      }
      filters.map((filter) => {
        if (filter.items.length > 0) {
          if (
            !!productFilters.filter(
              (productFilter) => productFilter.filter === filter.filter
            )[0]
          ) {
            setProductFilters((prevFilters) => {
              const currentIndex = prevFilters.indexOf(
                prevFilters.filter(
                  (checkbox) => checkbox.filter === filter.filter
                )[0]
              );
              prevFilters[currentIndex] = filter;
              return [...prevFilters];
            });
          } else setProductFilters((prevFilters) => [...prevFilters, filter]);
        } else
          setProductFilters((prevFilters) => {
            prevFilters = prevFilters.filter(
              (curFilter) => curFilter.filter !== filter.filter
            );
            return [...prevFilters];
          });
      });
    }
  }, [filters]);

  useEffect(() => {
    console.log(productFilters);
  }, [productFilters]);

  return (
    <>
      {goodsArray[params.category].map((item) => {
        includesFilters = [];
        if (productFilters.length === 0) includesFilters.push(true);
        productFilters.map((filter) => {
          if (filter.items.includes(item.technicalInfo[filter.filter]))
            includesFilters.push(true);
          else includesFilters.push(false);
        });
        console.log(includesFilters);

        if (
          includesFilters.length > 0 &&
          includesFilters.every((filter) => filter === true)
        ) {
          return (
            <NavLink
              to={item.id}
              style={{ textDecoration: "none", color: "#000" }}
              key={item.id}
            >
              <GoodsItem
                name={item.name}
                image={item.image}
                shortInfo={item.shortInfo}
                adress={item.adress}
                price={item.price}
                phoneNumber={item.seller.phoneNumber}
                id={item.id}
              />
            </NavLink>
          );
        }
      })}
    </>
  );
};

export default GoodsList;
