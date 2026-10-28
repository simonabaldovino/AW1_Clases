// FUNCIÓN DE RENDERIZADO 
function renderizarProductos(contenedor, listaDeProductos) {

    let productosHTML = ''; // acum texto vacio

    listaDeProductos.forEach((producto) => {
        productosHTML += `
        <article class="producto">
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>${producto.descripcion}</p>
            <ul>
                <li>Talles ${producto.talles[0]}</li>
                <li>Precio $ ${producto.precio}</li>
            </ul>
            <button class="boton-agregar-carro" data-id="${producto.id}">Agregar al carro</button>
        </article>
        `;
    });

    contenedor.innerHTML = productosHTML
    return productosHTML
}


// funcion de filtrado
function filtrarPorTalle(arreglo, talle) {
    // .filter -> solo dejar pasar al nuevo arreglo si en el nuevo arr talles tiene el talle buscado
    // arreglo con cadena
    //  return arreglo.filter((producto)=>{
    //     const talles = producto.talles.filter((talleEncontrado)=>{
    //         return talleEncontrado === talle
    //     })
    //     return talles.lenght > 0
    // })

    // indexOf -> 
    // includes()

    //este return es de la funcion filtrarPorDetalle
    return arreglo.filter((producto)=>{
        // debe sr V o F -> es del filter
        return producto.talles.includes(talle.toUpperCase())
    })

    // retornar arreglo filtrado
                                        
}



export {renderizarProductos, filtrarPorTalle}