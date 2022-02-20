// ** UseJWT import to get config
import UserService from "../../../services/users"
import { SET_MESSAGE } from "../message/type";
import { CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, LIST_USER_FAIL, LIST_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./type";

export const listUsers = () => (dispatch) => {
  return UserService.list().then(
    (response) => {
      dispatch({
        type: LIST_USER_SUCCESS,
        payload: response
      })

      dispatch({
        type: SET_MESSAGE,
        payload: response.message
      })

      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: LIST_USER_FAIL
      })

      dispatch({
        type: SET_MESSAGE,
        payload: message
      })

      return Promise.reject()
    }
  )
}


export const createUser = (data) => (dispatch) => {
  if(data){
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data
    })
    dispatch({
      type: SET_MESSAGE,
      payload: ''
    })
  }
}

export const removeUser = (id) => (dispatch) => {
  if(id){
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: id
    })

    dispatch({
      type: SET_MESSAGE,
      payload: ''
    })
  }
}

export const updateUser = (data, userID) => (dispatch) => {
  if(data){
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: {data, userID}
    })
    dispatch({
      type: SET_MESSAGE,
      payload: ''
    })
  }
}