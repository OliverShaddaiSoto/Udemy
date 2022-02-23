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

console.log('Orig: ', orig);
console.log('Copy: ', copy);

const orig2 = ['avocado', 'apple', {name :'strawberry'}];

//const copy2 = orig2.slice();

const copy2 = JSON.parse(JSON.stringify(orig2));

copy2[2].name = 'coconut';

copy2.push('guava');

console.log(orig2);
console.log(copy2);