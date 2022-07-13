import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducers from "./modules/rootReducer"


const store =createStore(
    reducers,
    applyMiddleware(thunk)
    )


export default store