import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@mui/material';
import MRI from '../components/slider/MRI.jpeg';
import CSV from '../components/slider/CSV.png';
import Footer from './Footer';

const Main = () => {
  const containerStyle = {
    margin: 'auto',
    padding: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
    color: '#444',
    display: 'block',
    marginBottom: '1.5rem',
  };

  const buttonStyle = {
    backgroundColor: '#0073e6',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  const mainContainerStyle = {
    marginTop: '100px', 
  };

  return (
    <Box style={containerStyle} className="Main" sx={mainContainerStyle}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <img src={MRI} alt="MRI" style={imageStyle} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={CSV} alt="CSV" style={imageStyle} />
        </Grid>
      </Grid>

      <Typography variant="h2" style={titleStyle} gutterBottom>
        How It Works?
      </Typography>
      <Typography variant="h6" style={descriptionStyle} gutterBottom>
        By simply uploading your MRI or your medical information, our trained machine learning model will predict whether or not you have a brain tumor.
      </Typography>
      <Link to="/model-explanation"> 
  <Button variant="contained" style={buttonStyle}>
    Learn More
  </Button>
</Link>

      <Footer />
    </Box>
  );
};

export default Main;
