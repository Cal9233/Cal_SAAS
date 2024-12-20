// Components/Footer.jsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton, 
  Link,
  Grid,
  Divider 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  GitHub, 
  LinkedIn, 
  Twitter, 
  Email,
  Copyright
} from '@mui/icons-material';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1c',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 0, 4),
  marginTop: 'auto',
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: 'white',
    transform: 'translateY(-3px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'white',
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Email />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const footerLinks = [
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Your Name
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Building modern web solutions with cutting-edge technologies.
              Let's create something amazing together.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.map((link) => (
                <FooterLink key={link.text} href={link.href}>
                  {link.text}
                </FooterLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <SocialButton
                  key={social.label}
                  aria-label={social.label}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </SocialButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        {/* Copyright */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Copyright sx={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }} />
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            {currentYear} Calvin Malagon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;