const splitted = [];
const result2 = [];

let StringSplitter = class {

    constructor(toBeSplit) {
        this.toBeSplit = toBeSplit;
    }

    getSplits(num) {

        let toBeSplit = this.toBeSplit;
        let size = num;
        let noSpazi = toBeSplit.replaceAll(' ', '');
        const finalResult = noSpazi.match( new RegExp('.{1,' + size + '}', 'g') );
        splitted.push(finalResult);

    }

    getAllSplits() {

        console.log(splitted[0]);

    }

}

module.exports = StringSplitter;