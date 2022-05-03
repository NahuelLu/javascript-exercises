const repeatString = function(string,numberOfTimes) {
    let stringRepeat="";
    for(let i=0; i<numberOfTimes;i++){
        stringRepeat+=string;
    }
    if(numberOfTimes<0){
        return "ERROR";
    }
    return stringRepeat; 
};

// Do not edit below this line
module.exports = repeatString;
