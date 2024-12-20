import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const TechIcon = ({ name, icon, color }) => {
  return (
    <IconWrapper>
      <IconBox>
        <img src={icon} alt={name} />
      </IconBox>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          textAlign: 'center',
          fontWeight: 'medium',
        }}
      >
        {name}
      </Typography>
    </IconWrapper>
  );
};

export default TechIcon;