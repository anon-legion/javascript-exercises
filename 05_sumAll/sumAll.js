// const sumAll = function(num1, num2) {
//     let sum = 0;
//     for (num1; num1 < num2 + 1; num1++) {
//         sum += num1;
//     }
//     return sum;
// };

const sumAll = function(num1, num2) {
    if(Math.min(...arguments) < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR';
    } else {
        let numElements = Math.abs(num1 - num2) + 1;
        return (num1 + num2) * (numElements / 2);
    }
}

// Do not edit below this line
module.exports = sumAll;
