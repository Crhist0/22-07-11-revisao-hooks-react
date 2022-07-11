import { TextField } from "@mui/material";
import { useState } from "react";

export default function InputTexto() {
    const [termoDeBusca, setTermoDeBusca] = useState<string>('')
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>): void{
        setTermoDeBusca(e.target.value)
    }
    
    return (
        <>
            <TextField 
            label="Pesquisar" 
            variant="outlined" 
            sx={{marginY: '16px'}} 
            value={termoDeBusca}
            onChange={handleChange}
            />
        </>
    )
}