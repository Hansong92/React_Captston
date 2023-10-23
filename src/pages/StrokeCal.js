import React, { useState } from 'react';
import {  Box,TextField, Button, Typography, Paper } from '@mui/material';
import { Container } from '@mui/system';


const StrokeCal = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [hypertension, setHypertension] = useState('');
  const [heartDisease, setHeartDisease] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [workType, setWorkType] = useState('');
  const [residence, setResidence] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [smokingStatus, setSmokingStatus] = useState('');

  const handleSubmit = () => {
    console.log({
      gender,
      age,
      hypertension,
      heartDisease,
      maritalStatus,
      workType,
      residence,
      glucoseLevel,
      bmi,
      smokingStatus,
    });
  };

  return (
    <Container 
    margin='auto'
     
    sx={{ flexDirection: 'column' ,display: "grid"  }}
    >  

    <form onSubmit={handleSubmit} >
      <TextField></TextField>
      <TextField></TextField>

      <TextField></TextField>

      <TextField></TextField>

      <TextField></TextField>

      
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Container>
  );
};
export default StrokeCal;
