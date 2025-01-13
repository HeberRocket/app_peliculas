export const GuardarEnStorage = (clave, elemento) => {

    //conseguir los elementos que ya tenemos en localStorage

    let elementos = JSON.parse(localStorage.getItem(clave));

    console.log(elementos);
    

    //Comprobar si es un array

    if (Array.isArray(elementos)) {

        //Añadir dentro del array un elemento nuevo
        elementos.push(elemento);           
        
    }else{
        //CREAR UN ARRAY CON LA PELI NUEVA
        elementos = [elemento]
    }
    
    //Guardar en localStorage

    localStorage.setItem(clave, JSON.stringify(elementos));



    //Devolver el objeto guardado

    return elemento;

}