import React, { useEffect, history } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../Redux/Action";
import { Logout } from "../Redux/Action";
import "../index.css";

const Profile = () => {
  const { isAuth2, user } = useSelector((state) => state, shallowEqual);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem("User"));
  const token = JSON.parse(localStorage.getItem("Token"));

  useEffect(() => {
    dispatch(getUserData(username, token));
  }, [username, token]);

  const logout = () => {
    dispatch(Logout(false));
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    Navigate("/login");
  };
  return (
    <div className="profile-card shadow-sm border-0 px-3 rounded-2 mb-3 py-4  mt-0 text-white">
      <div className="card-headers bg-transparent border-0 text-center">
        <h2>
          WELCOME <br />
          <span>{user.name}</span>
        </h2>
        <div className="inner">
          <div>
            <h3>All</h3>
            <p>0</p>
          </div>
          <div>
            {" "}
            <h3>Personal</h3>
            <p>0</p>
          </div>
          <div>
            {" "}
            <h3>Official</h3>
            <p>0</p>
          </div>
          <div>
            {" "}
            <h3>Others</h3>
            <p>0</p>
          </div>
        </div>
        <p className="text-center mb-0 mt-3">
          <input
            type="submit"
            className="btn btn-primary btn-lg w-auto text-uppercase my-5"
            value="Logout"
            onClick={logout}
          />
        </p>
      </div>
    </div>
  );
};
export { Profile };
