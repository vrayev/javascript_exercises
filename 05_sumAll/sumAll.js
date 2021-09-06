const sumAll = function(startNum, endNum) {
    let sumNums = 0;;
    let startNumTest = Number.isInteger(startNum);
    let endNumTest = Number.isInteger(endNum);
    let isArrayStart = Array.isArray(startNum);
    let isArrayEnd = Array.isArray(endNum);
    let isStringStart = typeof startNum;
    let isStringEnd = typeof endNum;

    if ((isStringEnd || isStringStart) === "string"){
        return 'ERROR';
    }else if ((endNumTest || startNumTest) === false){
        return 'ERROR';
    }
    else if (((startNum || endNum) === NaN ) ||
        ((startNum || endNum) < 0) ||
        ((isArrayStart || isArrayEnd) === true)){
        return 'ERROR';
    }else if (endNum < startNum){
        a = endNum;
        endNum = startNum;
        startNum = a;
        for (i = 0; i < endNum; i++){
            sumNums += startNum;
            startNum++;
        }return sumNums;
    }else
        for (i = 0; i < endNum; i++){
            sumNums += startNum;
            startNum++;
        }return sumNums;


};

module.exports = sumAll;
