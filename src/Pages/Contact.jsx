import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: theme.spacing(8, 2),
}));

const Contact = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h2" 
          component="h1"
          align="center"
          sx={{ 
            fontWeight: 'bold',
            mb: 2
          }}
        >
          What's Holding You Back?
        </Typography>
        <Typography 
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Let's turn your ideas into reality
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/contact-form')}
          sx={{
            borderRadius: '28px',
            padding: '12px 48px',
            fontSize: '1.2rem',
            textTransform: 'none',
            color: "#28282B"
          }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </StyledContainer>
  );
};

export default Contact;