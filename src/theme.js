import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
    },
    button: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 500,
      textTransform: 'none',
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#28282B',
      paper: '#28282B'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)'
    },
    primary: {
      main: '#ffffff'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#28282B',
          color: '#ffffff'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  }
});

export default theme;