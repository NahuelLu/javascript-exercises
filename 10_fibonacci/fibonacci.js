'use strict'
const fibonacci = function(number) {
    if(number < 0)
        return "OOPS";
    let array = [0,1];
    while(array.length <= number){
        array.push(array[array.length-1]+array[array.length-2]);
    };
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
