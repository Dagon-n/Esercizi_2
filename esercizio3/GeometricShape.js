let GeometricShape = class {

    constructor(name, type, numberOfSides, firstSide, secondSide){
        this.name = name;
        this.type = type;
        this.numberOfSides = numberOfSides;
        this.firstSide = firstSide;
        this.secondSide = secondSide;
    }

    calculatePerimeter() {
        let perimetro = parseInt(this.firstSide) * parseInt(this.numberOfSides);
        return perimetro;
    };

    calculateArea() {
        let area = parseInt(this.firstSide) * parseInt(this.secondSide);
        return area;
    };

    compareShape(secondOne) {
        let firstArea = this.calculateArea();
        let secondArea = secondOne.calculateArea();
        console.log('area of '+ this.name + ' is: ' + firstArea);
        console.log('area of '+ secondOne.name + ' is: ' + secondArea);
        let toPrint = '';
        if(firstArea > secondArea) {
            console.log(this.name + ' è più grande di ' + secondOne.name);
            return;
        }else if(firstArea == secondArea) {
            console.log(this.name + ' e ' + secondOne.name + ' sono grandi uguali');
            return;
        }else{
            console.log(this.name + ' è più piccolo di ' + secondOne.name);
            return;
        }
    };

    drawShape() {

        let simbolini = [];
        let area = this.calculateArea();
        let latoLength = this.firstSide;
        console.log('\n') 

        for(let i=0; i<area; i++) {  // RIEMPE ARRAY
            simbolini.push('o');
        };

        let shape = '';
        for(let i=0; i<simbolini.length; i++) {
            if(i % latoLength == 0 && i != 0) {
                (shape = shape + '\n');
            }
            shape = shape + simbolini[i] + ' ';
        }
        console.log( shape + '\n');

    }

    drawShapeVECCHIO() {
        let simbolini = [];
        let latoLength = parseInt(this.firstSide);

        console.log('\n')

        for(let i=1; i<=latoLength; i++) {  // RIEMPE ARRAY
            simbolini.push('o');
        };
        
        let shape = '';
        for(let i=0; i<latoLength; i++) {   // STAMPA PRIMO ORIZZONTALE
            shape = shape + simbolini[i] + ' ';
        };
        console.log(shape);

        shape = '';
        for(let i=1; i<latoLength; i++) {   // STAMPA PRIMO VERTICALE
            shape = shape + simbolini[i] + '\n';
        };
        console.log( shape );
    };

}

module.exports = GeometricShape;