
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

*/
var edad = 18;
var limVotar = 18;
var ciudad = 'CDMX'

if (edad >= limVotar && ciudad=='CDMX') {
  console.log('puede votar');
} else {
    console.log('no puede votar');
}
/*




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

*/