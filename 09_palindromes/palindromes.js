'use strict'
const palindromes = function (word) {
    const wordClean = word
        .toLowerCase().replace(/[^A-Za-z]/g, "")
    return  [...wordClean].reverse().join("")=== wordClean;
};

// Do not edit below this line
module.exports = palindromes;
