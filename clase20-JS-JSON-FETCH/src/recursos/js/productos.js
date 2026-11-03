// async / await
async function obtenerDatos(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json() //<------- obtiene los datos del cuerpo - transformar un objeto json (bien formado) a a un objeto JS
    
    return datos
}


export {obtenerDatos}