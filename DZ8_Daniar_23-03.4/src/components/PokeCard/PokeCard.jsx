import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Box, Card, CardMedia, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PokeCard = ({ imgSrc, name, base_experience, height, weight }) => {
  const navigate = useNavigate();

  const styles = {
    paper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      minHeight: '300px',
      width: 'fit-content',
      padding: '20px',
      margin: '0 auto',
      bgcolor: 'inherit',
      color: 'inherit',
      position: 'relative',
    },
    goBack: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      color: '#9c27b0',
      cursor: 'pointer',
    },
    img: {
      height: '80%',
      backgroundSize: 'contain',
      minHeight: '250px',
    },
  };

  return (
    <Paper sx={styles.paper}>
      <ArrowBack sx={styles.goBack} onClick={() => navigate(-1)} />
      <Box>
        <CardMedia image={imgSrc} title={name} sx={styles.img} />
        <Typography variant="h3">{name}</Typography>
      </Box>
      <Box ml={4}>
        <Typography variant="h6">Height: {height} ft</Typography>
        <Typography variant="h6">Weight: {weight} lb</Typography>
        <Typography variant="h6">Experience: {base_experience} xp</Typography>
      </Box>
    </Paper>
  );
};

export default PokeCard;
