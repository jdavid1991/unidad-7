import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Profile() {
  const [anchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const username = JSON.parse(localStorage.getItem('username'))

  const handleClose = (event) =>{
    localStorage.removeItem("id")
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    window.location.href='/profile'
  }
return (
  <>
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{background: '#12AA4F'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src='https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette.png' style={{width:"50px"}}></img>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bienvenido {username}
        </Typography>
        <Button color="inherit" onClick={handleClose}>LOGOUT</Button>
      </Toolbar>
    </AppBar>
  </Box>

  </>
);

}