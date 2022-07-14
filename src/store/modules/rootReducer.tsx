import { combineReducers } from "redux"
import TermostatoReducer from "./termostato/reducer"
import ThemeReducer from "./theme/reducer"

const reducers = combineReducers({
    temperature: TermostatoReducer,
    theme: ThemeReducer
})

export default reducers
export type State = ReturnType<typeof reducers>