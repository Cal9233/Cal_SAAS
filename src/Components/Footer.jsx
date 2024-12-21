import React from 'react';
import { 
  Box, 
  Container, 
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Copyright
} from '@mui/icons-material';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1c',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 0, 4),
  marginTop: 'auto',
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Copyright sx={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }} />
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            {currentYear} Calvin Malagon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;