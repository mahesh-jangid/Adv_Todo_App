import { REGISTER_SUCCESS, LOGIN_SUCCESS, USER, LOGOUT } from "./ActionTypes";

const init = {
  isAuth: false,
  isAuth2: false,
  user: {},
};

export const Reducer = (state = init, { type, payload }) => {
  switch (type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuth: payload,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth2: payload,
      };
    }
    case USER: {
      return {
        ...state,
        user: payload,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth2: payload,
      };
    }

    default: {
      return state;
    }
  }
};
