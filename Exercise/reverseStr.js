// Given a string, return a new string with the reversed order of characters
//   reverse('hello') === 'olleh'
//   reverse('CodingMoney') === 'yenoMgnidoC'

//using for loop
function reverse(message){
    let reverseStr = ""
    for(let i=0; i<message.length; i++){
        reverseStr = message[i] + reverseStr
    }
    return reverseStr;
}

console.log(reverse("hello"));
// console.log(reverse("CodingMoney"));

//using of loop
function reverse(message){
    let reverseStr = ""
    for(let str of message){
        reverseStr = str + reverseStr
    }
    return reverseStr;
}   

// console.log(reverse("hello"));
console.log(reverse("CodingMoney"));

//using reverse method
function reverse(message){
    const reverseString = message.split('').reverse().join('');
    return reverseString
}  

console.log(reverse("hello"));
console.log(reverse("CodingMoney"));



