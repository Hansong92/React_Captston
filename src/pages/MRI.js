import React, { useState } from 'react';
import { Box, Button, Typography, Input } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import { visuallyHidden } from '@mui/utils';

const MRI = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <Box
      margin='auto'
      display="grid"
      justifyContent="center"
      alignItems="center"
      minHeight="70vh" 
    >
      <Typography
        variant='h4'
        fontFamily='Raleway'
        fontWeight='bold'
        color='#404040'
      >
        Check for Brain Tumors with Your Images
      </Typography>

      <Button
        size='large' 
        component="label"
        variant="contained"
        startIcon={<UploadIcon />}
      >
        Upload MRI Image
        <Input type="file" style={visuallyHidden} accept="image/jpeg, image/png, image/jpg" onChange={handleFileChange} />
      </Button>

      {selectedFile && (
        <Typography variant='body1' color='textSecondary' style={{ marginTop: '20px' }}>
          Selected File: {selectedFile}
        </Typography>
      )}
    </Box>
  );
}

export default MRI;
