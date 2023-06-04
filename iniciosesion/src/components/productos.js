import React, { useEffect, useState } from 'react';
import '../css/productos.css'


function Productos() {

  const ListadoProductos = [
    {
      name: "Hamburguesa Sencilla",
      url:
        "https://homeburgers.com/uploads/product/054bb48d12d44687b47c00b41ab31097/hs5.jpg",
      release_year: "Hamburguesa"
    },
    {
      name: "Pizza Carne",
      url:
        "https://tofuu.getjusto.com/orioneat-prod-resized/gjPJC7hhyL5modera-1200-1200.webp",
      release_year: "Pizza"
    },
    {
      name: "Perro Sencillo",
      url:
        "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/04/05085017/RFB-2603-4-perroscalientes.jpg",
      release_year: "Perro"
    },
    {
      name: "Pizza Hawaina",
      url:
        "https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg",
      release_year: "Pizza"
    },
    {
      name: "Hamburguesa Doble carne",
      url: "https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_1280.jpg",
      release_year: "Hamburguesa"
    },
    {
      name: "Pizza Pollo-champiñon",
      url: "https://images.hola.com/imagenes/cocina/recetas/20200123158802/receta-pizza-pollo-barbacoa/0-772-922/pizza-pollo-adobe-m.jpg",
      release_year: "Pizza"
    }
  ];

  const [ListadoFiltrado, setListadoFiltrado] = useState(ListadoProductos);  

  const [MarcaSeleccionada, setMarcaSeleccionada] = useState("");

  const [AnioSeleccionado,setAnioSeleccionado] = useState();

  const FiltradoxMarca = (DataFiltrado) => {
      if(!MarcaSeleccionada){
        return DataFiltrado;
      }
      
      const FiltradoAutos = DataFiltrado.filter(
        (car) => car.name.split(" ").indexOf(MarcaSeleccionada) !== -1
      );

      return FiltradoAutos;
  };

  const FiltradoxAnio = (DataFiltrado) => {
    if(!AnioSeleccionado){
      return DataFiltrado;
    }

    const FiltradoAutos = DataFiltrado.filter(
      (car) => car.release_year === AnioSeleccionado
    );

    return FiltradoAutos;
  };

  const handleCambioMarca = (event) => {
    setMarcaSeleccionada(event.target.value);
  };

  const handleCambioAnio = (event) => {
    
    const inputAnio = String(event.target.id);

    if(inputAnio === AnioSeleccionado){
      setAnioSeleccionado("");
    }else{
      setAnioSeleccionado(inputAnio);
    }
  };

  useEffect (() => {
    var DataFiltrado = FiltradoxMarca(ListadoProductos);
    DataFiltrado = FiltradoxAnio(DataFiltrado);
    setListadoFiltrado(DataFiltrado);
  },[MarcaSeleccionada,AnioSeleccionado]);


  return (
    <>
    <div className='App'>
      <div className='filtradomarca'>
        <div> Filtra por producto: </div>
        <select
          id='inputMarca'
          value={MarcaSeleccionada}
          onChange={handleCambioMarca}
          style={{width:'104px'}}
        >
          <option value=""> Todos </option>
          <option value="Hamburguesa">Hamburguesa</option>
          <option value="Perro">Perro</option>
          <option value="Pizza">Pizza</option>
        </select>
      </div>

      <div id="opcionesAnio" onClick={handleCambioAnio}>
        <div
          className={AnioSeleccionado === "Pizza" ? "opcionActivo" : "opcionFiltrado" }
          id="Pizza"
        > 
        Pizza 
        </div>
        <div
          className={AnioSeleccionado === "Hamburguesa" ? "opcionActivo" : "opcionFiltrado" }
          id="Hamburguesa"
        > 
        Hamburguesa.
        </div>
        <div
          className={AnioSeleccionado === "Perro" ? "opcionActivo" : "opcionFiltrado" }
          id="Perro"
        > 
        Perro Caliente
        </div>
      </div>

      <div id="listadoCarros">
        {ListadoFiltrado.map((item, index) => (
          <div className='car-item' key={index}>
            <div className='car-name'>{`${item.name}`}</div>
            <img className='car-image'src={item.url}/>
          </div>
        ))}
      </div>
    </div>
    <div>
    </div>
   
    </>
    );
   
}

export default Productos;