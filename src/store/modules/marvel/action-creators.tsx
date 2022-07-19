import { Dispatch } from "redux"
import { Action } from "./actions"
import getCharactersApi from '../../../services/marvel/api'

export const getCharacters = (value?: string, page?: number)=>{
    return (dispatch:Dispatch<Action>)=>{
        getCharactersApi(value, page).then((response:any)=>{
            dispatch({
                type: "getCharacters",
                payload: response
            })
        })
    }
}