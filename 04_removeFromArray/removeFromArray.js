const removeFromArray = function(x, ...rmArray) {
    theArray = Array.from(x);
    theArray = theArray.filter(function(el){
        return !rmArray.includes(el);
    });
    return theArray;
};


module.exports = removeFromArray;
