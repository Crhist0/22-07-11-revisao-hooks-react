import { Action } from "./actions";

const initialState: object = {} 

export default function reducer(state:object = initialState, action:Action) {
    
    switch (action.type) {
        case 'getPokemon':
            return action.payload
        default:
            return state;
    }

}