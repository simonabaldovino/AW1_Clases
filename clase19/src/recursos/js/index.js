// import productos from './productos.js' // no nombrada 
import {productosMascotas, categorias} from './productos.js' // nombrada 
import {filtrarPorTalle, renderizarProductos} from './funciones.js'

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoBoton = document.getElementById('boton-eventos')
const dialogo = document.getElementById('dialogo')
const carro = document.getElementById('carro')

// arreglo productos
const productosCarrito = [] // --> push

// escuchador
eventoBoton.addEventListener('click', (evento)=> {
    // console.log(evento)
    dialogo.showModal()
})


// select
/* 
<select name="talle">
    <option value="S">S</option>
<select>
*/

// filtrar el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// 1. renderizamos
renderizarProductos(contenedorProductos, productosFiltrados)
console.log(productosFiltrados)

// 2. aplicar listeners (escuchadores)
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
// const botonesCarro = contenedorProductos.querySelectorAll('[dataset]')

botonesCarro.forEach((boton)=>{
    boton.addEventListener('click', (evento)=>{
        // cuerpo del callback listener 
        // const idProducto = Number(boton.dataset.id)
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        carro.textContent = productosCarrito.length
    })
})