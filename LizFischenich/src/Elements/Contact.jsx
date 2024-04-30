import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Container, TextField, Button, TextareaAutosize, FormControl, InputLabel } from '@mui/material';


 const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7kftnib', 'contact_form', form.current, {
        publicKey: 'ClOXwH48Un7Pt5xfU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
        <Container maxWidth='sm' >
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="user_name">Name</InputLabel>
          <TextField id="user_name" name="user_name" variant="outlined" />
        </FormControl>
        <FormControl fullWidth  sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="user_email">Email</InputLabel>
          <TextField id="user_email" name="user_email" type="email" variant="outlined" />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel htmlFor="message">Message</InputLabel>
          <TextareaAutosize id="message" name="message" minRows={3} maxRows={6} />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">Send</Button>
        </Container>
      </form>
      
  );
};
export default ContactUs;