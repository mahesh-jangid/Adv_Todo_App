import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../Redux/Action";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const isAuth2 = useSelector((state) => state.isAuth2);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    return dispatch(login(payload));
  };

  return isAuth2 ? (
    <Navigate to="/Profile" />
  ) : (
    <div className="card shadow-sm border-0 px-3 rounded-2 mt-5 py-4 mx-auto mt-5 bg-light">
      <div className="card-header bg-transparent border-0 text-center text-uppercase text-dark">
        <h3>User Login</h3>
      </div>
      <div className="card-body">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-group">
            <label className="mb-0 mb-2 text-dark">
              User Name<span className="text-danger">*</span>
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2 mb-2 text-dark">
              Password<span className="text-danger">*</span>
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <p className="text-center mb-0 mt-3">
            <input
              type="submit"
              className="btn btn-primary btn-lg w-100 text-uppercase"
              value="Login"
            />
          </p>
        </form>
      </div>
    </div>
  );
};
export { Login };
