import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: '25px',
  padding: theme.spacing(1, 4),
  border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }
}));

const ImagePlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '400px',
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
        <ImagePlaceholder>
          <Typography variant="body1" color="text.secondary">
            Image Placeholder
          </Typography>
        </ImagePlaceholder>
      </MainLayout>
    </Container>
  );
};

export default Home;