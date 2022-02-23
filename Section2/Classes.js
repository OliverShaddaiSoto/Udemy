class Shape{
    #privateVariable = 'PrivateVariable';
    publicVariable = 'publica Variable';
    static staticVariable = 'static variable';

    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    getArea(){
        return 'not implemented';
    }

    getPrivateData(){
        return this.#privateVariable;
    }
}

class Square extends Shape {
    getArea(){
        return this.height * this.width;
    }

    getParentClassArea(){
        return super.getArea();
    }
}

const mySquare = new Square(5, 10);

console.log(mySquare.getPrivateData());

//console.log(mySquare.getParentClassArea());

//console.log(myShape.publicVariable);
//console.log(Shape.staticVariable);
