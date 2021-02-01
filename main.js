
/*
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

function saludar(saludo, name) {
    alert(saludo + ' ' + name);
}

saludar('Hola mundo', 'usuario')


function perimeter(a,b) {
    alert(a*b);
}
perimeter(2, 3)

var i = 0;
*/

//Declaracion de funciones
const hola= 'hola usuario';

function saludar(saludo, name= 'Pedro') {
    //hola = 'adios';
    //alert(saludo + ' ' + ' ' + 'hola' + name)
    console.log(saludo + ' ' + name);

    //return saludo + ' ' + name;
}

saludar('Hola mundo')

let edad = 16;

if (edad > 18) {
    let ciudad = 'CDMX';
    alert ('si puede votar porque tiene '+ edad);
} else {
    console.log('Ciudad', ciudad);
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
