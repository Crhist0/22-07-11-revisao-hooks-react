import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./modules/rootReducer"
import persistReducers from './persistReducers'
import { persistStore } from "redux-persist"

const store =createStore(
    persistReducers(reducers),
    applyMiddleware(thunk)
 )

export const persistor = persistStore(store)
export default store