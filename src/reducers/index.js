import counterReducer from  './counter.js'
import loggedReducer from './isLogged.js'
import {combineReducers} from "redux"

const allReducers = combineReducers({
  counter : counterReducer,
  islogged : loggedReducer
})

export default allReducers;
