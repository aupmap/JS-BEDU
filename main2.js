
switch (figura) {
    case "circulo" 0:
      text = function perimeter(a,b) {
        alert(c*d);
    };
      break;
    case "rectangulo" 1:
      text = function perimeter(a,b) {
        alert(2a*b);
    };
      break;
    case "triangulo" 2:
      text = function perimeter(a,b) {
        alert((a*b)/2);
    };
      break;
    case "cuadrado" 3:
      text = function perimeter(a,b) {
        alert(2a*b);
    };
      break;
    case default:
      text = function perimeter(a,b) {
        alert(a*b);
    };
  }

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
    console.log( 'par2' par2);

    function hija1(par1) {
        console.log('par1-hija', par1);
    }
    hija1('hola');
}

padre(23,'ul');