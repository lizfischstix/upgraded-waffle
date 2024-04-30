// import React from "react"
// import { Typography, Grid, Container, Box, Paper } from '@mui/material'
// import Liz from '../assets/Images/Avatar.png'
// export default function About() {

//     return (
//         <>
//             <Grid container justifyContent="center">
//                 <Box xs={12} >
//                     <Box item xs={4}
//                         sx={{
//                             display: 'flex',
//                             flexDirection: { xs: 'column-reverse', sm: 'row' }, // Adjust for different screen sizes
//                             alignItems: { xs: 'center', sm: 'space-Around' }, // Center items for xs, align to the start for sm
//                             marginBottom: 2,
//                         }}
//                     >
//                         {/* Image */}
//                         <img
//                             src={Liz}
//                             alt="Avatar of Liz"
//                             style={{
//                                 width: '100%',
//                                 maxWidth: 200,
//                                 height: 'auto',
//                                 objectFit: 'cover',
//                             }}

//                         />
//                     </Box>

//                     {/* Text Box */}
//                     <Box xs={4}
//                         sx={{
//                             display: 'flex',
//                             flexDirection: { xs: 'column-reverse', sm: 'row' }, // Adjust for different screen sizes
//                             alignItems: { xs: 'center', sm: 'space-Around' }, // Center items for xs, align to the start for sm
//                             marginBottom: 2,
//                         }}
//                     >
//                         <Paper elevation={3} style={{ maxHeight: '100vh', overflow: 'auto', padding: 3 }}>
//                             <Typography fontSize="1rem" style={{ fontFamily: 'Andika' }}>bio about all of my awsome achevements</Typography>
//                         </Paper>
//                     </Box>
//                 </Box>
//             </Grid>
//         </>
//     )
// }

import React from "react";
import { Typography, Grid, Container, Box, Paper } from '@mui/material';
import Liz from '../assets/Images/Avatar.png';

export default function About() {
    return (
        <Container>
            <Grid container justifyContent="center">
                {/* Image */}
                <Grid item xs={12} sm={6} md={4} sx={{ order: { xs: 2, sm: 1 } }}>
                    <img
                        src={Liz}
                        alt="Avatar of Liz"
                        style={{
                            width: '100%',
                            maxWidth: 200,
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                {/* Text Box */}
                <Grid item xs={12} sm={6} md={8} sx={{ order: { xs: 1, sm: 2 } }}>
                    <Paper elevation={3} style={{ maxHeight: '100vh', overflow: 'auto', padding: 3 }}>
                        <Typography fontSize="1rem" style={{ fontFamily: 'Andika' }}>bio about all of my awesome achievements</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
