//Const, Let & Var

for (let i = 0; i < 3; i++) {
    (function test(o){
        alert(o);
    })(i)
}

//Logical OR & AND 
// logical OR sample
const test  = 5 || 6; // 5

const sample = 0 || 20; // 20

// sample with all falsy values
// const sample = 0 || false || null; // null


console.log(test);
console.log(sample);




// logical AND
const test  = 5 && 6;
const sample = 0 && false && null;

console.log(test); // 6
console.log(sample); // 0
