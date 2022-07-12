import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import InputTexto from "../../components/InputTexto";
import Tabela from "../../components/Tabela";
import DATA from '../../MockData/MOCK_DATA.json'

export default function Filtro() {
    const [termoDeBuscaNome, setTermoDeBuscaNome] = useState<string>('')
    const [termoDeBuscaSobrenome, setTermoDeBuscaSobrenome] = useState<string>('')
    
    function handleChangeNome(e:React.ChangeEvent<HTMLInputElement>): void{
        setTermoDeBuscaNome(e.target.value)
    }

    function handleChangeSobrenome(e:React.ChangeEvent<HTMLInputElement>): void{
        setTermoDeBuscaSobrenome(e.target.value)
    }



    return (
        <Box display='flex' flexDirection='column' alignItems='center'>

            <Box display='flex' flexDirection='row' gap={4}>
                <InputTexto title='Pesquisar por nome' handleChange={handleChangeNome} termoDeBusca={termoDeBuscaNome} />
                <InputTexto title='Pesquisar por sobrenome' handleChange={handleChangeSobrenome} termoDeBusca={termoDeBuscaSobrenome} />
            </Box>

            <Tabela 
            pessoas={
                DATA
                .filter((pessoa)=>pessoa.first_name.toLowerCase().includes(termoDeBuscaNome.toLowerCase()))
                .filter((pessoa)=>pessoa.last_name.toLowerCase().includes(termoDeBuscaSobrenome.toLowerCase()))} 
            />

            {/* {DATA.map((pessoa)=>{
                return (
                    <Typography variant='body1'>{pessoa.first_name}</Typography>
                )
            })} */}
        </Box>
    )
}