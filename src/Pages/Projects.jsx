import React from 'react';
import { 
  Container, 
  Typography, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ProjectItem from '../Components/ProjectItem';
import projectsData from "../Utilities/projectsData.json";

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
  marginBottom: theme.spacing(8),
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(12),
}));

const Projects = () => {
  return (
    <StyledContainer maxWidth="lg">
      <TitleSection>
        <Typography 
          variant="h2" 
          sx={{ fontWeight: 'bold' }}
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Works
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' }}
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my latest projects and see how I bring ideas to life through code and creativity
        </Typography>
      </TitleSection>

      <ProjectsGrid>
      {projectsData.map((project) => (
        <ProjectItem
            key={project.id}
            {...project}
        />
        ))}
      </ProjectsGrid>
    </StyledContainer>
  );
};

export default Projects;