const sumAll = function(number1 , number2) {
    if(number1<0 || number2<0 || typeof(number1)!== "number" || typeof(number2)!== "number"){
        return "ERROR";
    }
    let sum;
    let size= Math.max(number1,number2);
    let minNumber= Math.min(number1,number2);
    let numbers=[];
    for(let i =minNumber; i <= size ;i++){
        numbers.push(i);
    }
    sum=numbers.reduce((number,number1) => number + number1,0);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
