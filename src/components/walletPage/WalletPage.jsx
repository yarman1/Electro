import Navigation from "../navigation/Navigation";
import Button from "../UI/Button";
import classes from "./WalletPage.module.css";
import PaymentHistory from "./paymentHistory/PaymentHistory";

const WalletPage = () => {
  return (
    <div className={classes.wrapper}>
      <Navigation />
      <div>
        <h2 className={classes["heading-secondary"]}>
          Ваш баланс: <strong>200 UAH</strong>
        </h2>
        <Button className={classes.btn}>Поповнити баланс</Button>
      </div>
      <PaymentHistory />
    </div>
  );
};

export default WalletPage;
