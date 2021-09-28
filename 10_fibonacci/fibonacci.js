
const fibonacci = function(n) {
    const recursiveFibonacci = (num, a=0, b=1) => {
        if (num === 0) return a;
        if (num === 1) return b;
        else {
            return recursiveFibonacci(num - 1, b, a + b);
        }
    };
    let normalizedNum = parseInt(n);
    if (normalizedNum < 0) return 'OOPS';
    else {
        return recursiveFibonacci(normalizedNum);
    }
};

// Do not edit below this line
module.exports = fibonacci;
