import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import getPokemon from "../../services/api";
import { pokemonActionCreators, State } from "../../store";

type Pokemon = {
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites:{
        front_default: string,
        back_default: string
    },
    types: Array<{
        slot:number, 
        type: {
            name: string, url: string
        }
    }>,
    stats: {
        base_stat:number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[]
}

export default function Pokemon() {
    const pokemon:Pokemon = useSelector(({ pokemon }:State ) => pokemon )
   const [valor, setValor] = useState<number | string>(pokemon.id)
    // const pokemon2 = useSelector(( state:State ) => state.pokemon )

    const dispatch = useDispatch()

    const {getPokemon} = bindActionCreators(pokemonActionCreators, dispatch)

    function handleClick() {
      getPokemon(valor)
    }

//    useEffect(()=>{
//     console.log(pokemon);
//    },[pokemon])
    
    return (
        <>
            <Box height='100vh' display='flex' flexDirection='column'  justifyContent='center' alignItems='center' >

                <Paper sx={{
                    width:'450px', 
                    padding: '24px', 
                    borderRadius: '24px', 
                    display: 'flex', 
                    flexDirection:'column', 
                    gap: '8px'}}>
                    <Typography align='center' variant='h2'>Pokedex</Typography>
                    <TextField 
                    value={valor} 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValor(e.target.value)}} 
                    fullWidth  />
                    <Button onClick={handleClick}  variant='contained' fullWidth >BUSCAR</Button>
                    <Box display='flex' flexDirection='column'  justifyContent='center' alignItems='center'>
                        <img src={pokemon.sprites?.front_default} alt={pokemon.sprites?.front_default} />
                        <Grid container gap={4} display='flex' justifyContent='space-between'>
                            <Grid item>
                                <Typography variant='h6' align="center">Pokemon</Typography>
                                <Typography variant="body1">nome: {pokemon.name}</Typography>
                                <Typography variant="body1">altura: {pokemon.height *10} cm</Typography>
                                <Typography variant="body1">peso: {pokemon.weight/10} kg</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6' align="center">Tipos</Typography>
                                {pokemon.types?.map((type)=>{
                                    return (
                                        <>
                                            <Typography variant="body1">
                                                {type.slot === 1 ? 'tipo primário' : "tipo secundário"}: {type.type.name}
                                            </Typography>
                                        </>
                                    )
                                })}
                                
                            </Grid>
                            <Grid item>
                                <Typography variant='h6' align="center">Stats</Typography>
                                {pokemon.stats?.map((stat)=>{
                                    return (
                                    <Typography variant="body1">
                                        {stat.stat.name}: {stat.base_stat}
                                    </Typography>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

            </Box>
        </>
    )
}