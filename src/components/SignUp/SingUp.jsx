// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router";
import { NavbarContext } from "../layout/RootLayout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function SingUp() {
  const navigate = useNavigate();

  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const { setShowNavBar } = useContext(NavbarContext);

  async function SingUp(e) {
    e.preventDefault();
    setError("");
    const form = document.querySelector("#signUp-form");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let data = {
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      nationality: form.elements.nationality.value,
      gender: form.elements.gender.value,
    };

    await createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        data = { ...data, uid: user.user.uid };

        const userRef = doc(db, "Users", data.uid);
        setDoc(userRef, data).then(() => {
          console.log("firestore added ");
        });
      })
      .catch((e) => {
        setError(e.code.slice(5).replace("-", " "));
      });

    console.log(data);
    form.reset();
  }

  function backToHome() {
    navigate("/");
  }

  useEffect(() => {
    setShowNavBar((prev) => !prev);
    return () => {
      setShowNavBar((prev) => !prev);
    };
  }, [setShowNavBar]);

  return (
    <div className="form-container">
      <div className="backToHome">
        <AiOutlineRollback onClick={backToHome} />
        <span> Home </span>
      </div>

      <form onSubmit={SingUp} id="signUp-form">
        <div className="row d-flex flex-column justify-content-center align-items-center gy-4 p-5 ">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <div id="form-title">Sign Up</div>
          </div>
          <div className="col-6 col-md-5 col-lg-4">
            <label className="form-label text-white" htmlFor="userName">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              ref={userNameRef}
              min={7}
              maxLength={40}
              required
            />
          </div>
          <div className="col-6 col-md-5 col-lg-4">
            <label className="form-label text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              ref={emailRef}
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
              min={7}
              maxLength={20}
            />
          </div>
          <div className="col-6 col-md-5 col-lg-4">
            <select className="form-select" name="nationality" required>
              <option selected value={""}>
                Nationality
              </option>
              <option value={"Egypt"}>Egypt</option>
              <option value={"USA"}>USA</option>
              <option value={"England"}>England</option>
              <option value={"türkiye"}>türkiye</option>
            </select>
          </div>

          <div className="col-6 col-md-5 col-lg-4 d-flex flex-row text-white">
            <div className="form-label mx-4">Gender</div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="gender"
                value={"male"}
              />
              <label htmlFor="male" className="form-check-label">
                male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="female"
                name="gender"
                value={"female"}
              />
            </div>
            <label htmlFor="female" className="form-check-label">
              female
            </label>
          </div>
          <div className="col-6 col-md-5 col-lg-4 d-flex justify-content-end">
            <input type="submit" value={"Sign Up"} className=" sub-btn" />
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
  );
}
