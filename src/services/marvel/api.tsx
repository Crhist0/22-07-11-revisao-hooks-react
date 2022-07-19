import axios from 'axios';
import createAuth from './configs'

export default async function getCharacters(value?:string, page?: number) {
    try {
        const Limit = 50
        const Page = page ? page : 1
        const Value = value ? value : undefined
        const Offset = (Page - 1) * Limit
        
        const axiosResponse = await axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
            ...createAuth(),
            nameStartsWith: Value,
            limit: Limit,
            offset: Offset,
        }
        })
        return axiosResponse.data
    } catch (error) {
     console.log(error);
    }
}