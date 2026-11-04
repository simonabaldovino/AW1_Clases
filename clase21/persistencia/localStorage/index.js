// actividad 13
const btnAgregar = document.querySelector('button');
const contadorHeader = document.getElementById('contador');

let cantidad = Number(localStorage.getItem('cantidadCarrito')) || 0;


contadorHeader.textContent = cantidad;

btnAgregar.addEventListener('click', () => {
    cantidad++;

    contadorHeader.textContent = cantidad;

    localStorage.setItem('cantidadCarrito', cantidad);
});



