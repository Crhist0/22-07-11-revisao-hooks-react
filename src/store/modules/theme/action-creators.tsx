import { Dispatch } from "redux"
import { Action } from "./actions"


export const mudarTheme = (valor: string)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: "change",
            payload: valor
        })
    }
}