import { legacy_createStore, combineReducers } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

export const store = legacy_createStore(reducers)