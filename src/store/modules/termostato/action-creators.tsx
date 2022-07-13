import { Dispatch } from "redux"
import { Action } from "./actions"


export const aumentarTemperatura = (valor:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: "aumentar",
            payload: valor
        })
    }
}

export const diminuirTemperatura = (valor:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: "diminuir",
            payload: valor
        })
    }
}