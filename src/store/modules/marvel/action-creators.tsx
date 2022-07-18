import { Dispatch } from "redux"
import { Action } from "./actions"
import getCharactersApi from '../../../services/marvel/api'

export const getCharacters = ()=>{
    return (dispatch:Dispatch<Action>)=>{
        getCharactersApi().then((response:any)=>{
            dispatch({
                type: "getCharacters",
                payload: response
            })
        })
    }
}