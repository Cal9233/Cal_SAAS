import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper,
  Stack,
  Snackbar,
  Alert,
  styled
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import emailjs from "emailjs-com";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const Column = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: '300px',
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Form Data:", formData);
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
  
      console.log("EmailJS Result:", result);
      if (result.text === 'OK') {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    }
  };
  

// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   try {
//     console.log({formData})
//     const result = await emailjs.send(
//       process.env.REACT_APP_EMAILJS_SERVICE_ID,
//       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//       formData,
//       process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//     );
//     console.log({result})
//     if (result.text === 'OK') {
//       setSnackbar({
//         open: true,
//         message: 'Message sent successfully!',
//         severity: 'success'
//       });
//       setFormData({ name: '', email: '', phone: '', message: '' });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     setSnackbar({
//       open: true,
//       message: 'Failed to send message. Please try again.',
//       severity: 'error'
//     });
//   }
// };

console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);


  return (
    <StyledContainer maxWidth="lg">
      <FlexBox>
        {/* Left Column */}
        <Column>
          <Stack spacing={2}>
            <Typography variant="h3" component="h1">
              Let's Connect
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fill out the form and I'll get back to you as soon as possible.
            </Typography>

            <Paper
              elevation={2}
              sx={{
                p: 4,
                mt: 4,
                borderRadius: 4,
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{textShadow: '1px 2px black'}}>
                Contact Information
              </Typography>

              <Stack spacing={2} mt={2} alignItems="center">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Email color="primary" sx={{ fontSize: 28 }} />
                  <Typography variant="body1" sx={{textShadow: '1px 2px black'}}>calvin.m9233@gmail.com</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Phone color="primary" sx={{ fontSize: 28 }} />
                  <Typography variant="body1" sx={{textShadow: '1px 2px black'}}>+1 (305) 793-5024</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn color="primary" sx={{ fontSize: 28 }} />
                  <Typography variant="body1" sx={{textShadow: '1px 2px black'}}>Redwood City, California</Typography>
                </Stack>
              </Stack>
            </Paper>

          </Stack>
        </Column>

        {/* Right Column */}
        <Column>
          <Paper elevation={3} sx={{ p: 4, mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                 <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ 
                    mt: 2,
                    bgcolor: "#0092ff",
                    '&:hover': {
                      bgcolor: '#1e293b'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Paper>
        </Column>
      </FlexBox>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default ContactForm;