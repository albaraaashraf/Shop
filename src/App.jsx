// liberaries

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// styling
import "./components/productList.css";
// components

import Home from "./components/components/home";
import ProductsList from "./components/components/productsList";
import About from "./components/About";
import ContactUs from "./components/components/contactUs";
import TargetProduct from "./components/components/targetProduct";
import RootLayout from "./components/layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<ProductsList />}></Route>
      <Route path="/products/:productID" element={<TargetProduct />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/US" element={<ContactUs />}></Route>
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
