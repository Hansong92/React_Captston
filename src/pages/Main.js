import React from 'react'

import { Grid, Box, Typography ,Button } from '@mui/material';

import MRI from '../components/slider/MRI.jpeg';
import CSV from '../components/slider/CSV.png';






const Main = () =>{

  
    
return(
    
    <Box
        margin='auto'
        padding='50px   '
        justifyContent='center'
        alighItems="center"
        className="Main"
        maxWidth="1200px"
    >
        
        <Grid container spacing={2} >
            <Grid item xs={6}>
                <img src={MRI} alt="MRI" width="100%"  />
            </Grid>


            <Grid item xs={6}>
                <img src={CSV} alt="CSV" width="100%" />
            </Grid>
       </Grid>

        <Typography 
            variant='h2' 
            color='#414466'  
            fontFamily='Raleway' 
            fontWeight='bold'
            gutterBottom>  How It Works?
        </Typography>
        <Typography 
            variant='h6'
            fontFamily='Raleway' 
            fontWeight='bold'
            color='#414466'
            display='block'
            gutterBottom
            >
            By simply uploading your MRI or Your medical information,
            Our trained machine learning model will predict whether or not you have a brain tumor
             
        </Typography>
        <Button></Button>

       
       
    </Box>
)

}


export default Main;

