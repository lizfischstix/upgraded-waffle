import * as React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RoofingIcon from '@mui/icons-material/Roofing';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import SendIcon from '@mui/icons-material/Send';


export default function Nav() {
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
    
      <BottomNavigationAction
        label="Liz Fischenich"
        value="home"
        icon={<RoofingIcon />}
       />
      
      
      <BottomNavigationAction
        label="About"
        value="about"
        icon={<FingerprintIcon />}
      />
      
 
      <BottomNavigationAction
        label="Portfolio"
        value="portfolio"
        icon={<FolderSpecialIcon />}
      />
    
        <BottomNavigationAction label="Contact Liz" value="contact" icon={<SendIcon />} />
    < /BottomNavigation >
  );
}