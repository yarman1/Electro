import { Link, useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import classes from "../Signin/Signin.module.css";
import { useRef, useState } from "react";
import DragAndDropImage from "../../DragAndDropImage/DragAndDropImage";

const Registration = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [imagesToForm, setImagesToForm] = useState([]);
  const [registrationFinished, setRegistrationFinished] = useState(false);
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const username = useRef();
  const phoneNumber = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const image =
      imagesToForm.length > 0
        ? imagesToForm[0]
        : "https://i.imgur.com/Eyzrkg3.jpeg";

    if (
      email.current.value.trim().length > 0 &&
      password.current.value.trim().length > 0 &&
      username.current.value.trim().length > 0 &&
      phoneNumber.current.value.trim().length > 0
    ) {
      const jsonBody = JSON.stringify({
        email: email.current.value,
        phone_number: phoneNumber.current.value,
        profile_picture_link: image,
        password: password.current.value,
        visual_name: username.current.value,
      });

      fetch("http://localhost:5000/auth/signup", {
        mode: "cors",
        method: "POST",
        body: jsonBody,
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            setErrorMessage(res.message);
            setShowError(true);
          } else {
            setRegistrationFinished(true);
          }
          return res.json();
        })
        .then((data) => console.log("DATA", data))
        .catch((err) => console.error(err));
    }
  };

  if (registrationFinished) {
    navigate("/wallet", {
      state: {
        email: email.current.value,
        phone_number: phoneNumber.current.value,
        profile_picture_link:
          imagesToForm.length > 0
            ? imagesToForm[0]
            : "https://i.imgur.com/Eyzrkg3.jpeg",
        password: password.current.value,
        visual_name: username.current.value,
      },
    });
  }

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
            <div className={classes["input-contaner"]}>
              <label htmlFor="">Номер телефону</label>
              <input type="tel" ref={phoneNumber} />
            </div>
          </div>

          <DragAndDropImage
            className={classes["image-container"]}
            setImagesToForm={setImagesToForm}
          />
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
