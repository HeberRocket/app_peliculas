import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula";
    const guardarEdicion = (e, id) => {
      e.preventDefault();
      
      //conseguir el target del evento
      let target = e.target;

      //buscar el indice de la pelicula  a actualizar 
      const pelisAlmacenadas = conseguirPeliculas();
      const indice = pelisAlmacenadas.findIndex(peli => peli.id === id);

      //crear objeto con el id de ese indice, con titulom y descripcion del formulario
      let peliActualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      };
      //actualizar el elemento con ese indice
      pelisAlmacenadas[indice] = peliActualizada;
      //guardar el nuevo array de objetos en el localstorage

      localStorage.setItem("pelis",JSON.stringify(pelisAlmacenadas));

      //y actualizar estados

      setListadoState(pelisAlmacenadas);
      setEditar(0);






    }
  return (
    
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={peli.titulo} />


            <textarea 
                       name='descripcion'
                       defaultValue={peli.descripcion}
                       className='descripcion_editada' />
            <input type='submit'
                   className='editar'
                   value="Actualizar" />       
        </form>
        </div>
  )
}
