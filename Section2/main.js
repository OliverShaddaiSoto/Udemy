//Const, Let & Var

/*for (let i = 0; i < 3; i++) {
    (function test(o){
        alert(o);
    })(i)
}*/

//Logical OR & AND 
// logical OR sample
// const test  = 5 || 6; // 5

// const sample = 0 || 20; // 20

// sample with all falsy values
// const sample = 0 || false || null; // null


//console.log(test);
//console.log(sample);




// logical AND
// const test  = 5 && 6;
// const sample = 0 && false && null;

// console.log(test); // 6
// console.log(sample); // 0


//Primitive Values
// let sample = 5;

// let copySample = sample;

// sample = 10;

// console.log('sample: ', sample);

// console.log('Copy sample: ', copySample);

//Shallow and deep copy 

const orig = {
    test: 'test',
    userDetails: {
        address: {
            province: 'Province',
            country: 'Country'
        },
        name: 'myObject'
    },
    myFn: () => {},
    undef: undefined,
}

const copy = JSON.parse(JSON.stringify(orig));


copy.userDetails.name = 'newName';

// console.log('Orig: ', orig);
// console.log('Copy: ', copy);

const orig2 = ['avocado', 'apple', {name :'strawberry'}];

//const copy2 = orig2.slice();

const copy2 = JSON.parse(JSON.stringify(orig2));

copy2[2].name = 'coconut';

copy2.push('guava');

console.log(orig2);
console.log(copy2);