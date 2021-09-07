const palindromes = function (words) {
    words = words.replace(/[^\w\s]|_/g, "")
                 .replace(/\s+/g, "").toLowerCase();
    let wArray = words.split('');
    let rArray = words.split('').reverse();
    if (wArray.every((val, index) => val === rArray[index])){
        return true;
    }else return false;
};

module.exports = palindromes;
