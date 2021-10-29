import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom";



export default function ButtonAppBar() {

  let history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Shafransky Collection
          </Typography>
          <Button onClick={() => {history.push('/dashboard');}} color="inherit">Home</Button>
          <Button onClick={() => {history.push('/aboutMe');}} color="inherit">About Me</Button>
          <Button onClick={() => {history.push('/projects');}} color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>


        </Toolbar>
      </AppBar>
    </Box>
  );
}