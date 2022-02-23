//Rest parameters

function sum(...thisArgs) {
    return arguments.length
}

//console.log(sum(5,5,5));


//Spred operator

const userDetails = {
    name : 'Rysh',
    address: 'Anywhere',
    sample: {
        test: 'test'
    }
}

const newUserDetails = { ...userDetails, name: 'Oliver'}


//console.log('User Details: ', userDetails);
//console.log('new User Details: ', newUserDetails);

const fruits = ['apple', 'avocado'];

const newFruits = [ ...fruits, 'guava'];

// console.log('Fruits: ', fruits);
// console.log('New Fruits: ', newFruits);


//Destructuring
const {name: newName = 'Oliver', ...otherDetails} = userDetails;

console.log(newName);
console.log(otherDetails);

