import { Dispatch } from "redux"
import { Action } from "./actions"
import getPokemonApi from '../../../services/api'

export const getPokemon = (valor: string | number)=>{
    return (dispatch:Dispatch<Action>)=>{
        
        getPokemonApi(valor).then((response:any)=>{

            dispatch({
                type: "getPokemon",
                payload: response
            })
            
        })
        
        
    }
}