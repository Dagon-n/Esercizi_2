let Student = class {

    constructor(nome, cognome, annoDiNascita, hobby, motto) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataDiNascita = annoDiNascita;
        this.hobby = hobby;
        this.motto = motto;
    }

    anniDiVita() {

        let annoCorrente = new Date().getFullYear();
        let anniDiVita = parseInt(annoCorrente) - parseInt(this.dataDiNascita);
        return anniDiVita;

    }

    getAge() {

        let eta = this.anniDiVita();
        let toPrint = this.nome + ' ha ' + eta + ' anni';
        return toPrint; 

    }

    getMotto() {

        let toPrint = 'Il motto di ' + this.nome + ' è: ' + this.motto;
        return toPrint;

    }

    compareAge(etaAltroTizio) {

        if(this.anniDiVita() > parseInt(etaAltroTizio)) {
            let string = this.nome + " è più grande. ";
            return string; 
        }else{
            let string = this.nome + " è più piccolo. ";
            return string;
        }

    }

    haveSameHobby(hobbyAltroTizio) {

        if(this.motto == hobbyAltroTizio) {
            return 'Hanno lo stesso motto!';
        }else{
            return 'Non hanno lo stesso motto!';
        }

    }

}

module.exports = Student;