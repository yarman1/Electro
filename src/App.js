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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
