import axios from 'axios';
import createAuth from './configs'

export default async function getCharacters() {
    try {
        return axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: createAuth()
        })
    } catch (error) {
     console.log(error);
    }
}