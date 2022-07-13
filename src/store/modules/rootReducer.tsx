import { combineReducers } from "redux"
import TermostatoReducer from "./termostato/reducer"

const reducers = combineReducers({
    temperature: TermostatoReducer,
})

export default reducers
export type State = ReturnType<typeof reducers>