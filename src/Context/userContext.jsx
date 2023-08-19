/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [signed, setSigned] = useState();
  const value = {
    user,
    setUser,
    signed,
    setSigned,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigned(true);

        getDoc(doc(db, `Users/${user.uid}`)).then((data) => {
          setUser(data.data());
        });
      } else {
        setSigned(false);
        setUser({});
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
}

export function useUser() {
  return useContext(UserContext);
}
