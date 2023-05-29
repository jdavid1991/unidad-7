import React , {useState} from 'react';
import swal from 'sweetalert';
import '../css/Inicio.css'
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
import TextFiled from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

async function login(credenciales){
  return fetch('https://6455922fa74f994b335cbd39.mockapi.io/api/v1/session',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(credenciales)

  })
  .then(data => data.json())

}

function Singin() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submit = async e => {
  
  e.preventDefault();  
  const response = await login({
    username,
    password
  });

  if(response.id!==0){
    swal('ok', response.username, 'success', {
      buttons: false,
      timer: 2000,
  })
  .then((value) => {
    localStorage.setItem('id', response['id']);
    localStorage.setItem('username', JSON.stringify (response['username']));
    localStorage.setItem('password', JSON.stringify (response['password']));
    window.location.href= "/profile";
  })

}else{
  swal('error', response.username, 'error')
  }
  }
  
  return (
    
  <Grid  className = 'root'>
    <CssBaseline />
    <Grid item xs={12} md={5} component={Paper} elevation={24} square>
      <div className='paper'>

        <img className="pizza" src='https://ps.w.org/wppizza/assets/icon-256x256.png?rev=2498121' alt='pizza'></img>
      
        <Typography component='h1' variant='h4' style={{marginTop: '20px'}}>
          Bienvenido
        </Typography>

        <form container className='form' noValidate onSubmit={submit}>
            
            <TextFiled
              variant= "outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              onChange = {e => setUsername(e.target.value)}
            />

            <TextFiled
              variant= "outlined"
              margin= "normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label="Contraseña"
              onChange = {e => setPassword(e.target.value)}
             />
            
            <Button 
              fullWidth
              type = "submit"
              variant= "contained"
              className= "boton"
              style={{background: '#12AA4F', fontWeight: 'bold'}}
            >
              Iniciar Sesion 
            </Button>

        </form>
      </div>
    </Grid>
  </Grid>
  
  )
}

export default Singin;