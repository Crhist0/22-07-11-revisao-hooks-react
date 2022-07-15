import { combineReducers } from "redux"
import PokemonReducer from "./pokemon/reducer"
import TermostatoReducer from "./termostato/reducer"
import ThemeReducer from "./theme/reducer"

const reducers = combineReducers({
    temperature: TermostatoReducer,
    theme: ThemeReducer,
    pokemon: PokemonReducer,
})

export default reducers
export type State = ReturnType<typeof reducers>