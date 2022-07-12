import { Box, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Temperatura() {
    const [temperature, setTemperature] = useState<number>(20)
    

    useEffect(()=>{
        if(temperature >= 30) {
            return alert('temperatura mto alta')
        }
        if(temperature <= 0) {
            return alert('temperatura muito baixa')
        }
    },[temperature])

    function handleClick(aumenta: boolean) {

        if (aumenta) {
            if(temperature >= 30) {
                return 
            }
            return setTemperature(temperature+1)
        } 
        
        if (!aumenta) {
            if(temperature <= 0) {
                return setTemperature(temperature)
            }
            setTemperature(temperature - 1 )
        }
    }

    return (
        <Box 
        display='flex' 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center'
        height='95vh'
        >

        <Paper sx={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around' ,width: "50vw", height: '50vh', padding:'40px' , borderRadius:'40px'}} elevation={24}>
            <Box
            display='flex' 
            flexDirection='column' 
            alignItems='center' 
            justifyContent='center'
            sx={{
                backgroundColor: temperature > 12 
                ? '#A71633' 
                : '#98DFEA', 
                borderRadius:'50%', 
                width:'250px', 
                height:'250px',
                transition: '0.2s'
                }}>
                <Typography variant="h1" color='white'>{temperature}º</Typography>
            </Box>
            <Box display='flex' gap={8}>
                <Box onClick={()=>{handleClick(false)}} display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={buttonStyle} >-1</Box>
                <Box onClick={()=>{handleClick(true)}} display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={buttonStyle}>+1</Box>
            </Box>
        </Paper>
        </Box>
    )
}

const buttonStyle = {backgroundColor: 'lightblue', borderRadius:'50%', padding:'16px', width:'48px', height:'48px', cursor: 'pointer', transition: '0.2s' ,'&:hover':{backgroundColor:'orange'}}