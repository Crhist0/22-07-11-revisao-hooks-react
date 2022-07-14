import { Action } from "./actions";

const initialState: string = 'light' 

export default function reducer(state:string = initialState, action:Action) {
    
    switch (action.type) {
        case 'change':
            return action.payload
        default:
            return state;
    }

}