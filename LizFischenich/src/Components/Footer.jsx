import React from 'react';
import { Box, Container, Typography} from '@mui/material/';


const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Box
    
    >
      <Container>
      <Typography align='center' fontSize='1rem' style={{fontFamily: 'Andika'}}>
        &copy; LizFischenich.com {currentYear}
      </Typography>
      </Container>
      </Box>
    </>
  );
};

export default Footer;
