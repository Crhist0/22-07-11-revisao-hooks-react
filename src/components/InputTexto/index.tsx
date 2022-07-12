import { TextField } from "@mui/material";
import { ChangeEventHandler, useState } from "react";

type InputTextoProps ={
    termoDeBusca: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    title: string
}

export default function InputTexto({title, handleChange, termoDeBusca}:InputTextoProps) {
    
    return (
        <>
            <TextField 
            label={title} 
            variant="outlined" 
            sx={{marginY: '16px'}} 
            value={termoDeBusca}
            onChange={handleChange}
            />
        </>
    )
}