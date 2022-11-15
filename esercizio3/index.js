const prompt = require('prompt-sync')();
const GeometricShape = require('./GeometricShape')

console.log('\n')
let nome = prompt('Qual è il nome della tua forma geometrica?  ');
let primoLato = prompt('Quanto misura il primo lato?  ');
let secondoLato = prompt('Quanto misura il secondo lato?  ');

let geometricShit = new GeometricShape(nome, 'square', 4, primoLato, secondoLato);
let geometricBro = new GeometricShape('paolo', 'square', 4, 5, 5);

let risultatoPerim = geometricShit.calculatePerimeter();
let risultatoArea = geometricShit.calculateArea();
console.log( "\nIl perimetro del quadrato " + geometricShit.name + " è: " + risultatoPerim );
console.log( "L'area del quadrato " + geometricShit.name + " è: " + risultatoArea + '\n');

geometricBro.compareShape(geometricShit);

geometricShit.drawShape();
geometricShit.drawShapeVUOTO();