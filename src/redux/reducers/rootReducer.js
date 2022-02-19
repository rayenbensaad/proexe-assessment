// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import user from './users'
import message from "./message"
import modal from "./modal"


const rootReducer = combineReducers({
  user,
  message,
  modal,

})

export default rootReducer
