import Navigation from "../navigation/Navigation";
import TechnicalInformation from "../technicalInformation/TechnicalInformation";
import classes from "./CreateAdvertismentPage.module.css";
import CreateAdvertismentForm from "./CreateAdvertismentForm";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisment } from "../../store/ProductsReducer";
import { BsPatchCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const CreateAdvertismentPage = (props) => {
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({});
  const [technicalInfoData, setTechnicalInfoData] = useState({});
  const [technicalInfoFull, setTechnicalInfoFull] = useState(false);
  const [formIsFull, setFormIsFull] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [advPublished, setAdvPublished] = useState(false);
  const navigate = useNavigate();

  const products = useSelector((state) => state.ProductsReducer.products);
  const isLoggedIn = useSelector(
    (state) => state.userIsLoggedReducer.userIsLogged
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setAdvPublished(false);
  }, []);

  const getTechnicalInformation = (technicalInfo, isFull) => {
    console.log(technicalInfo, isFull);
    setTechnicalInfoFull(isFull);
    setTechnicalInfoData(technicalInfo);
  };

  const onChangeCategory = (category) => {
    setCategory(category);
  };

  const getDataHandler = (data) => {
    setFormData(data);
  };

  const publishHandler = () => {
    console.log(technicalInfoFull, formIsFull);
    if (technicalInfoFull && formIsFull) {
      setShowErrorMessage(false);

      const categoryId =
        "" + formData.category + Math.floor(Math.random() * 10000);

      fetch("http://localhost:5000/users/me", {
        mode: "cors",
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("formData", formData);
          fetch("http://localhost:5000/adverts", {
            mode: "cors",
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              categoty_id: categoryId,
              title: formData.name,
              description: formData.description,
              price: +formData.price,
              address: formData.city,
            }),
            headers: {
              Accept: "application/json",
              "Content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then((err) => console.error(err));

          //
          dispatch(
            addAdvertisment({
              ...formData,
              adress: formData.city,
              technicalInfo: technicalInfoData,
              id: categoryId,
              seller: {
                name: data["visual_name"],
                phoneNumber: data["phone_number"],
                image: data["profile_picture_link"],
              },
            })
          );
        })
        .catch((err) => console.error(err));

      setAdvPublished(true);
    } else setShowErrorMessage(true);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Navigation />
      {!advPublished && (
        <>
          <main>
            <div className={classes.heading}>Додати оголошення</div>
            {showErrorMessage && (
              <div className={`${classes.heading} ${classes.error}`}>
                Будь ласка, заповніть всі поля!
              </div>
            )}
            <CreateAdvertismentForm
              onChangeCategory={onChangeCategory}
              setFormIsFull={setFormIsFull}
              returnData={getDataHandler}
            />

            <div className={classes["right-bar"]}>
              <TechnicalInformation
                filters={category.technicalInfo}
                type="radio"
                getTechnicalInformation={getTechnicalInformation}
              />
            </div>
          </main>
          <button className={classes["publish-btn"]} onClick={publishHandler}>
            Опублікувати
          </button>
        </>
      )}
      {advPublished && (
        <div className={classes.published}>
          <BsPatchCheck size={80} />
          <div className={classes.heading}>Оголошення опубліковано!</div>
        </div>
      )}
    </>
  );
};

export default CreateAdvertismentPage;
