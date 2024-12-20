// Components/TechIcon.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const IconWrapper = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  cursor: 'pointer',
}));

const IconBox = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '& > svg': {
    width: '60px',
    height: '60px',
    fontSize: '60px',
    color: props => props.iconcolor,
    transition: 'color 0.3s ease',
    filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.2))',
  }
}));

const TechIcon = ({ name, icon, color }) => {
  const IconComponent = React.cloneElement(icon, {
    style: { color: color }
  });

  return (
    <IconWrapper
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <IconBox iconcolor={color}>
        {IconComponent}
      </IconBox>
      <Typography
        variant="body1"
        sx={{
          color: 'text.primary',
          textAlign: 'center',
          fontWeight: 500,
          opacity: 0.9,
        }}
      >
        {name}
      </Typography>
    </IconWrapper>
  );
};

export default TechIcon;