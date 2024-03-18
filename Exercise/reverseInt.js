// Given an integer, return an integer that is the reverse ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInteger(value){
    const valueToString = value.toString();
    let reverseInt = "";
    for(let str of valueToString){
        reverseInt = str + reverseInt
    }
    return parseInt(reverseInt) * Math.sign(value);
}

console.log(reverseInteger(51))
console.log(reverseInteger(981))
console.log(reverseInteger(500))
console.log(reverseInteger(-15))
console.log(reverseInteger(-90))

//using reverse method
function reverseInteger(value){
    const reverseInt = value.toString().split('').reverse().join('');
    return parseInt(reverseInt) * Math.sign(value);
}

console.log(reverseInteger(51))
console.log(reverseInteger(981))
console.log(reverseInteger(500))
console.log(reverseInteger(-15))
console.log(reverseInteger(-90))