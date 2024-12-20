// Components/SkillItem.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { BuildTwoTone, CodeTwoTone, ScreenshotMonitorTwoTone } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  backgroundColor: '#28282B',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#0088FF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem auto',
  '& svg': {
    fontSize: '40px',
    color: 'white'
  }
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  textAlign: 'center',
  padding: theme.spacing(2, 3, 3),
}));

// Icon mapping
const iconMap = {
  'Continuous support': BuildTwoTone,
  'Back-end development': CodeTwoTone,
  'Frontend design/dev': ScreenshotMonitorTwoTone,
};

const SkillItem = ({ icon, title, summary }) => {
  const IconComponent = iconMap[title] || BuildTwoTone;

  return (
    <StyledCard elevation={0}>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      <StyledCardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h3"
          sx={{ 
            fontWeight: 'medium',
            color: 'white'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          {summary}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default SkillItem;