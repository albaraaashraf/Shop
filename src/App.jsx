// liberaries

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// styling
//// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//// other style files
import "./components/productList.css";

// components
import ProductsList from "./components/components/productsList";
import About from "./components/About";
import ContactUs from "./components/components/contactUs";
import TargetProduct from "./components/targetProduct/targetProduct";
import RootLayout from "./components/layout/RootLayout";
import SingUp from "./components/SignUp/SingUp";
import NotFoundPage from "./components/layout/NotFoundPage";
import LogIn from "./components/logIn/LogIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<ProductsList />} />
      <Route path="/products/:productID" element={<TargetProduct />} />
      <Route path="/About" element={<About />} />
      <Route path="/US" element={<ContactUs />} />
      <Route path="/SignUp" element={<SingUp />} />
      <Route path="/logIn" element={<LogIn />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
