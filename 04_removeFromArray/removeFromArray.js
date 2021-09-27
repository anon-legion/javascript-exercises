const removeFromArray = function(arr) {
    let result, toRemoveArray = [...arguments].slice(1, arguments.length);
    console.log(toRemoveArray);
    result = arr.filter(element => {
        return toRemoveArray.every(target => target !== element)
    });
    return result;
};

// let test = [1,2,3,4], target = [2, 3];
// console.log(removeFromArray(test, ...target));
// Do not edit below this line
module.exports = removeFromArray;
