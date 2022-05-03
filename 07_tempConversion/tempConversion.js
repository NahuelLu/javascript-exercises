const ftoc = function(fahrenheit) {
  let conversionToC=(fahrenheit-32)*5/9;
  let roundTemp=Math.round(conversionToC*10)/10;
  return roundTemp;
};

const ctof = function(celsius) {
  let conversionToF= celsius*9/5+32;
  let roundTemp=Math.round(conversionToF*10)/10;
  return roundTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
