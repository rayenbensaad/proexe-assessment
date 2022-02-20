import {
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  LIST_USER_FAIL,
  LIST_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
} from "../../actions/users/type";

const initialState = {
  users: [],
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_USER_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    case LIST_USER_FAIL:
      return {
        ...state,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== parseInt(payload)),
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === parseInt(payload.userID)) {
            return {
              ...user,
              ...payload.data,
            };
          } else {
            return user;
          }
        }),
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
