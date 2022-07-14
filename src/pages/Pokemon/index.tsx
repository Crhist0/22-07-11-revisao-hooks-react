import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import getPokemon from "../../services/api";

export default function Pokemon() {
   
    
    return (
        <>
            <Box height='100vh' display='flex' flexDirection='column'  justifyContent='center' alignItems='center' >

                <Paper sx={{width:'250px', padding: '24px', borderRadius: '24px', display: 'flex', flexDirection:'column', gap: '8px'}}>
                    <Typography align='center' variant='h2'>Pokedex</Typography>
                    <TextField fullWidth  />
                    <Button  variant='contained' fullWidth >BUSCAR</Button>
                    <Box display='flex' flexDirection='column'  justifyContent='center' alignItems='center'>
                        <img src='' alt='' />
                    </Box>
                </Paper>

            </Box>
        </>
    )
}