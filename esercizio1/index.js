const prompt = require('prompt-sync')();
const Student = require('./Student');

let filippo = new Student('filippo', 'vallarino', 1998, 'giochi da tavolo', 'ammazza chi odi, ma se qualcuno ti ama fatti coccolare');
let mario = new Student('mario', 'rossi', 1956, 'pesca di vongole', 'scemo chi legge');

let etaFilippo = filippo.getAge();
let etaMario = mario.getAge();
let marioMotto = mario.getMotto();

console.log(etaFilippo);
console.log(etaMario);
console.log(marioMotto);

let testEta = mario.compareAge(filippo.anniDiVita());

console.log(testEta);
console.log(filippo.haveSameHobby(mario.hobby))