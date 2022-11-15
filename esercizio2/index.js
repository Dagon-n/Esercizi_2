const prompt = require('prompt-sync')();
const StringSplitter = require('./StringSplitter');

let nuovaStringa = prompt('inserisci una frase: ');
let numLettere = parseInt(prompt('Di quante lettere vuoi separare: '));
let stringona = new StringSplitter(nuovaStringa);

stringona.getSplits(numLettere);
stringona.getAllSplits();

function comparsion() {

    let primaParola = prompt('inserisci la prima parola: ');
    let secondaParola = prompt ('inserisci la seconda parola: ');
    let numLettere = prompt('Di quante lettere vuoi separare: ');

    let primaParolaFinal = primaParola.match( new RegExp('.{1,' + numLettere + '}', 'g') );
    let secondaParolaFinal = secondaParola.match( new RegExp('.{1,' + numLettere + '}', 'g') );

    console.log(primaParolaFinal);
    console.log(secondaParolaFinal);
    
    let resultArray = [];

    for(let i=0; i<primaParolaFinal.length; i++) {

        let mapped = primaParolaFinal.map(x => x == secondaParolaFinal[i]);
        let mappedIndex = mapped.indexOf(true);

        if(mappedIndex >= 0) {
            resultArray.push(primaParolaFinal[mappedIndex]);
        };

    }

    console.log('Le stringhe in comune sono --> ', resultArray);

}

comparsion();