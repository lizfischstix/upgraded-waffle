import { Box, Container, Grid, Paper } from "@mui/material"
import Kali from "../assets/Images/Kali.png"
export default function Home(){
    return (
        <>
        <Box>
            <img
            src={Kali}
            style={{
                width: '100%',
                maxWidth: '50rem',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
        </Box>
        </>
    )
}