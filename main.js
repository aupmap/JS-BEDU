//Arreglos
/*
function multiplyByTwo(numbers) {
  var multipliedNumbers = [];

  for(var i = 0; i < numbers.length; i++) {
    multipliedNumbers.push(numbers[i] * 2);
  }

  return multipliedNumbers;
}

var input = [1, 3, 4, 7, 2, 1, 9, 0];

var output = multiplyByTwo(input);

console.log(input); // [1, 3, 4, 7, 2, 1, 9, 0]
console.log(output);  // [2, 6, 8, 14, 4, 2, 18, 0]



//Promedio

function calculateAverage(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Same as: sum = sum + numbers[i];
  }

  return sum / numbers.length
}



//Function hola (){}

(function(){
  console.log('hola desde IIFE')
})()



// Prompt

const entrada = Number(prompt('Proporciona tu edad:'));

console.log(Mensaje: ', entrada');



let lista = [0,3,4,4,4,4,4,4]

console.log(lista['length'])



//Ejemplo 2 Arreglos alumnos

let lista = ["au", 1,5,6,[2,6,8], "bien", true,3,6,"dsf",34]

const entrada = Number(prompt("Ingresa el index a imprimir"))

if (entrada <= lista.length){
  console.log("El index que imprimiste es", lista[entrada])
}else{
  console.log("El indice que elegiste no es valido")
}


//Ejemplo 3 Arreglos alumnos 

let lista = ["yo","tu",3, 5, null, 7];

const pedido = Number(prompt("Indice"));

if (pedido > lista.length){
  console.log("El elemento no esta en la lista");
}else{
  console.log("El elemento en el indice " + pedido + " es " + lista[pedido]);
}


//Ejemplo cambio de propiedades
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH

//Ejemplo Metodos Push/Pop
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


*/
//Metodos ejemplo

let lista = [0,3,46,7,'antonio',[0,2,2],'ul',4]

//console.log(lista[2]);
//lista.length
//lista['length']
//console.log(lista.length)
//lista.push()
//let nueva = [...lista];

lista.splice(4,5,'Nuevo','otro')
console.warn('Hola amigos')

lista.unshift(78);
console.warn(lista)

lista.push(67)
console.warn(lista)

lista[200] = 'nuevo';
console.warn(lista)

console.warn(lista.length)
console.warn(lista[4])

let ultima = lista.pop();
console.warn(ultima)
console.warn(lista)

let primero = lista.shift();
console.warn(lista)
console.warn(primero)


///


console.log(lista.indexOf('antonio'))
console.log(lista.lastIndexOf('antonio'))
//console.log(lista.lastIndexOf('antonio'))
console.log(lista.includes('pedro'))

console.log(lista)
lista.splice(4,5)

console.log(lista)

