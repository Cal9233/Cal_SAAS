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
  FaNodeJs,
  FaPython
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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
    color: '#61DAFB'
  },
  {
    name: 'Wordpress',
    icon: <FaWordpress />,
    color: '#21759B'
  },
  {
    name: 'Node JS',
    icon: <FaNodeJs />,
    color: '#6CC24A'
  },
  {
    name: 'SCSS',
    icon: <FaSass />,
    color: '#CC6699'
  },
  {
    name: 'Javascript',
    icon: <FaJs />,
    color: '#F7DF1E'
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    color: '#3178C6'
  },
  {
    name: 'Git',
    icon: <FaGitAlt />,
    color: '#F05032'
  },
  {
    name: 'Python',
    icon: <FaPython />,
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
          Languages and technologies I prefer using to create modern, scalable, and maintainable applications and software
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