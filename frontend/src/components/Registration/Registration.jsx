import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import classes from "../Signin/Signin.module.css";
import { useRef, useState } from "react";
import DragAndDropImage from "../../DragAndDropImage/DragAndDropImage";
import CityAutoComplete from "../CityAutoComplete/CityAutoComplete";

const Registration = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imagesToForm, setImagesToForm] = useState([]);
  const [city, setCity] = useState(null);

  const email = useRef();
  const password = useRef();
  const username = useRef();
  const phoneNumber = useRef();

  const submitHandler = (e) => {
    const image =
      imagesToForm.length > 0
        ? imagesToForm[0]
        : "https://i.imgur.com/Eyzrkg3.jpeg";
    const jsonBody = JSON.stringify({
      address: city,
      email: email.current.value,
      phone_number: phoneNumber.current.value,
      profile_picture_link: image,
      password: password.current.value,
    });

    e.preventDefault();
    fetch("http://localhost:5000/users/me", {
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Navigation />
      <form
        className={`${classes.form} ${classes["reg-form"]}`}
        onChange={() => {
          setErrorMessage("");
        }}
      >
        <h2>Реєстрація</h2>
        {showError && <div className={classes.error}>{errorMessage}</div>}
        <div className={classes["actions-container"]}>
          <div>
            <div className={classes["input-contaner"]}>
              <label htmlFor="email-input">Електрона пошта</label>
              <input
                id="email-input"
                type="email"
                placeholder="Email"
                ref={email}
              />
            </div>

            <div className={classes["input-contaner"]}>
              <label htmlFor="password-input">Пароль</label>
              <input
                id="password-input"
                type="password"
                placeholder="Password"
                ref={password}
              />
            </div>

            <div className={classes["input-contaner"]}>
              <label htmlFor="username-input">Ім'я користувача</label>
              <input
                id="username-input"
                type="text"
                placeholder="Username"
                ref={username}
              />
            </div>
          </div>

          <DragAndDropImage
            className={classes["image-container"]}
            setImagesToForm={setImagesToForm}
          />
        </div>

        <div className={classes["more-info"]}>
          <div className={classes["more-actions"]}>
            <label htmlFor="">Місто</label>
            <CityAutoComplete
              inputClassName={classes["city-input"]}
              setCityisValid={() => {}}
              setCityName={setCity}
              placeholder=""
            />
          </div>
          <div className={classes["more-actions"]}>
            <label htmlFor="">Номер телефону</label>
            <input type="tel" ref={phoneNumber} />
          </div>
        </div>

        <button onClick={submitHandler}>Зареєструватись</button>
        <div className={classes.registration}>
          Або <Link to={"/signin"}>увійти</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
