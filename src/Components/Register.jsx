import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { register } from "../Redux/Action";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const init = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: "",
};
const Register = () => {
  const [details, setDetails] = React.useState(init);
  const { name, email, username, password, mobile, description } = details;
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.isAuth);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      username,
      mobile,
      description,
    };
    return dispatch(register(payload));
  };
  return isAuth ? (
    <Navigate to="/login" />
  ) : (
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light text-dark">
      <div className="card-header bg-transparent border-0 text-center text-uppercase text-dark">
        <h3>User Register</h3>
      </div>
      <div className="card-body">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          autoComplete="off"
        >
          <div className="form-group">
            <label className="mb-0">
              Name<span className="text-danger">*</span>
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Full Name"
              onChange={handleChange}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2">
              Email<span className="text-danger">*</span>
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2">
              Password<span className="text-danger">*</span>
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2">
              User Name<span className="text-danger">*</span>
            </label>
            <input
              name="username"
              type="text"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              value={username}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2">
              Mobile<span className="text-danger">*</span>
            </label>
            <input
              name="mobile"
              type="number"
              className="form-control"
              placeholder="Mobile"
              onChange={handleChange}
              value={mobile}
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-0 mt-2">
              Description<span className="text-danger">*</span>
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={handleChange}
              value={description}
              required
            />
          </div>
          <p className="text-center mb-0 mt-3">
            <input
              type="submit"
              className="btn btn-primary btn-lg w-100 text-uppercase"
              value="Sign Up"
              required
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export { Register };
