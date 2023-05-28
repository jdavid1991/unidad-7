import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../css/App.css';
import Singin from './Inicio';
import Profile from './profile'

function App() {

const token = localStorage.getItem('id')

if(!token){
  return <Singin />
}

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element ={< Profile />} />
        <Route path="/" element ={< Profile />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
