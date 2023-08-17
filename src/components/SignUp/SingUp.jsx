// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from "react";
import "./SignUp.css";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router";
import { NavbarContext } from "../layout/RootLayout";

export default function SingUp() {
  const navigate = useNavigate();

  const { setShowNavBar } = useContext(NavbarContext);

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

      <form>
        <div className="row d-flex flex-column justify-content-center align-items-center gy-4 p-5 ">
          <div className="col-4">
            <label className="form-label text-white" htmlFor="userName">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="userName"
              min={7}
              maxLength={40}
            ></input>
          </div>
          <div className="col-4">
            <label className="form-label text-white" htmlFor="email">
              Email
            </label>
            <input type="email" className="form-control" id="email"></input>
          </div>
          <div className="col-4">
            <label className="form-label text-white" htmlFor="password">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              min={7}
              maxLength={20}
            ></input>
          </div>
          <div className="col-4">
            <select className="form-select">
              <option selected value={""}>
                Nationality
              </option>
              <option value={"Egypt"}>Egypt</option>
              <option value={"USA"}>USA</option>
              <option value={"England"}>England</option>
              <option value={"türkiye"}>türkiye</option>
            </select>
          </div>

          <div className="col-4 d-flex flex-row text-white">
            <div className="form-label mx-4">Gender</div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="gender"
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
              />
            </div>
            <label htmlFor="female" className="form-check-label">
              female
            </label>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <input type="submit" className="btn sub-btn" />
          </div>
        </div>
      </form>
    </div>
  );
}
