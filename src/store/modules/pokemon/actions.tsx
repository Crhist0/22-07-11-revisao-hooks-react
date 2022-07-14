

interface IGetPokemon {
    type: 'getPokemon',
    payload: string | number
}

export type Action =  IGetPokemon