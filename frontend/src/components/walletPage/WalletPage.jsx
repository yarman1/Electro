import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Button from "../UI/Button";
import classes from "./WalletPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/UserIsLoggedReducer";

const WalletPage = () => {
  const [user, setUser] = useState({
    visual_name: null,
    profile_picture_link: null,
    phone_number: null,
  });
  const [userAuthourized, setUserAuthorized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userIsLogged = useSelector(
    (state) => state.userIsLoggedReducer.userIsLogged
  );

  const dispatch = useDispatch();

  function deleteCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const logoutHandler = () => {
    fetch("http://localhost:5000/auth/signout", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
    deleteCookie("token");
    setUserAuthorized(false);
    dispatch(signout());
    navigate("/signin");
  };

  useEffect(() => {
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
        console.log(res);
        if (res.ok) {
          setUserAuthorized(true);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.error(err));

    if (location.state && location.state.userAuthourized === true) {
      setUserAuthorized(true);
    }
  }, []);

  useEffect(() => {
    console.log("USER IS LOGGED", userIsLogged);

    if (!userIsLogged) {
      navigate("/signin");
    }
  }, [userIsLogged]);

  return (
    <>
      <Navigation />
      {userIsLogged && (
        <div className={classes.wrapper}>
          <div className={classes["info-wrapper"]}>
            <img
              src={user["profile_picture_link"]}
              alt="user-image"
              className={classes["user-img"]}
            />
            <div>
              <div>{user["visual_name"]}</div>
              <div>{user["phone_number"]}</div>
              <button className={classes["logout-btn"]} onClick={logoutHandler}>
                Вийти
              </button>
            </div>
          </div>
          <div className={classes.advertisments}>
            <h2>Ваші оголошення</h2>
            {/* 
            {}
            */}
          </div>
        </div>
      )}
    </>
  );
};

export default WalletPage;
