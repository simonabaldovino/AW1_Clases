// import productos from './productos.js' // no nombrada 
import {productosMascotas, categorias} from './productos.js' // nombrada 
import {filtrarPorTalle, renderizarProductos} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")

// select
/* 
<select name="talle">
    <option value="S">S</option>
<select>
*/

// filtrar el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// renderizamos
renderizarProductos(contenedorProductos, productosFiltrados)
