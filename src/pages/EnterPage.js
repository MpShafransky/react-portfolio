import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import { Typography } from '@mui/material';




export default function SimpleContainer() {


let history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      
        <Box sx={{ bgcolor: 'black', height: '100vh', alignItems: 'center', display: 'grid' }} >
        <Button onClick={() => {
            history.push('/dashboard');}} variant="outlined">Enter</Button>

            </Box>
      
    </React.Fragment>
  );
}


