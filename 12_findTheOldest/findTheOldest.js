const findTheOldest = function(people) {
    return people.reduce((oldestPerson,person) => {
        if(oldestPerson===null)
            return oldestPerson;
        let yearLived1= getAge(oldestPerson.yearOfBirth,oldestPerson.yearOfDeath);
        let yearLived2= getAge(person.yearOfBirth,person.yearOfDeath);
        return yearLived1 > yearLived2? oldestPerson : person;
    },{})
};
function getAge(year1, year2){
    if(!year2){
        year2= new Date().getFullYear();
    }
    return year2 - year1;
}

// Do not edit below this line
module.exports = findTheOldest;
