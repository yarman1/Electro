import MainPage from "./components/mainPage/MainPage";
import WalletPage from "./components/walletPage/WalletPage";
import AdvertismentPage from "./components/advertismentPage/AdvertismentPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdvertismentsList from "./components/advertismentsList/AdvertismentsListPage";
import CreateAdvertismentPage from "./components/newAdvertisment/CreateAdvertismentPage";
import DragAndDropImage from "./DragAndDropImage/DragAndDropImage";
import { DUMMY_PRODUCTS, getAllProducts } from "./data/data";
import { useSelector } from "react-redux";
import AllAdvertismentsPage from "./components/AllAdvertisments/AllAdvertismentsPage";

import PersonalOffice from "./components/Signin/Signin";
import Registration from "./components/Registration/Registration";
import SignIn from "./components/Signin/Signin";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/wallet", element: <WalletPage /> },
  {
    path: "/:category",
    element: <AdvertismentsList />,
  },
  { path: "/:category/:advertismentId", element: <AdvertismentPage /> },
  { path: "/createAdvertisment", element: <CreateAdvertismentPage /> },
  { path: "/allAdvertisments", element: <AllAdvertismentsPage /> },
  { path: "/registration", element: <Registration /> },
  { path: "/signin", element: <SignIn /> },
]);

function App() {
  // console.log(jsonBody);

  // const fetchFunction = () => {
  //
  // };

  return <RouterProvider router={router} />;
  // return <Button onClick={fetchFunction}>Fetch</Button>;
}

export default App;
