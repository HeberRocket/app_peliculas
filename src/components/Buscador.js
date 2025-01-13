import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

    const [busqueda, setBusqueda] = useState('');
    const [noEncontrada, setnoEncontrada] = useState(false);

    const buscarPeli = (e) => {
        //crear estado y actualizarlo
        setBusqueda(e.target.value);
    
        //el listado completo de peliculas 
        let pelisEncontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });


        if(busqueda.length <= 1|| pelisEncontradas <= 0){
            pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
            setnoEncontrada(true);

        }else{
            setnoEncontrada(false);
        }
        
        //actualizar estado del listado principal con lo que se ha filtrado
        setListadoState(pelisEncontradas);
    }

  return (
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>
            {(noEncontrada == true &&  busqueda.length > 1) && (
               <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )}
            
            <form>
                <input type="text" 
                       id='search_field'
                       main = 'busqueda'
                       autoComplete='off'
                       value={busqueda}
                       onChange={buscarPeli}
                       />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
