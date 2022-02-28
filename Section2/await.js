// function calculateSquareArea() {
//     setTimeout(() => {
//         const squareArea = 5*5;
//         console.log(squareArea);
//     }, 500);
// }

// function calculateSquareArea() {
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             const squareArea = 5*5;
//             resolve(squareArea);
//         }, 500);
//     })
// }

const myPromises = [
    new Promise((resolve,reject) => setTimeout(() => reject(100), 100)),
    new Promise((resolve,reject) => setTimeout(() => resolve(200), 200)),
    new Promise((resolve,reject) => setTimeout(() => resolve(300), 300))
]

function onFulFilled(data) {
    //console.log('On Fulfilled: ', data);
}

// function onRejected(data) {
//     console.log('On rejected: ', data);
// }

Promise.any(myPromises)
.then(onFulFilled)
.catch((reason) => {
    //console.log('catch: ', reason);
});


let myNumber = 5;

function changeNumber() {
    return new Promise((resolve)  => {
      setTimeout(() => {
          myNumber = 10;
          resolve(myNumber);
      }, 500);
    })
}

async function startChange() {
    await changeNumber();
    console.log(myNumber);
}

startChange();