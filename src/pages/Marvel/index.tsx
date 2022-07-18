import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { marvelActionCreators } from "../../store";

export default function Marvel() {
   const [valor, setValor] = useState<string>('')

    const dispatch = useDispatch()

    const {getCharacters} = bindActionCreators(marvelActionCreators, dispatch)

    function handleClick() {
        getCharacters()
    }
    
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
                    <Typography align='center' variant='h2'>Marvel Heroes</Typography>
                    <TextField 
                    value={valor} 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setValor(e.target.value)}} 
                    fullWidth  />
                    <Button onClick={handleClick}  variant='contained' fullWidth >Search</Button>
                    <Box display='flex' flexDirection='column'  justifyContent='center' alignItems='center'>
                        {/* <img src={pokemon.sprites?.front_default} alt={pokemon.sprites?.front_default} /> */}
                    </Box>
                </Paper>

            </Box>
        </>
    )
}