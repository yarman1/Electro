import { useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import classes from "./AdvertismentPage.module.css";
import { DUMMY_PRODUCTS } from "../../data/data";
import AdvertismentDescription from "./AdvertismentDescription";
import AdvertismentPageSellersInfo from "./AdvertismentPageSellersInfo";
import { useSelector } from "react-redux";

const AdvertismentPage = () => {
  const params = useParams();
  const products = useSelector((state) => state.products.products);
  console.log("CURRENT IMAGE", products);
  const currentProduct = products[params.category].filter(
    (product) => product.id === params.advertismentId
  )[0];

  return (
    <>
      <Navigation />
      <div className={classes["advertisment-page"]}>
        <div className={classes.container}>
          <div>
            <div className={classes["image-container"]}>
              <img
                src={
                  currentProduct.image ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
                }
                className={classes.image}
              />
            </div>
            <AdvertismentDescription {...currentProduct} />
          </div>
          <AdvertismentPageSellersInfo seller={currentProduct.seller} />
        </div>
      </div>
    </>
  );
};

export default AdvertismentPage;
