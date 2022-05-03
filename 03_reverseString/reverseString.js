/*const reverseString = function(string) {
    let stringReverse ="";
    for(let i=string.length-1; i>=0;i--){
        stringReverse+=string[i];
    }
    return stringReverse;
};*/
const reverseString = function(string){
    let stringToArray =string.split("");
    let stringReverse ="";
    for(let i =stringToArray.length-1;i>=0;i--){
        stringReverse+=stringToArray[i];
    }
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
