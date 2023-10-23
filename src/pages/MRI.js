import React from 'react';
import { Box, Button, Typography,Input } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { visuallyHidden } from '@mui/utils';



const MRI = () => {

  return (
    
    
     
  
    <Box
        margin='auto'
        display="grid"   
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
    >

    <Typography 
    variant='h4'
    fontFamily='Raleway' 
    fontWeight='bold'
    color='#404040'


    >Upload Images and find out if you have possible brain tumor today</Typography>

    <Button 
        size='small'
        component="label" 
        variant="contained" 
        

        startIcon={<UploadIcon />}
    >  Upload 
        <Input type="file" style={visuallyHidden}/>
    </Button>      
      </Box>  
    );
}

export default MRI;