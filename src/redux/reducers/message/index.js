import { CLEAR_MESSAGE, SET_MESSAGE } from "../../actions/message/type"

const initialState = {}

const messageReducer = (state = initialState, action) =>  {
    const { type, payload } = action;
    switch (type) {
      case SET_MESSAGE:
        return {
          ...state,
          message: payload,
        };
      case CLEAR_MESSAGE:
        return {
          ...state,
          message: "" ,
        };
      default:
        return state;
    }
  };

export default messageReducer;
