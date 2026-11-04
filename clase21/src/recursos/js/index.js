import { URL_PRODUCTOS } from './config.js'
// import productos from './productos.js' // No nombrada
//import {productosMascotas, categorias} from './productos.js' // Nombrada
import { obtenerDatos } from './productos.js'
import { renderizarCatalogo, filtrarPorTalle } from './funciones.js'

// Trabajo con persistencia de dtaos - local storage

const arreglo = [1, 2, 3, 4]
const valorAguardar = JSON.stringify(arreglo)
// const valorAguardar = "[1,2,3,4]"
localStorage.setItem('materia', valorAguardar)

const valor = localStorage.getItem('materia') // <---  siemrpe va a ser una cadena

const valorConvertidoNuevamenteAArreglo = JSON.parse(valor)

console.log(typeof valorConvertidoNuevamenteAArreglo)

// obtener los datos de productos almacenados en un JSON

// Referenciamos un elemento del DOM
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoBoton = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')
const carro = document.getElementById('carro')

// Arreglo productos
const productosMascotas = await obtenerDatos(URL_PRODUCTOS)





// Tarea ver lo siguiente
/*
obtenerDatos(URL_PRODUCTOS).then((datos)=>{
    // planificar cuando se ejecuta este código
})
*/
const productosCarrito = [] //--> push()
// Escuchador
eventoBoton.addEventListener('click', (evento) => {
    // console.log(evento)
    //dialogo.show()
    dialogo.showModal()
})

// Select 
/*
<select name="talle">
<option value="S">S</option>
</select>
*/
// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// 1) Renderizamos
renderizarCatalogo(contenedorProductos, productosFiltrados)

// 2) Aplicamos los escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
// const botonesCarro = contenedorProductos.querySelectorAll('[data-id]') // <-- selector de atributo

botonesCarro.forEach((boton) => {
    // Cuerpo forEach
    boton.addEventListener('click', (evento) => {
        // Cuerpo del callback listener
        // const idProducto = Number(boton.dataset.id)
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        carro.textContent = productosCarrito.length
    })
})
