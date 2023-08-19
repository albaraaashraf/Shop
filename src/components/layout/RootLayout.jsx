import { Outlet } from "react-router";
import Navbar from "../navbar/navbar";
import { createContext, useState } from "react";
import UserProvider from "../../Context/userContext";

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
        <UserProvider>
          <Navbar />

          {<Outlet />}
        </UserProvider>
      </NavbarContext.Provider>
    </div>
  );
}
