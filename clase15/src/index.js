// estructura de control - de bucle 

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }



// arreglos  [] 
// const numeros = [1, 2, 3, 4, 5, [1, [1]]]
// // const numeros2 = [1,2,3,4,5,6]

// // console.log(numeros[5][1][0])
// // numeros[2] = 5

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }


// OBJETOS  no tienen un orden 

const persona  = {
    // propèidades : valor
    edad: 20,
    estudia: true,
    nombre: "Simona",
    redes: [
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros: {
        pasatiempo: 'Pintar',
        mascotas: 2
    },
    caminar: function name(params){
        //
    }
}

persona.nacionalidad = 'Argentina'

console.log(persona.redes[1])
console.log(persona.otros.pasatiempo)

