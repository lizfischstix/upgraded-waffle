// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { Container, TextField, Button } from '@mui/material';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_7kftnib', 'template_z0ut6jj', form.current, {
//         publicKey: 'ClOXwH48Un7Pt5xfU',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <Container maxWidth="sm">
//       <form ref={form} onSubmit={sendEmail}>
//         <TextField
//           label="Name"
//           type="text"
//           name="user_name"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Email"
//           type="email"
//           name="user_email"
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <TextField
//           label="Message"
//           name="message"
//           multiline
//           rows={4}
//           fullWidth
//           margin="normal"
//           variant="outlined"
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Send
//         </Button>
//       </form>
//     </Container>
//   );
// };

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7kftnib', 'template_z0ut6jj', form.current, {
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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};