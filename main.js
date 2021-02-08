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


 function Humano(nacionalidad) {
  this.nacionalidad = nacionalidad;
  function hablar(mensaje) {
    console.log(mensaje);
  }
  hablar("Hola");
}
let pedro = new Humano("Mexicano");
console.log("humano", pedro);


// Ejercicios: Imprimir contenido de la lista
/*

let array = [];

console.log ("Agregar elemento, Eliminar elemento, Decir si existe el elemento, Imprimir el arreglo");

let respuesta = Number(prompt("Elige una opcion"));

switch (respuesta) {
  case 1:
  let valor = prompt("Ingresa un valor para agregar");
  array.push(valor);
  console.log(array);
  break;

  case 2:
  let valor2 = prompt("Ingresa un valor para eliminar");
  if (array_includes(valor2)){
    let pos = array.indexOf(valor2);
    array.splice(pos, 1);
  }
  console.log(array);
  break;

  case 3:
  let valor3 = prompt("Ingresa un valor para ver si existe");
  console.log(array.includes(valor3))
  break;

  case 4:
  let valor4 = prompt("Imprime el arreglo");
  console.log(array);
  break;

  default:
  console.log("Opcion no valida");
  break;

}
*/

//Ejercicio  Instancia-Objetos (falta la salida)


var Person = function(name, genre, age, tel) {
  this.name = name;
  this.genre = genre;
  this.age = age;
  this.tel = tel;
  //this.imprimir = () => {console.log()};
}

var Luis = new Person(Luis, M, 23, 112245);
var David = new Person(David, M, 35, 123354);
var Maria = new Person(Maria, F, 45, 124488);
var Miguel = new Person(Miguel, M, 17, 128896 );
var Ana = new Person(Ana, F, 33, 128872);

console.log(ne Person);

/*
//Ejercicio Herencia

var persona = function(name, age, grade, group) {
  this.name = name;
  this.age = age;
  this.grade = grade;
  this.group = group;
  this.imprimir = () => {console.log()};
}

var1 persona = function(name) {
  this.name = nombre;
  }
  var alumno = function(nombre, edad, grado, grupo) {
  Person.super(this, nombre);
  this.age = edad;
  this.grade = grado;
  this.group = grupo;
  }

var1 = new alumno('Luis', '23', 112245);
var2 = new alumno('David', '35', 123354);
var3 = new alumno('Maria', '45', 124488);
var4 = new alumno('Miguel', '17', 128896 );
var5 = new alumno('Ana', '33', 128872);

console.log ('Luis');


// Ejercicio Transformando objetos en arreglos

var car = {
  brand: 'Nissan',
  model: 'Versa',
  year: 2020
}

console.log(car);

function keyValuePairs(obj) {
  var keys = Object.keys(obj);
  var pairs = [];

  for(var i = 0; i < keys.length; i++) {
    pairs.push( [keys[i], obj[keys[i]]] )
  }

  return pairs;
}

var result = keyValuePairs(car);

console.log(result);


function arrayToObject(arr) {
  var obj = {};

  for(var i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1]
  }

  return obj;
}

console.log(obj);

/*
//Objetos Ejemplo

var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
	calculateAge: function(birthYear) {
		var today = new Date();
		var year = today.getFullYear();

		return year - birthYear;
	}
}

console.log( john.calculateAge(1990) );	// 30

var john = {
	firstName: 'John',
	lastName: 'Doe',
	birthYear: 1990,
	calculateAge: function() {
		var today = new Date();
		var year = today.getFullYear();

		this.age = year - this.birthYear;
	}
}
console.log( john );
/*
Valor actual
{
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  calculateAge: ƒ
}


john.calculateAge();

console.log( john );
/*
Después de llamar el método calculateAge()
{
  firstName: "John",
  lastName: "Doe",
  birthYear: 1990,
  age: 30,
  calculateAge: ƒ
}


var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
  }

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]


Solución

function pluck(list, propertyName) {
  var values = [];

  for (var i = 0; i < list.length; i++) {
    values.push( list[i][propertyName] );
  }

  return values;
}


var Person = function(name) {
  this.name = name;
}

var Developer = function(name, skills, yearsOfExperience) {
	Person.call(this, name);

	this.skills = skills;
	this.yearsOfExperience = yearsOfExperience;
}

var john = new Developer('John', 'JavaScript', 10);

console.log( john );