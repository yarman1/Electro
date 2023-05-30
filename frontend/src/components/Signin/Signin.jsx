import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import classes from "./Signin.module.css";
import { useRef, useState } from "react";

const SignIn = () => {
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef();
  const password = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const jsonBody = { email, password };

    const res = await fetch("http://localhost:5000/auth/signin", {
      mode: "cors",
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Navigation />
      <form className={classes.form}>
        <h2>Вхід</h2>
        <div className={classes.actions}>
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
        </div>
        <button onClick={submitHandler}>Увійти</button>
        <div className={classes.registration}>
          Або <Link to={"/registration"}>зареєструватись</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
