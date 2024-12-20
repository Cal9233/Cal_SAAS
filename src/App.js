import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './Pages/Home';
import Header from './Components/Header';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contact from "./Pages/Contact";
import ContactForm from "./Pages/ContactForm";
import AnimatedSection from './Components/AnimatedSection';
import Footer from './Components/Footer';
import theme from './theme';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Box 
        component="main" 
        className="App"
        sx={{ bgcolor: '#28282B' }}
      >
        <AnimatedSection id="home" direction="up">
          <Home />
        </AnimatedSection>
        
        <AnimatedSection id="about" direction="right" delay={0.2}>
          <About />
        </AnimatedSection>
        
        <AnimatedSection id="services" direction="left" delay={0.2}>
          <Services />
        </AnimatedSection>
        
        <AnimatedSection id="projects" direction="right" delay={0.2}>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection id="contact" direction="up" delay={0.2}>
          <Contact />
        </AnimatedSection>
      </Box>
    </>
  );
};

// Update global styles
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #28282B;
    color: #ffffff;
  }
  section {
    scroll-margin-top: 64px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
document.head.appendChild(style);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route 
            path="/contact-form" 
            element={
              <>
                <Header />
                <ContactForm />
              </>
            } 
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;