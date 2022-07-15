import axios, { AxiosResponse } from "axios"


const baseURL = 'https://pokeapi.co/api/v2/'

export default async function getPokemon(valor:number | string) {
    try {
        // const response: AxiosResponse = await axios.get(baseURL + `pokemon/${valor}`)
        const response: AxiosResponse = await axios({
            url: `pokemon/${valor}`,
            method: 'get',
            baseURL,
            timeout: 1000,
            responseType: 'json', 
            responseEncoding: 'utf8',
        })
        
        return response.data
    } catch (error) {
        alert(`
        - - - - ERRO - - - -
        veja os detalhes no log
        `)
        console.log(error);
    }
}