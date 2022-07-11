import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import InputTexto from "../../components/InputTexto";
import Tabela from "../../components/Tabela";
import DATA from '../../MockData/MOCK_DATA.json'

export default function Filtro() {


    return (
        <Box display='flex' flexDirection='column' alignItems='center'>

            <InputTexto/>

            <Tabela 
            pessoas={DATA} 
            />
{/* .filter((pessoa)=>pessoa.first_name.includes(termoDeBusca)) */}
            {/* {DATA.map((pessoa)=>{
                return (
                    <Typography variant='body1'>{pessoa.first_name}</Typography>
                )
            })} */}
        </Box>
    )
}