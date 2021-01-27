var edad = 18;
var  limVotar = 18;

if (edad>= limVotar) {
    console.log('Puede votar');
} else {
	console.log('No puede votar');
}

var edad = 18;
var  limVotar = 18;
var ciudad= "cdmx";

if (edad>= limVotar && ciudad === 'CDMX') {
    console.log('Puede votar');
} else {
	console.log('No puede votar');
}

switch(ciudad) {
    case 'CDMX':
        console.log('Azcapotzalco, Benito Juarez...');
    break;
    case 'Pachuca':
        console.log('Mineral, Periodistas...');
    break;
    case 'Tulancingo':
        cinsole.log('Centro, la Morena...');
    default:
        console.log('No encontre lo que buscas');
        break;
}
