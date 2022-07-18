import { Action } from "./actions";

const initialState: object = {} 

export default function reducer(state:object = initialState, action:Action) {
    
    switch (action.type) {
        case 'getCharacters':
            return action.payload
        default:
            return state;
    }

}