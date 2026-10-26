const productosMascotas = [
    {
        nombre: "Collar Ajustable de Nylon",
        imagen: "https://ejemplo.com/imagenes/collar-nylon.jpg",
        descripcion: "Resistente collar de nylon con broche de seguridad para perros.",
        talles: ["M", "L"],
        precio: 12.50
    },
    {
        nombre: "Arnés Reflectivo Ergonómico",
        imagen: "https://ejemplo.com/imagenes/arnes-reflectivo.jpg",
        descripcion: "Arnés cómodo con tiras reflectivas para paseos nocturnos seguros.",
        talles: ["S", "L"],
        precio: 24.99
    },
    {
        nombre: "Cama Suave Térmica",
        imagen: "https://ejemplo.com/imagenes/cama-suave.jpg",
        descripcion: "Cama acojinada lavable para el máximo descanso de tu mascota.",
        talles: ["S", "M"],
        precio: 45.00
    },
    {
        nombre: "Capota Impermeable para Lluvia",
        imagen: "https://ejemplo.com/imagenes/capota-lluvia.jpg",
        descripcion: "Chaqueta impermeable ligera que protege a tu perro del agua.",
        talles: ["M", "L"],
        precio: 18.75
    },
    {
        nombre: "Chaleco de Lana Tejido",
        imagen: "https://ejemplo.com/imagenes/chaleco-lana.jpg",
        descripcion: "Abrigo de lana suave y cálido ideal para días fríos.",
        talles: ["S", "L"],
        precio: 15.30
    },
    {
        nombre: "Bozal de Malla Transpirable",
        imagen: "https://ejemplo.com/imagenes/bozal-malla.jpg",
        descripcion: "Bozal de diseño ajustado que permite respirar y beber libremente.",
        talles: ["S", "M"],
        precio: 10.99
    },
    {
        nombre: "Camiseta de Algodón Fresca",
        imagen: "https://ejemplo.com/imagenes/camiseta-algodon.jpg",
        descripcion: "Ropa ligera de algodón con diseños divertidos para uso diario.",
        talles: ["M", "L"],
        precio: 11.20
    },
    {
        nombre: "Zapatos Antideslizantes de Neopreno",
        imagen: "https://ejemplo.com/imagenes/zapatos-neopreno.jpg",
        descripcion: "Botas protectoras para patas contra el calor y pisos resbaladizos.",
        talles: ["S", "L"],
        precio: 22.00
    },
    {
        nombre: "Disfraz Temático de Temporada",
        imagen: "https://ejemplo.com/imagenes/disfraz-tematico.jpg",
        descripcion: "Disfraz cómodo y divertido perfecto para fiestas y fotos especiales.",
        talles: ["S", "M"],
        precio: 29.90
    },
    {
        nombre: "Pañuelo Bandana de Tela",
        imagen: "https://ejemplo.com/imagenes/panuelo-bandana.jpg",
        descripcion: "Accesorio elegante y lavable que se ajusta fácilmente al cuello.",
        talles: ["M", "L"],
        precio: 8.50
    }
];


const categorias = [
    'Ropa'
]

  
let unaVaariable = 'hola' // si se expòprta es de solo lectura 

// dos maneras de exportar

//1 - exportacion no nombrada
export default productosMascotas

// 2 - exportacion nombrada -> las necesarias 
export {productosMascotas, categorias}