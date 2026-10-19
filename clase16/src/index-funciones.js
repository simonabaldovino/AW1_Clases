// funciones 

// declaracion 



// function suma(){      // cuerpo de funcion
// }

//          suma -> identificador
// function suma(a, b){
//     // console.log(a + b)
//     return a + b       // no muestra res, solo lo almacena
// }

// // invocar - ejecutar - llamar
// const resultado = suma(10,2)

// console.log(resultado)

// //funcion flecha - es anonima, no tiene ident, necesita ser declara en una const
// FatArrow

// const resta = (a, b)=>{
//     return a - b
// }


// const  resta = (a, b)=> a + b
// 
// const resta = a=> a + 5    // si hay un parametro -> sin parentesis

// callback

const a = (cb)=>{
    console.log('se ejecutó a')
    cb()
}


// nuetsro callback
const b = ()=>{
    console.log('se ejecutó el callback b')
}

// console.log(b())
// a(b)

a(()=>{
    console.log('se ejecutó el callback b')
})



