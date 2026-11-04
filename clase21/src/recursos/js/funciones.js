function renderizarCatalogo(contenedor /* es la referencia del DOM */, productos /* es el arreglo */ ) {

    let productosHTML = ''

    productos.forEach((producto) => {
        productosHTML += `
<article class="producto">
    <h3>${producto.nombre}</h3>
    <picture>
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </picture>
    <p>
       ${producto.descripcion}
    </p>
    <ul>
        <li>
            Talles ${producto.talles[0]}
        </li>
        <li>
            Precio $ ${producto.precio}
        </li>
    </ul>
    <button class="boton-agregar-carro" data-id="${producto.id}">Agregar al carro</button>
</article>
    `
    })

    contenedor.innerHTML = productosHTML

    ///
    return productosHTML
}


// Funcion de filtrado 
function filtrarPorTalle(arreglo, talle){
    // .filter -> solo dejar pasar al nuevo arreglo, si en el arreglo talles tiene el talle buscado
    // Arreglo con una cadena
    // return arreglo.filter((producto)=>{
    //     const talles = producto.talles.filter((talleEncontrado)=>{
    //         return talleEncontrado === talle
    //     })
    //     return talles.length > 0
    // })
    // indexOf -> 
    // includes()
    // Este return es de la cuncion filtrarPorTalle
    const arregloFiltrado = arreglo.filter((producto)=>{
        // debe ser verdadero o falso -> es del filter
        return producto.talles.includes(talle.toUpperCase())
    })
    return arregloFiltrado
    // Retornar un arreglo filtrado
}
// Exportaciones nombradas
export {renderizarCatalogo, filtrarPorTalle}