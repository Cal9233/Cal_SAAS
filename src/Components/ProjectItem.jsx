import React from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ProjectCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(6),
    '&:nth-of-type(even)': {
      flexDirection: 'row-reverse',
    },
  },
  backgroundColor: 'transparent',
  boxShadow: 'none',
  overflow: 'visible',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[8],
  '& img': {
    width: '100%',
    height: '100%',
    // objectFit: 'cover',
    aspectRatio: '16/9',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  gap: theme.spacing(2),
}));

const ProjectItem = ({ title, summary, image, liveLink, codeLink, direction }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
    >
      <ProjectCard>
        <ContentBox>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
          >
            {summary}
          </Typography>
          <ButtonGroup>
            <Button
              variant="contained"
              sx={{
                "backgroundColor": "#0092ff"
              }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              LIVE SITE
            </Button>
          </ButtonGroup>
        </ContentBox>

        <ImageBox>
          <img src={image} alt={title} />
        </ImageBox>
      </ProjectCard>
    </motion.div>
  );
};

export default ProjectItem;