// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineRollback } from "react-icons/ai";
import "./logIn.css";
import { useNavigate } from "react-router";
import { NavbarContext } from "../layout/RootLayout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState();

  const navigate = useNavigate();
  const { setShowNavBar } = useContext(NavbarContext);

  function backToHome() {
    navigate("/");
  }

  async function signIn(e) {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("signed IN");
        navigate("/");
        window.location.reload();
      })
      .catch((e) => {
        setError(e.code.slice(5).replace("-", " "));
      });
  }

  useEffect(() => {
    setShowNavBar((prev) => !prev);
    return () => {
      setShowNavBar((prev) => !prev);
    };
  }, [setShowNavBar]);

  return (
    <>
      <div className="logIn-container ">
        <div className="backToHome">
          <AiOutlineRollback onClick={backToHome} />
          <span> Home </span>
        </div>
        <form id="signUp-form" onSubmit={signIn}>
          <div className="row d-flex flex-column justify-content-center align-items-center gy-4 p-5 ">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
              <div id="form-title">Sign In</div>
            </div>
            <div className="col-6 col-md-5 col-lg-4">
              <label className="form-label text-white" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                ref={emailRef}
                min={7}
                maxLength={40}
                required
              />
            </div>
            <div className="col-6 col-md-5 col-lg-4">
              <label className="form-label text-white" htmlFor="password">
                password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="col-6 col-md-5 col-lg-4 d-flex justify-content-center">
              <input type="submit" value={"Sign In"} className=" sub-btn" />
            </div>
            <div className="col-6 col-md-5 col-lg-4 d-flex justify-content-center">
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
