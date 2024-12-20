import React from 'react';
import { 
  Container, 
  Typography, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillItem from '../Components/SkillItem';
import data from "../Utilities/skillData.json";

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  padding: theme.spacing(8, 2),
}));

const TitleSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const About = () => {
  const skillGroups = Object.values(data);

  return (
    <StyledContainer maxWidth="lg">
      <TitleSection>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ fontWeight: 'bold' }}
        >
          Your Success Is Our Priority
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
        >
          With a proven track record of delivering exceptional solutions, 
          we're committed to turning your vision into reality while exceeding 
          your expectations every step of the way.
        </Typography>
      </TitleSection>

      <SkillsGrid>
        {skillGroups.map((group, index) => (
          <SkillItem
            key={index}
            title={group.title}
            summary={group.summary}
            icon={group.icon}
          />
        ))}
      </SkillsGrid>
    </StyledContainer>
  );
};

export default About;