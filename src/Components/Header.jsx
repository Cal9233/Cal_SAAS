import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', id: 'home', icon: <HomeIcon /> },
    { label: 'About', id: 'about', icon: <PersonIcon /> },
    { label: 'Services', id: 'services', icon: <BuildIcon /> },
    { label: 'Projects', id: 'projects', icon: <WorkIcon /> },
    { label: 'Contact', id: 'contact', icon: <MailIcon /> }
  ];

  // Scroll handling
  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const sections = navItems.map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(section.id);
            }
          }
        });
      }, 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const headerHeight = 64;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = async (id) => {
    if (location.pathname !== '/') {
      await navigate('/');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setDrawerOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#28282B',
        height: '100%',
        color: 'white'
      }}
      role="presentation"
    >
      <List sx={{ pt: 8 }}>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.label}
            onClick={() => handleNavigation(item.id)}
            sx={{
              py: 2,
              opacity: activeSection === item.id ? 1 : 0.7,
              '&:hover': {
                opacity: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <ListItemIcon 
              sx={{ 
                color: 'white',
                opacity: activeSection === item.id ? 1 : 0.7,
                minWidth: 40  // Make icons closer to text
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                sx: { 
                  fontWeight: activeSection === item.id ? 600 : 400,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem',
                  letterSpacing: '0.02em'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // font change
  // generate AI picture
  // add extra color layer (icon blue but lighter)
  
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(40, 40, 43, 0.8)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side - Logo/Icon */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            cursor: 'pointer'
          }}
          onClick={() => handleNavigation('home')}
        >
          <CodeIcon sx={{ color: 'white', fontSize: 28 }} />
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'white',
              fontWeight: 600,
              display: { xs: 'none', sm: 'block' },
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.02em'
            }}
          >
            DevName
          </Typography>
        </Box>

        {/* Right side - Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={() => setDrawerOpen(true)}
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Right-side Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: '#28282B',
              boxShadow: 'none'
            }
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;