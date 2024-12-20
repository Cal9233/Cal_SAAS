import React from 'react';
import { 
  Container, 
  Typography, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TechIcon from '../Components/TechIcon';

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

const TechGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

const technologies = [
  {
    name: 'React js/native',
    icon: '/path-to-react-icon.svg',
    color: '#61DAFB'
  },
  {
    name: 'Angular',
    icon: '/path-to-angular-icon.svg',
    color: '#DD0031'
  },
  {
    name: 'Gatsby',
    icon: '/path-to-gatsby-icon.svg',
    color: '#663399'
  },
  {
    name: 'SCSS',
    icon: '/path-to-scss-icon.svg',
    color: '#CC6699'
  },
  {
    name: 'Javascript',
    icon: '/path-to-js-icon.svg',
    color: '#F7DF1E'
  },
  {
    name: 'Typescript',
    icon: '/path-to-ts-icon.svg',
    color: '#3178C6'
  },
  {
    name: 'Git',
    icon: '/path-to-git-icon.svg',
    color: '#F05032'
  },
  {
    name: 'Next.js',
    icon: '/path-to-nextjs-icon.svg',
    color: '#000000'
  }
];

const Services = () => {
  return (
    <StyledContainer maxWidth="lg">
      <TitleSection>
        <Typography 
          variant="h2" 
          component="h1"
          sx={{ fontWeight: 'bold' }}
        >
          Tools Of The Present And Future
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
        >
          Frontend technologies I prefer using to create modern, scalable, and maintainable applications
        </Typography>
      </TitleSection>

      <TechGrid>
        {technologies.map((tech, index) => (
          <TechIcon
            key={index}
            name={tech.name}
            icon={tech.icon}
            color={tech.color}
          />
        ))}
      </TechGrid>
    </StyledContainer>
  );
};

export default Services;