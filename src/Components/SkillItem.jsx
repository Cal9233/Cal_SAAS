import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 140,
  backgroundColor: theme.palette.grey[200],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const SkillItem = ({ icon, title, summary }) => {
  return (
    <StyledCard elevation={2}>
      <StyledCardMedia
        component="div"
        title={title}
      >
        {icon && (
          <img 
            src={icon} 
            alt={title}
            style={{ width: '64px', height: '64px' }}
          />
        )}
      </StyledCardMedia>
      <StyledCardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h3"
          sx={{ fontWeight: 'medium' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {summary}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default SkillItem;