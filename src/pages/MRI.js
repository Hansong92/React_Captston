import React, { useState } from 'react';
import { Box, Button, Typography,Input } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { visuallyHidden } from '@mui/utils';



const MRI = () => {

  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
    else {
      setSelectedFile(null);
    }
  };

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


    >Upload images and find out if you have a possible brain tumor today</Typography>

    <Button 
        size='small'
        component="label" 
        variant="contained" 
        

        startIcon={<UploadIcon />}
    >  Upload 
        <Input type="file" style={visuallyHidden} accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange}/>
      
    </Button>    
    {selectedFile && (
        <Typography variant='body1' color='textSecondary'>
          Selected File: {selectedFile} {/* Display the selected file name if available */}
        </Typography>
      )}  
      </Box>  
    );
}

export default MRI;
