import React from 'react';
import data from "./data";
import { Link } from 'react-router-dom';
import '../css/productos1.css'

const Productos1 = () => {

  const productos = data.map(productos => {
    return (
        <div key={productos.id}>
          
          <div>
          <h3><Link to={`/productos/${productos.id}`}>{productos.name}</Link></h3>
          <img className='car-image' src={productos.url} alt='si'></img>
          </div>
  
        </div>
    )

  })

  return (
    <>
    <h1>Menu</h1>
    <div id='conte'>
      <div id='ListadoCarros'>
      {productos}    
      </div>
    </div>
    
   
   </>
  )
}

export default Productos1;