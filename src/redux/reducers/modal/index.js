import { CLOSE_MODAL, OPEN_MODAL } from "../../actions/modal/type";

const initialState = {
  isOpen: false
}

const modalReducer = (state = initialState, action) =>  {
    const { type, payload } = action;
    switch (type) {
      case OPEN_MODAL:
        return {
          ...state,
          isOpen: payload,
        };
      case CLOSE_MODAL:
        return {
          ...state,
          isOpen: payload,
        };
      default:
        return state;
    }
  };

export default modalReducer;
