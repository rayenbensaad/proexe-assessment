// ** UseJWT import to get config
import UserService from "../../../services/users"
import { SET_MESSAGE } from "../message/type";
import { CREATE_USER_FAIL, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS, LIST_USER_FAIL, LIST_USER_SUCCESS, UPDATE_USER_SUCCESS } from "./type";

export const listUsers = () => (dispatch) => {
  return UserService.list().then(
    (response) => {
      console.log(response, 'ree');
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
    console.log(id, 'delete');
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: id
    })

    dispatch({
      type: SET_MESSAGE,
      payload: 'User deleted succeffuly'
    })
  }
}

export const updateUser = (data, userID) => (dispatch) => {
  console.log(data, userID);
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