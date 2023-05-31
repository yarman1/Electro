import { useLocation, useParams } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import classes from "./AdvertismentPage.module.css";
import AdvertismentDescription from "./AdvertismentDescription";
import AdvertismentPageSellersInfo from "./AdvertismentPageSellersInfo";
import { useSelector } from "react-redux";

const AdvertismentPage = () => {
  const location = useLocation();
  const params = useParams();
  let products, currentProduct;
  products = useSelector((state) => state.ProductsReducer.products);

  if (params.category === "allAdvertisments") {
    const id =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    products = location.state.productsArray;
    currentProduct = products.filter((product) => product.id === id)[0];
  } else {
    currentProduct = products[params.category].filter(
      (product) => product.id === params.advertismentId
    )[0];
  }

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
