const palindromes = function (str) {
    let letterArr = str.toLowerCase().split('').filter(element => /[a-z]/.test(element));
    const isPalindrome = (letters) => {
        if (letters.length <= 1) return true;
        else {
            return letters[0] === letters[letters.length - 1] && isPalindrome(letters.slice(1, -1));
        }
    };
    return isPalindrome(letterArr);
};

// Do not edit below this line
module.exports = palindromes;
