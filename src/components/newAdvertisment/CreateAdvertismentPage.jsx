import Navigation from "../navigation/Navigation";
import TechnicalInformation from "../technicalInformation/TechnicalInformation";
import classes from "./CreateAdvertismentPage.module.css";
import CreateAdvertismentForm from "./CreateAdvertismentForm";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertisment } from "../../store/ProductsReducer";
import { BsPatchCheck } from "react-icons/bs";

const CreateAdvertismentPage = (props) => {
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({});
  const [technicalInfoData, setTechnicalInfoData] = useState({});
  const [technicalInfoFull, setTechnicalInfoFull] = useState(false);
  const [formIsFull, setFormIsFull] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [advPublished, setAdvPublished] = useState(false);

  const products = useSelector((state) => state.products);
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
    if (technicalInfoFull && formIsFull) {
      setShowErrorMessage(false);

      // dispatch(
      //   addAdvertisment({ ...formData, technicalInfo: technicalInfoData })
      // );
      console.log("IMAGE", formData.image);

      dispatch(
        addAdvertisment({
          ...formData,
          technicalInfo: technicalInfoData,
          id: "" + formData.category + (Math.random() * 100).toFixed(2),
          seller: {
            name: "DUMMY NAME",
            phoneNumber: "+380980000000",
            image: require("../../images/user.png"),
          },
        })
      );
      setAdvPublished(true);
    } else setShowErrorMessage(true);
  };

  return (
    <>
      <Navigation />
      {!advPublished && (
        <>
          {" "}
          <main>
            <div className={classes.heading}>Add advertisment</div>
            {showErrorMessage && (
              <div className={`${classes.heading} ${classes.error}`}>
                Please fill all fields!
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
            Publish
          </button>
        </>
      )}
      {advPublished && (
        <div className={classes.published}>
          <BsPatchCheck size={80} />
          <div className={classes.heading}>Advertisment published!</div>
        </div>
      )}
    </>
  );
};

export default CreateAdvertismentPage;
