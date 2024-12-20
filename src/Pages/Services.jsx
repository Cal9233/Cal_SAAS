import React from 'react';
import { 
  Container, 
  Typography, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TechIcon from '../Components/TechIcon';
import { 
  FaReact, 
  FaWordpress, 
  FaSass, 
  FaGitAlt,
  FaJs,
  FaAngular 
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGatsby } from "react-icons/si";

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
    name: 'React',
    icon: <FaReact />,
    color: '#61DAFB'  // React blue
  },
  {
    name: 'Wordpress',
    icon: <FaWordpress />,
    color: '#21759B'
  },
  {
    name: 'Gatsby',
    icon: <SiGatsby />,
    color: '#663399'  // Gatsby purple
  },
  {
    name: 'SCSS',
    icon: <FaSass />,
    color: '#CC6699'  // SASS pink
  },
  {
    name: 'Javascript',
    icon: <FaJs />,
    color: '#F7DF1E'  // JavaScript yellow
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    color: '#3178C6'  // TypeScript blue
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: '#F05032'  // Git orange
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: '#FFFFFF'  // White for dark theme
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