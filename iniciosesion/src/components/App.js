import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../css/App.css';
import Singin from './Inicio';
import Profile from './profile';
import Productos from './productos'
import ProductosDetalle from './productodetalles';
import Productos1 from './productos1';

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
          <Route path="/profile/productos" element ={< Productos />} />
        <Route path="/productos/:productId" element={<ProductosDetalle />}></Route>
        <Route path="/" element ={< Profile />} />
        <Route path="/productos1" element ={< Productos1 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
