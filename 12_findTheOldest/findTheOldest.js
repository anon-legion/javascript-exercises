const findTheOldest = function(arr) {
    // const currDate = new Date().getFullYear();
    // const listOfAge = arr.map(obj => !obj.yearOfDeath ? currDate - obj.yearOfBirth : obj.yearOfDeath - obj.yearOfBirth);
    // return arr[listOfAge.indexOf(Math.max(...listOfAge))];
    const oldest = arr.reduce((oldest, currentPerson) => {
        const ageOldest = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const ageCurr = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return ageCurr > ageOldest ? currentPerson : oldest;
    })
    return oldest;
};

const getAge = (birth, death) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
