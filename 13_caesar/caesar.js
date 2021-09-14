const caesar = function (inputString, modNumber) {
    let charCodeNumber;
    let charString;
    let finalWord = '';

    //allows larger mod numbers
    if (modNumber > 25) {
        modNumber = -(modNumber / 25);
    //allows larger negative mod numbers
    } else if (modNumber < -25) {
        modNumber = ((modNumber - 25) / 25);
    }
    for (i = 0; i < inputString.length; i++) {
        if (inputString.charCodeAt(i) < 65) {
            //non-alphabet symbols are ignored
            charCodeNumber = inputString.charCodeAt(i);
            charString = String.fromCharCode(charCodeNumber);
            finalWord = finalWord + charString;
        } else if (inputString.charCodeAt(i) >= 65) {
            charCodeNumber = (inputString.charCodeAt(i) + modNumber)
            //only allows uppercase letters
            if (charCodeNumber > 90 && charCodeNumber < 97) {
                charCodeNumber = charCodeNumber - 26;
            //only allows lowercase letters
            } else if (charCodeNumber > 122) {
                charCodeNumber = charCodeNumber - 26;
            //allows negative mod numbers to wrap
            } else if (modNumber < 0 && charCodeNumber < 65) {
                charCodeNumber = charCodeNumber + 26;
            }
            charString = String.fromCharCode(charCodeNumber);
            finalWord = finalWord + charString;
        }
    } return finalWord;
};

module.exports = caesar;
