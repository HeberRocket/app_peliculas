import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";



function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/*cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>PeliFlix</h1>

        </header>
        {/*barra de navegacion*/}
        <nav className="nav">

            <ul>
                <li><a href="/a">Inicio</a></li>
                <li><a href="/a">Peliculas</a></li>
                <li><a href="/a">Blog</a></li>
                <li><a href="/a">Contacto</a></li>

            </ul>

        </nav>

        {/*Contenido principal*/}

        <section className="content">
            {/*aqui va el listado de las peliculas*/}

            <Listado listadoState = {listadoState} setListadoState = {setListadoState} />

            
        </section>


        {/*Barra lateral*/}
        <aside className="lateral">
            
            <Buscador listadoState = {listadoState} setListadoState = {setListadoState}/>

            <Crear setListadoState={setListadoState}/>
        </aside>

        {/*Pie de pagina*/}
        <footer className="footer">
            &copy; Heber Acevedo; Todos los derechos reservados -
            <a href="https://www.google.com/"> Google</a>
        </footer>

    </div>
  );
}

export default App;
