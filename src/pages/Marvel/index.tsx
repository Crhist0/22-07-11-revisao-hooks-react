import { Box, Button, Grid, Pagination, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { marvelActionCreators, State } from "../../store";

type marvelReduxType = {
    attributionHTML: string;
    attributionText: string;
    code: number;
    copyright: string;
    data: object;
    etag:  string;
    status: string;
}

export default function Marvel() {
   const [valor, setValor] = useState<string>('')
   const [page, setPage] = useState<number>(1)

   const marvelRedux: marvelReduxType = useSelector(( { marvel }:State )=>marvel)

    const dispatch = useDispatch()

    const {getCharacters} = bindActionCreators(marvelActionCreators, dispatch)

    function handleClick() {
        getCharacters(valor, page)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };
    
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
                    <Pagination sx={{
                        '& .MuiPagination-ul':{justifyContent: 'space-between'}}} count={10} page={page} onChange={handleChange} />
                    <Box sx={{display: 'flex', justifyContent: 'center'}} dangerouslySetInnerHTML={{__html: marvelRedux.attributionHTML}} />
                </Paper>

            </Box>
        </>
    )
}