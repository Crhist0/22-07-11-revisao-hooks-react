import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./modules/rootReducer"
import persistReducers from './persistReducers'
import { persistStore } from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension"

const store =createStore(
    persistReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk))
 )

export const persistor = persistStore(store)
export default store