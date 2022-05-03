const removeFromArray = function() {
    let arrayWithoutArg=arguments[0];
    for(let i = 1; i<arguments.length;i++){ //i = 1 without count to array.
        arrayWithoutArg = arrayWithoutArg.filter(element => arguments[i]!==element);
    }
    return arrayWithoutArg;
};

// Do not edit below this line
module.exports = removeFromArray;
