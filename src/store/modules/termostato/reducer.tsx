import { Action } from "./actions";

const initialState: number = 18 

export default function reducer(state:number = initialState, action:Action) {
    
    switch (action.type) {
        case "diminuir":
            return state - action.payload
        case 'aumentar':
            return state + action.payload
        default:
            return state;
    }

}