class Printer {
    name = "i am a printer class"; 

    printName(){
        console.log('printName: ', this.name );
    }

    printNameArrowFn = () => {
        console.log('printNameArrowFn: ', this.name);
    }
}



const myPrinter = new Printer();
// myPrinter.printName();
// myPrinter.printNameArrowFn();

const customPrinter = {
    name: 'I am custom Printer',
    printName: myPrinter.printName,
    printNameArrowFn: myPrinter.printNameArrowFn,
}

//customPrinter.printName();
customPrinter.printNameArrowFn();
