import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

const AnimatedSection = ({ children, direction = 'up', delay = 0, id }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('exit');
    }
  }, [controls, inView]);

  return (
    <Box 
      component="section" 
      id={id}
      sx={{ 
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default AnimatedSection;