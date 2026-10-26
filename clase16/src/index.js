// metods de arreglos

const numeros = [2,8,12,50]

//ForEach -> loop
// el callback se ejecuta 1 vez por elemento

// numeros.forEach((numero, indice, arreglo)=>{
//     console.log(numero, indice, arreglo)
// })


// map -> loop -> devuleve un nuevo array

const numerosIncrementados = numeros.map((numero)=>{
    return numero + 1
})

console.log(numerosIncrementados)

// filter (nuevo arreglo) y find (valor)



const numerosFiltrados = numeros.filter((numero)=>{
    return numero> 10
})
console.log(numerosFiltrados)