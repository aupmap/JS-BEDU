

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
    if(i % 2 === 0) 

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


//Ejemplo 3 Switch

Switch (figura) {

  let figura = "circulo";
  
  function "cuadrado"(a){
      let resCuadrado = a*a;
      let a = 2
      return resCuadrado;
  }
  function "triangulo"(a, b){
      let resTriangulo = a*b*c;
      let a = 2
      let b = 3
      let c = 4
      return resTriangulo;
  }
  function "circulo"(r){
      const pi =3.14;
      let r = 10
      let resCirculo= (2*pi) * r;
      return resCirculo;
  }
  function "rectangulo"(a, b){
      let resRectangulo = (2*a) + (2*b);
      let a = 2
      let b = 3
      return resRectangulo;
  }
  }



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
