import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import { createContext, useState } from "react";

export const NavbarContext = createContext();

export default function RootLayout() {
  const [showNavBar, setShowNavBar] = useState(true);

  const value = {
    showNavBar,
    setShowNavBar,
  };

  return (
    <div>
      <NavbarContext.Provider value={value}>
        <Navbar />

        {<Outlet />}
      </NavbarContext.Provider>
    </div>
  );
}
