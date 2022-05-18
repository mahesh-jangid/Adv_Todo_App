import { REGISTER_SUCCESS, LOGIN_SUCCESS, USER, LOGOUT } from "./ActionTypes";
import axios from "axios";

const register_success = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
const User = (payload) => {
  return {
    type: USER,
    payload,
  };
};
const Logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};

const register = (payload) => async (dispatch) => {
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then((res) => {
      console.log(res.data.error);
      if (!res.data.error) {
        dispatch(register_success(true));
      } else {
        alert("User Already Exist");
      }
    })
    .catch((err) => {
      console.log(err + "something went wrong");
    });
};

const login = (payload) => async (dispatch) => {
  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        dispatch(login_success(true));
        localStorage.setItem("User", JSON.stringify(payload.username));
        localStorage.setItem("Token", JSON.stringify(response.data.token));
      }
    })
    .catch((err) => {
      console.log(err + "something went wrong");
    });
};
const getUserData = (username, token) => async (dispatch) => {
  let response = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await response.json();
  console.log(data);
  dispatch(User(data));
};

// /////////// task: try to make login funtion here with removing token from localstorage and navigate to /login

export {
  register_success,
  login_success,
  register,
  login,
  User,
  getUserData,
  Logout,
};
