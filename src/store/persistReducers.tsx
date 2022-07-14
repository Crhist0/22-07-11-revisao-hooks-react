import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persisted = (reducers:any)=>{
    const persistedReducer = persistReducer(
        {
        key: '22-07-13-aula-react-redux',
        storage,
        whitelist: ['temperature', 'theme']
        },
        reducers
    )
    return persistedReducer
}


export default persisted