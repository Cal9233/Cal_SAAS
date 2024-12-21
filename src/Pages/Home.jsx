import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import me from '../Assets/me.jpg';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '25px',
  padding: theme.spacing(1, 4),
  border: `1px solid ${"#0092ff"}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: "#0092ff",
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '400px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center -40px',
    transition: 'transform 0.3s ease-in-out',
  }
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  height: '100%',
  justifyContent: 'center'
}));

const MainLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 1fr'
  }
}));

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <MainLayout>
        {/* Left Column - Content */}
        <ContentContainer>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to My Portfolio
          </Typography>
          
          <Typography variant="h5" color="text.secondary" gutterBottom>
            I'm a passionate developer with expertise in building modern web applications.
            I love creating seamless user experiences and solving complex problems.
          </Typography>
          
          <Box>
            <StyledButton variant="outlined" color="primary">
              Resume
            </StyledButton>
            <StyledButton variant="outlined" color="primary">
              Projects
            </StyledButton>
          </Box>
        </ContentContainer>

        {/* Right Column - Image */}
        <ImageContainer>
          <img 
            src={me} 
            alt="Profile" 
            loading="lazy"
          />
        </ImageContainer>
      </MainLayout>
    </Container>
  );
};

export default Home;