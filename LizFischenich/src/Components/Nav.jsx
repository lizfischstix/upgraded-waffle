import * as React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RoofingIcon from '@mui/icons-material/Roofing';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import SendIcon from '@mui/icons-material/Send';
import { Box, Container, Typography } from '@mui/material';

export default function Nav() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center">
      <BottomNavigation sx={{ width: 250 }} value={value} onChange={handleChange}>
        <Link to='/'>
          <BottomNavigationAction
            label="Liz Fischenich"
            value="home"
            icon={<RoofingIcon sx={{fontSize: 50}} />}
          />
        </Link>
        <Link to='/About'>
          <BottomNavigationAction
            label="About"
            value="about"
            icon={<FingerprintIcon sx={{fontSize: 50}} />}
          />
        </Link>
        <Link to='/Work'>
          <BottomNavigationAction
            label="Portfolio"
            value="portfolio"
            icon={<FolderSpecialIcon sx={{fontSize: 50}} />}
          />
        </Link>
        <Link to='/Contact'>
          <BottomNavigationAction label="Contact Liz" value="contact" icon={<SendIcon sx={{fontSize: 50}} />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
