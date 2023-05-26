import GoodsItem from "./GoodsItem";
import { NavLink, useParams } from "react-router-dom";
import { DUMMY_PRODUCTS } from "../../../data/data";

const GoodsList = ({ goodsArray }) => {
  const params = useParams();

  return (
    <>
      {goodsArray[params.category].map((item) => {
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
      })}
    </>
  );
};

export default GoodsList;
