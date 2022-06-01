'use strict' 
const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((totalSum,number)=> {
    return totalSum + number;
  },0);
};

const multiply = function(numbers) {
  return numbers.reduce((total,number)=>{
    return total * number;
  },1);
};

const power = function(number,power) {
  let total=1;
  for(let i=1;i<=power;i++){
    total*=number;
  }
  return total; 
};

const factorial = function(number) {
  let total=1;
	for(let i = number;i>0;i--){
      total*=i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
