/*

// Ejemplo Switch
var day = 5;
var text;

switch (day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
  case 3:
    text = "Wednesday";
    break;
  case 4:
    text = "Thursday";
    break;
  case 5:
    text = "Friday";
    break;
  case 6:
    text = "Saturday";
    break;
  default:
    text = "Error";

}

//Ejemplo while-for
var i = 0;

while(i <= 200) {
	console.log("Hello World");
	i++;
}

for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
      console.log( i );
    }
  }

  for (var counter = 2; counter <= 100; counter++) {
    var isPrime = true;
  
    for (var i = 2; i <= counter; i++) {
      if (counter % i === 0 && i !== counter) {
        isPrime = false;
      }
    }
  
    if(isPrime) {
      console.log(counter);
    }


//Funcion ejemplo 1
function saludar(saludo, name) {
    alert(saludo + ' ' + name);
}

saludar('Hola mundo', 'Au')



//Funcion ejemplo 2

function perimeter(a,b) {
    alert(a*b);
}
perimeter(2, 3)

var i = 0;


//Funcion ejemplo 3

var square = function(number) {
	return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour); // 16

//Funcion ejemplo  4

var factorial = function fac(number) {
	return number < 2 ? 1 : number * fac(number - 1)
}

console.log(factorial(5)); // 120


//Declaracion de funciones



const hola= 'hola usuario';

function saludar(saludo, name= 'Pedro') {
    //hola = 'adios';
    alert(saludo + ' ' + ' ' + 'hola' + name)
    console.log(saludo + ' ' + name);

    return saludo + ' ' + name;
}

saludar('Hola mundo')


var edad = 18;
var limVotar = 18;
var ciudad = 'CDMX'

if (edad >= limVotar && ciudad=='CDMX') {
  console.log('puede votar');
} else {
    console.log('no puede votar');
}




function padre(par1, par2) {
    console.log('par1', par1);
    console.log( 'par2', par2);

    function hija1(para1) {
        console.log('par1-hija', para1);
    }
    hija1('hola');
   // console.log(para1);
}

padre(23,'ul');

padre.hija('adios');




//Ejemplo 1 Switch

let ciudad = "Colima";

switch(ciudad) {
  case "AMG":
    console.log("Zapopan, Guadalajara...");
    break;
  case "Colima":
    console.log("Villa de Alvarez, Comala...");
    break;
  case "Puerto Vallarta":
    console.log("Nuevo Vallarta, Bucerias...");
  default:
    console.log("No encontre lo que buscaba");
    break;
}

//Ejemplo 2 Switch

let autor = "Herman Hess";

switch(autor) {
  case "Emily Bronte":
    console.log("Cumbres Borrascosas");
    break;
  case "Herman Hess":
    console.log("La vida es Sueno, Lobo Estepario");
    break;
  case "Tolstoi":
    console.log("Ana Karenina, Guerra y Paz");
  default:
    console.log("No encontramos titulos del autor");
    break;
}


//Ejemplo 3 Switch Figuras (Incompleto)

  function cuadrado(a){
      let a = 3;
      let resCuadrado = a*a;
      return resCuadrado;
  }
 
console.log('El perimetro del cuadrado es: ', cuadrado(a, b));

  function triangulo(a, b){
      let resTriangulo = a*b*c;
      let a = 2
      let b = 3
      let c = 4
      return resTriangulo;
  }
  console.log('El perimetro del triangulo es: ', triangulo(a, b, c,));
  
  function circulo(r){
      const pi =3.14;
      let r = 10
      let resCirculo= (2*pi) * r;
      return resCirculo;
  }
  console.log('El perimetro del circulo es: ', circulo(r));
  function "rectangulo"(a, b){
      let resRectangulo = (2*a) + (2*b);
      let a = 2
      let b = 3
      return resRectangulo;
  }
  console.log('El perimetro del rectangulo es: ', rectangulo(a, b));



function calculateAge(birthYear) {
  var age = 2021 - birthYear;
  return age;
}

var ageAu = calculateAge(1986);

console.log(ageAu); // 35



function yearsUntilRetirement(year, name) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(name + ' retires in ' + retirement + ' years.');  // Au retires in 30 years.
}

yearsUntilRetirement(1986, 'Au');



function power(base, exponent) {
  var result = 1;
  for(var i = 0; i < exponent; i++) {
      result *= base; // Same as: result = result * base;
  }
    return result;
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciSequence(limit) {
  if(limit < 1) return console.log('Limit must be greater than 0');

  for(var i = 0; i < limit; i++ ) {
    console.log( fibonacci(i) );
  }
}
fibonacciSequence(6);

//Ejemplo For

for(var i=1; i <=10; i++) {
  console.log('i vale', i);
}


for(var i=1; i <=10; i=i+3) {
  console.log('i vale', i);
}

for(var i=200; i>=55; i--) {
  if (i%3==0){
  console.log(i)
  }else{
    continue
  }
}

//While

let valor= 100;

while (valor > 10) {
    valor = valor / 2;
    console.log('valor', valor)
}


// Do-while

do {


} while (valor > 10);

// Ejempl While

let valor = 1000;

while (valor >= 0) {
  if (valor % 2 > 0) {
      console.log(valor);
  }
valor--;
}


//Ejemplo Do-While

let valido = false;

do {
      console.log('se hizo');
  } while (valido);



// Try- Catch

try {
  let numero = Number('123q');
  console.log('resultado', numero);
} catch(err) {
  console.log('Lo siento esto no puede hacerse')
}

//hola();  Funcion no definida

try {
  hola();
} catch(err) {
  console.log('Lo siento esto no puede hacerse');
} finally {
  console.log('Terminado');
}


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

const entrada = Number(prompt("Proporciona tu edad:"));

console.log(entrada);



let lista = [0,3,4,4,4,4,4,4]

console.log(lista['length'])



//Ejemplo 2 Arreglos alumnos
*

let lista = ["au", 1,5,6,[2,6,8], "bien", true,3,6,"dsf",34]

const entrada = Number(prompt("Ingresa el index a imprimir"))

if (entrada <= lista.length){
  console.log("El index que imprimiste es", lista[entrada])
}else{
  console.log("El indice que elegiste no es valido")
}

/*
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

console.log(new Person);

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



//Ejercicio 1 Lista alumnos


let lista = ["Ana", "Juan", "Pedro", "Miguel", "Maria", "Daniel"];

console.log ("Agregar alumno, Eliminar alumno, Buscar alumno, Ver lista de alumnos");

let respuesta = Number(prompt("Elige una opcion: 1.  Agregar alumno 2. Eliminar alumno 3. Buscar alumno 4. Ver lista de alumnos"));

switch (respuesta) {
  case 1:
  let alumno = prompt("Ingresa el nombre del alumno a agregar");
  lista.push(alumno);
  console.log("El alumno " + alumno + " se ha a agregado a la lista");
  break;

  case 2:
  let alumno2 = prompt("Ingresa el nombre del alumno a eliminar");
  lista.pop(alumno2);
  console.log("El alumno " + alumno2 + " se ha a eliminado a la lista");
  break;

  case 3:
  let alumno3 = prompt("Ingresa el nombre del alumno que buscas");
    if (lista.includes(alumno3)){
      console.log("El alumno " + alumno3 + " sí se encuentra en la lista: " + lista)
    }else{
      console.log("El alumno no se encuentra en la lista: " + lista)
    }
   break;

  case 4:
  console.log("Lista de alumnos: " + lista);
  break;

  default:
  console.log("Opcion no valida");
  break;

}

/*
//Duda conversion de arreglos aobjetos

function arrayToObject(arr) {
  var obj = {};

  obj[arr[i][0]] = arr[i][1]
  }

arrayToObject("Ana", "Juan", "Pedro", "Miguel", "Maria", "Daniel");
console.log(obj);

*/
//Ejercicio 2  Agenda

let lista = [];

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

  }
}
class Contacto extends Persona {
  constructor(nombre, apellido, celular, domicilio, telefono, correo) {
    super(nombre, apellido, celular, domicilio, telefono, correo);
    this.apellido = apellido;
    this.celular = celular;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.correo = correo;
    }
}
function registrar(nombre, apellido, celular, domicilio, telefono, correo) {
  var val1 = prompt("Introduce el nombre");
  var val2 = prompt("Introduce la apellido");
  var val3 = prompt("Introduce el celular");
  var val4 = prompt("Introduce el domicilio");
  var val5 = prompt("Introduce el telefono");
  var val6 = prompt("Introduce el correo");
  var nuevo = new Contacto(val1, val2, val3, val4, val5, val6);
  lista.push(nuevo);
}

function mostrar() {
  alert("Mostrando contactos en consola");
  lista.forEach((index) => {
    let nombre = index.nombre;
    let apellido = index.apellido;
    let celular = index.celular;
    let domicilio = index.domicilio;
    let telefono = index.telefono;
    let correo = index.correo;
    console.log(
      `Nombre: ${nombre}. apellido: ${apellido}. celular: ${celular}. domicilio: ${domicilio}. telefono: ${telefono}. correo: ${correo}.`
    );
  });
}
var menu =
  "Seleccione una opción: \n" +
  "1. Añadir un nuevo contacto 1\n" +
  "2. Mostrar contactos y Salir \n";
var respuesta = 0;
do {
  respuesta = Number(prompt(menu));
  alert(`Tu opción es: ${respuesta}`);
  switch (respuesta) {
    case 1:
      registrar();
      break;
    case 2:
      mostrar();
      break;

    default:
      alert("Saliendo del menú");
      break;
  }
} while (respuesta != 2);

/*
console.log ("Agregar alumno, Eliminar alumno, Buscar alumno, Modificar lista de alumnos");

let respuesta = Number(prompt("Elige una opcion: 1.  Agregar alumno 2. Eliminar alumno 3. Buscar alumno 4. Ver lista de alumnos"));

switch (respuesta) {
  case 1:
  let alumno = prompt("Ingresa el nombre del alumno a agregar");
  lista.push(alumno);
  console.log("El alumno " + alumno + " se ha agregado a la lista: " + lista);
  break;

  case 2:
  let alumno2 = prompt("Ingresa el nombre del alumno a eliminar");
  lista.pop(alumno2);
  console.log("El alumno " + alumno2 + " se ha a eliminado de la lista: " + lista);
  break;

  case 3:
  let alumno3 = prompt("Ingresa el nombre del alumno que buscas");
    if (lista.includes(alumno3)){
      console.log("El alumno " + alumno3 + " sí se encuentra en la lista: " + lista)
    }else{
      console.log("El alumno no se encuentra en la lista: " + lista)
    }
   break;

  case 4:
  console.log("Lista de alumnos: " + lista);
  break;

  default:
  console.log("Opcion no valida");
  break;

}

/*
// Objetos alumno

let alumno = {
  nombre: '';
  apellido: '';
  celular: '';
  domicilio: '';
  telefono: '';
  correo: '';
}

  let Ana = {
  nombre: 'Ana',
  apellido: 'Diaz',
  celular: '11223344',
  domicilio: 'Camio al Olvido 6',
  telefono: '123456',
  correo: ana@gmail.com
  }

  let Juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    celular: '22334455',
    domicilio: 'Prado Pinos 45',
    telefono: '234567',
    correo: ana@gmail.com
  }

  let Pedro = {
    nombre: 'Pedro',
    apellido: 'Padilla',
    celular: '33445566',
    domicilio: 'Olivos 37',
    telefono: '345678',
    correo: pedro@gmail.com
  }

  let Miguel = {
    nombre: 'Miguel',
    apellido: 'Gomez',
    celular: '44556677',
    domicilio: 'Carretera Mexico 4525',
    telefono: '456789',
    correo: mike@gmail.com
  }

  let Maria = {
    nombre: 'Maria',
    apellido: 'Gutierrez',
    celular: '55667788',
    domicilio: 'Coraza 856',
    telefono: '567891',
    correo: mary@gmail.com
  }

  let Daniel = {
    nombre: 'Daniel',
    apellido: 'Davila',
    celular: '66778899',
    domicilio: 'Ovelisco 112',
    telefono: '678912',
    correo: dan@gmail.com
  }
*/