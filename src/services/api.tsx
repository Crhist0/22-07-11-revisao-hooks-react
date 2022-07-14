import axios, { AxiosResponse } from "axios"


const baseUrl = 'https://pokeapi.co/api/v2/'

export default async function getPokemon(valor:number | string) {
    try {
        const response: AxiosResponse = await axios.get(baseUrl + `pokemon/${valor}`)
        return response.data
    } catch (error) {
        alert(`
        - - - - ERRO - - - -
        veja os detalhes no log
        `)
        console.log(error);
    }
}