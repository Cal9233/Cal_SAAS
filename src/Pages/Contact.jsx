import React from 'react';
import { 
  Typography,
} from '@mui/material';
//import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// const StyledContainer = styled(Container)(({ theme }) => ({
//   minHeight: '90vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   gap: theme.spacing(4),
//   padding: theme.spacing(8, 2),
//   maxWidth: '100%'
// }));

// const BlueBackground = styled(motion.div)(({ theme }) => ({
//   backgroundColor: '#0092ff',
//   maxWidth: '100%',
//   // height: '300px', // Adjust the height
//   display: 'flex',
//   // justifyContent: 'center',
//   // alignItems: 'center',
//   // position: 'relative',
// }));

// const Contact = () => {
//   const navigate = useNavigate();

//   return (
//     <StyledContainer maxWidth="md">
//       <BlueBackground
//         initial={{ x: '-100%' }}
//         animate={{ x: 0 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography 
//           variant="h2" 
//           component="h1"
//           align="center"
//           sx={{ 
//             fontWeight: 'bold',
//             mb: 2
//           }}
//         >
//           What's Holding You Back?
//         </Typography>
//         <Typography 
//           variant="h5"
//           align="center"
//           color="text.secondary"
//           sx={{ mb: 4 }}
//         >
//           Let's turn your ideas into reality
//         </Typography>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <Button
//           variant="contained"
//           size="large"
//           onClick={() => navigate('/contact-form')}
//           sx={{
//             borderRadius: '28px',
//             padding: '12px 48px',
//             fontSize: '1.2rem',
//             textTransform: 'none',
//             color: "#28282B"
//           }}
//         >
//           Get in Touch
//         </Button>
//       </motion.div>
//       </BlueBackground>
//     </StyledContainer>
//   );
// };

// export default Contact;

const PageContainer = {
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  maxWidth: "100%",
  top: '50%',
  position: "relative", // Make sure the content sits on top of the blue background
};

const BlueBackground = {
  backgroundColor: "#0092ff",
  height: "300px", // Adjust the height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  //position: "absolute", // Fix it to cover the full viewport width
  top: 0, // Place it at the top of the container
  left: 0,
  width: "100%", // Ensure it spans the full width of the screen
};

const Content = {
  color: "white",
  textAlign: "center",
  opacity: 0,
};

const Button = {
  marginTop: "20px",
  padding: "10px 20px",
  border: "none",
  backgroundColor: "white",
  color: "blue",
  fontSize: '1.2rem',
  borderRadius: "5px",
  cursor: "pointer",
};

const AnimatedSection = () => {
  const navigate = useNavigate();
  return (
    <div style={PageContainer}>
      <motion.div
        style={BlueBackground}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          style={Content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
        <Typography 
          variant="h2" 
          component="h1"
          align="center"
          sx={{ 
            fontWeight: 'bold',
            mb: 2
          }}
        >
          What's Holding You Back?
        </Typography>
        <Typography 
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Let's turn your ideas into reality
        </Typography>
          <motion.button
            onClick={() => navigate('/contact-form')}
            style={Button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedSection;
