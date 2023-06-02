import React from 'react';
import data from "./data";
import '../css/productoitem.css';
import { useParams } from 'react-router-dom';
import Profile from './navbar';


const ProductosDetalle = (event) => {

  const {productId}  = useParams();
  const esteProducto = data.find(prod => prod.id === productId);
  

  if(!esteProducto){
    return (
        <div>
          <h1>NO HAY PRODUCTOS CON ESE ID</h1>
        </div>
      )
  }
  return (
    <>
    < Profile />
    <div id='contenedor' >
        <div id='detalles' > 
        <h1>{esteProducto.name}</h1>
        <img src={esteProducto.url} width="200px" height="200px"/>
        <h3>Price: {esteProducto.precio}</h3>
        <p>Detalle: {esteProducto.descripcion}</p>
        </div>
        
    </div>

    </>
  )
  
}

export default ProductosDetalle;