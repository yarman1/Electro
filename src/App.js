import MainPage from "./components/mainPage/MainPage";
import WalletPage from "./components/walletPage/WalletPage";
import AdvertismentPage from "./components/advertismentPage/AdvertismentPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdvertismentsList from "./components/advertismentsList/AdvertismentsListPage";
import CreateAdvertismentPage from "./components/newAdvertisment/CreateAdvertismentPage";
import DragAndDropImage from "./DragAndDropImage/DragAndDropImage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/wallet", element: <WalletPage /> },
  {
    path: "/:category",
    element: <AdvertismentsList />,
  },
  { path: "/:category/:advertismentId", element: <AdvertismentPage /> },
  { path: "/createAdvertisment", element: <CreateAdvertismentPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
  // return <DragAndDropImage />;
}

export default App;
